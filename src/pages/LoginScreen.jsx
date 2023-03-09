import React, { useState } from "react";
import { logo } from "../assets";
import { FormField, Loader } from "../components";
import { useStateContext } from "../context";
import { collection, addDoc } from "firebase/firestore";
//firebase auth
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

const LoginScreen = () => {
  //signin usestate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //signup usestate
  const [fullName, setFullName] = useState("");
  const [signUpMail, setSignUpMail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { setError, error } = useStateContext();
  const [isSubmittng, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async () => {
    if (
      !fullName ||
      !signUpMail ||
      !signUpPassword ||
      signUpPassword !== confirmPassword
    )
      return setError("Pls fill form completely");
    setIsSubmitting(true);
    await createUserWithEmailAndPassword(auth, signUpMail, signUpPassword)
      .then((response) => {
        console.log(response);
        alert("done");
        setIsSubmitting(false);
        navigate("/profile");
      })
      .catch((error) => {
        setIsSubmitting(false);
        setError(error.message);
      });
    const docRef = addDoc(collection(db, "users"), {
      name: fullName,
      email: signUpMail,
    });
  };

  const handleSignin = async () => {
    setIsSubmitting(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
        alert("done");
        setIsSubmitting(false);
        navigate("/profile");
      })
      .catch((error) => {
        setIsSubmitting(false);
        setError(error.message);
      });
  };

  return (
    <div className="w-screen relative h-screen overflow-y-scroll">
      {isSubmittng && <Loader />}
      <nav className="bg-[#000100] text-start items-start w-full px-5 py-2 flex justify-between">
        <div className="flex items-center space-x-[8px]">
          <img src={logo} alt="logo" className="h-11 w-11 object-contain" />
          <h2 className="text-lg font-extrabold font-OpenSans-ExtraBold">
            FilMedia
          </h2>
        </div>
      </nav>
      {/** forms */}
      <div className="md:grid-cols-2 mt-9 mx-auto grid grid-cols-1 w-full">
        {/** left form  */}
        <div className=" mx-3 lg:w-[85%] my-9 items-center">
          <span className="text-2xl font-bold font-OpenSans-Bold mb-3">
            Login
          </span>
          <form
            onSubmit={(e) => e.preventDefault()}
            action=""
            className="border-2 px-6 py-3.5 mt-4 rounded-[8px] broder-[#f0f0f0]"
          >
            <div className="flex-col items-center mx-auto">
              <FormField
                isInput
                labelName="Email"
                placeholder="Email"
                inputType="email"
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
              />
              <div className="">
                <FormField
                  isInput
                  labelName="Password"
                  placeholder="Password"
                  inputType="password"
                  value={password}
                  handleChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </form>
          {/** button */}
          <div className="w-full flex justify-center items-center">
            <button
              onClick={handleSignin}
              type="submit"
              className="bg-[#f0f0f0] rounded-[8px] my-9 px-9 py-3.5 text-[#000000] text-lg font-OpenSans-Bold font-bold"
            >
              Login
            </button>
          </div>
        </div>
        {/** left form ends */}

        {/**right form */}
        <div className=" mx-3 lg:w-[85%] my-9 items-center">
          <span className="text-2xl font-bold font-OpenSans-Bold mb-3">
            Signup
          </span>
          <form
            onSubmit={(e) => e.preventDefault()}
            action=""
            className="border-2 px-6 py-3.5 mt-4 rounded-[8px] broder-[#f0f0f0]"
          >
            <div className="flex-col items-center mx-auto">
              <FormField
                isInput
                labelName="Full Legal Name"
                placeholder="Username"
                inputType="text"
                value={fullName}
                handleChange={(e) => setFullName(e.target.value)}
              />
              <div className="">
                <FormField
                  isInput
                  labelName="Email"
                  placeholder="Enter a vailid Email"
                  inputType="email"
                  value={signUpMail}
                  handleChange={(e) => setSignUpMail(e.target.value)}
                />
                <FormField
                  isInput
                  labelName="Password"
                  placeholder="Enter a vailid Password"
                  inputType="password"
                  value={signUpPassword}
                  handleChange={(e) => setSignUpPassword(e.target.value)}
                />
                <FormField
                  isInput
                  labelName="Confirm Password"
                  placeholder="Confirm Password"
                  inputType="password"
                  value={confirmPassword}
                  handleChange={(e) => setConfirmPassword(e.target.value)}
                />
                {signUpPassword !== confirmPassword && (
                  <span className="text-red-600 font-OpenSans-Bold text-lg">
                    Password doesn't match
                  </span>
                )}
              </div>
            </div>
          </form>
          {/** button */}
          <div className="w-full flex justify-center items-center">
            <button
              onClick={handleSignup}
              type="submit"
              className="bg-[#f0f0f0] rounded-[8px] my-9 px-9 py-3.5 text-[#000000] text-lg font-OpenSans-Bold font-bold"
            >
              Signup
            </button>
          </div>
        </div>
        {/** right form ends */}
        <OutsideClickHandler
        onOutsideClick={() => setError("")}
        >
          {error && (
            <div className="fixed top-[20px] z-[8888888] left-[50px]">
              <span className="bg-black min-w-[260px] h-[300px] text-[24px] text-center font-bold text-red-600 items-center">
                {error}
              </span>
            </div>
          )}
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default LoginScreen;

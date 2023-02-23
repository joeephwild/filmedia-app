import { Web3Button } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormField from "./FormField";

const TicketForm = () => {
  const [form, setForm] = useState({
    title: "",
    image: "",
    location: "",
    target: "",
    deadline: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };
  return (
    <section className="flex flex-col mx-auto items-center max-w-[870px]">
      <section className="flex flex-col items-center w-full">
        <div className=" mx-3 lg:w-[85%] my-9 items-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            action=""
            className="border-2 px-6 py-3.5 mx-w-[600px] rounded-[8px] broder-[#f0f0f0]"
          >
            <div className="flex-col items-center mx-auto">
              <FormField
                isImageFile
                labelName="CoverImage"
                inputType="file"
                placeholder="Enter a valid url"
              />

              <div className="">
                <FormField
                  isFile
                  labelName="Image"
                  placeholder="enter a vailid url"
                  inputType="file"
                />
                <div className="flex flex-col items-start">
                  <label className="text-lg font-OpenSans-Bold">Category</label>
                  <select class="w-full bg-[#f0f0f0] rounded-[8px] h-16 text-[#000000]">
                    <option>Select Category</option>
                    <option>Singer</option>
                    <option>singer/Song-Writer</option>
                    <option>Rapper</option>
                    <option>Content Creator</option>
                    <option>Comedian</option>
                    <option>Other</option>
                  </select>
                </div>
                <FormField
                  isInput
                  placeholder="Enter Handle e.g vitalikEth"
                  labelName="Handle *"
                  inputType="text"
                />
                <FormField
                  isInput
                  placeholder="Enter Name"
                  labelName="Name *"
                  inputType="text"
                />
                <FormField
                  isTextArea
                  placeholder="Enter valid description"
                  labelName="Description"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#f0f0f0] rounded-[8px] my-9 px-9 py-3.5 text-[#000000] text-lg font-OpenSans-Bold font-bold"
            >
              Mint Account
            </button>
          </form>
        </div>

        <div className="flex m-5 justify-center w-3/4 overflow-auto">
          <label
            for="checked-checkbox"
            className="ml-5 text-xs w-1/2 text-gray-500 dark:text-gray-300"
          >
            By Uploading this file, you acknowledge that the transaction is
            final and cannot be reversed. Includes{" "}
            <div className="text-white">royalty split agreement</div>. Read and
            understand
            <div className="text-white"> contract terms </div>
            and
            <div className="text-white"> potential risks.</div>
          </label>
        </div>
        <div className="flex m-5 justify-center w-3/4 overflow-auto"></div>
        <div className="flex m-5 justify-center w-3/4 overflow-auto"></div>
      </section>

      <div className="flex m-5 justify-center">
        <label
          for="checked-checkbox"
          className="ml-5 text-lg w-1/2 text-gray-500 dark:text-gray-300"
        >
          By Uploading this file, you acknowledge that the transaction is final
          and cannot be reversed. Includes{" "}
          <Link to="#" className="text-white">
            royalty split agreement
          </Link>
          . Read and understand
          <Link to="#" className="text-white">
            {" "}
            contract terms{" "}
          </Link>
          and
          <Link to="#" className="text-white">
            {" "}
            potential risks.
          </Link>
        </label>
      </div>
      <div className="flex m-5 w-full justify-center">
        <Web3Button
          accentColor="white"
          contractAddress="0x1Aae1e6ce578CB965b1bd724c80799806AFE7C70"
          action={(contract) => {
            contract.call("createToken");
          }}
        >
          createTicket
        </Web3Button>
      </div>
      <div className="flex m-5 justify-center w-3/4 overflow-auto"></div>
    </section>
  );
};

export default TicketForm;

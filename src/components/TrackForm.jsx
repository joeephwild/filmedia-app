import { ethers } from "ethers";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import FormField from "./FormField";
import Loader from "./Loader";

const TrackForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { uploadContents } = useStateContext();
  const [form, setForm] = useState({
    image: "",
    video: "",
    musicFile: "",
    title: "",
    category: "",
    description: "",
    name: "",
    price: "",
  });
  const navigate = useNavigate()

  const handleSubmit = async () => {
    setIsLoading(true);
    alert("whats up");
    await uploadContents({
    title:  form.title,
     name: form.name,
     musicFile: form.musicFile,
     video: form.video,
    image:  form.image,
     category: form.category,
     description: form.description,
    price: ethers.utils.parseUnits(form.price, 18),
    });
    setIsLoading(false);
  };

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };
  return (
    <div className="w-full items-center justify-center">
      {isLoading && <Loader />}
      <section className="flex flex-col items-center w-full">
        <div className="flex justify-center space-y-[20px] w-3/4 overflow-auto">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="p-5 w-full   m-5 mt-0 border rounded-lg"
          >
            <FormField
              isImageFile
              labelName="Image *"
              placeholder="Enter a valid image url"
              inputType="file"
              value={form.image}
              handleChange={(e) => handleFormFieldChange("image", e)}
            />
            <FormField
              isImageFile
              labelName="Video file *"
              placeholder="Enter avalid video file url"
              inputType="file"
              value={form.video}
              handleChange={(e) => handleFormFieldChange("video", e)}
            />
            <FormField
              isImageFile
              labelName="Music File *"
              placeholder="John Doe"
              inputType="file"
              value={form.musicFile}
              handleChange={(e) => handleFormFieldChange("musicFile", e)}
            />
            <FormField
              isInput
              labelName="Name *"
              placeholder="John Doe"
              inputType="text"
              value={form.name}
              handleChange={(e) => handleFormFieldChange("name", e)}
            />

            <FormField
              isInput
              labelName="Title *"
              placeholder="John Doe"
              inputType="text"
              value={form.title}
              handleChange={(e) => handleFormFieldChange("title", e)}
            />
            <FormField
              isTextArea
              labelName="Description *"
              placeholder="John Doe"
              inputType="text"
              value={form.description}
              handleChange={(e) => handleFormFieldChange("description", e)}
            />
          <div className="flex space-x-9 w-full items-center">
          <div className="w-full">
            <FormField isInput inputType="text"  />
            </div>
            <div className="w-full">
            <FormField isInput inputType="number" />
            </div>
          </div>
          </form>
        </div>

        <div className="flex m-5 justify-center w-3/4 overflow-auto">
          <label
            for="checked-checkbox"
            className="ml-5 text-xs w-1/2 text-gray-500 dark:text-gray-300"
          >
            By Uploading this file, you acknowledge that the transaction is
            final and cannot be reversed. Includes{" "}
            <a href="#" className="text-white">
              royalty split agreement
            </a>
            . Read and understand
            <a href="#" className="text-white">
              {" "}
              contract terms{" "}
            </a>
            and
            <a href="#" className="text-white">
              {" "}
              potential risks.
            </a>
          </label>
        </div>
        <div className="flex m-5 justify-center w-3/4 overflow-auto">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-white px-9 py-3 text-lg mr-5 hover:bg-transparent text-black font-semibold hover:text-white border border-white-500 hover:border-white rounded"
          >
            Upload
          </button>
        </div>
        <div className="flex m-5 justify-center w-3/4 overflow-auto"></div>
      </section>
    </div>
  );
};

export default TrackForm;

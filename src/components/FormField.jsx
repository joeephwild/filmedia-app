import React from "react";
import { upload1 } from "../assets";

const FormField = ({
  labelName,
  placeholder,
  inputType,
  isTextArea,
  value,
  handleChange,
  isFile,
  isImageFile,
  isInput,
}) => {
  return (
    <label className="flex my-8 flex-col">
      {labelName && (
        <span className="text-lg font-OpenSans-Bold">
          {labelName}
        </span>
      )}

      {isFile && (
        <div class="flex w-[100%] justify-center ">
          <div class="p-5 w-full m-5 rounded-lg">
            <div class="flex justify-center w-full h-48 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span class="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span class="font-medium text-gray-600">
                  Drop files to Attach, or
                  <span class="text-blue-600"> browse to upload</span>
                </span>
              </span>
              <input
                value={value}
                type={inputType}
                onChange={handleChange}
                name="file_upload"
                className="hidden"
              />
            </div>
          </div>
        </div>
      )}

      {isImageFile && (
        <label className="flex flex-col items-start space-y-4">
          <div className="bg-white flex-col py-16 items-center  mt-0 w-full h-full rounded-[8px] mx-auto">
            <div className="flex flex-col items-center justify-center mt-[10%] space-y-3">
              <img src={upload1} className="h-9 w-9 object-contain" alt="" />
              <span className="font-medium text-sm md:text-xl cursor-pointer  text-gray-600">
                Drag and picture file here,
                <span className="text-blue-600">
                  <input
                    value={value}
                    type={inputType}
                    name="file_upload"
                    onChange={handleChange}
                    className="hidden"
                  />{" "}
                  or browse to upload
                </span>
              </span>
              <span className="font-medium text-xs md:text-sm cursor-pointer  text-gray-600">
                We accept only square images with 400 Pixels and not more than
                5MB
              </span>
            </div>
          </div>
        </label>
      )}

      {isTextArea && (
        <div className="flex  items-start flex-col space-y-3">
          <textarea
            required
            type={inputType}
            onChange={handleChange}
            value={value}
            rows={10}
            placeholder={placeholder}
            className="w-full bg-[#f0f0f0] border-none text-[#000000] text-sm  h-16 rounded-[8px]"
          />
        </div>
      )}

      {isInput && (
        <div className="flex items-start w-full flex-col space-y-3">
          <input
            required
            type={inputType}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full bg-[#f0f0f0] text-[#000000] text-sm border-none  h-16 rounded-[8px]"
          />
        </div>
      )}
    </label>
  );
};

export default FormField;

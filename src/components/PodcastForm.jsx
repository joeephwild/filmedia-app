import React, { useState } from 'react'
import FormField from './FormField'

const PodcastForm = () => {
    const [form, setForm] = useState({
        name: "",
        title: "",
        description: "",
        target: "",
        deadline: "",
        image: "",
      });
    
      const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value });
      };
  return (
    <div className="w-full items-center justify-center">
    <section className="flex flex-col items-center w-full">
      <div className="flex justify-center w-3/4">
        <div className="p-5 w-full m-5 mt-0 ">
          <FormField
            isFile
            labelName="Image *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />
        </div>
      </div>

      <div className="flex justify-center w-3/4 overflow-auto">
        <div className="p-5 w-full m-5 mt-0 border rounded-lg">
          <FormField
            isInput
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />
          <FormField
            isTextArea
            labelName="Description *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />

          <FormField
            isImageFile
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />
          <div className="grid grid-cols-2 items-center gap-5">
            <FormField
              isOption
              labelName="Your Name *"
              placeholder="John Doe"
              inputType="text"
              value={form.name}
              handleChange={(e) => handleFormFieldChange("name", e)}
            />
            <div>
              <FormField
                isOption
                labelName="Your Name *"
                placeholder="John Doe"
                inputType="text"
                value={form.name}
                handleChange={(e) => handleFormFieldChange("name", e)}
              />
            </div>
          </div>
        </div>
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
        <button className="bg-white px-9 py-3 text-lg mr-5 hover:bg-transparent text-black font-semibold hover:text-white border border-white-500 hover:border-white rounded">
          Upload
        </button>
      </div>
      <div className="flex m-5 justify-center w-3/4 overflow-auto"></div>
    </section>
  </div>
  )
}

export default PodcastForm
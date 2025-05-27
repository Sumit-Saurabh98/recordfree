"use client";
import FileInput from "@/components/FileInput";
import FormField from "@/components/FormField";
import React, { useState } from "react";

const page = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    visibility: "public",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="wrapper-md upload-page">
      <h1>Upload a video</h1>
      {error && <div className="error-field">{error}</div>}
      <form className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5">
        <FormField
          id="title"
          label="Title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter a title for your video"
        />
        <FormField
          id="description"
          label="Description"
          value={formData.description}
          as="textarea"
          onChange={handleInputChange}
          placeholder="Describe what this video is about"
        />
        <FileInput/>
        <FileInput />
        <FormField
          id="visibility"
          label="Visibility"
          value={formData.visibility}
          as="select"
          onChange={handleInputChange}
          options={[
            { value: "public", label: "Public" },
            { value: "private", label: "Private" },
          ]}
        />
      </form>
    </div>
  );
};

export default page;

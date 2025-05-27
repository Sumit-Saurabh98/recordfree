"use client";
import FileInput from "@/components/FileInput";
import FormField from "@/components/FormField";
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from "@/constants";
import { useFileInput } from "@/lib/hooks/useFileInput";
import React, { FormEvent, useState } from "react";

const page = () => {
    const video = useFileInput(MAX_VIDEO_SIZE);
    const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE);
    const [isSubmitting, SetIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    visibility: "public",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();

    SetIsSubmitting(true);

    try {
        if(!video.file || !thumbnail.file){
            setError("Please upload video and thumbnail");
            return;
        }

        if(!formData.title || !formData.description){
            setError("Please enter title and description");
            return;
        }

        //upload the video to bunny
        //upload the thumbnail to DB
        // Attach the thumabnail to the video
        //create a new db entry for the video details(url, data)


    } catch (error) {
        console.log("Error in submitting form",error);
    }finally{
        SetIsSubmitting(false);
    }
  }

  return (
    <div className="wrapper-md upload-page">
      <h1>Upload a video</h1>
      {error && <div className="error-field">{error}</div>}
      <form className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5" onSubmit={handleSubmit}>
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
        <FileInput
          id="video"
          label="Video"
          accept="video/*"
          file={video.file}
          previewUrl={video.previewUrl}
          inputRef={video.inputRef}
          onChange={video.handleFileChange}
          onReset={video.resetFile}
          type="video"
        />
        <FileInput
          id="thumbnail"
          label="Thumabnail"
          accept="image/*"
          file={thumbnail.file}
          previewUrl={thumbnail.previewUrl}
          inputRef={thumbnail.inputRef}
          onChange={thumbnail.handleFileChange}
          onReset={thumbnail.resetFile}
          type="image"
        />
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
        <button type="submit" disabled={isSubmitting} className="submit-button">
            {isSubmitting ? "Uploading...":"Upload Video"}
            </button>
      </form>
    </div>
  );
};

export default page;

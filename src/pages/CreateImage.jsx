import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { Form, Loader } from "../components";

const CreateImage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", prompt: "", photo: "" });
  // waiting before generating the image
  const [generatingImg, setGeneratingImg] = useState(false);
  // loading
  const [loading, setLoading] = useState(false);
  // to generate the image > calling backend
  const generateImg = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch("http://localhost:8080/api/v1/openai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64, ${data.photo}` });
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please enter a prompt");
    }
  };

  const handleSubmit = () => {};
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };
  return (
    <section className="mx-auto max-w-7xl">
      <div>
        <h1 className="text-[32px] font-extrabold text-black">Create</h1>
        <p className="mt-2 max-w-[500px] text-[14px] text-gray-400">
          Create awesome and stunning images with OpenAI and share them with
          others
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <Form
            labelName="Your name"
            name="name"
            type="text"
            placeholder="John Smith"
            value={form.name}
            handleChange={handleChange}
          />
          <Form
            labelName="Prompt"
            name="prompt"
            type="text"
            placeholder="A surrealist painting of a clock melting in a barren desert"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          {/* div where image will be shown */}
          <div className="relative h-64 w-64 items-center justify-center rounded-md border-gray-300 bg-stone-50 p-3 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="h-full w-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="h-9/12 w-9/12 object-contain opacity-50"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex items-center justify-center rounded-md bg-[rgba(0,0,0,0.5)]">
                <Loader />
              </div>
            )}
          </div>
        </div>

        {/* Submit button wrap */}
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImg}
            className="text-md w-full rounded-md bg-green-700/90 px-5 py-2.5 text-center font-medium text-white sm:w-auto"
          >
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>
        {/* Share */}
        <div className="mt-10">
          <p className="mt-2 text-[14px] text-gray-400">
            If you love this OpenAI generated image, you can share it with
            others
          </p>
          <button
            type="submit"
            className="mt-3 w-full bg-[#6469ff] px-5 py-2.5 text-center text-sm font-medium text-white sm:w-auto"
          >
            {loading ? "Sharing..." : "Share it with others"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateImage;

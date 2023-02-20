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
  return (
    <section className="mx-auto max-w-7xl">
      <div>
        <h1 className="text-[32px] font-extrabold text-black">Create</h1>
        <p className="mt-2 max-w-[500px] text-[14px] text-gray-400">
          Create awesome and stunning images with OpenAI and share them with
          others
        </p>
      </div>
    </section>
  );
};

export default CreateImage;

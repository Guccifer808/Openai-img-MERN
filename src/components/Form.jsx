import React from "react";

const Form = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <label htmlFor={name} className="block text-sm font-medium text-black">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="rounded-md bg-stone-200 py-1 px-2 text-xs font-semibold text-black"
          >
            Surprise Me
          </button>
        )}
      </div>
      {/* Form input */}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        required
        className="block w-full rounded-lg border border-gray-300 bg-stone-50 p-3 text-sm text-slate-900 outline-none focus:border-[#4649ff] focus:ring-[#4649ff]"
      />
    </div>
  );
};

export default Form;

import React from "react";

const InputField = ({ label, type, id, placeholder }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};

export default InputField;

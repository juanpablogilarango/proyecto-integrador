import React from "react";

const SelectField = ({ label, id, options }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id}>
        {options.map((option, index) => (
          <option key={index} value={option.value} disabled={option.disabled || false}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;

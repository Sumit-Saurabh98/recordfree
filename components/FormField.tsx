import React from "react";

const FormField = ({
  id,
  label,
  value,
  type = "text",
  onChange,
  placeholder,
  as = "input",
  options = [],
}: FormFieldProps) => {
  const inputToRender = ({ type }: { type: string }) => {
    if (type === "textarea") {
      return (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      );
    } else if (type === "select") {
      return (
        <select id={id} name={id} value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <input
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      );
    }
  };

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {inputToRender({ type: as })}
    </div>
  );
};

export default FormField;

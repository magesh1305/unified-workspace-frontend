import React from "react";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  ...rest
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      {...rest} // allows passing extra props like "disabled", "maxLength", etc.
    />
  );
};

export default InputField;

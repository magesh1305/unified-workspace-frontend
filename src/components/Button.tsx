import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  className = "",
  children,
  ...rest
}) => {
  return (
    <button className={className} {...rest}>
      {label || children}
    </button>
  );
};

export default Button;

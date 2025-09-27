import React from "react";

type TextProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

const Text = <T extends React.ElementType = "p">({
  as,
  children,
  className = "",
  ...rest
}: TextProps<T>) => {
  const Component = as || "p";
  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
};

export default Text;

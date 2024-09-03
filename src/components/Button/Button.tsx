import { Component, JSX } from "solid-js";

export const ButtonVariants = ["primary", "secondary", "outline"] as const;

export type ButtonProps = {
  variant: (typeof ButtonVariants)[number];
  test: string;
} & JSX.HTMLAttributes<HTMLButtonElement>;

export const variants = {
  primary:
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
  secondary:
    "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
  outline:
    "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
} as const;

export const Button: Component<ButtonProps> = ({
  variant = "primary",
  class: className = "",
  children,
  ...props
}) => {
  return (
    <button class={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

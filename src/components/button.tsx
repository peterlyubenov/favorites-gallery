import clsx from "clsx";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: "primary" | "secondary" | "danger" | "warning" | "success" | "info";
  size: "sm" | "md" | "lg";
};

const variantClasses = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "bg-gray-500 hover:bg-gray-600 text-white",
  danger: "bg-red-500 hover:bg-red-600 text-white",
  warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
  success: "bg-green-500 hover:bg-green-600 text-white",
  info: "bg-blue-500 hover:bg-blue-600 text-white",
};

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-md",
  lg: "px-6 py-3 text-lg",
};

/**
 * Wrapper for the button element with custom styling.
 * @param props
 * @returns
 */
export const Button: React.FC<ButtonProps> = ({ variant, size, ...rest }) => {
  const buttonClasses = clsx(
    variantClasses[variant],
    sizeClasses[size],
    "rounded-sm shadow-sm",
    rest.className
  );
  return <button {...rest} className={buttonClasses}></button>;
};

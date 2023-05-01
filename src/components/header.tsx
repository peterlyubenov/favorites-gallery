import clsx from "clsx";

interface HeaderProps {
  title: string;
  size: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "text-2xl",
  md: "text-3xl",
  lg: "text-4xl",
};
export const Header: React.FC<HeaderProps> = ({ title, size }) => {
  return (
    <div className="flex justify-between items-center">
      <h1
        className={clsx("text-2xl font-bold text-gray-100", sizeClasses[size])}
      >
        {title}
      </h1>
    </div>
  );
};

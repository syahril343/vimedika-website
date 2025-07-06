import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  className = "",
}: ButtonProps) {
  // Style dasar
  const baseClass =
    "rounded-xl font-medium focus:outline-none transition duration-200 ease-in-out";

  // Warna/varian
  let variantClass = "";
  if (variant === "primary") variantClass = "bg-primary text-white hover:bg-blue-700";
  else if (variant === "secondary") variantClass = "bg-secondary text-white hover:bg-yellow-600";
  else if (variant === "outline") variantClass = "border border-primary text-primary hover:bg-primary hover:text-white";
  else if (variant === "danger") variantClass = "bg-red-600 text-white hover:bg-red-700";

  // Ukuran
  let sizeClass = "";
  if (size === "sm") sizeClass = "px-3 py-1 text-sm";
  else if (size === "md") sizeClass = "px-4 py-2 text-base";
  else if (size === "lg") sizeClass = "px-6 py-3 text-lg";

  // Disabled
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${variantClass} ${sizeClass} ${disabledClass} ${className}`}
    >
      {children}
    </button>
  );
}

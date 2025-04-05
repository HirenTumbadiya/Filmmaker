import { ButtonProps } from "@/types/common/button.types";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  size = "medium",
  style,
}) => {
  const variantStyles: {
    [key in ButtonProps["variant"]]: React.CSSProperties;
  } = {
    primary: { backgroundColor: "blue", color: "white" },
    secondary: { backgroundColor: "gray", color: "white" },
    danger: { backgroundColor: "red", color: "white" },
    outline: {
      border: "2px solid blue",
      color: "blue",
      backgroundColor: "transparent",
    },
  };

  // Define styles for the sizes
  const sizeStyles: { [key in ButtonProps["size"]]: React.CSSProperties } = {
    small: { padding: "8px 16px", fontSize: "12px" },
    medium: { padding: "10px 20px", fontSize: "14px" },
    large: { padding: "12px 24px", fontSize: "16px" },
  };

  // Combine the styles
  const buttonStyle = {
    ...variantStyles[variant],
    ...sizeStyles[size],
    cursor: "pointer",
    borderRadius: "4px",
    opacity: disabled ? 0.6 : 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    ...style,
  };

  return (
    <button onClick={onClick} disabled={disabled} style={buttonStyle}>
      <span>{children}</span>
    </button>
  );
};

export default Button;

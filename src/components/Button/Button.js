import React from "react";
import "./Button.css";

const Button = ({
  name,
  margin,
  backgroundColor,
  colorText,
  handleClick,
  widthButton,
  disabled,
  fontSize,
  type,
}) => {
  return (
    <button
      className="btn"
      style={{
        disabled,
        margin,
        fontSize,
        backgroundColor: backgroundColor,
        color: colorText,
        width: widthButton,
        type,
      }}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;

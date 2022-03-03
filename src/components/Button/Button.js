import React from "react";
import './button.css';

const Button = ({name, margin, backgroundColor, colorText, handleClick, widthButton, disabled }) => {
  return <button className="btn" style={{disabled, margin, backgroundColor: backgroundColor, color: colorText, width: widthButton}} onClick={handleClick}>{name}</button>;
};

export default Button;
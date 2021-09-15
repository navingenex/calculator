import React from "react";
import "./button.css";
const Button = ({ label, height, handleClick }) => {
  return (
    <>
      <button
        style={{ height: height ? height : "50px" }}
        className="btn"
        onClick={handleClick}
      >
        {label}
      </button>
    </>
  );
};
export default Button;

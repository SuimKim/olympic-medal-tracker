import React from "react";

const Button = ({ className, type, Children, onClick }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {Children}
    </button>
  );
};

export default Button;

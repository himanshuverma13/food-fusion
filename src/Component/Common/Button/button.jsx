import React from "react";

const Button = ({ title, btn_class, onClick,btn_type, btn_img }) => {
  return (
    <>
        <button
        type={btn_type}
          className={btn_class}
          onClick={onClick}
        >
          {btn_img && <img src={btn_img} className="inline-block h-8 me-3" alt="Loading" />}
          {title}
        </button>
    </>
  );
};
export default Button;
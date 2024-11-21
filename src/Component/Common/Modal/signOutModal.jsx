import React, { useState } from "react";
import Button from "../Button/button";

// Images
import navBack from "../../assets/Images/sideNavImg/navBack.svg";
import { NavLink } from "react-router-dom";

const SignOutModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative flex items-center">
        <div>
          <button
            className="text-[#cd3f14] text-sm font-bold"
            onClick={handleButtonClick}
          >
            <img className="w-6 mx-auto" src={navBack} alt="loading" />
            <span>Sign Out</span>
          </button>
        </div>
        {isOpen && (
          <div className="fixed z-10 inset-0 bg-gray-300 bg-opacity-75 flex justify-center items-center">
            <div className="bg-[#f6f6e9] border-2 border-black rounded-lg shadow-lg p-4 w-[80%] max-w-sm mx-auto">
              <div>
                <div className="flex justify-end">
                  <svg
                    className="w-6 h-6 cursor-pointer"
                    onClick={handleModalClose}
                    fill="black"
                    stroke="black"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-normal mb-2">Sign Out</h2>
              </div>
              <h3 className="py-3">Are You sure You want to Sign-Out?</h3>
              <div className="flex">
                <NavLink to="/">
                  <Button
                    title="Yes I want to Sign Out"
                    btn_class="rounded-2xl bg-[#63898c] py-1 px-4 text-xl font-normal bg-green-600 ms-3"
                  />
                </NavLink>
                <Button
                  title="Cancel"
                  btn_class="rounded-2xl bg-[#63898c] py-1 px-4 text-xl font-normal bg-red-600"
                  onClick={handleModalClose}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default SignOutModal;

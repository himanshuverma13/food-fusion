import React, { useState } from "react";
// import Button from "../Button/button";

// images
import Setting from "../../assets/Images/sideNavImg/navSetting.svg";
import Button from "../Button/button";
const MenuSetting = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };
const MenuButtonData = [
    {title:"Add items"},
    {title:"Remove items"},
    {title:"Special items"},
    {title:"Pantry Settings"},
    {title:"Settings "},
    {title:"Settings "},
    {title:"Settings "},
    {title:"Settings "},
]
  return (
    <>
      <div className=" relative flex justify-end items-center">
        <button
          className="bg-red-500 hover:bg-red-700 py-1 px-2 text-sm  font-semibold rounded flex flex-col justify-center items-center"
          onClick={handleButtonClick}
        >
          <img src={Setting} alt="Loading" />
          Menu Setting
        </button>
        {isOpen && (
          <div className="fixed z-10 top-0 right-0 bottom-0 left-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="bg-[#0000008f] rounded-lg shadow-lg p-4 w-96 h-96 mx-3">
              <div className="">
                <div className="flex justify-end">
                  <svg
                    className="w-4 h-4 cursor-pointer"
                    onClick={handleModalClose}
                    fill="white"
                    stroke="white"
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
                <div className="flex items-center justify-center">
                  <img
                    src={Setting}
                    className="h-10 w-10 rounded-full me-3"
                    alt="Loading"
                  />
                  <p className="text-xl  text-white">Menu settings</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3">
                    {MenuButtonData.map((item, index) => (
                    <Button
                    title={item.title}
                    btn_type="button"
                    btn_class="bg-[#ede9dd] uppercase py-2 rounded-lg text-xl tracking-widest"
                    />
                ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default MenuSetting;

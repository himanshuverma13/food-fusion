import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import footerBot from "../../assets/Images/skill-bot.svg";
import { useForm } from "react-hook-form";

const ChatBot = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div
      className="relative inline-block"
      tabIndex={0} // Make the div focusable
      onBlur={handleBlur} // Handle blur to detect when the dropdown loses focus
    >
      <div onClick={toggleDropdown} className="relative cursor-pointer">
        <img src={footerBot} className="h-20" alt="loading" />
      </div>
      {isDropdownOpen && (
        <div
          className="absolute z-20 right-0 mb-2 h-80 w-64 rounded-md bg-[#e8e8d7] py-1 text-base border-2 border-black shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          style={{ bottom: "100%" }} // This positions the dropdown above the button
        >
          <div className="p-2">
            <form onSubmit= {handleSubmit(onSubmit)}>
              <div className="">
                {/* <label htmlFor="name" className="font-bold text-base text-black">
                  Name
                </label> */}
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Full Name"
                  className="w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg"
                  {...register("name")}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

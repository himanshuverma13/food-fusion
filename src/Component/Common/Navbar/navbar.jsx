import React, { useState } from "react";
import logoBgNo from "../../assets/Images/logo-svg.svg";
import billing from "../../assets/Images/cashier-svg.svg";
import { useNavigate } from "react-router-dom";
import SideNavbar from "./sideNav";

const Navbar = ({ SideNavFunctionality }) => {
  let UserName = JSON?.parse(localStorage.getItem("userAuth") ?? []);
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default to open sidebar
  let navigate = useNavigate();

  const toggleSidebar = () => {
    SideNavFunctionality();
    setSidebarOpen(!sidebarOpen); // Toggle sidebar visibility
  };

  return (
    <nav className="p-2 flex justify-between items-center">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="ps-4 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            width="20"
            height="20"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <div
          onClick={() => navigate("/home")}
          className="ml-4 cursor-pointer flex items-center justify-center"
        >
          <img className="w-1/5 mx-2" src={logoBgNo} alt="Loading" />

          <span className="food-fusion text-3xl text-[#cd3f14]">
            FOOD-SKILL
          </span>
        </div>
      </div>
      <div className="flex items-center mx-4 space-x-4">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-red-600">
            {UserName?.user?.fullname}
          </p>
          <h4 className="m-0 uppercase">{UserName?.user?.role}</h4>
        </div>
        <img
          className="bg-red-700 h-11 rounded-full p-1"
          src={billing}
          alt="Loading"
        />
      </div>
      <div
        className={`fixed grid grid-cols-1 grid-rows-5 gap-4 inset-y-0 left-0 w-16 bg-[#ede9dd] transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="px-4 mt-6 text-center">
          {/* <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill='black' width="20" height="20" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
          </button> */}
        </div>
        {/* Add your sidebar content here */}
        <SideNavbar />
      </div>
    </nav>
  );
};

export default Navbar;

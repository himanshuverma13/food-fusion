import React, { useState } from "react";
import navHome from "../../assets/Images/sideNavImg/navhome.svg";
import navMenu from "../../assets/Images/sideNavImg/navMenu.svg";
import navCart from "../../assets/Images/sideNavImg/navCart.svg";
import navInvoice from "../../assets/Images/sideNavImg/navInvoice.svg";
import invoice from "../../assets/Images/sideNavImg/Invoice.svg";
import staff from "../../assets/Images/sideNavImg/inventory.svg";
import navSetting from "../../assets/Images/sideNavImg/navSetting.svg";
import navBack from "../../assets/Images/sideNavImg/navBack.svg";
// import add from "../../assets/Images/sideNavImg/Add-user.svg";
// import remove from "../../assets/Images/sideNavImg/remove-user.svg";
import dashboard from "../../assets/Images/sideNavImg/Dashboard.svg";
import { NavLink, useLocation } from "react-router-dom";
// import Button from "../Button/button";
import SignOutModal from "../Modal/signOutModal";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Main navigation items
  const basicNavItems = [
    { path: "/home", icon: navHome, alt: "Home" },
    { path: "/menu", icon: navMenu, alt: "Menu" },
    { path: "/chef", icon: navCart, alt: "Chef" },
    { path: "/payment", icon: navInvoice, alt: "Payment" },
    { path: "/employee", icon: invoice, alt: "Employee" },
  ];

  const adminNavItems = [
    { path: "/admin/dashboard", icon: dashboard, alt: "dashboard" },
    // { path: '/admin/register', icon: add, alt: 'add' },
    // { path: '/admin/remove', icon: remove, alt: 'remove' },
    { path: "/admin/register", icon: invoice, alt: "Employee" },
    { path: "/admin/inventory", icon: staff, alt: "Inventory" },
  ];
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  // check URL for Sidebar
  let URL = useLocation();

  return (
    <>
      <div className="row-start-2  flex flex-col justify-start items-center">
        {URL?.pathname !== "/admin/dashboard" &&
        URL?.pathname !== "/admin/register" &&
        URL?.pathname !== "/admin/remove" &&
        URL?.pathname !== "/admin/inventory" &&
        URL?.pathname !== "/admin/usertable" ? (
          <>
            {basicNavItems?.map((item, index) => (
              <NavLink
                className={`${
                  URL?.pathname == item.path ? "flex w-full bg-red-500" : ""
                }`}
                to={item.path}
                key={index}
              >
                <img
                  className={`m-4 ${
                    item.alt === "Employee" || item.alt === "Inventory"
                      ? "w-9"
                      : "w-7"
                  }`}
                  src={item.icon}
                  alt={item.alt}
                />
              </NavLink>
            ))}
          </>
        ) : (
          <>
            {adminNavItems?.map((item, index) => (
              <NavLink
                className={`${
                  URL?.pathname == item.path ? "flex w-full bg-red-500" : ""
                }`}
                to={item.path}
                key={index}
              >
                <img className="m-4 w-8" src={item.icon} alt={item.alt} />
              </NavLink>
            ))}
          </>
        )}
      </div>

      <div className="row-start-5">
        <ul>
          <li className="text-center my-2 cursor-pointer" tabIndex={0} onBlur={handleBlur}>
            <div onClick={toggleDropdown}>
            <img className=" w-6 mx-auto" src={navSetting} alt="loading" />
            <span className="text-[#cd3f14] text-sm font-bold">settings</span>
            </div>
            {isDropdownOpen && (
              <div
                className="absolute z-20 left-20 bottom-20 mb-2 w-64 rounded-md  py-1 text-base border-0 shadow-xl  focus:outline-none sm:text-sm"
                // style={{ bottom: "100%" }} // This positions the dropdown above the button
              >
                <div className="chef-card grid grid-cols-1 grid-rows-4 border-solid rounded-3xl bg-white shadow-xl">
                  <div className="border rounded-3xl px-4 py-0.5 m-0.5 bg-[#d79555] text-[#544013]">
                    <div className="text-sm tracking-wider font-semibold">
                      Order No. 007
                    </div>
                    <div className="flex justify-between text-sm tracking-wider font-semibold">
                      <span>Time : {new Date().toLocaleTimeString()}</span>
                      <span>Table No.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li className="text-center my-2">
            <button onClick={() => openModal()}>
              <img className=" w-6 mx-auto" src={navBack} alt="loading" />
              <span className="text-[#cd3f14] text-sm font-bold">sign out</span>
            </button>
          </li>
        </ul>
        {/* <SignOutModal /> */}
      </div>
      <SignOutModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SideNavbar;

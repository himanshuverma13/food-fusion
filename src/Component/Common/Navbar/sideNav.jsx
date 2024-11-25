import React from "react";
import navHome from "../../assets/Images/sideNavImg/navhome.svg";
import navMenu from "../../assets/Images/sideNavImg/navMenu.svg";
import navCart from "../../assets/Images/sideNavImg/navCart.svg";
import navInvoice from "../../assets/Images/sideNavImg/navInvoice.svg";
import invoice from "../../assets/Images/sideNavImg/Invoice.svg";
import staff from "../../assets/Images/sideNavImg/inventory.svg";
import navSetting from "../../assets/Images/sideNavImg/navSetting.svg";
import navBack from "../../assets/Images/sideNavImg/navBack.svg";
import add from "../../assets/Images/sideNavImg/Add-user.svg";
import remove from "../../assets/Images/sideNavImg/remove-user.svg";
import dashboard from "../../assets/Images/sideNavImg/Dashboard.svg";
import { NavLink, useLocation } from "react-router-dom";

const SideNavbar = () => {
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

  // check URL for Sidebar
  let URL = useLocation();

  return (
    <>
      <div className="row-start-2 mt-20">
        {URL?.pathname !== "/admin/dashboard" &&
        URL?.pathname !== "/admin/register" &&
        URL?.pathname !== "/admin/remove" &&
        URL?.pathname !== "/admin/inventory" &&
        URL?.pathname !== "/admin/userTable" ? (
          <>
            {basicNavItems?.map((item, index) => (
              <NavLink  className={`${URL?.pathname == item.path ?"flex my-0.5 w-full bg-red-500":""}`} to={item.path} key={index}>
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
              <NavLink to={item.path} key={index}>
                <img className="m-4 w-8" src={item.icon} alt={item.alt} />
              </NavLink>
            ))}
          </>
        )}
      </div>

      <div className="row-start-5">
        <ul>
          <li className="text-center my-2">
            <img className=" w-6 mx-auto" src={navSetting} alt="loading" />
            <span className="text-[#cd3f14] text-sm font-bold">settings</span>
          </li>
          <li className="text-center my-2">
            <img className=" w-6 mx-auto" src={navBack} alt="loading" />
            <span className="text-[#cd3f14] text-sm font-bold">sign out</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideNavbar;

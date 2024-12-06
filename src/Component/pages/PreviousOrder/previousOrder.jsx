import React, { useState } from "react";
import Navbar from "../../Common/Navbar/navbar";
import { NavLink } from "react-router-dom";
import Button from "../../Common/Button/button";

const PreviousOrders = () => {
  // Side Nav Functionality
  const [moveSideNav, setmoveSideNav] = useState(true);
  const SideNavFunctionality = () => {
    setmoveSideNav(!moveSideNav);
  };
  return (
    <>
      <Navbar SideNavFunctionality={SideNavFunctionality} />

      <div
        className={`border-solid border-4 border-[#544013] bg-[#f6f6e9] p-2 m-3 transition-all duration-100 ${
          moveSideNav ? "ms-16" : "ms-0"
        }`}
      >
        <p className="text-2xl font-bold text-[#544013] mb-3">Generate Order</p>
        <div className="flex justify-between">
            <p className="text-xl font-bold text-[#544013]">Previous Orders</p>
            <NavLink to="/category">
            <Button
              title="Take New Order"
              btn_type="button"
              btn_class="border-2 border-black rounded-lg bg-[#cd3f14] p-2 text-white tracking-wider font-bold me-3"
            />
            </NavLink>

        </div>
        <div className="grid grid-cols-3">
          <div className="mb-2 w-64 py-1 text-base shadow-xl focus:outline-none sm:text-sm">
            <div className="chef-card grid grid-cols-1 grid-rows-4 bg-white shadow-xl">
              <div className="px-4 py-0.5 m-0.5 bg-[#d79555] text-[#544013]">
                <div className="text-sm tracking-wider font-semibold">
                  Name of Costumer
                </div>
                <div className="flex justify-between text-sm tracking-wider font-semibold">
                  <span>Time : {new Date().toLocaleTimeString()}</span>
                  <span>Table No.</span>
                </div>
              </div>
              <div className="p-2">
              <p>Order ID :- </p>
              <p>Order Amount :- </p>
              <p>Payment Method :- </p>
              <p>Order Items :- </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PreviousOrders;

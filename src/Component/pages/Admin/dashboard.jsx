import React, { useState } from "react";
import Navbar from "../../Common/Navbar/navbar";
import dashboard from "../../assets/Images/sideNavImg/Dashboard.svg";

const Dashboard = () => {
  // Side Nav Functionality
  const [moveSideNav, setmoveSideNav] = useState(true);
  const SideNavFunctionality = () => {
    setmoveSideNav(!moveSideNav);
  };
  return (
    <>
      <Navbar SideNavFunctionality={SideNavFunctionality} />
      <div className={moveSideNav ? "ms-16" : "ms-0"}>
        <div className="ms-5 flex items-end">
          <img className="w-14" src={dashboard} alt="" />
          <h3 className="mb-1 mx-2 font-extrabold tracking-wider">DASHBOARD</h3>
        </div>
        <div className="py-5 my-4 border border-black mx-5 px-3 bg-[#f6f6e9]">
          <h3 className="font-bold">Overview</h3>
          <div className="grid grid-cols-4 grid-rows-1 gap-4">
            <div className="flex justify-center">
              <div className="border border-black bg-white font-bold w-1/2 py-1 text-center">
                <div className="py-2">Total Sale</div>
                <div className="py-2">Rs 14000/-</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="border border-black bg-white font-bold w-1/2 py-1 text-center">
                <div className="py-2">Total Customers</div>
                <div className="py-2">300</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="border border-black bg-white font-bold w-1/2 py-1 text-center">
                <div className="py-2">Total Orders</div>
                <div className="py-2">20</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="border border-black bg-white font-bold w-1/2 py-1 text-center">
                <div className="py-2">Total Menu Items</div>
                <div className="py-2">150</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center my-5 mx-2">
            <h3 className="font-bold">Orders</h3>
            <input
              className="px-2 border-black border-2"
              type="date"
              name=""
              id=""
            />
          </div>

          <div className="grid grid-cols-4 grid-rows-1 gap-4">
            <div className="flex justify-center">
              <div className="border border-black bg-white font-bold w-1/2 py-1 text-center">
                <div className="py-2">Orders</div>
                <div className="py-2">400</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="border border-black bg-white font-bold w-1/2 py-1 text-center">
                <div className="py-2">Dine-In</div>
                <div className="py-2">50</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="border border-black bg-white font-bold w-1/2 py-1 text-center">
                <div className="py-2">Out for Delivery</div>
                <div className="py-2">5</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="border border-black bg-white font-bold w-1/2 py-1 text-center">
                <div className="py-2">Active Order</div>
                <div className="py-2">98</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="border border-black bg-white font-bold w-1/2 py-1 text-center">
                <div className="py-2">Completed</div>
                <div className="py-2">75</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="border border-black bg-white font-bold w-1/2 py-1 text-center">
                <div className="py-2">Canceled</div>
                <div className="py-2">65</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="border border-black bg-white font-bold w-1/2 py-1 text-center">
                <div className="py-2">Returned</div>
                <div className="py-2">8960</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="border border-black bg-white font-bold w-1/2 py-1 text-center">
                <div className="py-2">Rejected</div>
                <div className="py-2">220</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

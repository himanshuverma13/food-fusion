import React, { useState } from "react";
import Navbar from "../../Common/Navbar/navbar";
import { NavLink } from "react-router-dom";
import Button from "../../Common/Button/button";

const PreviousOrders = () => {
  const PreviousOrderCard = [
    {
      orderId: "#123",
      orderAmount: "1234",
      orderitems: "2",
      paymentMethod: "cash",
    },
    {
      orderId: "#123",
      orderAmount: "723",
      orderitems: "2",
      paymentMethod: "cash",
    },
    {
      orderId: "#123",
      orderAmount: "823",
      orderitems: "2",
      paymentMethod: "cash",
    },
    {
      orderId: "#123",
      orderAmount: "123",
      orderitems: "2",
      paymentMethod: "cash",
    },
  ];
  const OrderDetails = [
    {
      name: "Item1",
      qty: "2",
      amt: 122,
    },
    {
      name: "Item1",
      qty: "2",
      amt: 122,
    },
    {
      name: "Item1",
      qty: "2",
      amt: 122,
    },
  ];
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
        <div className="grid grid-cols-4">
          {PreviousOrderCard.map((items, index) => (
            <div className="mb-2 w-64 py-1 text-base shadow-xl focus:outline-none sm:text-sm">
              <div className="bg-white shadow-2xl">
                <div className="px-4 py-0.5 m-0.5 bg-[#d79555] text-[#544013]">
                  <div className="text-sm tracking-wider font-semibold">
                    Name of Costumer
                  </div>
                  <div className="flex justify-between text-sm tracking-wider font-semibold">
                    <span>Time : {new Date().toLocaleTimeString()}</span>
                    <span>Table No.</span>
                  </div>
                </div>
                <div className="p-3 text-base font-semibold">
                  <p>
                    Order ID :-{" "}
                    <span className="font-medium">{items.orderId}</span>{" "}
                  </p>
                  <p>
                    Order Amount :-{" "}
                    <span className="font-medium">{items.orderAmount}</span>
                  </p>
                  <p>
                    Payment Method :-{" "}
                    <span className="font-medium">{items.paymentMethod}</span>
                  </p>
                  <p>Order Items :- {items.orderitems}</p>
                </div>

                <table className="w-full">
                  <thead className="text-left uppercase">
                    <tr className="text-lg">
                      <th className="px-2">Name</th>
                      <th className="px-2">Qty</th>
                      <th className="px-2">Amt.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {OrderDetails.map((order) => (
                      <tr className="text-gray-700">
                        <td className="py-2 px-4">{order.name}</td>
                        <td className="py-2 px-4">{order.qty}</td>
                        <td className="py-2 px-4">{order.amt}</td>
                      </tr>
                      /* <hr className="p-0.5 bg-black my-0.5" /> */
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default PreviousOrders;

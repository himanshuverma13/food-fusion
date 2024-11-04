import React from "react";
import Navbar from "../../Common/Navbar/navbar";
import DropdownButton from "../../Common/dropdownButton/dropdown";
import Button from "../../Common/Button/button";

// Images
import Menu from "../../assets/Images/sideNavImg/navMenu.svg";
import { NavLink } from "react-router-dom";
const Order = () => {
  const orderTypes = ["Dine-In", "TakeOut", "Delivery", "Pre-Order"];
  const OrderTable = [
    {
        serial:1,
      name: "order1",
      note: "sdfghujidxfcghj",
      quantity: 1,
      price: 1300,
      Amount: 120,
    },
    {
        serial:2,
      name: "order1",
      note: "sdfghujidxfcghj",
      quantity: 1,
      price: 1300,
      Amount: 120,
    },
    {
        serial:3,
      name: "order1",
      note: "sdfghujidxfcghj",
      quantity: 1,
      price: 1300,
      Amount: 120,
    },
    {
        serial:4,
      name: "order1",
      note: "sdfghujidxfcghj",
      quantity: 1,
      price: 1300,
      Amount: 120,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="border-solid border-4 border-[#544013] bg-[#f6f6e9] p-2 m-3">
        <p className="text-2xl text-[#544013]">Generate Order</p>
        <div className="flex justify-between">
          <DropdownButton options={orderTypes} buttonLabel="Order Type" />
          <p className="text-xl text-[#544013]">Order No. : 123</p>
        </div>
        {/* user Form start*/}
        <div className="grid grid-cols-2 gap-4">
          <div class="group flex items-center">
            <label
              for="name"
              class="pb-1 text-xl font-medium text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
            >
              Costumer Name :
            </label>
            <input
              id="name"
              type="text"
              class="peer py-2 w-7/12 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
            />
          </div>
          <div class="group flex items-center">
            <label
              for="phone_number"
              class="pb-1 text-xl font-medium text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
            >
              Phone Number :
            </label>
            <input
              id="phone_number"
              type="tel"
              class="py-2 w-7/12 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
            />
          </div>
          <div class="group flex items-center">
            <label
              for="email"
              class="pb-1 text-xl font-medium text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
            >
              E-mail Address :
            </label>
            <input
              id="email"
              type="email"
              class="py-2 w-9/12 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
            />
          </div>
          <div class="group flex items-center">
            <label
              for="table_Number"
              class="pb-1 text-xl font-medium text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
            >
              Table No. :
            </label>
            <input
              id="table_Number"
              type="number"
              class="py-2 w-5/12 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
            />
          </div>
        </div>

        {/* user Form End*/}

        {/* Search bar */}
        <div class="text-black flex justify-around my-4">
          <NavLink to="/category">
            <Button
              title="Menu View"
              btn_class="bg-[#544013] hover:bg-[#544013] text-white text-xl py-3 px-2 rounded-lg flex justify-between items-center border-2 border-solid border-black"
              btn_img={Menu}
              btn_type="button"
            />
          </NavLink>
          <div class="overflow-hidden flex justify-between border-solid border-2 w-5/12 border-black rounded-3xl bg-[#f6f6e9] my-3">
            <input
              type="text"
              class="ps-5 w-full bg-[#f6f6e9]"
              placeholder="Search items from menu"
            />
            <button class="flex items-center justify-center px-4">
              <svg
                class="h-4 w-4 text-grey-dark"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Table View */}
        {/* <h2 class="mt-6 text-2xl text-red-600">Simple Table</h2> */}
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-center text-[#544013] border-solid border-4 border-[#d79555]">
            <thead class="text-lg text-[#544013] uppercase bg-[#ede9dd]">
              <tr className="border-solid border-4 border-[#d79555]">
              <th scope="col" class="px-6 py-3">
                  S. No.
                </th>
                <th scope="col" class="px-6 py-3">
                  Items Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Note/ Add-Ons
                </th>
                <th scope="col" class="px-6 py-3">
                  Qty.
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#ede9dd]">
              {OrderTable.map((items, index) => (
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4"
                  >
                    {items.serial}
                  </th>
                  <th
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {items.name}
                  </th>
                  
                  <td class="px-6 py-4">{items.note}</td>
                  <td class="px-6 py-4">{items.quantity}</td>
                  <td class="px-6 py-4">{items.price}</td>
                  <td class="px-6 py-4">{items.Amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Order;

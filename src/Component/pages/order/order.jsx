import React, { useState } from "react";
import Navbar from "../../Common/Navbar/navbar";
import DropdownButton from "../../Common/dropdownButton/dropdown";
import Button from "../../Common/Button/button";
import {
  decrement,
  increment,
  remove,
} from "../../Common/Redux/Category/categorySlice";
import { connect, useDispatch } from "react-redux";

// Images
import Menu from "../../assets/Images/menu/menu-white.png";
import { NavLink } from "react-router-dom";
import StatusFooter from "../../Common/Footer/statusFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faCirclePlus,
  faCircleXmark,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import AutoSuggestSearch from "../../Common/AutoSuggestSearchBar/AutoSuggestSearchBar";
import CategoryModal from "../../Common/Modal/categoryModal";
const Order = ({cart}) => {
  console.log('cart: ', cart);

  const [isOpen, setIsOpen] = useState(false);

  const orderTypes = ["Dine-In", "Delivery", "Pick-Up"];
  const OrderTable = [
    {
      serial: 1,
      name: "Veg Pizza",
      note: "Cheese Brust",
      quantity: 1,
      price: 1300,
      Amount: 120,
    },
    {
      serial: 2,
      name: "order1",
      note: "sdfghujidxfcghj",
      quantity: 1,
      price: 1300,
      Amount: 120,
    },
    {
      serial: 3,
      name: "order1",
      note: "sdfghujidxfcghj",
      quantity: 1,
      price: 1300,
      Amount: 120,
    },
    {
      serial: 4,
      name: "order1",
      note: "sdfghujidxfcghj",
      quantity: 1,
      price: 1300,
      Amount: 120,
    },
    {
      serial: 5,
      name: "order1",
      note: "sdfghujidxfcghj",
      quantity: 1,
      price: 1300,
      Amount: 120,
    },
    {
      serial: 6,
      name: "order1",
      note: "sdfghujidxfcghj",
      quantity: 1,
      price: 1300,
      Amount: 120,
    },
  ];
  const dispatch = useDispatch();
  const handleIncrementQuantity = (id) => {
    dispatch(increment(id?.id));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrement(id?.id));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(remove(id?.id));
  };

  //  serchbar modal functionality

  const openModal = (food) => {
    // setSelectedFoodItem(food);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false); 

  return (
    <>
      <Navbar />
      {/* <TableStatusModal/> */}
      <div className="border-solid border-4 border-[#544013] bg-[#f6f6e9] p-2 m-3">
        <div className="flex justify-between my-2">
          <div>
            <p className="text-xl font-bold text-[#544013]">Generate Order</p>
          </div>
          <div className="flex">
            <DropdownButton options={orderTypes} buttonLabel="Order Type" />
            <p className="text-xl font-bold text-[#544013]">Order No. : 123</p>
          </div>
        </div>
        {/* user Form start*/}
        <div className="grid grid-cols-2 gap-2">
          <div class="group flex items-center">
            <label
              for="name"
              class="pb-1 text-lg font-bold text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
            >
              Costumer Name :
            </label>
            <input
              id="name"
              type="text"
              class="py-1 w-7/12 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
            />
          </div>
          <div class="group flex items-center">
            <label
              for="phone_number"
              class="pb-1 text-lg font-bold text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
            >
              Phone Number :
            </label>
            <input
              id="phone_number"
              type="tel"
              class="py-1 w-7/12 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
            />
          </div>
          <div class="group flex items-center">
            <label
              for="email"
              class="pb-1 text-lg font-bold text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
            >
              E-mail Address :
            </label>
            <input
              id="email"
              type="email"
              class="py-1 w-9/12 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
            />
          </div>
          <div class="group flex items-center">
            <label
              for="table_Number"
              class="pb-1 text-lg font-bold text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
            >
              Table No. :
            </label>
            <input
              id="table_Number"
              type="number"
              class="py-1 w-5/12 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
            />
          </div>
        </div>
        {/* user Form End*/}

        {/* Search bar */}
        <div class="text-black flex justify-around my-4">
          <NavLink to="/category">
            <Button
              title="Menu View"
              btn_class="bg-[#544013] text-white text-lg py-1 px-2 rounded-lg flex justify-between items-center border-2 border-solid border-black"
              btn_img={Menu}
              btn_type="button"
            />
          </NavLink>
          <div class=" flex justify-between border-solid border-2 w-5/12 border-black rounded-3xl bg-[#f6f6e9] my-3">

            <AutoSuggestSearch />
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
        {/* Auto Searchbar Modal */}
        <CategoryModal
          isOpen={isOpen}
          closeModal={closeModal}
          // selectedFoodItem={selectedFoodItem}
          // onSubmit={onSubmit}
        />

        {/* Table View */}
        {/* <h2 class="mt-6 text-2xl text-red-600">Simple Table</h2> */}
        <div class="h-60 bg-[#ede9dd] overflow-auto">
          <table class="w-full text-sm text-center text-[#544013] border-solid border-4 border-[#d79555] border-x-0 border-b-0">
            <thead class="text-lg text-[#544013] uppercase bg-[#ede9dd]">
              <tr className="border-solid border-4 border-[#d79555] border-x-0">
                <th
                  scope="col"
                  class="px-6 py-3 border-b-0 border-s-0 border-solid border-4 border-[#d79555] "
                >
                  S. No.
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 border-solid border-4 border-[#d79555] border-y-0 border-s-0 "
                >
                  Items Name
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 border-solid border-4 border-[#d79555] border-y-0 border-s-0 "
                >
                  Note/Add-Ons
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 border-solid border-4 border-[#d79555] border-y-0 border-s-0 "
                >
                  Qty.
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 border-solid border-4 border-[#d79555] border-y-0 border-s-0 "
                >
                  Price
                </th>
                <th scope="col" class="px-6 py-3 ">
             
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#ede9dd] overflow-auto">
              { cart?.itemsInCart?.map((items, index) => (
                <tr key={index}>
                  <th
                    scope="row"
                    class="px-6 py-2  border-solid border-4 border-[#d79555] border-y-0 border-s-0"
                  >
                    {++index}
                  </th>
                  <th class="px-6 py-2   font-bold text-gray-900 whitespace-nowrap border-solid border-4 border-[#d79555] border-y-0 border-s-0">
                    {items?.food}
                  </th>

                  <td class="px-6 py-2  font-bold border-solid border-4 border-[#d79555] border-y-0 border-s-0">
                    {items?.category?.map((category) =>
                      category
                    )}
                  </td>
                  {/* <td class="px-6 py-4 border-solid border-4 border-[#d79555] border-y-0 border-s-0">{items.quantity}</td> */}
                  <td class="flex items-center justify-center font-normal py-2 px-6 border-solid border-4 border-[#d79555] border-y-0 border-s-0">
                    <FontAwesomeIcon className=" rounded-full bg-white text-green-500 text-lg cursor-pointer" onClick={() => handleIncrementQuantity(items)} icon={faCirclePlus} />
                    <div className="mx-2">{items?.quantity}</div>

                    <FontAwesomeIcon className=" rounded-full text-red-500 text-lg cursor-pointer bg-white" onClick={() => handleDecrementQuantity(items)} icon={faCircleMinus} />

                    <FontAwesomeIcon className="text-red-700 rounded-full ms-3 text-base bg-white cursor-pointer" onClick={() => handleRemoveFromCart(items)} icon={faTrashCan} />
                  </td>
                  <td class="px-6 py-2  font-bold border-solid border-4 border-[#d79555] border-y-0 border-s-0">
                    {items.price}
                  </td>
                  <td class="px-6 py-2  font-bold">{items?.quantity * 2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center fixed bottom-12 left-0 right-0 my-3">
        <NavLink to="/chef">
        <Button
          title="Save & Generate KOT"
          btn_type="button"
          btn_class="border-solid border-2 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-1 text-sm font-bold tracking-wider uppercase me-8"
        />
         
        </NavLink>
        <NavLink>
          <Button
          title="Save & Print Bill"
          btn_type="button"
          btn_class="border-solid border-2 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-1 text-sm font-bold tracking-wider uppercase mx-8"
        />
        </NavLink>

        <NavLink>        
        <Button
          title="Save & Generate Reciept"
          btn_type="button"
          btn_class="border-solid border-2 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-1 text-sm font-bold tracking-wider uppercase mx-8"
        />
        </NavLink>

        <NavLink>        
        {/* <Button
          title="Cancel"
          btn_type="button"
          btn_class="border-2 border-black border-solid rounded-xl bg-red-500 text-sm text-white font-bold px-3 py-1 ms-8"
        /> */}
        </NavLink>

      </div>
      <StatusFooter />
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {})(Order);

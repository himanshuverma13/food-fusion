import React, { useEffect, useState } from "react";
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
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import AutoSuggestSearch from "../../Common/AutoSuggestSearchBar/AutoSuggestSearchBar";
import CategoryModal from "../../Common/Modal/categoryModal";
import { useForm } from "react-hook-form";
import {
  CheckTableStatus,
  CustomerOrderRegisterAPI,
} from "../../Common/APIs/api";
import axios from "axios";
import { toast } from "react-toastify";
const Token = JSON.parse(localStorage.getItem("userAuth"));
const URL = `${process.env.REACT_APP_API}/cashier`;
const Order = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);

  let OrderStatus = JSON?.parse(localStorage.getItem("orderStatus") ?? "[]");

  const orderTypes = ["Dine-In", "Delivery", "Pick-Up"];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      customer_name: data?.name,
      customer_mobile_no: data?.phone_number,
      customer_email: data?.email,
      customer_table: cart?.TableNo,
    };
    const response = await CheckTableStatus(payload);
    toast.success("Table Booked Successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const dispatch = useDispatch();
  const handleIncrementQuantity = (item) => {
    dispatch(increment(item));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrement(id?.id));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(remove(id?.id));
  };

  //  serchbar modal functionality

  // const openModal = (food) => {
  //   // setSelectedFoodItem(food);
  //   setIsOpen(true);
  // };

  const closeModal = () => setIsOpen(false);

  // to show prev field values on ordered Table
  const [OrderPreFiled, setOrderPreFiled] = useState([]);
  useEffect(() => {
    const checkTableStatus = OrderStatus.filter(
      (table) => table?.data?.customer_table === cart?.TableNo // change for Local format
    );
    setOrderPreFiled(checkTableStatus[0]?.data);
  }, []);

  // get order type dropdown value
  const [orderType, setorderType] = useState();
  const handleOrderType = (data) => {
    setorderType(data);
  };

  // to show filter food items
  const filterFoodItems = cart?.itemsInCart?.filter(
    (filterItems) => filterItems?.tableNo === cart?.TableNo
  );

  // Side Nav Functionality
  const [moveSideNav, setmoveSideNav] = useState(true);
  const SideNavFunctionality = () => {
    setmoveSideNav(!moveSideNav);
  };

  return (
    <>
      <Navbar SideNavFunctionality={SideNavFunctionality} />
      {/* <TableStatusModal/> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={`border-solid border-4 border-[#544013] bg-[#f6f6e9] p-2 m-3 transition-all duration-100 ${
            moveSideNav ? "ms-16" : "ms-0"
          }`}
        >
          <div className="flex justify-between my-2">
            <div>
              <p className="text-xl font-bold text-[#544013]">Generate Order</p>
            </div>
            <div className="flex">
              <DropdownButton
                options={orderTypes}
                selectedValue={handleOrderType}
                buttonLabel="Order Type"
              />
              <p className="text-xl font-semibold text-[#544013]">
                Order No. : 123
              </p>
            </div>
          </div>
          {/* user Form start*/}
          <div className="grid grid-cols-2 gap-2">
            <div class="group flex items-center">
              <label
                for="name"
                class="pb-1 text-lg font-medium text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
              >
                Costumer Name :
              </label>
              <input
                id="name"
                type="text"
                class="py-1 w-7/12 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
                value={OrderPreFiled?.customer_name}
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <span className="text-red-600">{errors.name.message}</span>
              )}
            </div>
            <div class="group flex items-center">
              <label
                for="phone_number"
                class="pb-1 text-lg font-medium text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
              >
                Phone Number :
              </label>
              <input
                id="phone_number"
                type="tel"
                class="py-1 w-7/12 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
                value={OrderPreFiled?.customer_mobile_no}
                {...register("phone_number", {
                  required: "Phone Number is required",
                })}
              />
              {errors.name && (
                <span className="text-red-600">
                  {errors.phone_number.message}
                </span>
              )}
            </div>
            <div class="group flex items-center">
              <label
                for="email"
                class="pb-1 text-lg font-medium text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
              >
                E-mail Address :
              </label>
              <input
                id="email"
                type="email"
                class="py-1 w-9/12 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
                value={OrderPreFiled?.customer_email}
                {...register("email", {
                  required: "E-mail is required",
                })}
              />
              {errors.name && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>
            <div class="group flex items-center">
              <label
                for="table_Number"
                class="pb-1 text-lg font-medium text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
              >
                Table No. :
              </label>
              <input
                id="table_Number"
                type="number"
                value={cart?.TableNo}
                class="py-1 w-5/12 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
                {...register("table_Number", {
                  required: "Table Number is required",
                })}
              />
              {errors.name && (
                <span className="text-red-600">
                  {errors.table_Number.message}
                </span>
              )}
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
          <div class="h-[50vh] bg-[#ede9dd] overflow-auto">
            <table class="w-full text-sm text-center text -[#544013] border-solid border-4 border-[#d79555] border-x-0 border-b-0">
              <thead class="text-lg text-[#544013] uppercase bg-[#ede9dd]">
                <tr className="border-solid border-4 border-[#d79555] border-x-0">
                  <th
                    scope="col"
                    class="px-6 py-3 tracking-wider border-b-0 border-s-0 border-solid border-4 border-[#d79555] "
                  >
                    S. No.
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 tracking-wider border-solid border-4 border-[#d79555] border-y-0 border-s-0 "
                  >
                    Items Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 tracking-wider border-solid border-4 border-[#d79555] border-y-0 border-s-0 "
                  >
                    Note/Add-Ons
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 tracking-wider border-solid border-4 border-[#d79555] border-y-0 border-s-0 "
                  >
                    Qty.
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 tracking-wider border-solid border-4 border-[#d79555] border-y-0 border-s-0 "
                  >
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3 tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#ede9dd] overflow-auto">
                {filterFoodItems?.map((items, index) => (
                  <tr key={index}>
                    <th
                      scope="row"
                      class="px-6 py-2 border-solid border-4 border-[#d79555] border-y-0 border-s-0"
                    >
                      {++index}
                    </th>
                    <th class="px-6 py-2 font-bold text-gray-900 whitespace-nowrap border-solid border-4 border-[#d79555] border-y-0 border-s-0">
                      {items?.food}
                    </th>

                    <td class="px-6 py-2  font-bold border-solid border-4 border-[#d79555] border-y-0 border-s-0">
                      {`${items?.category?.map((category) => category)} , `}
                    </td>
                    <td class="flex items-center justify-center font-normal py-2 px-6 border-solid border-4 border-[#d79555] border-y-0 border-s-0">
                      <FontAwesomeIcon
                        className=" rounded-full bg-white text-green-500 text-lg cursor-pointer"
                        onClick={() => handleIncrementQuantity(items)}
                        icon={faCirclePlus}
                      />
                      <div className="mx-2">{items?.quantity}</div>

                      <FontAwesomeIcon
                        className=" rounded-full text-red-500 text-lg cursor-pointer bg-white"
                        onClick={() => handleDecrementQuantity(items)}
                        icon={faCircleMinus}
                      />

                      <FontAwesomeIcon
                        className="text-red-700 rounded-full ms-3 text-base bg-white cursor-pointer"
                        onClick={() => handleRemoveFromCart(items)}
                        icon={faTrashCan}
                      />
                    </td>
                    <td class="px-6 py-2  font-bold border-solid border-4 border-[#d79555] border-y-0 border-s-0">
                      {items.price}
                    </td>
                    <td class="px-6 py-2  font-bold">
                      {items?.price * items?.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center fixed bottom-12 left-0 right-0 my-3">
          <NavLink to="/payment">
            <Button
              title="Save & Generate KOT"
              btn_type="submit"
              btn_class="border-solid border-2 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-1 text-sm font-bold tracking-wider uppercase me-8"
            />
          </NavLink>
          <NavLink to="/payment">
            <Button
              title="Save & Print Bill"
              btn_type="submit"
              btn_class="border-solid border-2 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-1 text-sm font-bold tracking-wider uppercase mx-8"
            />
          </NavLink>

          {/* <NavLink> */}
          {/* <Button
            title="Save"
            btn_type="submit"
            btn_class="border-solid border-2 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-1 text-sm font-bold tracking-wider uppercase mx-8"
          /> */}
          <button
            className="border-solid border-2 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-1 text-sm font-bold tracking-wider uppercase mx-8"
            type="submit"
          >
            save
          </button>
          {/* </NavLink> */}

          <NavLink>
            {/* <Button
          title="Cancel"
          btn_type="button"
          btn_class="border-2 border-black border-solid rounded-xl bg-red-500 text-sm text-white font-bold px-3 py-1 ms-8"
        /> */}
          </NavLink>
        </div>
      </form>
      <StatusFooter />
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {})(Order);

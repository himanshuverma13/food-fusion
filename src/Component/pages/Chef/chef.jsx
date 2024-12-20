  import React, { useState } from "react";
  import Navbar from "../../Common/Navbar/navbar";
  import { connect, useDispatch } from "react-redux";
  import Button from "../../Common/Button/button";
  import {
    AsignChefFoodOrder,
    CompleteChefOrder,
  } from "../../Common/Redux/Chef/chefSlice";
  import StatusFooter from "../../Common/Footer/statusFooter";
  import { add } from "../../Common/Redux/Category/categorySlice";
  import DropdownButton from "../../Common/dropdownButton/dropdown";
  import { SetTable } from "../../Common/Redux/Category/categorySlice";
  import { NavLink, useNavigate } from "react-router-dom";

  // Images
  import NewOrder from "../../assets/Images/new order.svg";
  const Chef = ({ cart, chef }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAssign = (e) => {
      let payload = { ...e, status: "pending" };
      dispatch(AsignChefFoodOrder(payload));
      dispatch(add(payload));
    };

    const handleComplete = (e) => {
      let payload = { ...e, status: "done" };
      dispatch(CompleteChefOrder(payload));
      dispatch(add(payload));
    };
    const filter = ["Dine-In", "Delivery", "Pick-Up"];
    // const dispatch = useDispatch();

    const SetTableOnCategory = () => {
      let setTableNull = 0;
      dispatch(SetTable(setTableNull));
    };
    const SendToInvoice = () => {
      navigate("/order-history");
    };

    // Side Nav Functionality
    const [moveSideNav, setmoveSideNav] = useState(true);
    const SideNavFunctionality = () => {
      setmoveSideNav(!moveSideNav);
    };
    const OrderStatusData = [
      {
        class: "bg-green-500",
        status: "PickUp",
      },
      {
        class: "bg-red-500",
        status: "Delivery",
      },
      {
        class: "bg-orange-400",
        status: "Dine-In",
      },
    ];
    return (
      <>
        <Navbar SideNavFunctionality={SideNavFunctionality} />
        <div className={`px-5 ${moveSideNav ? "ms-16" : "ms-0"}`}>
          <div className="flex justify-between items-center">
            {/* Search bar */}
            <div class="text-black flex justify-around items-center">
              <div class="overflow-hidden flex justify-between border-solid border-2 w-full border-black rounded-3xl bg-[#f6f6e9]">
                <input
                  type="text"
                  class="px-3 py-1 tracking-wide w-full bg-[#f6f6e9] focus-visible:outline-0"
                  placeholder="Search "
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
              <DropdownButton options={filter} buttonLabel="Filters" />
            </div>

            {/* Category page */}
            <div>
              <NavLink to="/category">
                <img
                  src={NewOrder}
                  className="h-16 me-5"
                  onClick={() => SetTableOnCategory()}
                  alt="Loading"
                />
              </NavLink>
            </div>
          </div>
          {/* Order Status */}
          <div className="flex justify-between">
            <button
              className="border-black border-2 p-1 font-semibold bg-[#bd8954] tracking-widest text-black"
              onClick={() => SendToInvoice()}
            >
              ORDER HISTORY
            </button>
            <div className="grid grid-cols-3 gap-16">
              {OrderStatusData.map((items, index) => (
                <div className="flex items-center justify-end">
                  <div
                    className={`rounded-full p-2 h-2 w-2 ${items.class}`}
                  ></div>
                  <p className="text-lg font-bold text-[#544013] ms-2 uppercase tracking-wider">
                    {items.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-3">
            {cart.itemsInCart?.map((item) => (
              <div className="chef-card grid grid-cols-1 grid-rows-4 border-solid rounded-3xl bg-white shadow-xl">
                <div className="border rounded-3xl px-4 py-0.5 m-0.5 bg-[#d79555] text-[#544013]">
                  <div className="text-sm tracking-wider font-semibold">
                    Order No. 007
                  </div>
                  <div className="flex justify-between text-sm tracking-wider font-semibold">
                    <span>Time : {new Date().toLocaleTimeString()}</span>
                    <span>Table No. {item.tableNo}</span>
                  </div>
                </div>
              
                <div className="grid row-span-2 grid-cols-4 grid-rows-1 my-2">
                  <div className="flex justify-center">
                    <img
                      src={item.image}
                      alt="Loading"
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                  <div className="col-span-3">
                    <div className="flex justify-between items-center ms-1 me-3">
                      <div className="text-left text-lg truncate w-36 uppercase  tracking-wider">
                        {item.food}
                      </div>
                      Qty - {item.quantity}
                    </div>
                    <div className="text-xs mx-1"> {item.category}</div>
                  </div>
                </div>

                <div className="justify-end border-t-2 flex row-start-4">
                  <Button
                    title="Assign"
                    btn_type="button"
                    onClick={() => handleAssign(item)}
                    btn_class="rounded-full border-amber-950 tracking-wider px-4 font-semibold text-white mx-2 my-1 cursor-pointer duration-300  hover:bg-sky-700 bg-red-500"
                  />
                  <Button
                    title="Completed"
                    onClick={() => handleComplete(item)}
                    btn_type="button"
                    btn_class="rounded-full border-amber-950 tracking-wider font-semibold px-4 text-white mx-2 my-1 cursor-pointer duration-300 bg-green-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <StatusFooter />
      </>
    );
  };

  const mapStateToProps = (state) => ({
    cart: state.cart,
    chef: state.chef,
  });

  export default connect(mapStateToProps, {})(Chef);

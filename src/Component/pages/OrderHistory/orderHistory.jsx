import React from "react";
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
import { NavLink } from "react-router-dom";

// Images
import NewOrder from "../../assets/Images/new order.svg";

const OrderHistory = ({ cart }) => {
    const dispatch = useDispatch();

    const filter = ["Dine-In", "TakeOut", "Delivery", "Pre-Order"];
    // const dispatch = useDispatch();

    const SetTableOnCategory = () => {
        let setTableNull = 0;
        dispatch(SetTable(setTableNull));
    };
    const OrderStatusData = [
        {
            class: "bg-red-500",
            status: "PickUp",
        },
        {
            class: "bg-orange-400",
            status: "Delivery",
        },
        {
            class: "bg-green-400",
            status: "Dine-In",
        },
    ];
    return (
        <>
            <>
                <Navbar />
                <div className="container  mx-auto px-10 py-5">
                    <div className="text-2xl font-bold">Chef</div>

                    <div className="flex justify-between">
                        {/* Search bar */}
                        <div class="text-black flex justify-start m-2">
                            <div class="overflow-hidden flex border-solid border-2 border-black rounded-3xl bg-[#f6f6e9]">
                                <input
                                    type="text"
                                    class=" pe-16 px-3 bg-[#f6f6e9]"
                                    placeholder="Search"
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
                            {/* Dropdown filter */}
                            <DropdownButton options={filter} buttonLabel="Filters" />
                        </div>
                        {/* Category page */}
                        <div>
                            <NavLink to="/category">
                                <img
                                    src={NewOrder}
                                    className="h-20 me-5"
                                    onClick={() => SetTableOnCategory()}
                                    alt="Loading"
                                />
                            </NavLink>
                        </div>
                    </div>
                    {/* Order Status */}
                    <div className="flex justify-end">
                        <div className="grid grid-cols-3 gap-16">
                            {OrderStatusData.map((items, index) => (
                                <div className="flex items-center justify-end">
                                    <div
                                        className={`rounded-full p-2 h-2 w-2 ${items.class}`}
                                    ></div>
                                    <p className="text-xl text-[#544013] ms-2 uppercase tracking-wider">
                                        {items.status}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* order history details content */}
                    <div className="grid  grid-cols-3 grid-rows-1 gap-4">
                        <div className="col-span-2 overflow-auto h-96">
                            <div class="chef-card border-solid m-2 rounded-xl p-1 bg-white shadow-xl">
                                <div class="border flex justify-between items-center rounded-xl p-3 bg-[#d79555]">
                                    <div>
                                        <span className="block font-bold font-[Prompt]">Name of customer</span>
                                        <span className="block font-[Prompt] font-light">Time : 15 July 2024, 7:23 PM </span>
                                    </div>
                                    <div>
                                        <span className="font-bold font-[Prompt]">Table assigned : 14</span>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between p-3 tracking-wider font-semibold">
                                    <div className=""><span className="block font-[Prompt]">Order ID :-</span><span className="font-[Prompt] font-thin">#1234</span></div>
                                    <div className=""><span className="block font-[Prompt]">Order Amount :-</span><span className="font-[Prompt] font-thin">Rs 1234</span></div>
                                    <div className=""><span className="block font-[Prompt]">Mob No :-</span><span className="font-[Prompt] font-thin">1234567890</span></div>
                                    <div className=""><span className="block font-[Prompt]">Payment Method :-</span><span className="font-[Prompt] font-thin">cash</span></div>
                                </div>
                                <hr class="m-1 bg-black" />
                                <div className="m-2 font-[Prompt]">
                                    Order Items : 7
                                </div>
                            </div>
                            <div class="chef-card border-solid m-2 rounded-xl p-1 bg-white shadow-xl">
                                <div class="border flex justify-between items-center rounded-xl p-3 bg-[#d79555]">
                                    <div>
                                        <span className="block font-bold font-[Prompt]">Name of customer</span>
                                        <span className="block font-[Prompt] font-light">Time : 15 July 2024, 7:23 PM </span>
                                    </div>
                                    <div>
                                        <span className="font-bold font-[Prompt]">Table assigned : 14</span>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between p-3 tracking-wider font-semibold">
                                    <div className=""><span className="block font-[Prompt]">Order ID :-</span><span className="font-[Prompt] font-thin">#1234</span></div>
                                    <div className=""><span className="block font-[Prompt]">Order Amount :-</span><span className="font-[Prompt] font-thin">Rs 1234</span></div>
                                    <div className=""><span className="block font-[Prompt]">Mob No :-</span><span className="font-[Prompt] font-thin">1234567890</span></div>
                                    <div className=""><span className="block font-[Prompt]">Payment Method :-</span><span className="font-[Prompt] font-thin">cash</span></div>
                                </div>
                                <hr class="m-1 bg-black" />
                                <div className="m-2 font-[Prompt]">
                                    Order Items : 7
                                </div>
                            </div><div class="chef-card border-solid m-2 rounded-xl p-1 bg-white shadow-xl">
                                <div class="border flex justify-between items-center rounded-xl p-3 bg-[#d79555]">
                                    <div>
                                        <span className="block font-bold font-[Prompt]">Name of customer</span>
                                        <span className="block font-[Prompt] font-light">Time : 15 July 2024, 7:23 PM </span>
                                    </div>
                                    <div>
                                        <span className="font-bold font-[Prompt]">Table assigned : 14</span>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between p-3 tracking-wider font-semibold">
                                    <div className=""><span className="block font-[Prompt]">Order ID :-</span><span className="font-[Prompt] font-thin">#1234</span></div>
                                    <div className=""><span className="block font-[Prompt]">Order Amount :-</span><span className="font-[Prompt] font-thin">Rs 1234</span></div>
                                    <div className=""><span className="block font-[Prompt]">Mob No :-</span><span className="font-[Prompt] font-thin">1234567890</span></div>
                                    <div className=""><span className="block font-[Prompt]">Payment Method :-</span><span className="font-[Prompt] font-thin">cash</span></div>
                                </div>
                                <hr class="m-1 bg-black" />
                                <div className="m-2 font-[Prompt]">
                                    Order Items : 7
                                </div>
                            </div><div class="chef-card border-solid m-2 rounded-xl p-1 bg-white shadow-xl">
                                <div class="border flex justify-between items-center rounded-xl p-3 bg-[#d79555]">
                                    <div>
                                        <span className="block font-bold font-[Prompt]">Name of customer</span>
                                        <span className="block font-[Prompt] font-light">Time : 15 July 2024, 7:23 PM </span>
                                    </div>
                                    <div>
                                        <span className="font-bold font-[Prompt]">Table assigned : 14</span>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between p-3 tracking-wider font-semibold">
                                    <div className=""><span className="block font-[Prompt]">Order ID :-</span><span className="font-[Prompt] font-thin">#1234</span></div>
                                    <div className=""><span className="block font-[Prompt]">Order Amount :-</span><span className="font-[Prompt] font-thin">Rs 1234</span></div>
                                    <div className=""><span className="block font-[Prompt]">Mob No :-</span><span className="font-[Prompt] font-thin">1234567890</span></div>
                                    <div className=""><span className="block font-[Prompt]">Payment Method :-</span><span className="font-[Prompt] font-thin">cash</span></div>
                                </div>
                                <hr class="m-1 bg-black" />
                                <div className="m-2 font-[Prompt]">
                                    Order Items : 7
                                </div>
                            </div><div class="chef-card border-solid m-2 rounded-xl p-1 bg-white shadow-xl">
                                <div class="border flex justify-between items-center rounded-xl p-3 bg-[#d79555]">
                                    <div>
                                        <span className="block font-bold font-[Prompt]">Name of customer</span>
                                        <span className="block font-[Prompt] font-light">Time : 15 July 2024, 7:23 PM </span>
                                    </div>
                                    <div>
                                        <span className="font-bold font-[Prompt]">Table assigned : 14</span>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between p-3 tracking-wider font-semibold">
                                    <div className=""><span className="block font-[Prompt]">Order ID :-</span><span className="font-[Prompt] font-thin">#1234</span></div>
                                    <div className=""><span className="block font-[Prompt]">Order Amount :-</span><span className="font-[Prompt] font-thin">Rs 1234</span></div>
                                    <div className=""><span className="block font-[Prompt]">Mob No :-</span><span className="font-[Prompt] font-thin">1234567890</span></div>
                                    <div className=""><span className="block font-[Prompt]">Payment Method :-</span><span className="font-[Prompt] font-thin">cash</span></div>
                                </div>
                                <hr class="m-1 bg-black" />
                                <div className="m-2 font-[Prompt]">
                                    Order Items : 7
                                </div>
                            </div>
                        </div>
                        <div className="col-start-3 flex justify-center">
                            <div className="bg-white border border-black  rounded-3xl shadow-lg p-6 w-80">
                                {/* Header */}
                                <h2 className="text-xl font-bold font-[Prompt] mb-2">Details</h2>

                                {/* Customer Info */}
                                <div className="text-sm  mb-4">
                                    <p className=""><span className="font-semibold font-[Prompt] text-lg">Name of customer</span></p>
                                    <p className="font-[Prompt] text-lg">Time : 15 July 2024, 7:23 PM</p>
                                    <p className="font-[Prompt] text-lg">Order items : 7</p>
                                </div>

                                {/* Order List */}
                                <div className="mb-4">
                                    <div className="flex justify-between border-b py-2">
                                        <span className="font-[prompt]">Item 1</span>
                                        <span className="font-[prompt]">1200</span>
                                    </div>
                                    <div className="flex justify-between border-b py-2">
                                        <span className="font-[prompt]">Item 2</span>
                                        <span className="font-[prompt]">1200</span>
                                    </div>
                                    <div className="flex justify-between border-b py-2">
                                        <span className="font-[prompt]">Item 3</span>
                                        <span className="font-[prompt]">1200</span>
                                    </div>
                                </div>

                                {/* Sub-total */}
                                <div className="flex justify-between text-lg font-bold mb-4">
                                    <span className="font-[prompt]">Sub-total</span>
                                    <span className="font-[prompt]">10000</span>
                                </div>

                                {/* Receipt Button */}
                                <button className="w-full bg-[#ede9dd] font-[prompt] text-black font-semibold py-2 rounded shadow hover:bg-[#d79555] transition duration-200">
                                    receipt
                                </button>
                        </div></div>
                    </div>
                </div>
                <StatusFooter />
            </>
        </>
    );
};

const mapStateToProps = (state) => ({
    cart: state.cart,
});

export default connect(mapStateToProps, {})(OrderHistory);

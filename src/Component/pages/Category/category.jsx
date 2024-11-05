import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  add,
  CheckPaymentStatus,
  decrement,
  increment,
  remove,
} from "../../Common/Redux/Category/categorySlice";
import Button from "../../Common/Button/button";
import { Link } from "react-router-dom";
import Navbar from "../../Common/Navbar/navbar";
import StatusFooter from "../../Common/Footer/statusFooter";
import CategoryModal from "../../Common/Modal/categoryModal";

// Images

import Pizza from "../../assets/Images/category/pizza.jpg";
import Pizza2 from "../../assets/Images/category/pizza2.avif";
import Pastry from "../../assets/Images/category/pastry.jpg";
import Brownie from "../../assets/Images/category/brownie.webp";
import Paneer from "../../assets/Images/category/paneer.avif";
import Sandwich from "../../assets/Images/category/sandwich.jpg";
import Juice from "../../assets/Images/category/juice.jpg";
import IceCream from "../../assets/Images/category/iceCream.webp";
import GreenTea from "../../assets/Images/category/greenTea.jpg";
import Coffee from "../../assets/Images/category/coffee.jpg";
import DropdownButton from "../../Common/dropdownButton/dropdown";
import Tab1 from "../../assets/Images/menu/1.svg";
import Tab2 from "../../assets/Images/menu/seafood.svg";
import Tab3 from "../../assets/Images/menu/appetizers.svg";
import Tab4 from "../../assets/Images/menu/beverages.svg";
import Tab5 from "../../assets/Images/menu/desserts.svg";
import Tab6 from "../../assets/Images/menu/fastfood.svg";
import Tab7 from "../../assets/Images/menu/soups.svg";
import SplitBill from "../../Common/Modal/splitBillModal";

const Category = ({ cart }) => {
  console.log("cart: ", cart);
  const [selectedTab, setSelectedTab] = useState("Food 1");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFoodItem, setSelectedFoodItem] = useState(null);
  //   const [showFoodData, setshowFoodData] = useState([]);
  //   const { register, handleSubmit, reset } = useForm();
  const tabs = [
    { name: "Food 1", image: Tab1 },
    { name: "Food 2", image: Tab2 },
    { name: "Food 3", image: Tab3 },
    { name: "Food 4", image: Tab4 },
    { name: "Food 5", image: Tab5 },
    { name: "Food 6", image: Tab6 },
    { name: "Food 7", image: Tab7 },
  ];
  const foodItems = {
    "Food 1": [
      {
        id: 1,
        name: "pizza",
        image: Pizza,
        description: "Add some description of dish",
        items: [" Small ", " Large ", " Extra-Large "],
      },
      {
        id: 2,
        name: "salad",
        image: Pizza2,
        description: "Add some description of dish",
        items: [" half ", " full ", " quater "],
      },
      {
        id: 3,
        name: "sushi",
        image: Pizza,
        description: "Add some description of dish",
        items: [" half ", " full ", " quater ", "medium"],
      },
      // {
      //   id: 4,
      //   name: "pizza",
      //   image: Pizza,
      //   description: "Add some description of dish",
      //   items: [" Small ", " Large ", " Extra-Large "],
      // },
      // {
      //   id: 5,
      //   name: "salad",
      //   image: Pizza2,
      //   description: "Add some description of dish",
      //   items: [" half ", " full ", " quater "],
      // },
      // {
      //   id: 6,
      //   name: "sushi",
      //   image: Pizza,
      //   description: "Add some description of dish",
      //   items: [" half ", " full ", " quater ", "medium"],
      // },
    ],
    "Food 2": [
      {
        id: 11,
        name: "ice cream",
        image: IceCream,
        description: "Add some description of dish",
        items: [" half ", " full ", " quater "],
      },
      {
        id: 12,
        name: "cake",
        image: Pastry,
        description: "Add some description of dish",
        items: [" half ", " full ", " quater "],
      },
      {
        id: 13,
        name: "brownie",
        image: Brownie,
        description: "Add some description of dish",
        items: [" half ", " full ", " quater ", "medium"],
      },
    ],
    "Food 3": [
      {
        id: 21,
        name: "nomal paneer",
        image: Paneer,
        description: "Add some description of dish",
        items: [" half ", " full ", " quater "],
      },
      {
        id: 22,
        name: "sada paneer",
        image: Sandwich,
        description: "Add some description of dish",
        items: [" half ", " full ", " quater "],
      },
      {
        id: 23,
        name: "simple paneer",
        image: Paneer,
        description: "Add some description of dish",
        items: [" half ", " full ", " quater ", "medium"],
      },
    ],
    "Food 4": [
      {
        id: 31,
        name: "ice tea",
        image: Juice,
        description: "Add some description of dish",
        items: [" half ", " full ", " quater "],
      },
      {
        id: 32,
        name: "green tea",
        image: GreenTea,
        description: "Add some description of dish",
        items: [" half ", " full ", " quater "],
      },
      {
        id: 33,
        name: "coffee",
        image: Coffee,
        description: "Add some description of dish",
        items: [" half ", " full ", " quater ", "medium"],
      },
    ],
  };

  const tableOptions = ["1", "2", "3", "4"];
  const orderTypes = ["Dine-In", "TakeOut", "Delivery", "Pre-Order"];
  const filter = ["Dine-In", "TakeOut", "Delivery", "Pre-Order"];
  const dispatch = useDispatch();

  const openModal = (food) => {
    setSelectedFoodItem(food);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const onSubmit = (data) => {
    let category = Object.values(data).filter((value) => value);
    let payload = {
      id: selectedFoodItem?.id,
      food: selectedFoodItem?.name,
      image: selectedFoodItem?.image,
      category: category,
      tableNo: cart?.TableNo,
      status: "open",
      quantity: 1,
      price: 1,
      amount: 1,
    };
    console.log("Payload:", payload);
    // setshowFoodData(selectedFoodItem);
    dispatch(add(payload));
    closeModal();
  };

  const handleIncrementQuantity = (id) => {
    dispatch(increment(id?.id));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrement(id?.id));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(remove(id?.id));
  };
  const handlePayment = (pay) => {
    dispatch(CheckPaymentStatus(pay));
  };

  let selectedFoodItems = cart.itemsInCart.filter(
    (item) => item.tableNo === cart.TableNo
  );

  return (
    <>
      <Navbar />
      <div className="h-screen border-solid border-8 p-2 mx-3 border-[#544013]">
        <p className="text-2xl text-[#544013]">Generate Order</p>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-7 border-solid border-2 border-black rounded-2xl bg-[#ede9dd]">
            <div className="flex">
              {/* Search bar */}
              <div class="text-black flex justify-around items-center m-2">
                <div class="overflow-hidden flex justify-between border-solid border-2 w-full border-black rounded-3xl bg-[#f6f6e9]">
                  <input
                    type="text"
                    class="ps-5 py-1 w-full bg-[#f6f6e9]"
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
              <DropdownButton options={filter} buttonLabel="Filters" />
            </div>
            <div className="flex">
              {/* Side Tabs */}
              <div className="w-1/4 bg-[#ede9dd] rounded-2xl p-4 pt-16">
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    className={`block w-full p-2 mb-2 text-left ${
                      tab.name === selectedTab
                        ? "bg-[#d79555] border-solid border-2 border-black text-white"
                        : "bg-white"
                    }`}
                    onClick={() => setSelectedTab(tab.name)}
                  >
                    <img
                      src={tab.image}
                      alt={tab.name}
                      className="h-12 w-12 inline-block mr-2"
                    />
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* Main Content */}
              <div className=" p-4">
                <h2 className="text-2xl mb-4">{selectedTab}</h2>
                <div className="grid grid-cols-2 gap-4">
                  {foodItems[selectedTab]?.map((food) => (
                    <button
                      key={food?.id}
                      className="p-2 bg-white border rounded-2xl shadow-2xl"
                      onClick={() => openModal(food)}
                    >
                      <div className="flex items-center">
                        <img
                          src={food?.image}
                          className="h-20 w-20 rounded-full me-2"
                          alt="Loading"
                        />
                        <div>
                          <p className="text-[#544013] text-xl">{food?.name}</p>
                          <p className="text-sm font-sans">
                            {food?.description}
                          </p>
                          <Button
                            btn_class="border-solid border-2 border-black rounded-2xl bg-[#cd3f14] text-white uppercase font-sans px-4 py-1 mt-2"
                            btn_type="button"
                            title="Add"
                          />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* display */}
          <div className="col-span-5 bg-[#ede9dd] border-solid border-2 border-black rounded-2xl">
            <div className="flex items-center justify-evenly">
              <DropdownButton options={orderTypes} buttonLabel="Order Type" />

              <DropdownButton options={tableOptions} buttonLabel="Table No." />

              <p className="text-xl text-[#544013]">Order No. : 123</p>
            </div>
            <hr className="p-1 bg-black my-2" />

            {/* Table View */}
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-center text-[#544013]">
                <thead class="text-lg text-[#544013] bg-[#ede9dd]">
                  <tr>
                    <th scope="col" class="px-6 text-lg font-normal">
                      Item
                    </th>
                    <th scope="col" class="px-6 text-lg font-normal">
                      Price
                    </th>
                    <th scope="col" class="px-6 text-lg font-normal">
                      Qty.
                    </th>

                    <th scope="col" class="px-6 text-lg font-normal">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#ede9dd]">
                  {selectedFoodItems?.map((items, index) => (
                    <tr>
                      <th scope="row" class="py-2 px-6 font-light">
                        {items?.food}
                      </th>
                      <td class="font-light py-2 px-6">{items.price}</td>
                      <td class="flex items-center justify-center font-normal py-2 px-6">
                        <span
                          className="px-2 rounded-full text-white text-xl cursor-pointer bg-green-600"
                          onClick={() => handleIncrementQuantity(items)}
                        >
                          +
                        </span>
                        <div className="mx-2">{items?.quantity}</div>
                        <span
                          className="px-2 rounded-full text-white text-xl cursor-pointer bg-red-600"
                          onClick={() => handleDecrementQuantity(items)}
                        >
                          -
                        </span>
                        <div className="mx-2">{items?.quantity * 2}</div>
                        <span
                          className="px-2 text-white rounded-full text-lg bg-red-600 cursor-pointer"
                          onClick={() => handleRemoveFromCart(items)}
                        >
                          x
                        </span>
                      </td>
                      <td class="font-normal py-2 px-6">{items.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <ul>
                <li className="mx-2 bg-[#f6f6e9] w-32 text-[#544013] border-2 border-[#d79555] rounded-lg py-1 px-4">
                  Total Items: {cart?.totalCount}
                </li>
                <li className="mx-3 text-xl text-[#544013]">
                  Sub Total: ${cart?.totalCount * 2}
                </li>
                <div className="flex">
                  <SplitBill />
                  <Button
                    title="Apply Offer"
                    btn_type="button"
                    btn_class="mx-3 border-solid border-4 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-1 uppercase"
                  />
                </div>
                {/* <Link to="/payment" className="mx-3">
                  <Button
                    title="PAYMENT"
                    onClick={() => handlePayment(cart)}
                    btn_type="button"
                    btn_class="border-solid border-4 border-[#544013] rounded-xl my-2 bg-[#f6d8ba] px-3 py-1 uppercase"
                  />
                </Link> */}
              </ul>
            </div>
            <div className="flex justify-center gap-4 py-2">
              <Button
                title="Save & Generate KOT"
                btn_type="button"
                btn_class="border-solid border-4 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-1 uppercase"
              />
              <Button
                title="Save & Print Bill"
                btn_type="button"
                btn_class="border-solid border-4 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-1 uppercase"
              />
              <Button
                title="Save & Generate Reciept"
                btn_type="button"
                btn_class="border-solid border-4 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-1 uppercase"
              />
              <Button
                title="x"
                btn_type="button"
                btn_class="border-4 border-black border-solid rounded-full bg-red-500 text-black px-2"
              />
            </div>
          </div>
        </div>
        {/* Modal */}
        <CategoryModal
          isOpen={isOpen}
          closeModal={closeModal}
          selectedFoodItem={selectedFoodItem}
          onSubmit={onSubmit}
        />
      </div>
      <StatusFooter />
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {})(Category);

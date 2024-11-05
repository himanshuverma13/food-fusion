import React from "react";
import Navbar from "../../Common/Navbar/navbar";
import DropdownButton from "../../Common/dropdownButton/dropdown";
import { SetTable } from "../../Common/Redux/Category/categorySlice";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "../../Common/Button/button";

// Images
import Setting from "../../assets/Images/sideNavImg/navSetting.svg";
// import Food1 from "../../assets/Images/menu/1.svg";
import Food1 from "../../assets/Images/menu/dish.svg";
import Food2 from "../../assets/Images/menu/seafood.svg";
import Food3 from "../../assets/Images/menu/appetizers.svg";
import Food4 from "../../assets/Images/menu/beverages.svg";
import Food5 from "../../assets/Images/menu/desserts.svg";
import Food6 from "../../assets/Images/menu/fastfood.svg";
import Food7 from "../../assets/Images/menu/soups.svg";
import Dish from "../../assets/Images/menu/menu-dish.svg";
import NewOrder from "../../assets/Images/new order.svg";
import StatusFooter from "../../Common/Footer/statusFooter";
import MenuSetting from "../../Common/Modal/menuSettingModal";
const Menu = () => {
  const filter = ["Dine-In", "TakeOut", "Delivery", "Pre-Order"];

  const dispatch = useDispatch();

  const SetTableOnCategory = () => {
    let setTableNull = 0;
    dispatch(SetTable(setTableNull));
  };
  const MenuOptions = [
    { title: "Entrees", image: Food2 },
    { title: "Desserts", image: Food1 },
    { title: "Appetizers", image: Food3 },
    { title: "Beverages", image: Food4 },
    { title: "Beverages", image: Food4 },
    { title: "Caterogies", image: Food5 },
    { title: "Entrees", image: Food5 },
    { title: "Entrees", image: Food6 },
    { title: "Entrees", image: Food7 },
    { title: "Entrees", image: Food2 },
    { title: "Entrees", image: Food2 },
    { title: "Entrees", image: Food2 },
  ];
  const MenuItemsData = [
    {
      image: Dish,
      title: "Item 1",
      price: "Rs 1300",
      description: "Delicious salad with mixed greens, dressing, and toppings.",
    },
    {
      image: Dish,
      title: "Item 1",
      price: "Rs 1300",
      description: "Delicious salad with mixed greens, dressing, and toppings.",
    },
    {
      image: Dish,
      title: "Item 1",
      price: "Rs 1300",
      description: "Delicious salad with mixed greens, dressing, and toppings.",
    },
    {
      image: Dish,
      title: "Item 1",
      price: "Rs 1300",
      description: "Delicious salad with mixed greens, dressing, and toppings.",
    },
    {
      image: Dish,
      title: "Item 1",
      price: "Rs 1300",
      description: "Delicious salad with mixed greens, dressing, and toppings.",
    },
    {
      image: Dish,
      title: "Item 1",
      price: "Rs 1300",
      description: "Delicious salad with mixed greens, dressing, and toppings.",
    },
    {
      image: Dish,
      title: "Item 1",
      price: "Rs 1300",
      description: "Delicious salad with mixed greens, dressing, and toppings.",
    },
    {
      image: Dish,
      title: "Item 1",
      price: "Rs 1300",
      description: "Delicious salad with mixed greens, dressing, and toppings.",
    },
    {
      image: Dish,
      title: "Item 1",
      price: "Rs 1300",
      description: "Delicious salad with mixed greens, dressing, and toppings.",
    },
    {
      image: Dish,
      title: "Item 1",
      price: "Rs 1300",
      description: "Delicious salad with mixed greens, dressing, and toppings.",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="mx-14">
        <p className="text-3xl text-[#544013] uppercase">Menu</p>

        <div className="flex justify-between">
          {/* Search bar */}
          <div class="text-black flex justify-around my-4">
          <div class="overflow-hidden flex justify-between border-solid border-2 w-full border-black rounded-3xl bg-[#f6f6e9] my-3">
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
            {/* Dropdown filter */}
            <DropdownButton options={filter} buttonLabel="Filters" />
          </div>
          <div className="flex items-center">
            <NavLink to="/category">
              <img
                src={NewOrder}
                className="h-16 me-5"
                onClick={() => SetTableOnCategory()}
                alt="Loading"
              />
            </NavLink>
            <MenuSetting/>
          </div>
        </div>

        {/* Menu Options */}
        <div className="grid grid-cols-6 gap-2 my-1">
          {MenuOptions.map((items, index) => (
            <div className="flex items-center justify-center border-solid border-2 border-[#544013] rounded-xl bg-[#ede9dd] hover:bg-[#ad7945]">
              <img src={items.image} className="h-10 me-2" alt="Loading" />
              <p className="text-xl tracking-wide uppercase">{items.title}</p>
            </div>
          ))}
        </div>

        {/* Menu Items Card */}
        <div className="grid grid-cols-5 gap-5 mt-3">
          {MenuItemsData.map((menu, index) => (
            <div className="bg-white border-solid border-2 border-[#544013] rounded-xl flex items-center p-1">
              <img src={menu.image} className="h-14 me-2" alt="Loading" />
              <div>
                <p className="font-sans uppercase text-xl tracking-wide font-semibold">
                  {menu.title}
                </p>
                <p className="font-sans tracking-wide">{menu.description}</p>
                <p className="text-green-500 text-xl font-sans mt-2">
                  {menu.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <StatusFooter/>
    </>
  );
};
export default Menu;

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
import { Link, NavLink } from "react-router-dom";
import Navbar from "../../Common/Navbar/navbar";
import StatusFooter from "../../Common/Footer/statusFooter";
import CategoryModal from "../../Common/Modal/categoryModal";
// import MenuItemsJson from '../../assets/Json/menuItems'

// Images

import Appetizers from "../../assets/Images/menu/appetizers.svg";
import Vegetarian from "../../assets/Images/menu/veg.svg";
import Non_Vegetarian from "../../assets/Images/menu/non-veg.svg";
import Breads from "../../assets/Images/menu/breads.svg";
import Rice from "../../assets/Images/menu/rice-and-biryani.svg";
import Desserts from "../../assets/Images/menu/desserts.svg";
import Snacks from "../../assets/Images/menu/snacks.svg";
import Beverages from "../../assets/Images/menu/beverages.svg";
import South_Indian from "../../assets/Images/menu/South indian.svg";
import Rajasthani from "../../assets/Images/menu/rajasthani.svg";
// import IndoChinese from '../../assets/Images/menu/indoChinese.svg'

import DropdownButton from "../../Common/dropdownButton/dropdown";

import SplitBill from "../../Common/Modal/splitBillModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faCirclePlus,
  faCircleXmark,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import TableStatusModal from "../../Common/Modal/tableStatusModal";
import ApplyOffer from "../../Common/Modal/applyOfferModal";

let MenuItemsJson = [
  {
    id: 11,
    category: "Appetizers",
    image: Appetizers,
    subcategories: [
      {
        id: 1,
        name: "Samosa",
        description:
          "Crispy pastry filled with spiced potatoes, peas, and herbs.",
        price: 80,
      },
      {
        id: 2,
        name: "Paneer Tikka",
        description:
          "Marinated cottage cheese cubes grilled to perfection with herbs.",
        price: 250,
      },
      {
        id: 3,
        name: "Chicken Seekh Kebab",
        description: "Spiced minced chicken skewers cooked in a tandoor.",
        price: 300,
      },
      {
        id: 4,
        name: "Aloo Tikki Chaat",
        description:
          "Potato patties topped with yogurt, tamarind, and mint chutney.",
        price: 150,
      },
      {
        id: 5,
        name: "Lamb Galouti Kebab",
        description:
          "Melt-in-your-mouth minced lamb kebabs with a rich blend of spices.",
        price: 400,
      },
      {
        id: 6,
        name: "Avocado Papdi Chaat",
        description:
          "Crispy wafers topped with mashed avocado, spiced yogurt, and chutneys—a modern twist on traditional chaat.",
        price: 180,
      },
      {
        id: 7,
        name: "Chicken 65",
        description:
          "Spicy and tangy fried chicken with South Indian spices, curry leaves, and yogurt.",
        price: 220,
      },
      {
        id: 8,
        name: "Kurkuri Bhindi",
        description:
          "Crispy, spiced okra fries for a crunchy and flavorful bite.",
        price: 130,
      },
    ],
  },
  {
    id: 12,
    category: "Veg",
    image: Vegetarian,
    subcategories: [
      {
        id: 1,
        name: "Paneer Butter Masala",
        description:
          "Cottage cheese in a rich, creamy tomato sauce with butter.",
        price: 300,
      },
      {
        id: 2,
        name: "Chole Bhature",
        description: "Spiced chickpeas served with fluffy fried bread.",
        price: 220,
      },
      {
        id: 3,
        name: "Baingan Bharta",
        description:
          "Roasted and mashed eggplant with onions, tomatoes, and spices.",
        price: 200,
      },
      {
        id: 4,
        name: "Palak Paneer",
        description: "Spinach and paneer cubes cooked with creamy spices.",
        price: 280,
      },
      {
        id: 5,
        name: "Stuffed Bell Peppers",
        description:
          "Bell peppers filled with spiced potatoes, peas, and cottage cheese, baked to perfection.",
        price: 260,
      },
      {
        id: 6,
        name: "Jackfruit Curry",
        description:
          "Tender jackfruit cooked in a robust, spicy coconut gravy.",
        price: 300,
      },
    ],
  },
  {
    id: 13,
    category: "Non-Veg",
    image: Non_Vegetarian,
    subcategories: [
      {
        id: 1,
        name: "Chicken Tikka Masala",
        description: "Grilled chicken in a creamy, spiced tomato sauce.",
        price: 350,
      },
      {
        id: 2,
        name: "Lamb Rogan Josh",
        description: "Aromatic slow-cooked lamb curry with Kashmiri spices.",
        price: 400,
      },
      {
        id: 3,
        name: "Goan Fish Curry",
        description:
          "Fresh fish cooked in a tangy, spicy coconut curry from Goa.",
        price: 370,
      },
      {
        id: 4,
        name: "Butter Chicken",
        description: "Tender chicken in a rich, buttery, tomato-based gravy.",
        price: 330,
      },
      {
        id: 5,
        name: "Chicken Chettinad",
        description:
          "Fiery South Indian chicken curry made with freshly ground spices.",
        price: 340,
      },
      {
        id: 6,
        name: "Mutton Vindaloo",
        description:
          "A spicy, tangy mutton curry with vinegar, inspired by Portuguese cuisine in Goa.",
        price: 380,
      },
      {
        id: 7,
        name: "Prawn Moilee",
        description:
          "Lightly spiced, creamy coconut-based prawn curry from Kerala.",
        price: 400,
      },
    ],
  },
  {
    id: 14,
    category: "Breads",
    image: Breads,
    subcategories: [
      {
        id: 1,
        name: "Garlic Naan",
        description: "Soft, pillowy naan bread brushed with garlic butter.",
        price: 80,
      },
      {
        id: 2,
        name: "Roti",
        description: "Whole wheat flatbread, perfect for curries.",
        price: 40,
      },
      {
        id: 3,
        name: "Stuffed Paratha",
        description:
          "Flatbread stuffed with spiced potatoes, paneer, or spinach.",
        price: 100,
      },
      {
        id: 4,
        name: "Lachha Paratha",
        description: "Layered and flaky whole wheat bread.",
        price: 70,
      },
      {
        id: 5,
        name: "Cheese Naan",
        description: "Soft naan filled with gooey, melted cheese.",
        price: 110,
      },
      {
        id: 6,
        name: "Chili Cheese Kulcha",
        description:
          "Soft bread stuffed with cheese and green chili for an extra kick.",
        price: 120,
      },
    ],
  },
  {
    id: 15,
    category: "Rice & Biryani",
    image: Rice,
    subcategories: [
      {
        id: 1,
        name: "Vegetable Biryani",
        description:
          "Basmati rice with vegetables, spices, and herbs, served with raita.",
        price: 200,
      },
      {
        id: 2,
        name: "Chicken Biryani",
        description:
          "Aromatic basmati rice cooked with marinated chicken and spices.",
        price: 280,
      },
      {
        id: 3,
        name: "Lamb Biryani",
        description:
          "Fragrant rice with tender lamb pieces and delicate spices.",
        price: 350,
      },
      {
        id: 4,
        name: "Mushroom Pulao",
        description: "Fragrant rice cooked with mushrooms and mild spices.",
        price: 180,
      },
      {
        id: 5,
        name: "Jeera Rice",
        description: "Basmati rice tempered with cumin seeds.",
        price: 100,
      },
    ],
  },
  {
    id: 16,
    category: "Desserts",
    image: Desserts,
    subcategories: [
      {
        id: 1,
        name: "Gulab Jamun",
        description:
          "Milk-based dumplings soaked in saffron and cardamom-flavored syrup.",
        price: 100,
      },
      {
        id: 2,
        name: "Ras Malai",
        description: "Soft cheese patties soaked in sweet, thickened milk.",
        price: 120,
      },
      {
        id: 3,
        name: "Mango Kulfi",
        description: "Traditional Indian ice cream with fresh mango flavor.",
        price: 130,
      },
      {
        id: 4,
        name: "Chocolate Samosa",
        description:
          "Crispy pastry filled with melted chocolate—a modern twist!",
        price: 120,
      },
      {
        id: 5,
        name: "Jalebi with Rabri",
        description:
          "Crispy, syrup-soaked coils served with thickened, sweetened milk.",
        price: 150,
      },
      {
        id: 6,
        name: "Coconut Ladoo",
        description: "Sweet coconut balls with condensed milk.",
        price: 90,
      },
    ],
  },
  {
    id: 17,
    category: "Snacks",
    image: Snacks,
    subcategories: [
      {
        id: 1,
        name: "Bhel Puri",
        description:
          "Puffed rice, sev, vegetables, and tamarind sauce for a crunchy, tangy snack.",
        price: 120,
      },
      {
        id: 2,
        name: "Pav Bhaji",
        description:
          "Spicy mashed vegetable curry served with buttered bread rolls.",
        price: 150,
      },
      {
        id: 3,
        name: "Dahi Puri",
        description: "Crisp puris filled with yogurt, chutneys, and sev.",
        price: 130,
      },
      {
        id: 4,
        name: "Masala Fries",
        description: "French fries with an Indian spice twist.",
        price: 110,
      },
      {
        id: 5,
        name: "Paneer Kathi Roll",
        description: "Wrap filled with spiced paneer, onions, and chutneys.",
        price: 180,
      },
      {
        id: 6,
        name: "Chicken Frankie",
        description:
          "Grilled chicken wrapped in a soft roti with spicy chutney.",
        price: 200,
      },
    ],
  },
  {
    id: 18,
    category: "Beverages",
    image: Beverages,
    subcategories: [
      {
        id: 1,
        name: "Masala Chai",
        description: "Spiced Indian tea with milk.",
        price: 60,
      },
      {
        id: 2,
        name: "Mango Lassi",
        description: "Creamy, refreshing mango yogurt drink.",
        price: 120,
      },
      {
        id: 3,
        name: "Sweet Lassi",
        description: "Cool, sweetened yogurt drink.",
        price: 100,
      },
      {
        id: 4,
        name: "Nimbu Pani",
        description: "Indian-style lemonade with spices and mint.",
        price: 80,
      },
      {
        id: 5,
        name: "Rose Milk",
        description: "Refreshing milk flavored with rose syrup.",
        price: 100,
      },
      {
        id: 6,
        name: "Coconut Water",
        description: "Fresh and natural coconut water.",
        price: 90,
      },
    ],
  },
  {
    id: 19,
    category: "South Indian",
    image: South_Indian,
    subcategories: [
      {
        id: 1,
        name: "Masala Dosa",
        description:
          "Rice crepe filled with spiced potato, served with coconut chutney and sambar.",
        price: 180,
      },
      {
        id: 2,
        name: "Idli-Sambar",
        description: "Steamed rice cakes served with sambar and chutneys.",
        price: 120,
      },
      {
        id: 3,
        name: "Chicken Chettinad",
        description:
          "Fiery chicken curry with ground spices, native to Tamil Nadu.",
        price: 340,
      },
    ],
  },
  {
    id: 20,
    category: "Rajasthani",
    image: Rajasthani,
    subcategories: [
      {
        id: 1,
        name: "Dal Baati Churma",
        description:
          "Baked wheat balls served with lentil curry and sweet churma.",
        price: 300,
      },
      {
        id: 2,
        name: "Gatte ki Sabzi",
        description: "Gram flour dumplings in a spiced yogurt curry.",
        price: 200,
      },
      {
        id: 3,
        name: "Ker Sangri",
        description: "Rajasthani desert beans and berries cooked with spices.",
        price: 250,
      },
    ],
  },
  {
    id: 21,
    category: "Indo-Chinese Fusion",
    image: Beverages,
    subcategories: [
      {
        id: 1,
        name: "Chili Paneer",
        description:
          "Indian-style cottage cheese stir-fried with bell peppers, onions, and a spicy sauce.",
        price: 220,
      },
      {
        id: 2,
        name: "Hakka Noodles",
        description:
          "Stir-fried noodles with vegetables, soy sauce, and Indian spices.",
        price: 200,
      },
      {
        id: 3,
        name: "Manchurian",
        description: "Deep-fried vegetable balls in a tangy, spicy sauce.",
        price: 220,
      },
    ],
  },
];

const Category = ({ cart }) => {
  console.log('cart: ', cart);
  const [selectedTab, setSelectedTab] = useState([MenuItemsJson[0]]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFoodItem, setSelectedFoodItem] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  //   const [showFoodData, setshowFoodData] = useState([]);
  //   const { register, handleSubmit, reset } = useForm();

  // MenuItemsJson
  // console.log('MenuItemsJson: ', MenuItemsJson.categories);

  const tableOptions = ["1", "2", "3", "4"];
  const orderTypes = ["Dine-In", "Delivery", "Pick-Up"];
  const filter = ["Specials", "Frequently ordered", "Veg", "Non-Veg"];
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
      // image: selectedFoodItem?.image,
      category: category,
      tableNo: cart?.TableNo,
      status: "open",
      quantity: 1,
      price: selectedFoodItem?.price,
      amount: 1,
    };
    console.log("Payload:", payload);
    // setshowFoodData(selectedFoodItem);
    dispatch(add(payload));
    closeModal();
  };

  const handleIncrementQuantity = (item) => {
    dispatch(increment(item));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrement(id?.id));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(remove(id?.id));
  };
  const handlePayment = (pay) => {
    setIsOpen(true);
    dispatch(CheckPaymentStatus(pay));
  };

  let selectedFoodItems = cart.itemsInCart.filter(
    (item) => item.tableNo === cart.TableNo
  );

  const SetValue = (value) => {
    let a = MenuItemsJson?.categories?.filter((item) => {
      return item.id === value;
    });
    console.log("a:", a);
    const filteredItems = MenuItemsJson?.categories?.filter(
      (item) => item.id === value
    );
    console.log("filteredItems: ", filteredItems[0].subcategories);
  };

  return (
    <>
      <Navbar />

      {/* Table Status Modal Button */}
      <TableStatusModal />

      <div className=" border-solid border-4 px-2 pb-4 mx-3 border-[#544013]">
        <p className="text-xl font-bold text-[#544013]">Generate Order</p>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-7 border-solid border-2 border-black rounded-2xl bg-[#ede9dd]">
            <div className="flex justify-between py-1">
              {/* Search bar */}
              <div class="text-black flex justify-around items-center mx-2">
                <div class="overflow-hidden flex justify-between border-solid border-2 w-full border-black rounded-3xl bg-[#f6f6e9]">
                  <input
                    type="text"
                    class="px-2 py-0.5 tracking-wide w-full bg-[#f6f6e9]"
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
              <DropdownButton
                options={filter}
                className="w-20"
                buttonLabel="Filters"
              />
              
            </div>
            <div className="flex">
              {/* Side Tabs */}
              <div className="w-1/4 h-[26rem] font-bold overflow-auto bg-[#ede9dd] rounded-2xl px-4 py-2">
                {MenuItemsJson.map((tab) => (
                  <button
                    key={tab.name}
                    className={`block text-left text-base truncate w-full my-2 shadow-lg py-1 px-2 ${
                      tab.category === selectedTab
                        ? "bg-[#d79555] border-solid border-2 border-black text-white"
                        : "bg-white"
                    }`}
                    onClick={() =>
                      setSelectedTab(
                        MenuItemsJson?.filter((item) => item.id === tab?.id)
                      )
                    }
                  >
                    <img
                      src={tab.image}
                      alt={tab.name}
                      className="h-10 w-h-10 inline-block mr-2"
                    />
                    {tab.category}
                  </button>
                ))}
              </div>

              {/* Main Content */}
              <div className=" p-2 h-[26rem] overflow-auto">
                <div className="grid grid-cols-2 gap-4">
                  {selectedTab[0]?.subcategories?.map((food) => (
                    <button
                      key={food?.id}
                      className="p-2 bg-white border rounded-2xl shadow-2xl"
                      onClick={() => openModal(food)}
                    >
                      <div className="flex items-center justify-around">
                        <img
                          src={Appetizers}
                          className="h-16 w-h-16 rounded-full "
                          alt="Loading"
                        />
                        <div className="ms-2 w-full text-start">
                          <p className="text-[#544013] font-bold text-lg">
                            {food?.name}
                          </p>
                          {/* <div className="flex justify-between items-center my-3"> */}
                          <p className="text-base font-bold text-red-800">
                            ₹ {food?.price}/-
                          </p>
                          <div className="text-end">
                            <Button
                              btn_class="border-solid border-2 border-black rounded-2xl bg-[#cd3f14] text-white uppercase font-bold px-4 py-1"
                              btn_type="button"
                              title="Add"
                            />
                          </div>
                        </div>
                        {/* </div> */}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* display */}
          <div className="col-span-5 bg-[#ede9dd] border-solid border-2 border-black rounded-2xl">
            <div className="flex items-center justify-evenly my-2">
              <DropdownButton options={orderTypes} buttonLabel="Order Type" />

              <DropdownButton options={tableOptions} buttonLabel="Table No." />

              <p className="text-xl text-[#544013] font-bold">
                Order No. : 123
              </p>
            </div>
            <hr className="p-0.5 bg-black my-0.5" />

            {/* Table View */}
            <div class="grid grid-cols-1 grid-rows-3">
              <div className="row-span-2 h-72 overflow-auto">
                <table class="w-full row-span-2 text-sm text-center text-[#544013]">
                  <thead class="text-lg text-[#544013] bg-[#ede9dd]">
                    <tr>
                      <th scope="col" class="px-6 text-base font-bold">
                        Item
                      </th>
                      <th scope="col" class="px-6 text-base font-bold">
                        Price
                      </th>
                      <th scope="col" class="px-6 text-base font-bold">
                        Qty.
                      </th>

                      <th scope="col" class="px-6 text-base font-bold">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#ede9dd]">
                    {selectedFoodItems?.map((items, index) => (
                      <tr className="">
                        <th scope="row" class="py-2 px-6 font-light">
                          {items?.food}
                        </th>
                        <td class="font-light py-2 px-6">{items.price}</td>
                        <td class="flex items-center justify-center font-normal py-2 px-6">
                          <FontAwesomeIcon
                            className=" rounded-full text-red-500 text-lg cursor-pointer bg-white"
                            onClick={() => handleDecrementQuantity(items)}
                            icon={faCircleMinus}
                          />
                          <div className="mx-2">{items?.quantity}</div>
                          <FontAwesomeIcon
                            className=" rounded-full bg-white text-green-500 text-lg cursor-pointer"
                            onClick={() => handleIncrementQuantity(items)}
                            icon={faCirclePlus}
                          />
                          {/* <span
                            className="px-2 text-white rounded-full text-base bg-red-600 cursor-pointer"
                            onClick={() => handleRemoveFromCart(items)}
                          > */}
                          <FontAwesomeIcon
                            className="text-red-700 rounded-full text-base ms-3 bg-white cursor-pointer"
                            onClick={() => handleRemoveFromCart(items)}
                            icon={faTrashCan}
                          />
                          {/* </span> */}
                        </td>
                        <td class="font-normal py-2 px-6">{items?.price * items?.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="row-start-3">
                <ul>
                  <li className="mx-2 bg-[#f6f6e9] w-32 text-sm font-bold text-[#544013] border-2 border-[#d79555] rounded-lg py-1 text-center">
                    Total Items: {cart?.totalCount}
                  </li>
                  <li className="mx-7 my-0.5 text-base font-bold flex justify-between text-[#544013]">
                    <span>Sub Total:</span>
                    <span className="mx-7">{cart?.totalCost }</span>
                  </li>
                  <div className="flex">
                    <SplitBill />
                    <ApplyOffer />
                  </div>
                  {/* <Link to="/payment" className="mx-3"> */}
                  {/* <Button
                    title="PAYMENT"
                    onClick={() => handlePayment(cart)}
                    btn_type="button"
                    btn_class="border-solid border-4 border-[#544013] rounded-xl my-2 bg-[#f6d8ba] px-3 py-1 uppercase"
                  /> */}
                  {/* </Link> */}
                  <div className=" my-0.5">
                    <form action="">
                      <hr className="border-dashed border-1 border-black" />
                      <div className="flex space-x-4 justify-evenly py-0.5">
                        {["Cash", "UPI", "Card"].map((method) => (
                          <label
                            key={method}
                            className="flex items-center font-bold"
                          >
                            <input
                              type="checkbox"
                              value={method}
                              checked={paymentMethod === method}
                              onChange={() => setPaymentMethod(method)}
                              className="mr-2 rounded-full"
                            />
                            {method}
                          </label>
                        ))}
                      </div>
                      <hr className="border-dashed border-1 border-black" />
                    </form>
                  </div>
                </ul>
                <div className="flex justify-around my-1">
                  <NavLink to="/chef">
                    <Button
                      title="Save & Generate KOT"
                      btn_type="button"
                      btn_class="border-solid border-2 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-0.5 text-sm font-bold uppercase"
                    />
                  </NavLink>
                 <NavLink to="/payment">
                 <Button
                    title="Save & Print Bill"
                    btn_type="button"
                    btn_class="border-solid border-2 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-0.5 text-sm font-bold uppercase"
                  />
                 </NavLink>
                  {/* <Button
                    title="Save & Generate Reciept"
                    btn_type="button"
                    btn_class="border-solid border-2 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-0.5 text-sm font-bold uppercase"
                  /> */}
                  {/* <Button
                    title="x"
                    btn_type="button"
                    btn_class="border-2 border-black border-solid rounded-full bg-red-500 text-black px-3"
                  /> */}
                </div>
              </div>
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
        {/* <PaymentModal
          isOpen={isOpen}
          closeModal={closeModal}
          selectedFoodItem={selectedFoodItem}
          onSubmit={onSubmit}
        /> */}
      </div>
      <StatusFooter />
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {})(Category);

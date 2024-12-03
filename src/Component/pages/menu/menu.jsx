import React, { useState,useEffect } from "react";
import Navbar from "../../Common/Navbar/navbar";
import DropdownButton from "../../Common/dropdownButton/dropdown";
import { SetTable } from "../../Common/Redux/Category/categorySlice";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { FoodMenuAPI } from "../../Common/APIs/api";

// import Button from "../../Common/Button/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Images
// import Food1 from "../../assets/Images/menu/1.svg";
import Snacks from "../../assets/Images/menu/snacks.svg";
import Desserts from "../../assets/Images/menu/desserts.svg";
import Appetizers from "../../assets/Images/menu/Appetizers.svg";
import Beverages from "../../assets/Images/menu/beverages.svg";
import Rice from "../../assets/Images/menu/rice-and-biryani.svg";
import Breads from "../../assets/Images/menu/breads.svg";
import Veg from "../../assets/Images/menu/veg.svg";
import NonVeg from "../../assets/Images/menu/non-veg.svg";
import Rajasthani from "../../assets/Images/menu/rajasthani.svg";
import SouthIndian from "../../assets/Images/menu/South indian.svg";
// import IndoChinese from "../../assets/Images/menu/indo-chinese.svg";
import NewOrder from "../../assets/Images/new order.svg";
import StatusFooter from "../../Common/Footer/statusFooter";
// import MenuSetting from "../../Common/Modal/menuSettingModal";
import MenuImg from "../../assets/Images/menu/menu-page.svg";
// import TableStatusModal from "../../Common/Modal/tableStatusModal";

// let MenuItemsJson = [
//   {
//     id: 11,
//     category: "Appetizers",
//     image: Appetizers,
//     subcategories: [
//       {
//         id: 1,
//         name: "Samosa",
//         description:
//           "Crispy pastry filled with spiced potatoes, peas, and herbs.",
//         price: 80,
//       },
//       {
//         id: 2,
//         name: "Paneer Tikka",
//         description:
//           "Marinated cottage cheese cubes grilled to perfection with herbs.",
//         price: 250,
//       },
//       {
//         id: 3,
//         name: "Chicken Seekh Kebab",
//         description: "Spiced minced chicken skewers cooked in a tandoor.",
//         price: 300,
//       },
//       {
//         id: 4,
//         name: "Aloo Tikki Chaat",
//         description:
//           "Potato patties topped with yogurt, tamarind, and mint chutney.",
//         price: 150,
//       },
//       {
//         id: 5,
//         name: "Lamb Galouti Kebab",
//         description:
//           "Melt-in-your-mouth minced lamb kebabs with a rich blend of spices.",
//         price: 400,
//       },
//       {
//         id: 6,
//         name: "Avocado Papdi Chaat",
//         description:
//           "Crispy wafers topped with mashed avocado, spiced yogurt, and chutneys—a modern twist on traditional chaat.",
//         price: 180,
//       },
//       {
//         id: 7,
//         name: "Chicken 65",
//         description:
//           "Spicy and tangy fried chicken with South Indian spices, curry leaves, and yogurt.",
//         price: 220,
//       },
//       {
//         id: 8,
//         name: "Kurkuri Bhindi",
//         description:
//           "Crispy, spiced okra fries for a crunchy and flavorful bite.",
//         price: 130,
//       },
//     ],
//   },
//   {
//     id: 12,
//     category: "Veg",
//     image: Veg,
//     subcategories: [
//       {
//         id: 1,
//         name: "Paneer Butter Masala",
//         description:
//           "Cottage cheese in a rich, creamy tomato sauce with butter.",
//         price: 300,
//       },
//       {
//         id: 2,
//         name: "Chole Bhature",
//         description: "Spiced chickpeas served with fluffy fried bread.",
//         price: 220,
//       },
//       {
//         id: 3,
//         name: "Baingan Bharta",
//         description:
//           "Roasted and mashed eggplant with onions, tomatoes, and spices.",
//         price: 200,
//       },
//       {
//         id: 4,
//         name: "Palak Paneer",
//         description: "Spinach and paneer cubes cooked with creamy spices.",
//         price: 280,
//       },
//       {
//         id: 5,
//         name: "Stuffed Bell Peppers",
//         description:
//           "Bell peppers filled with spiced potatoes, peas, and cottage cheese, baked to perfection.",
//         price: 260,
//       },
//       {
//         id: 6,
//         name: "Jackfruit Curry",
//         description:
//           "Tender jackfruit cooked in a robust, spicy coconut gravy.",
//         price: 300,
//       },
//     ],
//   },
//   {
//     id: 13,
//     category: "Non-Veg",
//     image: NonVeg,
//     subcategories: [
//       {
//         id: 1,
//         name: "Chicken Tikka Masala",
//         description: "Grilled chicken in a creamy, spiced tomato sauce.",
//         price: 350,
//       },
//       {
//         id: 2,
//         name: "Lamb Rogan Josh",
//         description: "Aromatic slow-cooked lamb curry with Kashmiri spices.",
//         price: 400,
//       },
//       {
//         id: 3,
//         name: "Goan Fish Curry",
//         description:
//           "Fresh fish cooked in a tangy, spicy coconut curry from Goa.",
//         price: 370,
//       },
//       {
//         id: 4,
//         name: "Butter Chicken",
//         description: "Tender chicken in a rich, buttery, tomato-based gravy.",
//         price: 330,
//       },
//       {
//         id: 5,
//         name: "Chicken Chettinad",
//         description:
//           "Fiery South Indian chicken curry made with freshly ground spices.",
//         price: 340,
//       },
//       {
//         id: 6,
//         name: "Mutton Vindaloo",
//         description:
//           "A spicy, tangy mutton curry with vinegar, inspired by Portuguese cuisine in Goa.",
//         price: 380,
//       },
//       {
//         id: 7,
//         name: "Prawn Moilee",
//         description:
//           "Lightly spiced, creamy coconut-based prawn curry from Kerala.",
//         price: 400,
//       },
//     ],
//   },
//   {
//     id: 14,
//     category: "Breads",
//     image: Breads,
//     subcategories: [
//       {
//         id: 1,
//         name: "Garlic Naan",
//         description: "Soft, pillowy naan bread brushed with garlic butter.",
//         price: 80,
//       },
//       {
//         id: 2,
//         name: "Roti",
//         description: "Whole wheat flatbread, perfect for curries.",
//         price: 40,
//       },
//       {
//         id: 3,
//         name: "Stuffed Paratha",
//         description:
//           "Flatbread stuffed with spiced potatoes, paneer, or spinach.",
//         price: 100,
//       },
//       {
//         id: 4,
//         name: "Lachha Paratha",
//         description: "Layered and flaky whole wheat bread.",
//         price: 70,
//       },
//       {
//         id: 5,
//         name: "Cheese Naan",
//         description: "Soft naan filled with gooey, melted cheese.",
//         price: 110,
//       },
//       {
//         id: 6,
//         name: "Chili Cheese Kulcha",
//         description:
//           "Soft bread stuffed with cheese and green chili for an extra kick.",
//         price: 120,
//       },
//     ],
//   },
//   {
//     id: 15,
//     category: "Rice & Biryanis",
//     image: Rice,
//     subcategories: [
//       {
//         id: 1,
//         name: "Vegetable Biryani",
//         description:
//           "Basmati rice with vegetables, spices, and herbs, served with raita.",
//         price: 200,
//       },
//       {
//         id: 2,
//         name: "Chicken Biryani",
//         description:
//           "Aromatic basmati rice cooked with marinated chicken and spices.",
//         price: 280,
//       },
//       {
//         id: 3,
//         name: "Lamb Biryani",
//         description:
//           "Fragrant rice with tender lamb pieces and delicate spices.",
//         price: 350,
//       },
//       {
//         id: 4,
//         name: "Mushroom Pulao",
//         description: "Fragrant rice cooked with mushrooms and mild spices.",
//         price: 180,
//       },
//       {
//         id: 5,
//         name: "Jeera Rice",
//         description: "Basmati rice tempered with cumin seeds.",
//         price: 100,
//       },
//     ],
//   },
//   {
//     id: 16,
//     category: "Desserts",
//     image: Desserts,
//     subcategories: [
//       {
//         id: 1,
//         name: "Gulab Jamun",
//         description:
//           "Milk-based dumplings soaked in saffron and cardamom-flavored syrup.",
//         price: 100,
//       },
//       {
//         id: 2,
//         name: "Ras Malai",
//         description: "Soft cheese patties soaked in sweet, thickened milk.",
//         price: 120,
//       },
//       {
//         id: 3,
//         name: "Mango Kulfi",
//         description: "Traditional Indian ice cream with fresh mango flavor.",
//         price: 130,
//       },
//       {
//         id: 4,
//         name: "Chocolate Samosa",
//         description:
//           "Crispy pastry filled with melted chocolate—a modern twist!",
//         price: 120,
//       },
//       {
//         id: 5,
//         name: "Jalebi with Rabri",
//         description:
//           "Crispy, syrup-soaked coils served with thickened, sweetened milk.",
//         price: 150,
//       },
//       {
//         id: 6,
//         name: "Coconut Ladoo",
//         description: "Sweet coconut balls with condensed milk.",
//         price: 90,
//       },
//     ],
//   },
//   {
//     id: 17,
//     category: "Snacks",
//     image: Snacks,
//     subcategories: [
//       {
//         id: 1,
//         name: "Bhel Puri",
//         description:
//           "Puffed rice, sev, vegetables, and tamarind sauce for a crunchy, tangy snack.",
//         price: 120,
//       },
//       {
//         id: 2,
//         name: "Pav Bhaji",
//         description:
//           "Spicy mashed vegetable curry served with buttered bread rolls.",
//         price: 150,
//       },
//       {
//         id: 3,
//         name: "Dahi Puri",
//         description: "Crisp puris filled with yogurt, chutneys, and sev.",
//         price: 130,
//       },
//       {
//         id: 4,
//         name: "Masala Fries",
//         description: "French fries with an Indian spice twist.",
//         price: 110,
//       },
//       {
//         id: 5,
//         name: "Paneer Kathi Roll",
//         description: "Wrap filled with spiced paneer, onions, and chutneys.",
//         price: 180,
//       },
//       {
//         id: 6,
//         name: "Chicken Frankie",
//         description:
//           "Grilled chicken wrapped in a soft roti with spicy chutney.",
//         price: 200,
//       },
//     ],
//   },
//   {
//     id: 18,
//     category: "Beverages",
//     image: Beverages,
//     subcategories: [
//       {
//         id: 1,
//         name: "Masala Chai",
//         description: "Spiced Indian tea with milk.",
//         price: 60,
//       },
//       {
//         id: 2,
//         name: "Mango Lassi",
//         description: "Creamy, refreshing mango yogurt drink.",
//         price: 120,
//       },
//       {
//         id: 3,
//         name: "Sweet Lassi",
//         description: "Cool, sweetened yogurt drink.",
//         price: 100,
//       },
//       {
//         id: 4,
//         name: "Nimbu Pani",
//         description: "Indian-style lemonade with spices and mint.",
//         price: 80,
//       },
//       {
//         id: 5,
//         name: "Rose Milk",
//         description: "Refreshing milk flavored with rose syrup.",
//         price: 100,
//       },
//       {
//         id: 6,
//         name: "Coconut Water",
//         description: "Fresh and natural coconut water.",
//         price: 90,
//       },
//     ],
//   },
//   {
//     id: 19,
//     category: "South Indian",
//     image: SouthIndian,
//     subcategories: [
//       {
//         id: 1,
//         name: "Masala Dosa",
//         description:
//           "Rice crepe filled with spiced potato, served with coconut chutney and sambar.",
//         price: 180,
//       },
//       {
//         id: 2,
//         name: "Idli-Sambar",
//         description: "Steamed rice cakes served with sambar and chutneys.",
//         price: 120,
//       },
//       {
//         id: 3,
//         name: "Chicken Chettinad",
//         description:
//           "Fiery chicken curry with ground spices, native to Tamil Nadu.",
//         price: 340,
//       },
//     ],
//   },
//   {
//     id: 20,
//     category: "Rajasthani",
//     image: Rajasthani,
//     subcategories: [
//       {
//         id: 1,
//         name: "Dal Baati Churma",
//         description:
//           "Baked wheat balls served with lentil curry and sweet churma.",
//         price: 300,
//       },
//       {
//         id: 2,
//         name: "Gatte ki Sabzi",
//         description: "Gram flour dumplings in a spiced yogurt curry.",
//         price: 200,
//       },
//       {
//         id: 3,
//         name: "Ker Sangri",
//         description: "Rajasthani desert beans and berries cooked with spices.",
//         price: 250,
//       },
//     ],
//   },
//   {
//     id: 21,
//     category: "Indo-Chinese Fusion",
//     image: Beverages,
//     subcategories: [
//       {
//         id: 1,
//         name: "Chili Paneer",
//         description:
//           "Indian-style cottage cheese stir-fried with bell peppers, onions, and a spicy sauce.",
//         price: 220,
//       },
//       {
//         id: 2,
//         name: "Hakka Noodles",
//         description:
//           "Stir-fried noodles with vegetables, soy sauce, and Indian spices.",
//         price: 200,
//       },
//       {
//         id: 3,
//         name: "Manchurian",
//         description: "Deep-fried vegetable balls in a tangy, spicy sauce.",
//         price: 220,
//       },
//     ],
//   },

//   {
//     id: 21,
//     category: "Pizza  ",
//     image: Appetizers,
//     subcategories: [
//       {
//         id: 1,
//         name: "Chili Paneer",
//         description:
//           "Indian-style cottage cheese stir-fried with bell peppers, onions, and a spicy sauce.",
//         price: 220,
//       },
//       {
//         id: 2,
//         name: "Hakka Noodles",
//         description:
//           "Stir-fried noodles with vegetables, soy sauce, and Indian spices.",
//         price: 200,
//       },
//       {
//         id: 3,
//         name: "Manchurian",
//         description: "Deep-fried vegetable balls in a tangy, spicy sauce.",
//         price: 220,
//       },
//     ],
//   },
// ];

const Menu = () => {
  const [MenuItemsJson, setMenuItemsJson] = useState([]);

  const fetchMenu = async () => {
    let menu = await FoodMenuAPI();
    // console.log("menu: ", menu?.data?.data);
    setMenuItemsJson(menu?.data?.data);
    setFilteredOptions(menu?.data?.data[0].subcategories);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const [filteredOptions, setFilteredOptions] = useState([]);
  // console.log("filteredOptions: ", filteredOptions);
  const [query, setQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState([]);
  const filter = [
    "Specials",
    "Frequently Ordered",
    "Veg",
    "Non-Veg",
    "Cuisines",
  ];

  const dispatch = useDispatch();

  const SetTableOnCategory = () => {
    let setTableNull = 0;
    dispatch(SetTable(setTableNull));
  };

  // Filter MenuItemsData based on the active category
  // const filteredMenuItems = activeCategory
  //   ? MenuItemsData.filter((item) => item.category === activeCategory)
  //   : MenuItemsData;

  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Show three cards
    slidesToScroll: 1, // Slide one card at a time
    rows: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const options = [];
  MenuItemsJson?.map((item) => {
    item?.subcategories?.map((foodName) => options?.push(foodName));
  });

  // Function to filter options based on input query
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      const filtered = options?.filter((option) =>
        option?.name?.toLowerCase()?.includes(value?.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions(MenuItemsJson[0]?.subcategories);
      // console.log(
      //   "MenuItemsJson[0]?.subcategories[0]: ",
      //   MenuItemsJson[0]?.subcategories
      // );
    }
  };

  // Side Nav Functionality
  const [moveSideNav, setmoveSideNav] = useState(true);
  const SideNavFunctionality = () => {
    setmoveSideNav(!moveSideNav);
  };

  // Function to handle clicking on an option
  // const handleOptionClick = (option) => {
  //   console.log("option: ", option);
  //   // setIsOpen(true)
  //   setSelectedFoodItem(option);
  //   console.log("SelectedFoodItem: ", selectedFoodItem);
  //   setQuery(""); // Reset search bar
  //   setFilteredOptions(); // Hide suggestions
  // };

  return (
    <>
      <Navbar SideNavFunctionality={SideNavFunctionality} />
      {/* <TableStatusModal /> */}
      <div className={`px-5 ${moveSideNav ? "ms-16" : "ms-0"}`}>
        <div className="flex items-center">
          <p className="text-xl font-bold uppercase me-1">Menu</p>
          <img src={MenuImg} className="h-8" alt="Loading" />
        </div>

        <div className="flex justify-between items-center">
          {/* Search bar */}
          <div class="text-black flex justify-around items-center">
            <div class="overflow-hidden flex justify-between border-solid border-2 w-full border-black rounded-3xl bg-[#f6f6e9]">
              <input
                type="text"
                class="ps-5 py-1 w-full bg-[#f6f6e9] focus-visible:outline-0"
                placeholder="Search items from menu"
                value={query}
                onChange={handleSearch}
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

              {/* Suggestions dropdown */}
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
            {/* <MenuSetting /> */}
          </div>
        </div>

        {/* Menu Options */}

        <div className="slider-container">
          <Slider {...settings}>
            {/* <div className="grid grid-cols-6 gap-2 my-1"> */}
            {MenuItemsJson?.map((tab) => (
              <div key={tab.name}>
                <a
                  href="#"
                  onClick={() => {
                    setFilteredOptions(tab?.subcategories);
                      }}
                  className={`flex items-center justify-center ms-2 mt-1 py-1 border-solid border-2 border-[#544013] rounded-xl ${
                    tab.category === selectedTab
                      ? "bg-[#d79555] text-white"
                      : "bg-[#ede9dd]"
                  }`}
                >
                  <img src={tab.image} className="h-8 me-2" alt="Loading" />
                  <p className="text-lg font-bold tracking-wide uppercase truncate">
                    {tab.category}
                  </p>
                </a>
              </div>
            ))}
            {/* </div> */}
          </Slider>
        </div>

        {/* Menu Items Card */}
        <div className="grid grid-cols-5 gap-3 mt-1">
          {filteredOptions?.map((menu, index) => (
            <div
              key={index}
              className="bg-white border-solid border-2 border-[#544013] rounded-xl flex items-center p-1"
            >
              <img src={Appetizers} className="h-12 me-2" alt="Loading" />
              <div>
                <p className="font-sans uppercase text-lg tracking-wide font-semibold">
                  {menu?.name}
                </p>
                <p className="font-sans text-sm tracking-wide">
                  {menu?.description}
                </p>
                <p className="text-green-500 text-lg font-sans mt-2">
                  ₹ {menu?.price}/-
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <StatusFooter />
    </>
  );
};
export default Menu;

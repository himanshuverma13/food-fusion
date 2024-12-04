import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import footerBot from "../../assets/Images/skill-bot.svg";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setChatBotTableOrder } from "../Redux/ChatBotPopup/chatBotPopupSlice";
import { add } from "../Redux/Category/categorySlice";
import { toast } from "react-toastify";

let MenuItemsJson = [
  {
    id: 11,
    category: "Appetizers",
    //   image: Appetizers,
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
    //   image: Veg,
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
    //   image: NonVeg,
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
    //   image: Breads,
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
    category: "Rice & Biryanis",
    //   image: Rice,
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
    //   image: Desserts,
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
    //   image: Snacks,
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
    //   image: Beverages,
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
    //   image: SouthIndian,
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
    //   image: Rajasthani,
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
    //   image: Beverages,
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

  {
    id: 21,
    category: "Pizza  ",
    //   image: Appetizers,
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
const ChatBot = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDropdownOpen(false);
    }
  };

  // --------------------
  const availableDishes = [];
  MenuItemsJson?.map((t) => {
    t?.subcategories?.map((i) => {
      availableDishes.push(i?.name?.toLowerCase());
    });
  });

  const dispatch = useDispatch();

  // List of available Tables
  const [tables, setTables] = useState([
    { id: 1, color: "white", order: null },
    { id: 2, color: "white", order: null },
    { id: 3, color: "white", order: null },
    { id: 4, color: "white", order: null },
    { id: 5, color: "white", order: null },
    { id: 6, color: "white", order: null },
    { id: 7, color: "white", order: null },
    { id: 8, color: "white", order: null },
    { id: 9, color: "white", order: null },
    { id: 10, color: "white", order: null },
    { id: 11, color: "white", order: null },
    { id: 12, color: "white", order: null },
    { id: 13, color: "white", order: null },
    { id: 14, color: "white", order: null },
    { id: 15, color: "white", order: null },
    { id: 16, color: "white", order: null },
  ]);
  const [inputValue, setInputValue] = useState("");

  // filter input dish name with json

  const filterDishName = (dish) => {
    const value = MenuItemsJson.flatMap((category) =>
      category.subcategories.filter(
        (item) => item.name?.toLowerCase() === dish?.toLowerCase()
      )
    );
    return value;
  };

  // const handleFilterSubmit = () => {
  //   // Split the input into table number and dish name
  //   const spaceIndex = inputValue.indexOf(" "); // Find the first space
  //   if (spaceIndex === -1) {
  //     alert(
  //       "Invalid input! Use format 'tableNumber dishName' (e.g., '1 Pizza Supreme')"
  //     );
  //     return;
  //   }

  //   const tableNumberStr = inputValue.slice(0, spaceIndex).trim(); // Extract the table number
  //   const dishName = inputValue.slice(spaceIndex + 1).trim(); // Extract the rest as the dish name
  //   const tableNumber = parseInt(tableNumberStr);

  //   // Validate table number and dish name
  //   if (
  //     isNaN(tableNumber) ||
  //     tableNumber < 1 ||
  //     tableNumber > tables.length ||
  //     !dishName ||
  //     dishName === ""
  //   ) {
  //     alert(
  //       "Invalid input! Use format 'tableNumber dishName' (e.g., '1 Pizza Supreme')"
  //     );
  //     return;
  //   }

  //   // Check if the dish is available
  //   if (!availableDishes.includes(dishName?.toLowerCase())) {
  //     alert(`Sorry, ${dishName} is not available!`);
  //     return;
  //   }

  //   // Log the selected table number and dish to the console
  //   const payload = {
  //     customer_table: tableNumber,
  //     dishName: dishName,
  //     customer_status: "Table_Order",
  //   };
  //   console.log("payload: ", payload);
  //   dispatch(setChatBotTableOrder(payload));

  //   // Update table with the dish and change the color to red
  //   setTables((prevTables) =>
  //     prevTables.map((table) =>
  //       table.id === tableNumber
  //         ? { ...table, color: "red", order: dishName }
  //         : table
  //     )
  //   );
  //   let filterObject = filterDishName(dishName);
  //   console.log("filterObject: ", filterObject);
  //   let filterOrder = {
  //     id: filterObject[0]?.id,
  //     food: filterObject[0]?.name,
  //     // image: selectedFoodItem?.image,
  //     // category: category,
  //     // comment,
  //     tableNo: tableNumber,
  //     status: "open",
  //     quantity: 1,
  //     price: filterObject[0]?.price,
  //     amount: 1,
  //   };

  //   dispatch(add(filterOrder));

  //   setInputValue(""); // Reset the input field
  // };

  const handleFilterSubmit = () => {
    // Split the input into table number and dish name
    const spaceIndex = inputValue.indexOf(" "); // Find the first space
    const tableNumberStr =
      spaceIndex === -1
        ? inputValue.trim()
        : inputValue.slice(0, spaceIndex).trim(); // Extract the table number
    const dishName =
      spaceIndex === -1 ? null : inputValue.slice(spaceIndex + 1).trim(); // Extract the rest as the dish name
    const tableNumber = parseInt(tableNumberStr);

    // Validate table number
    if (isNaN(tableNumber) || tableNumber < 1 || tableNumber > tables.length) {
      alert(
        "Invalid table number! Enter a valid table number (e.g., '1' or '1 Samosa')."
      );
      return;
    }

    // If no dish name is provided, just book the table
    if (!dishName || dishName === "") {
      // Update the table color to yellow to indicate it's reserved
      setTables((prevTables) =>
        prevTables.map((table) =>
          table.id === tableNumber
            ? { ...table, color: "yellow", order: "Reserved" }
            : table
        )
      );

      const payload = {
        customer_table: tableNumber,
        dishName: null,
        customer_status: "Table_Order",
      };
      // console.log("payload: ", payload);
      dispatch(setChatBotTableOrder(payload));

      setInputValue(""); // Reset the input field
      toast.success("Table Booked Successful", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    // Check if the dish is available
    if (!availableDishes.includes(dishName?.toLowerCase())) {
      alert(`Sorry, ${dishName} is not available!`);
      return;
    }

    // Log the selected table number and dish to the console
    const payload = {
      customer_table: tableNumber,
      dishName: dishName,
      customer_status: "Table_Order",
    };
    // console.log("payload: ", payload);
    dispatch(setChatBotTableOrder(payload));

    // Update table with the dish and change the color to red
    setTables((prevTables) =>
      prevTables.map((table) =>
        table.id === tableNumber
          ? { ...table, color: "red", order: dishName }
          : table
      )
    );
    let filterObject = filterDishName(dishName);
    // console.log("filterObject: ", filterObject);
    let filterOrder = {
      id: filterObject[0]?.id,
      food: filterObject[0]?.name,
      tableNo: tableNumber,
      status: "open",
      quantity: 1,
      price: filterObject[0]?.price,
      amount: 1,
    };

    dispatch(add(filterOrder));
    toast.success("Table Booked with Order Successful", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setInputValue(""); // Reset the input field
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsDropdownOpen(false);
      handleFilterSubmit();
    }
  };

  return (
    <div
      className="relative inline-block"
      tabIndex={0} // Make the div focusable
      onBlur={handleBlur} // Handle blur to detect when the dropdown loses focus
    >
      <div onClick={toggleDropdown} className="relative cursor-pointer">
        <img src={footerBot} className="h-20" alt="loading" />
      </div>
      {isDropdownOpen && (
        <div
          className="absolute z-20 right-0 mb-2 h-80 w-64 rounded-md bg-[#e8e8d7] py-1 text-base border-2 border-black shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          style={{ bottom: "100%" }} // This positions the dropdown above the button
        >
          <div className="p-2">
            <div>
              <input
                type="text"
                id="name"
                placeholder="ex : 1 Samosa"
                className="w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

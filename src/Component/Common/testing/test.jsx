// // import React, { useState } from "react";
// // import { connect, useDispatch } from "react-redux";
// // import {
// //   add,
// //   CheckPaymentStatus,
// //   decrement,
// //   increment,
// //   remove,
// // } from "../../Common/Redux/Category/categorySlice";
// // import Button from "../../Common/Button/button";
// // import { Link, NavLink } from "react-router-dom";
// // import Navbar from "../../Common/Navbar/navbar";
// // import StatusFooter from "../../Common/Footer/statusFooter";
// // import CategoryModal from "../../Common/Modal/categoryModal";
// // // import MenuItemsJson from '../../assets/Json/menuItems'

// // // Images
// // import Appetizers from "../../assets/Images/menu/Appetizers.svg";
// // import check from '../../assets/Images/category/foodItems/Coconut water - CW08.svg'
// // import Vegetarian from "../../assets/Images/menu/veg.svg";
// // import Non_Vegetarian from "../../assets/Images/menu/non-veg.svg";
// // import Breads from "../../assets/Images/menu/breads.svg";
// // import Rice from "../../assets/Images/menu/rice-and-biryani.svg";
// // import Desserts from "../../assets/Images/menu/desserts.svg";
// // import Snacks from "../../assets/Images/menu/snacks.svg";
// // import Beverages from "../../assets/Images/menu/beverages.svg";
// // import South_Indian from "../../assets/Images/menu/South indian.svg";
// // import Rajasthani from "../../assets/Images/menu/rajasthani.svg";
// // // import IndoChinese from '../../assets/Images/menu/indoChinese.svg'

// // // food items images
// // import Samosa from "../../assets/Images/category/foodItems/samosa - SM01.svg"
// // import Paneer_Tikka from "../../assets/Images/category/foodItems/paneer tikka - PT01.svg"
// // import Chicken_Seekh_Kebab from "../../assets/Images/category/foodItems/chicken seekh kebab - CSK01.svg"
// // import Aloo_Tikki_Chaat from "../../assets/Images/category/foodItems/aloo tikki chaat - ATC01.svg"
// // import Lamb_Galouti_Kebab from "../../assets/Images/category/foodItems/lamb galouti kebab - LGK01.svg"
// // import Avocado_Papdi_Chaat from "../../assets/Images/category/foodItems/Avacado papdi chaat - APC01.svg"
// // import Chicken_65 from "../../assets/Images/category/foodItems/Chicken 65 -  C6501.svg"
// // import Kurkuri_Bhindi from "../../assets/Images/category/foodItems/Kurkuri bhindi - KB01.svg"
// // import Paneer_Butter_Masala from "../../assets/Images/category/foodItems/Paneer butter masala - PBM02.svg"
// // import Chole_Bhature from "../../assets/Images/category/foodItems/Chole bhature - CB02.svg"
// // import Baingan_Bharta from "../../assets/Images/category/foodItems/Baigan bharta - BB02.svg"
// // import Palak_Paneer from "../../assets/Images/category/foodItems/Palak paneer - PP02.svg"
// // import Stuffed_Bell_Peppers from "../../assets/Images/category/foodItems/Stuffed bell peppers - SBP02.svg"
// // import Jackfruit_Curry from "../../assets/Images/category/foodItems/jackfruit curry - JK02.svg"
// // import Chicken_Tikka_Masala from "../../assets/Images/category/foodItems/chickhen tikka masala - CTM03.svg"
// // import Lamb_Rogan_Josh from "../../assets/Images/category/foodItems/Lamb rogan gosh - LRG03.svg"
// // import Goan_Fish_Curry from "../../assets/Images/category/foodItems/Goan fish curry - GFC03.svg"
// // import Butter_Chicken from "../../assets/Images/category/foodItems/butter chicken - BC03.svg"
// // // import Chicken_Chettinad from "../../assets/Images/category/foodItems/Chicken Chettinad - CC03.svg"
// // import Mutton_Vindaloo from "../../assets/Images/category/foodItems/Mutton Vindaloo - MV03.svg"
// // import Prawn_Moilee from "../../assets/Images/category/foodItems/Prawn moilee - PM03.svg"
// // import Garlic_Naan from "../../assets/Images/category/foodItems/Garlic Naan - GN04.svg"
// // import Roti from "../../assets/Images/category/foodItems/roti - RO04.svg"
// // import Stuffed_Paratha from "../../assets/Images/category/foodItems/Stuffed paratha - SP04.svg"
// // import Lachha_Paratha from "../../assets/Images/category/foodItems/Laccha paratha - LP04.svg"
// // import Cheese_Naan from "../../assets/Images/category/foodItems/cheese naan - CN04.svg"
// // import Chili_Cheese_Kulcha from "../../assets/Images/category/foodItems/Chilli cheese kulcha - CCK04.svg"
// // import Vegetable_Biryani from "../../assets/Images/category/foodItems/vegetable biyani - VB05.svg"
// // import Chicken_Biryani from "../../assets/Images/category/foodItems/chicken biryani - CB05.svg"
// // import Lamb_Biryani from "../../assets/Images/category/foodItems/lamb biryani - LB05.svg"
// // import Mushroom_Pulao from "../../assets/Images/category/foodItems/Mushroom Pulao - MP05.svg"
// // import Jeera_Rice from "../../assets/Images/category/foodItems/Zeera rice - ZR05.svg"
// // import Gulab_Jamun from "../../assets/Images/category/foodItems/Gulab jamun - GJ06.svg"
// // import Ras_Malai from "../../assets/Images/category/foodItems/Rasmalai - RS06.svg"
// // import Mango_Kulfi from "../../assets/Images/category/foodItems/Mango kulfi - MK06.svg"
// // import Chocolate_Samosa from "../../assets/Images/category/foodItems/Chocolate samosa - CS06.svg"
// // import Jalebi_with_Rabri from "../../assets/Images/category/foodItems/Jalebi with rabdi - JR06.svg"
// // import Coconut_Ladoo from "../../assets/Images/category/foodItems/coconut laddoo - CL06.svg"
// // import Bhel_Puri from "../../assets/Images/category/foodItems/bhel puri - BP07.svg"
// // import Pav_Bhaji from "../../assets/Images/category/foodItems/Pav bhaji - PB07.svg"
// // import Dahi_Puri from "../../assets/Images/category/foodItems/Dahi puri - DP07.svg"
// // import Masala_Fries from "../../assets/Images/category/foodItems/Masala fries - MF07.svg"
// // import Paneer_Kathi_Roll from "../../assets/Images/category/foodItems/Paneer Kathi roll - PKR07.svg"
// // import Chicken_Frankie from "../../assets/Images/category/foodItems/Chicken Frankie - CF07.svg"
// // import Masala_Chai from "../../assets/Images/category/foodItems/Masala chai - MC08.svg"
// // import Mango_Lassi from "../../assets/Images/category/foodItems/Mango lassi - ML08.svg"
// // import Sweet_Lassi from "../../assets/Images/category/foodItems/Sweet lassi - SL08.svg"
// // import Nimbu_Pani from "../../assets/Images/category/foodItems/Coconut water - CW08.svg"
// // import Rose_Milk from "../../assets/Images/category/foodItems/Rose milk - RM08.svg"
// // import Coconut_Water from "../../assets/Images/category/foodItems/Coconut water - CW08.svg"
// // import Masala_Dosa from "../../assets/Images/category/foodItems/Masala dosa - MD09.svg"
// // import Idli_Sambar from "../../assets/Images/category/foodItems/Idli sambhar - IS09.svg"
// // import Chicken_Chettinad from "../../assets/Images/category/foodItems/Chicken Chettinad.svg"
// // import Dal_Baati_Churma from "../../assets/Images/category/foodItems/Daal baati churma - DB10.svg"
// // import Gatte_ki_Sabzi from "../../assets/Images/category/foodItems/Gatte ki sabzi - GS10.svg"
// // import Ker_Sangri from "../../assets/Images/category/foodItems/ker Sangri - KS10.svg"
// // import Chili_Paneer from "../../assets/Images/category/foodItems/chilli paneer - CP11.svg"
// // import Hakka_Noodles from "../../assets/Images/category/foodItems/Chicken Frankie - CF07.svg"
// // // import Manchuria from "../../assets/Images/category/foodItems/Masala fries - MF07.svg"






// // import DropdownButton from "../../Common/dropdownButton/dropdown";

// // import SplitBill from "../../Common/Modal/splitBillModal";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //   faCircleMinus,
// //   faCirclePlus,
// //   faCircleXmark,
// //   faTrashCan,
// // } from "@fortawesome/free-solid-svg-icons";
// // import TableStatusModal from "../../Common/Modal/tableStatusModal";
// // import ApplyOffer from "../../Common/Modal/applyOfferModal";

// // let MenuItemsJson = [
// //   {
// //     "id": 11,
// //     "category": "Appetizers",
// //     "image": Appetizers,
// //     "subcategories": [
// //       {
// //         "id": 1,
// //         "name": "Samosa",
// //         "description": "Crispy pastry filled with spiced potatoes, peas, and herbs.",
// //         "price": 80,
// //         "foodImg": Samosa,
// //         "add_ons": [
// //           {"option": "Extra tamarind chutney", "price": 10},
// //           {"option": "Mint chutney", "price": 10},
// //           {"option": "Yogurt topping", "price": 15},
// //           {"option": "Mini samosas", "price": 0},
// //           {"option": "Spicy filling", "price": 0},
// //           {"option": "Cheese filling", "price": 20}
// //         ]
// //       },
// //       {
// //         "id": 2,
// //         "name": "Paneer Tikka",
// //         "description": "Marinated cottage cheese cubes grilled to perfection with herbs.",
// //         "price": 250,
// //         "foodImg": Paneer_Tikka,
// //         "add_ons": [
// //           {"option": "Extra paneer skewer", "price": 50},
// //           {"option": "Mint chutney", "price": 10},
// //           {"option": "Spicy marinade", "price": 0},
// //           {"option": "Lemon garnish", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 3,
// //         "name": "Chicken Seekh Kebab",
// //         "description": "Spiced minced chicken skewers cooked in a tandoor.",
// //         "price": 300,
// //         "foodImg": Chicken_Seekh_Kebab,
// //         "add_ons": [
// //           {"option": "Extra kebab skewer", "price": 60},
// //           {"option": "Garlic sauce", "price": 15},
// //           {"option": "Mild or spicy", "price": 0},
// //           {"option": "Mint chutney", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 4,
// //         "name": "Aloo Tikki Chaat",
// //         "description": "Potato patties topped with yogurt, tamarind, and mint chutney.",
// //         "price": 150,
// //         "foodImg": Aloo_Tikki_Chaat,
// //         "add_ons": [
// //           {"option": "Extra yogurt", "price": 10},
// //           {"option": "Sev", "price": 10},
// //           {"option": "Pomegranate seeds", "price": 20},
// //           {"option": "Sweet or spicy chutney", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 5,
// //         "name": "Lamb Galouti Kebab",
// //         "description": "Melt-in-your-mouth minced lamb kebabs with a rich blend of spices.",
// //         "price": 400,
// //         "foodImg": Lamb_Galouti_Kebab,
// //         "add_ons": [
// //           {"option": "Extra kebab", "price": 70},
// //           {"option": "Naan bread", "price": 20},
// //           {"option": "Spicy or mild", "price": 0},
// //           {"option": "Garlic butter topping", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 6,
// //         "name": "Avocado Papdi Chaat",
// //         "description": "Crispy wafers topped with mashed avocado, spiced yogurt, and chutneys—a modern twist on traditional chaat.",
// //         "price": 180,
// //         "foodImg": Avocado_Papdi_Chaat,
// //         "add_ons": [
// //           {"option": "Extra avocado", "price": 30},
// //           {"option": "Sev", "price": 10},
// //           {"option": "Mild or spicy chutneys", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 7,
// //         "name": "Chicken 65",
// //         "description": "Spicy and tangy fried chicken with South Indian spices, curry leaves, and yogurt.",
// //         "price": 220,
// //         "foodImg": Chicken_65,
// //         "add_ons": [
// //           {"option": "Extra curry leaves", "price": 10},
// //           {"option": "Yogurt dip", "price": 15},
// //           {"option": "Mild or extra spicy", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 8,
// //         "name": "Kurkuri Bhindi",
// //         "description": "Crispy, spiced okra fries for a crunchy and flavorful bite.",
// //         "price": 130,
// //         "foodImg": Kurkuri_Bhindi,
// //         "add_ons": [
// //           {"option": "Extra crispy bhindi", "price": 20},
// //           {"option": "Tangy yogurt dip", "price": 15},
// //           {"option": "Less or extra crispy", "price": 0},
// //           {"option": "Spicy seasoning", "price": 0}
// //         ]
// //       }
// //     ]
// //   },
// //   {
// //     "id": 12,
// //     "category": "Veg",
// //     "image": Vegetarian,
// //     "subcategories": [
// //       {
// //         "id": 1,
// //         "name": "Paneer Butter Masala",
// //         "description": "Cottage cheese in a rich, creamy tomato sauce with butter.",
// //         "price": 300,
// //         "foodImg": Paneer_Butter_Masala,
// //         "add_ons": [
// //           {"option": "Extra paneer", "price": 50},
// //           {"option": "Extra cream", "price": 15},
// //           {"option": "Spicy or mild", "price": 0},
// //           {"option": "Garlic naan pairing", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 2,
// //         "name": "Chole Bhature",
// //         "description": "Spiced chickpeas served with fluffy fried bread.",
// //         "price": 220,
// //         "foodImg": Chole_Bhature,
// //         "add_ons": [
// //           {"option": "Extra bhatura", "price": 30},
// //           {"option": "Raita", "price": 20},
// //           {"option": "Spicy or mild", "price": 0},
// //           {"option": "Lemon garnish", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 3,
// //         "name": "Baingan Bharta",
// //         "description": "Roasted and mashed eggplant with onions, tomatoes, and spices.",
// //         "price": 200,
// //         "foodImg": Baingan_Bharta,
// //         "add_ons": [
// //           {"option": "Extra baingan", "price": 40},
// //           {"option": "Garlic naan", "price": 20},
// //           {"option": "Less or extra spicy", "price": 0},
// //           {"option": "Butter topping", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 4,
// //         "name": "Palak Paneer",
// //         "description": "Spinach and paneer cubes cooked with creamy spices.",
// //         "price": 280,
// //         "foodImg": Palak_Paneer,
// //         "add_ons": [
// //           {"option": "Extra paneer", "price": 50},
// //           {"option": "Cream", "price": 15},
// //           {"option": "Mild or spicy", "price": 0},
// //           {"option": "Extra spinach", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 5,
// //         "name": "Stuffed Bell Peppers",
// //         "description": "Bell peppers filled with spiced potatoes, peas, and cottage cheese, baked to perfection.",
// //         "price": 260,
// //         "foodImg": Stuffed_Bell_Peppers,
// //         "add_ons": [
// //           {"option": "Extra filling", "price": 30},
// //           {"option": "Cheese topping", "price": 20},
// //           {"option": "Spicy or mild filling", "price": 0},
// //           {"option": "No onions option", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 6,
// //         "name": "Jackfruit Curry",
// //         "description": "Tender jackfruit cooked in a robust, spicy coconut gravy.",
// //         "price": 300,
// //         "foodImg": Jackfruit_Curry,
// //         "add_ons": [
// //           {"option": "Extra jackfruit", "price": 50},
// //           {"option": "Coconut milk", "price": 20},
// //           {"option": "Mild or spicy", "price": 0},
// //           {"option": "Rice pairing", "price": 0}
// //         ]
// //       }
// //     ]
// //   },
// //   {
// //     "id": 13,
// //     "category": "Non-Veg",
// //     "image": Non_Vegetarian,
// //     "subcategories": [
// //       {
// //         "id": 1,
// //         "name": "Chicken Tikka Masala",
// //         "description": "Grilled chicken in a creamy, spiced tomato sauce.",
// //         "price": 350,
// //         "foodImg": Chicken_Tikka_Masala,
// //         "add_ons": [
// //           {"option": "Extra chicken", "price": 60},
// //           {"option": "Extra cream", "price": 15},
// //           {"option": "Spicy or mild", "price": 0},
// //           {"option": "Garlic naan pairing", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 2,
// //         "name": "Lamb Rogan Josh",
// //         "description": "Aromatic slow-cooked lamb curry with Kashmiri spices.",
// //         "price": 400,
// //         "foodImg": Lamb_Rogan_Josh,
// //         "add_ons": [
// //           {"option": "Extra lamb", "price": 70},
// //           {"option": "Raita", "price": 20},
// //           {"option": "Mild or spicy", "price": 0},
// //           {"option": "Rice or naan pairing", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 3,
// //         "name": "Goan Fish Curry",
// //         "description": "Fresh fish cooked in a tangy, spicy coconut curry from Goa.",
// //         "price": 370,
// //         "foodImg": Goan_Fish_Curry,
// //         "add_ons": [
// //           {"option": "Extra fish", "price": 60},
// //           {"option": "Coconut milk", "price": 20},
// //           {"option": "Mild or spicy", "price": 0},
// //           {"option": "Lemon garnish", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 4,
// //         "name": "Butter Chicken",
// //         "description": "Tender chicken in a rich, buttery, tomato-based gravy.",
// //         "price": 330,
// //         "foodImg": Butter_Chicken,
// //         "add_ons": [
// //           {"option": "Extra chicken", "price": 60},
// //           {"option": "Extra butter", "price": 15},
// //           {"option": "Mild or extra spicy", "price": 0},
// //           {"option": "Rice pairing", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 5,
// //         "name": "Chicken Chettinad",
// //         "description": "Fiery South Indian chicken curry made with freshly ground spices.",
// //         "price": 340,
// //         "foodImg": Chicken_Chettinad,
// //         "add_ons": [
// //           {"option": "Extra chicken", "price": 60},
// //           {"option": "Coconut milk", "price": 20},
// //           {"option": "Mild or extra spicy", "price": 0},
// //           {"option": "Lemon garnish", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 6,
// //         "name": "Mutton Vindaloo",
// //         "description": "A spicy, tangy mutton curry with vinegar, inspired by Portuguese cuisine in Goa.",
// //         "price": 380,
// //         "foodImg": Mutton_Vindaloo,
// //         "add_ons": [
// //           {"option": "Extra mutton", "price": 70},
// //           {"option": "Coconut milk", "price": 20},
// //           {"option": "Mild or extra spicy", "price": 0},
// //           {"option": "Steamed rice pairing", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 7,
// //         "name": "Prawn Moilee",
// //         "description": "Lightly spiced, creamy coconut-based prawn curry from Kerala.",
// //         "price": 400,
// //         "foodImg": Prawn_Moilee,
// //         "add_ons": [
// //           {"option": "Extra prawns", "price": 80},
// //           {"option": "Coconut milk", "price": 20},
// //           {"option": "Mild or extra spicy", "price": 0},
// //           {"option": "Lemon garnish", "price": 0}
// //         ]
// //       }
// //     ]
// //   },
// //   {
// //     "id": 14,
// //     "category": "Breads",
// //     "image": Breads,
// //     "subcategories": [
// //       {
// //         "id": 1,
// //         "name": "Garlic Naan",
// //         "description": "Soft, pillowy naan bread brushed with garlic butter.",
// //         "price": 80,
// //         "foodImg": Garlic_Naan,
// //         "add_ons": [
// //           {"option": "Extra garlic topping", "price": 10},
// //           {"option": "Butter", "price": 10},
// //           {"option": "Whole wheat or white flour", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 2,
// //         "name": "Roti",
// //         "description": "Whole wheat flatbread, perfect for curries.",
// //         "price": 40,
// //         "foodImg": Roti,
// //         "add_ons": [
// //           {"option": "Butter", "price": 10},
// //           {"option": "Tawa or tandoor cooked", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 3,
// //         "name": "Stuffed Paratha",
// //         "description": "Flatbread stuffed with spiced potatoes, paneer, or spinach.",
// //         "price": 100,
// //         "foodImg": Stuffed_Paratha,
// //         "add_ons": [
// //           {"option": "Extra stuffing", "price": 20},
// //           {"option": "Butter", "price": 10},
// //           {"option": "Choice of potato, paneer, or spinach filling", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 4,
// //         "name": "Lachha Paratha",
// //         "description": "Layered and flaky whole wheat bread.",
// //         "price": 70,
// //         "foodImg": Lachha_Paratha,
// //         "add_ons": [
// //           {"option": "Extra butter", "price": 10},
// //           {"option": "Whole wheat or refined flour", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 5,
// //         "name": "Cheese Naan",
// //         "description": "Soft naan filled with gooey, melted cheese.",
// //         "price": 110,
// //         "foodImg": Cheese_Naan,
// //         "add_ons": [
// //           {"option": "Extra cheese", "price": 30},
// //           {"option": "Regular or chili cheese", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 6,
// //         "name": "Chili Cheese Kulcha",
// //         "description": "Soft bread stuffed with cheese and green chili for an extra kick.",
// //         "price": 120,
// //         "foodImg": Chili_Cheese_Kulcha,
// //         "add_ons": [
// //           {"option": "Extra cheese", "price": 30},
// //           {"option": "Extra chili", "price": 10},
// //           {"option": "Regular or spicy", "price": 0}
// //         ]
// //       }
// //     ]
// //   },
// //   {
// //     "id": 15,
// //     "category": "Rice & Biryanis",
// //     "image": Rice,
// //     "subcategories": [
// //       {
// //         "id": 1,
// //         "name": "Vegetable Biryani",
// //         "description": "Basmati rice with vegetables, spices, and herbs, served with raita.",
// //         "price": 200,
// //         "foodImg": Vegetable_Biryani,
// //         "add_ons": [
// //           {"option": "Extra vegetables", "price": 30},
// //           {"option": "Raita", "price": 20},
// //           {"option": "Mild or spicy", "price": 0},
// //           {"option": "Basmati or jeera rice", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 2,
// //         "name": "Chicken Biryani",
// //         "description": "Aromatic basmati rice cooked with marinated chicken and spices.",
// //         "price": 280,
// //         "foodImg": Chicken_Biryani,
// //         "add_ons": [
// //           {"option": "Extra chicken", "price": 60},
// //           {"option": "Boiled egg", "price": 20},
// //           {"option": "Mild or spicy", "price": 0},
// //           {"option": "Saffron rice option", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 3,
// //         "name": "Lamb Biryani",
// //         "description": "Fragrant rice with tender lamb pieces and delicate spices.",
// //         "price": 350,
// //         "foodImg": Lamb_Biryani,
// //         "add_ons": [
// //           {"option": "Extra lamb", "price": 70},
// //           {"option": "Raita", "price": 20},
// //           {"option": "Mild or spicy", "price": 0},
// //           {"option": "Basmati or jeera rice", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 4,
// //         "name": "Mushroom Pulao",
// //         "description": "Fragrant rice cooked with mushrooms and mild spices.",
// //         "price": 180,
// //         "foodImg": Mushroom_Pulao,
// //         "add_ons": [
// //           {"option": "Extra mushrooms", "price": 30},
// //           {"option": "Extra ghee", "price": 15},
// //           {"option": "Mild or spicy", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 5,
// //         "name": "Jeera Rice",
// //         "description": "Basmati rice tempered with cumin seeds.",
// //         "price": 100,
// //         "foodImg": Jeera_Rice,
// //         "add_ons": [
// //           {"option": "Extra ghee", "price": 10},
// //           {"option": "Basmati or regular rice", "price": 0}
// //         ]
// //       }
// //     ]
// //   },
// //   {
// //     "id": 16,
// //     "category": "Desserts",
// //     "image": Desserts,
// //     "subcategories": [
// //       {
// //         "id": 1,
// //         "name": "Gulab Jamun",
// //         "description": "Milk-based dumplings soaked in saffron and cardamom-flavored syrup.",
// //         "price": 100,
// //         "foodImg": Gulab_Jamun,
// //         "add_ons": [
// //           {"option": "Extra gulab jamun", "price": 40},
// //           {"option": "Ice cream scoop", "price": 20},
// //           {"option": "Warm or cold", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 2,
// //         "name": "Ras Malai",
// //         "description": "Soft cheese patties soaked in sweet, thickened milk.",
// //         "price": 120,
// //         "foodImg": Ras_Malai,
// //         "add_ons": [
// //           {"option": "Extra ras malai piece", "price": 50},
// //           {"option": "Nuts", "price": 15},
// //           {"option": "Warm or cold", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 3,
// //         "name": "Mango Kulfi",
// //         "description": "Traditional Indian ice cream with fresh mango flavor.",
// //         "price": 130,
// //         "foodImg": Mango_Kulfi,
// //         "add_ons": [
// //           {"option": "Extra kulfi", "price": 40},
// //           {"option": "Nuts", "price": 10},
// //           {"option": "Mango or pistachio flavor", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 4,
// //         "name": "Chocolate Samosa",
// //         "description": "Crispy pastry filled with melted chocolate—a modern twist!",
// //         "price": 120,
// //         "foodImg": Chocolate_Samosa,
// //         "add_ons": [
// //           {"option": "Extra chocolate drizzle", "price": 20},
// //           {"option": "Served warm or cold", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 5,
// //         "name": "Jalebi with Rabri",
// //         "description": "Crispy, syrup-soaked coils served with thickened, sweetened milk.",
// //         "price": 150,
// //         "foodImg": Jalebi_with_Rabri,
// //         "add_ons": [
// //           {"option": "Extra jalebi", "price": 30},
// //           {"option": "Extra rabri", "price": 20},
// //           {"option": "Warm or cold", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 6,
// //         "name": "Coconut Ladoo",
// //         "description": "Sweet coconut balls with condensed milk.",
// //         "price": 90,
// //         "foodImg": Coconut_Ladoo,
// //         "add_ons": [
// //           {"option": "Extra ladoo", "price": 20},
// //           {"option": "Roasted coconut garnish", "price": 0}
// //         ]
// //       }
// //     ]
// //   },
// //   {
// //     "id": 17,
// //     "category": "Snacks",
// //     "image": Snacks,
// //     "subcategories": [
// //       {
// //         "id": 1,
// //         "name": "Bhel Puri",
// //         "description": "Puffed rice, sev, vegetables, and tamarind sauce for a crunchy, tangy snack.",
// //         "price": 120,
// //         "foodImg": Bhel_Puri,
// //         "add_ons": [
// //           {"option": "Extra sev", "price": 10},
// //           {"option": "Extra chutneys", "price": 10},
// //           {"option": "Mild or spicy", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 2,
// //         "name": "Pav Bhaji",
// //         "description": "Spicy mashed vegetable curry served with buttered bread rolls.",
// //         "price": 150,
// //         "foodImg": Pav_Bhaji,
// //         "add_ons": [
// //           {"option": "Extra pav", "price": 20},
// //           {"option": "Extra butter", "price": 10},
// //           {"option": "Mild or spicy bhaji", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 3,
// //         "name": "Dahi Puri",
// //         "description": "Crisp puris filled with yogurt, chutneys, and sev.",
// //         "price": 130,
// //         "foodImg": Dahi_Puri,
// //         "add_ons": [
// //           {"option": "Extra yogurt", "price": 10},
// //           {"option": "Extra sev", "price": 10},
// //           {"option": "Mild or spicy chutney", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 4,
// //         "name": "Masala Fries",
// //         "description": "French fries with an Indian spice twist.",
// //         "price": 110,
// //         "foodImg": Masala_Fries,
// //         "add_ons": [
// //           {"option": "Extra fries", "price": 20},
// //           {"option": "Cheese", "price": 20},
// //           {"option": "Mild or spicy seasoning", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 5,
// //         "name": "Paneer Kathi Roll",
// //         "description": "Wrap filled with spiced paneer, onions, and chutneys.",
// //         "price": 180,
// //         "foodImg": Paneer_Kathi_Roll
// //         ,
// //         "add_ons": [
// //           {"option": "Extra paneer", "price": 40},
// //           {"option": "Extra chutney", "price": 10},
// //           {"option": "Spicy or mild", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 6,
// //         "name": "Chicken Frankie",
// //         "description": "Grilled chicken wrapped in a soft roti with spicy chutney.",
// //         "price": 200,
// //         "foodImg": Chicken_Frankie,
// //         "add_ons": [
// //           {"option": "Extra chicken", "price": 50},
// //           {"option": "Extra chutney", "price": 10},
// //           {"option": "Spicy or mild", "price": 0}
// //         ]
// //       }
// //     ]
// //   },
// //   {
// //     "id": 18,
// //     "category": "Beverages",
// //     "image": Beverages,
// //     "subcategories": [
// //       {
// //         "id": 1,
// //         "name": "Masala Chai",
// //         "description": "Spiced Indian tea with milk.",
// //         "price": 60,
// //         "foodImg": Masala_Chai,
// //         "add_ons": [
// //           {"option": "Extra milk", "price": 10},
// //           {"option": "Ginger", "price": 5},
// //           {"option": "Less sugar or extra strong", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 2,
// //         "name": "Mango Lassi",
// //         "description": "Creamy, refreshing mango yogurt drink.",
// //         "price": 120,
// //         "foodImg": Mango_Lassi,
// //         "add_ons": [
// //           {"option": "Extra mango pulp", "price": 20},
// //           {"option": "Nuts", "price": 15},
// //           {"option": "Sweet or salted", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 3,
// //         "name": "Sweet Lassi",
// //         "description": "Cool, sweetened yogurt drink.",
// //         "price": 100,
// //         "foodImg": Sweet_Lassi,
// //         "add_ons": [
// //           {"option": "Extra yogurt", "price": 10},
// //           {"option": "Nuts", "price": 15},
// //           {"option": "Sweet or salted", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 4,
// //         "name": "Nimbu Pani",
// //         "description": "Indian-style lemonade with spices and mint.",
// //         "price": 80,
// //         "foodImg": Nimbu_Pani,
// //         "add_ons": [
// //           {"option": "Extra lemon", "price": 5},
// //           {"option": "Mint", "price": 5},
// //           {"option": "Sweet or salted", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 5,
// //         "name": "Rose Milk",
// //         "description": "Refreshing milk flavored with rose syrup.",
// //         "price": 100,
// //         "foodImg": Rose_Milk,
// //         "add_ons": [
// //           {"option": "Extra rose syrup", "price": 10},
// //           {"option": "Nuts", "price": 15},
// //           {"option": "With or without sugar", "price": 0}
// //         ]
// //       },
// //       {
// //         "id": 6,
// //         "name": "Coconut Water",
// //         "description": "Fresh and natural coconut water.",
// //         "price": 90,
// //         "foodImg": Coconut_Water,
// //         "add_ons": [
// //           {"option": "Extra coconut pulp", "price": 15},
// //           {"option": "Chilled or room temperature", "price": 0}
// //         ]
// //       }
// //     ]
// //   },
// //   {
// //     "id": 19,
// //     "category": "South Indian",
// //     "image": South_Indian,
// //     "subcategories": [
// //       {
// //         "id": 1,
// //         "name": "Masala Dosa",
// //         "foodImg":Masala_Dosa,
// //         "description": "Rice crepe filled with spiced potato, served with coconut chutney and sambar.",
// //         "price": 180
// //       },
// //       {
// //         "id": 2,
// //         "name": "Idli-Sambar",
// //         "foodImg":Idli_Sambar,
// //         "description": "Steamed rice cakes served with sambar and chutneys.",
// //         "price": 120
// //       },
// //       {
// //         "id": 3,
// //         "name": "Chicken Chettinad",
// //         "description": "Fiery chicken curry with ground spices, native to Tamil Nadu.",
// //         "price": 340,
// //         "foodImg": Chicken_Chettinad,
// //         "add_ons": [
// //           {"option": "Extra chicken", "price": 60},
// //           {"option": "Coconut milk", "price": 20},
// //           {"option": "Mild or extra spicy", "price": 0},
// //           {"option": "Lemon garnish", "price": 0}
// //         ]
// //       }
// //     ]
// //   },
// //   {
// //     "id": 20,
// //     "category": "Rajasthani",
// //     "image": Rajasthani,
// //     "subcategories": [
// //       {
// //         "id": 1,
// //         "name": "Dal Baati Churma",
// //         "foodImg":Dal_Baati_Churma,
// //         "description": "Baked wheat balls served with lentil curry and sweet churma.",
// //         "price": 300
// //       },
// //       {
// //         "id": 2,
// //         "name": "Gatte ki Sabzi",
// //         "foodImg":Gatte_ki_Sabzi,
// //         "description": "Gram flour dumplings in a spiced yogurt curry.",
// //         "price": 200
// //       },
// //       {
// //         "id": 3,
// //         "name": "Ker Sangri",
// //         "foodImg":Ker_Sangri,
// //         "description": "Rajasthani desert beans and berries cooked with spices.",
// //         "price": 250
// //       }
// //     ]
// //   },
// //   {
// //     "id": 21,
// //     "category": "Indo-Chinese Fusion",
// //     "image": Beverages,
// //     "subcategories": [
// //       {
// //         "id": 1,
// //         "name": "Chili Paneer",
// //         "foodImg":Chili_Paneer,
// //         "description": "Indian-style cottage cheese stir-fried with bell peppers, onions, and a spicy sauce.",
// //         "price": 220
// //       },
// //       {
// //         "id": 2,
// //         "name": "Hakka Noodles",
// //         "foodImg":Hakka_Noodles,
// //         "description": "Stir-fried noodles with vegetables, soy sauce, and Indian spices.",
// //         "price": 200
// //       },
// //       {
// //         "id": 3,
// //         "name": "Manchurian",
// //         "foodImg":Hakka_Noodles,
// //         "description": "Deep-fried vegetable balls in a tangy, spicy sauce.",
// //         "price": 220
// //       }
// //     ]
// //   }
// // ];

// // const Category = ({ cart }) => {
// //   console.log('cart: ', cart);
// //   const [selectedTab, setSelectedTab] = useState([MenuItemsJson[0]]);
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [selectedFoodItem, setSelectedFoodItem] = useState(null);
// //   const [paymentMethod, setPaymentMethod] = useState("");
// //   //   const [showFoodData, setshowFoodData] = useState([]);
// //   //   const { register, handleSubmit, reset } = useForm();

// //   // MenuItemsJson
// //   // console.log('MenuItemsJson: ', MenuItemsJson.categories);

// //   const tableOptions = ["1", "2", "3", "4"];
// //   const orderTypes = ["Dine-In", "Delivery", "Pick-Up"];
// //   const filter = ["Specials", "Frequently ordered", "Veg", "Non-Veg"];
// //   const dispatch = useDispatch();

// //   const openModal = (food) => {
// //     setSelectedFoodItem(food);
// //     setIsOpen(true);
// //   };

// //   const closeModal = () => setIsOpen(false);

// //   const onSubmit = (data) => {
// //     let category = Object.values(data).filter((value) => value);
// //     let payload = {
// //       id: selectedFoodItem?.id,
// //       food: selectedFoodItem?.name,
// //       // image: selectedFoodItem?.image,
// //       category: category,
// //       tableNo: cart?.TableNo,
// //       status: "open",
// //       quantity: 1,
// //       price: selectedFoodItem?.price,
// //       amount: 1,
// //     };
// //     console.log("Payload:", payload);
// //     // setshowFoodData(selectedFoodItem);
// //     dispatch(add(payload));
// //     closeModal();
// //   };

// //   const handleIncrementQuantity = (item) => {
// //     dispatch(increment(item));
// //   };

// //   const handleDecrementQuantity = (id) => {
// //     dispatch(decrement(id?.id));
// //   };

// //   const handleRemoveFromCart = (id) => {
// //     dispatch(remove(id?.id));
// //   };
// //   const handlePayment = (pay) => {
// //     setIsOpen(true);
// //     dispatch(CheckPaymentStatus(pay));
// //   };

// //   let selectedFoodItems = cart.itemsInCart.filter(
// //     (item) => item.tableNo === cart.TableNo
// //   );

// //   const SetValue = (value) => {
// //     let a = MenuItemsJson?.categories?.filter((item) => {
// //       return item.id === value
// //     }
// //     )
// //     console.log('a:', a);
// //     const filteredItems = MenuItemsJson?.categories?.filter(item => item.id === value);
// //     console.log('filteredItems: ', filteredItems[0].subcategories);

// //   }

// //   // Set Payment Method
// //   const SelectPayMode = (Mode) => {
// //     setPaymentMethod(Mode)
// //     console.log('Mode: ', Mode);

// //   }

// //   // Side Nav Functionality

// //   const [moveSideNav, setmoveSideNav] = useState(true)
// //   const SideNavFunctionality = () => {
// //     setmoveSideNav(!moveSideNav)
// //   }


// //   return (
// //     <>
// //       <Navbar SideNavFunctionality={SideNavFunctionality} />
      

// //       {/* Table Status Modal Button */}
// //       <TableStatusModal />
// //       <TableStatusModal />

// //       <div className={` border-solid px-2 pb-4 mx-3 border-4 border-[#544013] transition-all duration-100 ${moveSideNav ? "ms-16" : "ms-0"}  `}>
// //         <p className="text-xl font-bold text-[#544013]">Generate Order</p>
// //         <div className="grid grid-cols-12 gap-4">
// //           <div className="col-span-7 border-solid border-2 border-black rounded-2xl bg-[#ede9dd]">
// //             <div className="flex justify-between py-1">
// //               {/* Search bar */}
// //               <div class="text-black flex justify-around items-center mx-2">
// //                 <div class="overflow-hidden flex justify-between border-solid border-2 w-full border-black rounded-3xl bg-[#f6f6e9]">
// //                   <input
// //                     type="text"
// //                     class="px-2 py-0.5 tracking-wide w-full bg-[#f6f6e9]"
// //                     placeholder="Search items from menu"
// //                   />
// //                   <button class="flex items-center justify-center px-4">
// //                     <svg
// //                       class="h-4 w-4 text-grey-dark"
// //                       fill="currentColor"
// //                       xmlns="http://www.w3.org/2000/svg"
// //                       viewBox="0 0 24 24"
// //                     >
// //                       <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
// //                     </svg>
// //                   </button>
// //                 </div>
// //               </div>
// //               <DropdownButton
// //                 options={filter}
// //                 className="w-20"
// //                 buttonLabel="Filters"
// //               />
              
// //             </div>
// //             <div className="flex">
// //               {/* Side Tabs */}
// //               <div className="w-1/4 h-[26rem] font-bold overflow-auto bg-[#ede9dd] rounded-2xl px-4 py-2">
// //                 {MenuItemsJson.map((tab) => (
// //                   <button
// //                     key={tab.name}
// //                     className={`block  text-left w-full my-2 truncate shadow-lg py-1 px-2 ${tab.category === selectedTab
// //                       ? "bg-[#d79555] border-solid border-2 border-black text-white"
// //                       : "bg-white"
// //                       }`}
// //                     onClick={() => setSelectedTab(MenuItemsJson?.filter(item => item.id === tab?.id))}
// //                   >
// //                     <img
// //                       src={tab.image}
// //                       alt={tab.name}
// //                       className="h-10 w-h-10 inline-block mr-2"
// //                     />
// //                     {tab.category}
// //                   </button>
// //                 ))}
// //               </div>

// //               {/* Main Content */}
// //               <div className=" p-2 h-[26rem] overflow-auto">
// //                 <div className="grid grid-cols-2 gap-4">
// //                   {selectedTab[0]?.subcategories?.map((food) =>
// //                   (
// //                     <button
// //                       key={food?.id}
// //                       className="p-2 bg-white border rounded-2xl shadow-2xl"
// //                       onClick={() => openModal(food)}
// //                     >
// //                       <div className="flex items-center justify-around">
// //                         <img
// //                           src={check}
// //                           className="h-16 w-h-16 rounded-full "
// //                           alt="Loading"
// //                         />
// //                         <div className="mx-1 w-full">
// //                           <p className="text-[#544013] text-center font-bold text-lg">{food?.name}</p>
// //                           <div className="flex justify-between items-center my-3">
// //                             <p className="text-lg font-bold mx-7 text-red-800">
// //                               ₹ {food?.price}/-
// //                             </p>
// //                             <Button
// //                               btn_class="border-solid border-2 border-black rounded-2xl bg-[#cd3f14] text-white uppercase font-bold px-4 py-1 "
// //                               btn_type="button"
// //                               title="Add"
// //                             />
// //                           </div>
// //                         </div>
// //                         {/* </div> */}
// //                       </div>
// //                     </button>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           {/* display */}
// //           <div className="col-span-5 bg-[#ede9dd] border-solid border-2 border-black rounded-2xl">
// //             <div className="flex items-center justify-evenly my-2">
// //               <DropdownButton options={orderTypes} buttonLabel="Order Type" />

// //               <DropdownButton options={tableOptions} buttonLabel="Table No." />

// //               <p className="text-xl text-[#544013] font-bold">
// //                 Order No. : 123
// //               </p>
// //             </div>
// //             <hr className="p-0.5 bg-black my-0.5" />

// //             {/* Table View */}
// //             <div class="grid grid-cols-1 grid-rows-3">
// //               <div className="row-span-2 h-72 overflow-auto">
// //                 <table class="w-full row-span-2 text-sm text-center text-[#544013]">
// //                   <thead class="text-lg text-[#544013] bg-[#ede9dd]">
// //                     <tr>
// //                       <th scope="col" class="px-6 text-base font-bold">
// //                         Item
// //                       </th>
// //                       <th scope="col" class="px-6 text-base font-bold">
// //                         Price
// //                       </th>
// //                       <th scope="col" class="px-6 text-base font-bold">
// //                         Qty.
// //                       </th>

// //                       <th scope="col" class="px-6 text-base font-bold">
// //                         Amount
// //                       </th>
// //                     </tr>
// //                   </thead>
// //                   <tbody className="bg-[#ede9dd]">
// //                     {selectedFoodItems?.map((items, index) => (
// //                       <tr className="">
// //                         <th scope="row" class="py-2 px-6 font-light">
// //                           {items?.food}
// //                         </th>
// //                         <td class="font-light py-2 px-6">{items.price}</td>
// //                         <td class="flex items-center justify-center font-normal py-2 px-6">
// //                           <FontAwesomeIcon
// //                             className=" rounded-full text-red-500 text-lg cursor-pointer bg-white"
// //                             onClick={() => handleDecrementQuantity(items)}
// //                             icon={faCircleMinus}
// //                           />
// //                           <div className="mx-2">{items?.quantity}</div>
// //                           <FontAwesomeIcon
// //                             className=" rounded-full bg-white text-green-500 text-lg cursor-pointer"
// //                             onClick={() => handleIncrementQuantity(items)}
// //                             icon={faCirclePlus}
// //                           />
// //                           {/* <span
// //                             className="px-2 text-white rounded-full text-base bg-red-600 cursor-pointer"
// //                             onClick={() => handleRemoveFromCart(items)}
// //                           > */}
// //                           <FontAwesomeIcon className="text-red-700 rounded-full text-base ms-3 bg-white cursor-pointer" onClick={() => handleRemoveFromCart(items)} icon={faTrashCan} />
// //                           {/* </span> */}
// //                         </td>
// //                         <td class="font-normal py-2 px-6">{items?.price * items?.quantity}</td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>

// //               <div className="row-start-3">
// //                 <ul>
// //                   <li className="mx-2 bg-[#f6f6e9] w-32 text-sm font-bold text-[#544013] border-2 border-[#d79555] rounded-lg py-1 text-center">
// //                     Total Items: {cart?.totalCount}
// //                   </li>
// //                   <li className="mx-7 my-0.5 text-base font-bold flex justify-between text-[#544013]">
// //                     <span>Sub Total:</span>
// //                     <span className="mx-7">{cart?.totalCost}</span>
// //                   </li>
// //                   <div className="flex">
// //                     <SplitBill />
// //                     <ApplyOffer />

// //                   </div>
// //                   {/* <Link to="/payment" className="mx-3"> */}
// //                   {/* <Button
// //                     title="PAYMENT"
// //                     onClick={() => handlePayment(cart)}
// //                     btn_type="button"
// //                     btn_class="border-solid border-4 border-[#544013] rounded-xl my-2 bg-[#f6d8ba] px-3 py-1 uppercase"
// //                   /> */}
// //                   {/* </Link> */}
// //                   <div className=" my-0.5">
// //                     <form action="">
// //                       <hr className="border-dashed border-1 border-black" />
// //                       <div className="flex space-x-4 justify-evenly py-0.5">
// //                         {["Cash", "UPI", "Card"].map((method) => (
// //                           <label
// //                             key={method}
// //                             className="flex items-center font-bold"
// //                           >
// //                             <input
// //                               type="checkbox"
// //                               value={method}
// //                               checked={paymentMethod === method}
// //                               onClick={() => SelectPayMode(method)}
// //                               className="mr-2 rounded-full"
// //                             />
// //                             {method}
// //                           </label>
// //                         ))}
// //                       </div>
// //                       <hr className="border-dashed border-1 border-black" />
// //                     </form>
// //                   </div>
// //                 </ul>
// //                 <div className="flex justify-around my-1">
// //                   <NavLink to="/chef">
// //                     <Button
// //                       title="Save & Generate KOT"
// //                       btn_type="button"
// //                       btn_class="border-solid border-2 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-0.5 text-sm font-bold uppercase"
// //                     />
// //                   </NavLink>
// //                  <NavLink to="/payment">
// //                  <Button
// //                     title="Save & Print Bill"
// //                     btn_type="button"
// //                     btn_class="border-solid border-2 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-0.5 text-sm font-bold uppercase"
// //                   />
// //                  </NavLink>
// //                   {/* <Button
// //                     title="Save & Generate Reciept"
// //                     btn_type="button"
// //                     btn_class="border-solid border-2 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-0.5 text-sm font-bold uppercase"
// //                   /> */}
// //                   {/* <Button
// //                     title="x"
// //                     btn_type="button"
// //                     btn_class="border-2 border-black border-solid rounded-full bg-red-500 text-black px-3"
// //                   /> */}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         {/* Modal */}
// //         <CategoryModal
// //           isOpen={isOpen}
// //           closeModal={closeModal}
// //           selectedFoodItem={selectedFoodItem}
// //           onSubmit={onSubmit}
// //         />
// //         {/* <PaymentModal
// //           isOpen={isOpen}
// //           closeModal={closeModal}
// //           selectedFoodItem={selectedFoodItem}
// //           onSubmit={onSubmit}
// //         /> */}
// //       </div>
// //       <StatusFooter />
// //     </>
// //   );
// // };

// // const mapStateToProps = (state) => ({
// //   cart: state.cart,
// // });

// // export default connect(mapStateToProps, {})(Category);


// import React from 'react';
// import { useForm } from 'react-hook-form';

// const Test = () => {
//   const { register, handleSubmit, watch } = useForm();
  
//   const addOns = [
//     { option: "Extra tamarind chutney", price: 10 },
//     { option: "Mint chutney", price: 10 },
//     { option: "Yogurt topping", price: 15 },
//     { option: "Mini samosas", price: 0 },
//     { option: "Spicy filling", price: 0 },
//     { option: "Cheese filling", price: 20 },
//   ];

//   const onSubmit = data => {
//     const selectedAddOns = Object.entries(data)
//       .filter(([key, value]) => key !== 'comments' && value)
//       .map(([key]) => {
//         const addOn = addOns.find(item => item.option === key);
//         return { [addOn.option]: addOn.price };
//       });

//     // Calculate the total price
//     const totalPrice = selectedAddOns.reduce((sum, addOn) => {
//       const price = Object.values(addOn)[0]; // Get the price from the object
//       return sum + price;
//     }, 0);

//     console.log("Selected Add-Ons:", selectedAddOns);
//     console.log("Total Price:", totalPrice);
//     console.log("Comments:", data.comments);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {addOns.map(addOn => (
//         <div key={addOn.option}>
//           <label>
//             <input
//               type="checkbox"
//               {...register(addOn.option)}
//             />
//             {addOn.option} - ${addOn.price}
//           </label>
//         </div>
//       ))}
//       <div>
//         <label>
//           Comments:
//           <textarea {...register('comments')} />
//         </label>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Test;


// import React, { useState } from "react";

// const Testing = () => {
//   const [tables, setTables] = useState([
//     { id: 1, color: "white", order: null },
//     { id: 2, color: "white", order: null },
//     { id: 3, color: "white", order: null },
//     { id: 4, color: "white", order: null },
//   ]);
//   const [inputValue, setInputValue] = useState("");

//   const handleSubmit = () => {
//     // Split the input into table number and dish name
//     const [tableNumberStr, dishName] = inputValue.split(" ");
//     const tableNumber = parseInt(tableNumberStr.trim());

//     // Validate table number and dish name
//     if (
//       isNaN(tableNumber) ||
//       tableNumber < 1 ||
//       tableNumber > tables.length ||
//       !dishName ||
//       dishName.trim() === ""
//     ) {
//       alert("Invalid input! Use format 'tableNumber-dishName' (e.g., '1-Pasta')");
//       return;
//     }

//     setTables((prevTables) =>
//       prevTables.map((table) =>
//         table.id === tableNumber
//           ? { ...table, color: "red", order: dishName.trim() }
//           : table
//       )
//     );

//     alert(`Order created: Table ${tableNumber} - Dish: ${dishName.trim()}`);
//     setInputValue(""); // Reset the input field
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter tableNumber-dishName"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//       <div style={{ display: "flex", marginTop: "20px" }}>
//         {tables.map((table) => (
//           <div
//             key={table.id}
//             style={{
//               width: "100px",
//               height: "100px",
//               margin: "10px",
//               backgroundColor: table.color,
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               cursor: "pointer",
//               border: "1px solid black",
//             }}
//           >
//             <div>
//               <p>Table {table.id}</p>
//               {table.order && <p>Dish: {table.order}</p>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testing;



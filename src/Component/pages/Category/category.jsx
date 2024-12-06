import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Dialog } from "@headlessui/react";
// import Button from "../Button/button";
import {
  add,
  decrement,
  increment,
  remove,
} from "../../Common/Redux/Category/categorySlice";
import Button from "../../Common/Button/button";
import { NavLink } from "react-router-dom";
import Navbar from "../../Common/Navbar/navbar";
import StatusFooter from "../../Common/Footer/statusFooter";
import CategoryModal from "../../Common/Modal/categoryModal";
// import MenuItemsJson from '../../assets/Json/menuItems'

// Images
import Appetizers from "../../assets/Images/menu/Appetizers.svg";
import check from "../../assets/Images/category/foodItems/Coconut water - CW08.svg";
import Veg from "../../assets/Images/menu/veg.svg";
import NonVeg from "../../assets/Images/menu/non-veg.svg";
import Breads from "../../assets/Images/menu/breads.svg";
import Rice from "../../assets/Images/menu/rice-and-biryani.svg";
import Desserts from "../../assets/Images/menu/desserts.svg";
import Snacks from "../../assets/Images/menu/snacks.svg";
import Beverages from "../../assets/Images/menu/beverages.svg";
import SouthIndian from "../../assets/Images/menu/South indian.svg";
import Rajasthani from "../../assets/Images/menu/rajasthani.svg";
// import IndoChinese from '../../assets/Images/menu/indoChinese.svg'

// food items images

import DropdownButton from "../../Common/dropdownButton/dropdown";

import SplitBill from "../../Common/Modal/splitBillModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faCirclePlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import TableStatusModal from "../../Common/Modal/tableStatusModal";
import ApplyOffer from "../../Common/Modal/applyOfferModal";
import { useForm } from "react-hook-form";
import { FoodMenuAPI, GetOrderDetailstoAPI, SendOrderDetailstoAPI } from "../../Common/APIs/api";
import { SendPaymentDetailstoAPI } from "../../Common/APIs/api";

const Category = ({ cart, TableDetails, customerStatus, payment, chatbot }) => {
  const [MenuItemsJson, setMenuItemsJson] = useState([]);
  const [applyOffer, setApplyOffer] = useState("");
  const { register, handleSubmit, reset, setValue } = useForm();

  const fetchMenu = async () => {
    let menu = await FoodMenuAPI();
    setMenuItemsJson(menu?.data?.data);
    // console.log('menu?.data?.data: ', menu?.data?.data);
    setFilteredOptions(menu?.data?.data[0].subcategories);
  };

  let customerDetails = JSON?.parse(
    localStorage.getItem("orderStatus") ?? "[]"
  );
  useEffect(() => {
    fetchMenu();
  }, []);

  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedTab, setSelectedTab] = useState([]);
  // const handleTabClick = (tab) => {
  //   setSelectedTab(tab);  // Set the selected tab
  //   setFilteredOptions(tab?.subcategories);  // Update filtered options based on subcategories
  // };
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFoodItem, setSelectedFoodItem] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [query, setQuery] = useState("");

  const tableOptions = ["1", "2", "3", "4"];
  const orderTypes = ["Dine-In", "Delivery", "Pick-Up"];
  const filter = ["Specials", "Frequently ordered", "Veg", "Non-Veg"];
  const dispatch = useDispatch();

  const openModal = (food) => {
    setSelectedFoodItem(food);
    setIsOpen(true);
  };

  const closeModal = () => {
    setValue("comment", "");
    reset();
    setIsOpen(false);
  };

  const handleModalClose = () => {
    // setTimeout(() => {
    reset();
    setValue("comment", "");
    // }, 3000)
    closeModal();
  };

  const onSubmit = (data) => {
    let comment = data.comment;
    delete data.comment;
    //  let val =  handelOptions(data)
    let price = [];
    let category = [];
    Object.entries(data).reduce((acc, [key, value]) => {
      if (value !== false) {
        acc[key] = value;
        price.push(Number((acc[key] = value)));
        category.push((acc[key] = key));
      }
      return acc;
    }, {});

    // filter funtionality to get customer information

    // useEffect(() => {

    // }, [])

    let customer = customerDetails?.data?.find((c) => c?.customer_table === cart?.TableNo);


    // create onsubmit functionality on categorymodal component to handle comment or note feature

    const payload = {
      id: selectedFoodItem?._id,
      food: selectedFoodItem?.name,
      // image: selectedFoodItem?.image,
      category: category,
      comment,
      tableNo: cart?.TableNo,
      status: "open",
      quantity: 1,
      price: price.reduce((a, b) => a + b, Number(selectedFoodItem?.price)),
      amount: 1,
    };
    price = [];
    category = [];
    dispatch(add(payload));
    comment = "";
    setValue("comment", "");
    setSelectedFoodItem(null);
    reset();

    closeModal();
  };

  const handleIncrementQuantity = (item) => {
    dispatch(increment(item));
    showSubTotal();
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrement(id?.id));
    showSubTotal();
  };

  const handleRemoveFromCart = (id) => {
    dispatch(remove(id?.id));
    showSubTotal();
  };
  const handlePayment = (pay) => {
    setIsOpen(true);
  };

  let selectedFoodItems = cart.itemsInCart.filter(
    (item) => item.tableNo === cart.TableNo
  );

  const [subTotal, setsubTotal] = useState();

  const showSubTotal = () => {
    let array = [];
    selectedFoodItems?.map((foodItem) => {
      let evaluate = foodItem?.quantity * foodItem?.price;
      array.push(evaluate);
    });
    let value = (array || [0]).reduce((acc, x) => acc + Number(x || 0), 0);
    setsubTotal(value);
  };

  useEffect(() => {
    showSubTotal();
  }, [selectedFoodItems]);

  const SetValue = (value) => {
    let a = MenuItemsJson?.categories?.filter((item) => {
      return item.id === value;
    });
    const filteredItems = MenuItemsJson?.categories?.filter(
      (item) => item.id === value
    );
  };

  // Set Payment Method
  const SelectPayMode = (Mode) => {
    setPaymentMethod(Mode);
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
    }
  };
  // Side Nav Functionality
  const [moveSideNav, setmoveSideNav] = useState(true);
  const SideNavFunctionality = () => {
    setmoveSideNav(!moveSideNav);
  };

  // get order type dropdown value 
const [orderType, setorderType] = useState('Dine-In');
const handleOrderType = (data) => {
  setorderType(data);
};


  // to show customer details of that table
  const getCustomerDetails = customerDetails?.filter(
    (table) => table?.data?.customer_table === cart?.TableNo // change for Local format
  );

  //  find category of order subcategory
  // const [category, setCategory] = useState([]);
  
  // useEffect(() => {
  //   cart?.itemsInCart?.map((item)=>{
  //     const foundCategory = MenuItemsJson.find((cat) =>
  //       cat.subcategories.some((sub) => sub._id === item?.id)
  //   );
  //   setCategory((prev)=>[...prev,foundCategory]);
  // })
  // }, []);

  // send to order detail order api
  const handleOrderDetails = async () => {
    const payload = {
      orderDetails: cart?.itemsInCart,
      orderStatus: "Completed",
      orderType: orderType,
      floorId:
        orderType == "Dine-In" ? TableDetails?.OrderTable[0]?.floorId : null,
      tableId: orderType == "Dine-In" ? TableDetails?.OrderTable[0]?._id : null,
      customerId:
        orderType == "Dine-In" ? getCustomerDetails[0]?.data?._id : null,
      totalAmount: subTotal,
    };
     await SendOrderDetailstoAPI(payload)
     const response = await GetOrderDetailstoAPI()
     if(response?.succcess == true){
     console.log('response?.succcess: ', response?.success);
     response?.data?.map((items)=>{
      console.log('items: ', items);
     })

     }
  };

  // send to Payment details API
  const handlePaymentDetails = () => {
    let payload = {
      billId: 1,
      paymentMethod: paymentMethod,
      offerDiscount: applyOffer,
      couponCode: "xyz",
      status: "Completed",
    };
    // console.log("payload: ", payload);
    let response = SendPaymentDetailstoAPI(payload);
    // console.log("response: ", response);
  };

  return (
    <>
      <Navbar SideNavFunctionality={SideNavFunctionality} />

      {/* Table Status Modal Button */}
      <TableStatusModal />
      <TableStatusModal />

      <div
        className={` border-solid px-2 pb-4 mx-3 border-4 border-[#544013] transition-all duration-100 ${
          moveSideNav ? "ms-16" : "ms-0"
        }  `}
      >
        <p className="text-xl font-bold text-[#544013]">Generate Order</p>
        <div className="grid grid-cols-12  gap-4">
          <div className="col-span-7 border-solid border-2 border-black rounded-2xl bg-[#ede9dd]">
            <div className="flex justify-between py-1">
              {/* Search bar */}
              <div class="text-black flex justify-around items-center mx-2">
                <div class="overflow-hidden flex justify-between border-solid border-2 w-full border-black rounded-3xl bg-[#f6f6e9]">
                  <input
                    type="text"
                    class="px-2 py-0.5 truncate tracking-wide w-full bg-[#f6f6e9] focus-visible:outline-0"
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
              <div className="w-1/4 h-[60vh] cursor-pointer font-bold overflow-auto bg-[#ede9dd] rounded-2xl px-4 py-2">
                {MenuItemsJson?.map((tab) => (
                  <a
                    onClick={() => {
                      setFilteredOptions(tab?.subcategories);
                      // handleTabClick(tab)
                    }}
                    key={tab?.name}
                    className={`block text-left text-sm truncate w-full my-2 shadow-lg py-1 px-2 ${
                      tab === selectedTab
                        ? "bg-[#d79555] border-solid border-2 border-black text-white"
                        : "bg-white"
                    }`}
                  >
                    <img
                      src={tab?.image}
                      alt={tab?.name}
                      className="h-10 w-h-10 inline-block mr-2"
                    />
                    {tab?.category}
                  </a>
                ))}
              </div>

              {/* Main Content */}
              <div className="p-2 h-[60vh] overflow-auto">
                <div className="grid grid-cols-2 gap-4">
                  {filteredOptions?.map((food) => (
                    <div className="p-2 bg-white border rounded-2xl shadow-2xl">
                      {/* <div className="rounded-full bg-green-500 h-2 w-2 text-start"></div> */}
                      <div className="flex items-center justify-around">
                        <img
                          src={check}
                          className="h-16 w-h-16 rounded-full "
                          alt="Loading"
                        />
                        <div className="mx-3 w-full">
                          <div>
                            <p className="text-[#544013] text-start font-bold text-base">
                              {food?.name}
                            </p>
                          </div>
                          <div className="flex justify-between items-center my-3">
                            <p className="text-base font-bold text-red-800">
                              ₹ {food?.price}/-
                            </p>
                            <Button
                              key={food?.id}
                              btn_class="border-solid border-2 border-black rounded-2xl bg-[#cd3f14] text-white uppercase font-bold px-4 py-1 "
                              btn_type="button"
                              title="Add"
                              onClick={() => openModal(food)}
                            />
                          </div>
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* display */}
          <div className="col-span-5 bg-[#ede9dd] border-solid border-2 border-black rounded-2xl">
            <div className="flex items-center justify-evenly my-2">
              <DropdownButton
                options={orderTypes}
                selectedValue={handleOrderType}
                buttonLabel="Order Type"
              />

              <DropdownButton options={tableOptions} buttonLabel="Table No." />

              <p className="text-xl text-[#544013] font-bold">
                Order No. : 123
              </p>
            </div>
            <hr className="p-0.5 bg-black my-0.5" />

            {/* Table View */}
            <div class="grid grid-cols-1 grid-rows-3">
              <div className="row-span-2 h-[40vh] overflow-auto">
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
                        <td class="font-light py-2 px-6">{items?.price}</td>
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
                        <td class="font-normal py-2 px-6">
                          {items?.price * items?.quantity}
                        </td>
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
                    <span className="mx-7">{subTotal}</span>
                  </li>
                  <div className="flex">
                    <SplitBill />
                    <ApplyOffer
                      applyOffer={applyOffer}
                      setApplyOffer={setApplyOffer}
                    />
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
                        {["Cash", "UPI", "Card"]?.map((method) => (
                          <label
                            key={method}
                            className="flex items-center font-bold"
                          >
                            <input
                              type="checkbox"
                              value={method}
                              checked={paymentMethod === method}
                              onClick={() => SelectPayMode(method)}
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
                <div className="flex justify-around items-end my-1">
                  {/* <NavLink to="/payment"> */}
                    <Button
                      title="Save & Generate KOT"
                      btn_type="button"
                      onClick={() => handleOrderDetails()}
                      btn_class="border-solid border-2 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-0.5 text-sm font-bold uppercase"
                    />
                  {/* </NavLink> */}
                  <NavLink to="/payment">
                    <Button
                      title="Save & Print Bill"
                      onClick={() => handlePaymentDetails()}
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
        {/* <CategoryModal
          isOpen={isOpen}
          closeModal={closeModal}
          selectedFoodItem={selectedFoodItem}
          onSubmit={onSubmit}
        /> */}

        <Dialog
          open={isOpen}
          onClose={handleModalClose}
          className="fixed inset-0 z-10 flex items-center justify-center"
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            aria-hidden="true"
            onClick={handleModalClose}
          />
          <div className="relative bg-[#f6f6e9] w-1/2 px-4 py-6 rounded shadow-lg z-20">
            <h4 className="text-xl mb-4">
              Customize your {selectedFoodItem?.name}
            </h4>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 grid-rows-2 gap-0">
                {selectedFoodItem?.add_ons?.map((item) => (
                  <div className="flex items-center my-2">
                    <label htmlFor={item?.option}>
                      <input
                        type="checkbox"
                        className="mx-1"
                        id={item?.option}
                        value={item?.price}
                        {...register(item?.option)}
                      />
                      <span>{item?.option} </span>
                      <span
                        className={`mx-1 text-red-500 font-semibold ${
                          item?.price > 0 ? "inline" : "hidden"
                        }`}
                      >
                        {" "}
                        (₹ {item?.price})
                      </span>
                    </label>
                  </div>
                ))}
              </div>
              <hr className="w-full my-2 border border-black " />
              <div className="w-full">
                <label className="block mb-2 font-bold" htmlFor="note">
                  Note :
                </label>
                <textarea
                  // onChange={(e)=>GetValue(e)}
                  {...register("comment")}
                  // value={comment}
                  id="note"
                  placeholder="Additional Details..."
                  className="w-full px-3 py-2 border border-black rounded-lg"
                />
              </div>

              <Button
                btn_type="submit"
                // onClick={() =>
                //   setTimeout(() => {
                //     reset();
                //   }, 3000)
                // }
                title="Submit"
                btn_class="bg-green-600 text-white px-4 py-1 mt-5 border-solid border-2 border-black rounded-xl"
              />
            </form>
          </div>
        </Dialog>
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
  TableDetails: state.table,
  chatbot: state.chatbot,
  customerStatus: state.customerStatus,
  payment: state.payment,
});

export default connect(mapStateToProps, {})(Category);

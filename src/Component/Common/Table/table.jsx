import React, { useEffect, useState } from "react";
import { TableNo } from "../../Common/Redux/Category/categorySlice";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetTableAPI } from "../APIs/api";
import {
  createTable,
  getFooterTableStatus,
  getTableDetails,
} from "../Redux/Table/tableSlice";
import { getCustomerStatus } from "../Redux/CustomerStatus/customerStatusSlice";

// Images
import Order from "../../assets/Images/table/1.svg";
import Pay from "../../assets/Images/table/2.svg";

const Table = ({ cart, table, chatbot }) => {
  // console.log('table: ', table);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  let status = JSON?.parse(localStorage.getItem("orderStatus") ?? "[]");

  useEffect(() => {
    const fetch = async (data) => {
      try {
        let tableData = await GetTableAPI();
        dispatch(createTable(tableData?.data));
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetch();
  }, []);

  // showing floor wise tables functionality
  const [selectedFloor, setSelectedFloor] = useState(1); // Set initial state to floor 1

  // Extract unique floors from the data
  const uniqueFloors = Array?.from(
    new Set(table?.tableDetails?.map((item) => item?.floorDetails?.floorNumber))
  );

  // Handle floor selection
  const handleFloorSelection = (event) => {
    const floorNumber = Number(event?.target?.value);
    setSelectedFloor(floorNumber);
  };

  // Filter tables by selected floor
  const filteredTables = selectedFloor
  ? table?.tableDetails?.filter(
    (table) => table?.floorDetails?.floorNumber === selectedFloor
  )
  : [];

  const GetTableNo = (item) => {
    let customerDetails = status?.filter(
      (i) => i?.data?.customer_table == item?.tableNumber
    );


    dispatch(getCustomerStatus(customerDetails));
    dispatch(getTableDetails(item));
    dispatch(TableNo(item?.tableNumber));
    navigate("/order");
  };


  useEffect(() => {
    isTableBooked();
  }, []);

  const isTableBooked = (tableNumber) => {
    return table?.tableDetails?.some(
      (s) => s?.customerDetails?.customer_table_Id == tableNumber?._id 
    );
  };

  return (
    <>
      <div className=" px-3">
        <select
          id="floor-select"
          className="ml-20 mb-5 tracking-wider cursor-pointer rounded-md truncate py-1.5 px-1 text-left text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm ring-[#cd3f14] hover:bg-[#eee9e3]"
          value={selectedFloor}
          onChange={handleFloorSelection}
        >
          <option value="">Select floor</option>
          {uniqueFloors.map((floorNumber) => (
            <option key={floorNumber} value={floorNumber}>
              Floor {floorNumber}
            </option>
          ))}
        </select>
        <div className="flex justify-center items-center">
          <div className="circle-container grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-7 w-3/4">
            {filteredTables?.map((items, index) => (
              <div
                className={`cursor-pointer flex flex-col justify-center items-center ${
                  isTableBooked(items)
                    ? "relative border-2 border-black rounded-2xl pb-1 pt-8 px-0 bg-[#fddcbf]"
                    : "  "
                }`}
              >
                {/* <img src={Order} alt="Loading" className="absolute bottom-10 top-0 right-50 left-50 h-10 rounded-full bg-[#e6ae7e] p-1" /> */}
               {/* <div className="-mt-14 ml-[32%] rounded-full bg-[#eab688] h-14 w-14"> */}
               <div className={`${isTableBooked(items) ? "-mt-14 mb-1 rounded-full shadow-md bg-[#eab688] h-12 w-12 flex justify-center"
                      : "hidden"
                  }`}>
                 <img
                  src={Order}
                  alt="Loading"
                  className="h-9"
                />
               </div>
                <svg viewBox="-8 0 27 10">
                  <defs>
                    <circle
                      id="circle"
                      cx="5"
                      cy="5"
                      r="4"
                      strokeWidth="1.5"
                      fill="transparent"
                    />
                  </defs>
                  <use
                    onClick={() => GetTableNo(items)}
                    strokeLinecap="round"
                    strokeWidth="5"
                    xlinkHref="#circle"
                    stroke="#8d8e8e"
                    strokeDasharray="1,2,6.8,30"
                  />
                  <use
                    onClick={() => GetTableNo(items)}
                    strokeLinecap="round"
                    strokeWidth="5"
                    xlinkHref="#circle"
                    stroke="#c26767"
                    strokeDasharray="0,11.8,6,30"
                  />
                  <use
                    onClick={() => GetTableNo(items)}
                    strokeLinecap="round"
                    strokeWidth="5"
                    xlinkHref="#circle"
                    // stroke={`${isTableBooked(items) ? "red" : "#c6b19b"}`}
                    stroke="#c6b19b"
                    strokeDasharray="1,18.8,7,30"
                  />
                  <circle
                    onClick={() => GetTableNo(items)}
                    cx="5"
                    cy="5"
                    r="3"
                    stroke="black"
                    strokeWidth="0.2"
                    fill="transparent"
                  />
                  <circle
                    onClick={() => GetTableNo(items)}
                    cx="5"
                    cy="5"
                    r="2.5"
                    stroke="black"
                    strokeWidth="0.1"
                    fill="transparent"
                  />
                  <text
                    onClick={() => GetTableNo(items)}
                    x="5"
                    y="5.8"
                    textAnchor="middle"
                    fontSize="2"
                    className="font-bold"
                    fill="black"
                  >
                    {items?.tableNumber}
                  </text>
                </svg>
                {/* <p className="text-center font-semibold text-sm text-[#69a376]">Name of Costumer</p> */}
                <p
                  className={`${
                    isTableBooked(items)
                      ? "text-center font-semibold text-sm text-[#69a376] uppercase tracking-wide"
                      : "hidden"
                  }`}
                >
                  {items?.customerDetails?.customer_name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  table: state.table,
  chatbot: state.chatbot,
});

export default connect(mapStateToProps, {})(Table);

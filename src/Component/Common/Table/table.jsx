import React, { useEffect, useState } from "react";
import { TableNo } from "../../Common/Redux/Category/categorySlice";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetTableAPI } from "../APIs/api";
import { createTable, getTable, getTableDetails } from "../Redux/Table/tableSlice";
import { getCustomerStatus } from "../Redux/CustomerStatus/customerStatusSlice";

const Table = ({ cart, table,chatbot }) => {
  console.log('table: ', table);
  let navigate = useNavigate();
  const dispatch = useDispatch();


  let status = JSON?.parse(localStorage.getItem('orderStatus') ?? '[]')

  useEffect(() => {
    const fetch = async (data) => {
      try {
        let tableData = await GetTableAPI();
        dispatch(createTable(tableData?.data));
      } catch (error) {
        console.log('error: ', error);
      }
    };
    fetch();
  }, []);

  // showing floor wise tables functionality
  const [selectedFloor, setSelectedFloor] = useState(1); // Set initial state to floor 1

  // Extract unique floors from the data
  const uniqueFloors = Array?.from(
    new Set(table?.tableDetails[0]?.map((item) => item?.floorDetails?.floorNumber))
  );

  // Handle floor selection
  const handleFloorSelection = (event) => {
    const floorNumber = Number(event?.target?.value);
    setSelectedFloor(floorNumber);
  };

  // Filter tables by selected floor
  const filteredTables = selectedFloor
    ? table?.tableDetails[0]?.filter(
        (table) => table?.floorDetails?.floorNumber === selectedFloor
      )
    : [];

  const GetTableNo = (item) => {
    let customerDetails =  status?.filter((i)=>
       i?.data?.customer_table == item?.tableNumber
  )
  dispatch(getCustomerStatus(customerDetails));
    dispatch(getTableDetails(item));
    dispatch(TableNo(item?.tableNumber));
    navigate("/order");
  };

  useEffect(() => {
    isTableRed()
  }, [])
  

  const isTableRed = (tableNumber) => {

    return status.some(
      (s) =>
        parseInt(s?.data?.customer_table) == tableNumber?.tableNumber && s?.customer_status == "Table_Order"
    );
  };




  return (
    <>
      <div className=" px-3">
      <select id="floor-select" className="ml-28" value={selectedFloor} onChange={handleFloorSelection}>
      <option value="">Select a floor</option>
        {uniqueFloors.map((floorNumber) => (
          <option key={floorNumber} value={floorNumber}>
            Floor {floorNumber}
          </option>
        ))}
      </select>
        <div className="flex justify-center items-center">
          <div className="circle-container grid grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-7 w-3/4 ">
            {filteredTables?.map(
              (items, index) =>
              (
                <div className="cursor-pointer">
                  <svg   viewBox="-7 0 27 10">
                    <defs >
                      <circle  id="circle" cx="5" cy="5" r="4" strokeWidth="1.5" fill="transparent" />
                    </defs>
                    <use onClick={() => GetTableNo(items)} strokeLinecap="round" strokeWidth="5" xlinkHref="#circle" stroke={`${ isTableRed(items) ? "red" : "green"}`} strokeDasharray="1,2,6.3,30" />
                    <use onClick={() => GetTableNo(items)} strokeLinecap="round" strokeWidth="5" xlinkHref="#circle" stroke={`${ isTableRed(items) ? "red" : "yellow"}`} strokeDasharray="0,11.2,6,30" />
                    <use onClick={() => GetTableNo(items)} strokeLinecap="round" strokeWidth="5" xlinkHref="#circle" stroke={`${ isTableRed(items) ? "red" : "gray"}`} strokeDasharray="1,18.2,7,30" />
                    <circle onClick={() => GetTableNo(items)} cx="5" cy="5" r="3" stroke="black" strokeWidth="0.2" fill="transparent" />
                    <circle onClick={() => GetTableNo(items)} cx="5" cy="5" r="2.5" stroke="black" strokeWidth="0.1" fill="transparent" />
                    <text onClick={() => GetTableNo(items)} x="5" y="5.8" textAnchor="middle" fontSize="2" className="font-bold" fill="black">{items?.tableNumber}</text>
                  </svg>
                </div>
              )
            )}
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

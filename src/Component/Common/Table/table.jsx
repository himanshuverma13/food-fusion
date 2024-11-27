import React, { useEffect } from "react";
import { TableNo } from "../../Common/Redux/Category/categorySlice";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetTableAPI } from "../APIs/api";
import { createTable, getTable, getTableDetails } from "../Redux/Table/tableSlice";

const Table = ({ cart, table }) => {
  console.log("table: ", table?.tableDetails);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  // const TableData = [
  //   {
  //     table_Number: 1,
  //   },
  //   {
  //     table_Number: 2,
  //   },
  //   {
  //     table_Number: 3,
  //   },
  //   {
  //     table_Number: 4,
  //   },
  //   {
  //     table_Number: 5,
  //   },
  //   {
  //     table_Number: 6,
  //   },
  //   {
  //     table_Number: 7,
  //   },
  //   {
  //     table_Number: 8,
  //   },
  //   {
  //     table_Number: 9,
  //   },
  //   {
  //     table_Number: 10,
  //   },
  //   {
  //     table_Number: 11,
  //   },
  //   {
  //     table_Number: 12,
  //   },
  //   {
  //     table_Number: 13,
  //   },
  //   {
  //     table_Number: 14,
  //   },
  //   {
  //     table_Number: 15,
  //   },
  //   {
  //     table_Number: 16,
  //   },

  // ];

  let status = JSON?.parse(localStorage.getItem('orderStatus') ?? '[]')
  // console.log('status: ', status[0]?.data);
  useEffect(() => {
   console.log('status: ', status);
    const fetch = async (data) => {
      let tableData = await GetTableAPI();
      // console.log('tableData: ', tableData?.data);
      dispatch(createTable(tableData?.data));
    };
    fetch();
  }, []);

  const GetTableNo = (item) => {

    console.log('item: ', item);
    dispatch(TableNo(item?.tableNumber));
    navigate("/order");
  };

  return (
    <>
      <div className=" px-3">
        <div className="flex justify-center items-center">
          <div className="circle-container grid grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-7 w-3/4 ">
            {table?.tableDetails[0]?.map(
              (items, index) =>
              (
                <div className="cursor-pointer">
                  <svg   viewBox="-7 0 27 10">
                    <defs >
                      <circle  id="circle" cx="5" cy="5" r="4" strokeWidth="1.5" fill="transparent" />
                    </defs>

                    <use onClick={() => GetTableNo(items)} strokeLinecap="round" strokeWidth="5" xlinkHref="#circle" stroke={`${status[index]?.customer_status   == "Table_Order" && status[index]?.data?.customer_table == items.tableNumber ? "red" :"green"}`} strokeDasharray="1,2,6.3,30" />
                    <use onClick={() => GetTableNo(items)} strokeLinecap="round" strokeWidth="5" xlinkHref="#circle" stroke={`${status[index]?.customer_status   == "Table_Order" && status[index]?.data?.customer_table == items.tableNumber ? "red" :"yellow"}`} strokeDasharray="0,11.2,6,30" />
                    <use onClick={() => GetTableNo(items)} strokeLinecap="round" strokeWidth="5" xlinkHref="#circle" stroke={`${status[index]?.customer_status   == "Table_Order" && status[index]?.data?.customer_table == items.tableNumber ? "red" :"gray"}`} strokeDasharray="1,18.2,7,30" />

                    <circle onClick={() => GetTableNo(items)} cx="5" cy="5" r="3" stroke="black" strokeWidth="0.2" fill="transparent" />
                    <circle onClick={() => GetTableNo(items)} cx="5" cy="5" r="2.5" stroke="black" strokeWidth="0.1" fill="transparent" />

                    <text onClick={() => GetTableNo(items)} x="5" y="5.8" textAnchor="middle" fontSize="2" className="font-bold" fill="black">{items.tableNumber}</text>
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
});

export default connect(mapStateToProps, {})(Table);

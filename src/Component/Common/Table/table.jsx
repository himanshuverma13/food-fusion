import React, { useEffect } from "react";
import { TableNo } from "../../Common/Redux/Category/categorySlice";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetTableAPI } from "../APIs/api";
import { createTable, getTable } from "../Redux/Table/tableSlice";

const Table = ({ cart,table }) => {
  let navigate = useNavigate()
  const dispatch = useDispatch();

  const TableData = [
    {
      table_Number: 1,
    },
    {
      table_Number: 2,
    },
    {
      table_Number: 3,
    },
    {
      table_Number: 4,
    },
    {
      table_Number: 5,
    },
    {
      table_Number: 6,
    },
    {
      table_Number: 7,
    },
    {
      table_Number: 8,
    },
    {
      table_Number: 9,
    },
    {
      table_Number: 10,
    },
    {
      table_Number: 11,
    },
    {
      table_Number: 12,
    },
    {
      table_Number: 13,
    },
    {
      table_Number: 14,
    },
    {
      table_Number: 15,
    },
    {
      table_Number: 16,
    },

  ];



  useEffect(() => {
    dispatch(createTable(TableData));
    
    const fetch = async(data) =>{
      let tableData =  await GetTableAPI()
      console.log('tableData: ', tableData);
    }
    fetch()
    // console.log('tableData: ', tableData);
    // tableData.push(tableData)
  }, [])
  


  const GetTableNo = (no) => {
    dispatch(TableNo(no?.table_Number));
    navigate('/order')
  }



  return (
    <>
      <div className=" px-3">
        <div className="flex justify-center items-center">
          <div className="circle-container grid grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-7 w-3/4 ">
            {TableData?.map((items, index) => (
              <div className="cursor-pointer">
                <svg   viewBox="-7 0 27 10">
                  <defs >
                    <circle  id="circle" cx="5" cy="5" r="4" strokeWidth="1.5" fill="transparent" />
                  </defs>

                  <use onClick={() => GetTableNo(items)} strokeLinecap="round" strokeWidth="5" xlinkHref="#circle" stroke="pink" strokeDasharray="1,2,6.3,30" />
                  <use onClick={() => GetTableNo(items)} strokeLinecap="round" strokeWidth="5" xlinkHref="#circle" stroke="green" strokeDasharray="0,11.2,6,30" />
                  <use onClick={() => GetTableNo(items)} strokeLinecap="round" strokeWidth="5" xlinkHref="#circle" stroke="orange" strokeDasharray="1,18.2,7,30" />


                  <circle onClick={() => GetTableNo(items)} cx="5" cy="5" r="3" stroke="black" strokeWidth="0.2" fill="transparent" />
                  <circle onClick={() => GetTableNo(items)} cx="5" cy="5" r="2.5" stroke="black" strokeWidth="0.1" fill="transparent" />

                  <text onClick={() => GetTableNo(items)} x="5" y="5.8" textAnchor="middle" fontSize="2" className="font-bold" fill="black">{items.table_Number}</text>
                </svg>
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
});

export default connect(mapStateToProps, {})(Table);
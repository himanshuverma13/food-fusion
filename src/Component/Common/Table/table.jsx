import React, { useEffect } from "react";
import { TableNo } from "../../Common/Redux/Category/categorySlice";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Table = ({ cart }) => {
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
  ];
  const GetTableNo = (no) => {
    dispatch(TableNo(no?.table_Number));
    navigate('/order')

  }



  return (
    <>
      <div className="container px-3">
        <div className="flex justify-center">
          <div className="circle-container grid grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-7 w-3/4 ">
            {TableData.map((items, index) => (
              <div key={index} className="outter-circle cursor-pointer  my-3 mx-20" onClick={() => GetTableNo(items)}>
                <div className='inner-circle'>
                  <span className='text-2xl'>{items.table_Number}</span>
                  <div className="border-part part1"></div>
                  <div className="border-part part2"></div>
                  <div className="border-part part3"></div>
                </div>
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
});

export default connect(mapStateToProps, {})(Table);
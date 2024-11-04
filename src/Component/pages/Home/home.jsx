import React from "react";
import Navbar from "../../Common/Navbar/navbar";
import Table from "../../Common/Table/table";
import Button from "../../Common/Button/button";
import { NavLink } from "react-router-dom";
import { SetTable } from "../../Common/Redux/Category/categorySlice";
import { connect, useDispatch } from "react-redux";
import StatusFooter from "../../Common/Footer/statusFooter";
import TableStatusModal from "../../Common/Modal/tableStatusModal";
import NewOrder from "../../assets/Images/new order.svg";
const Home = () => {

  const dispatch = useDispatch();

  const SetTableOnCategory = () => {
    let setTableNull = 0
    dispatch(SetTable(setTableNull))
  }



  return (
    <>
      <div className=" ">
        <Navbar />
        <div className="flex justify-end">
          <NavLink to="/category">
          <img src={NewOrder} className="h-16 me-7" alt="Loading" />
            {/* <svg className="me-7" onClick={() => SetTableOnCategory()} version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 67" width="78" height="67">
              <g>
                <path fill-rule="evenodd" class="s0" d="m46.8 1.4c4.4 2.3 8 6.8 9.3 11.6 4.2 16.3-15.7 28.6-28.1 17.4-4.9-4.5-6.4-8.1-5.8-14.9 0.5-6.2 2.6-9.7 7.8-13.3 3.9-2.6 12.5-3 16.8-0.8zm-23.4 18.8c1.6 7.9 7.8 13 16.1 13 5.6 0 9.9-2.4 13.1-7.2 2.3-3.4 2.6-4.8 2.2-9.8-0.5-6.7-2.5-10.1-7.9-13.1-11.7-6.7-26.2 3.8-23.5 17.1z" />
                <path fill-rule="evenodd" fill="#cd3f14" class="s0" d="m44.5 8c1.1 1 3 2.1 4.2 2.4 2.9 0.9 3.8 4.1 2 7-0.9 1.3-1.9 3.9-2.2 6l-0.7 3.6h-17.8v-4c0-2.7-0.5-4.3-1.5-4.6-1.8-0.7-2-5.5-0.3-7.2 0.7-0.7 2-1.2 2.9-1.2 0.9 0 1.9-0.7 2.3-1.5 0.3-0.9 1.6-2 2.8-2.5 2.8-1 5.6-0.4 8.3 2zm-5.5 16c-5.2 0-7.9 0.4-7.5 1 0.3 0.5 3.7 1 7.5 1 3.8 0 7.2-0.5 7.5-1 0.4-0.6-2.3-1-7.5-1z" />
                <path class="s0" d="m14.1 9.3c-1.2 2.4-2.1 5.9-2.1 7.8 0 3.3 3.6 12.6 4.5 11.7 0.3-0.2-0.5-2.2-1.6-4.4-2.6-4.9-2.1-11.8 1-16.3 1.2-1.7 1.8-3.1 1.3-3.1-0.6 0-2 1.9-3.1 4.3z" />
                <path class="s0" d="m61 5.4c0 0.3 0.9 2 2 3.8 2.6 4.3 2.6 11.2 0 16.1-2.5 4.6-1.7 4.9 1 0.4 2.5-4 2.6-11.6 0.4-16.3-1.5-3.1-3.4-5.3-3.4-4z" />
                <path class="s0" d="m58 8.7c0 0.5 0.7 1.7 1.5 2.7 2 2.6 1.9 7.9-0.1 11.9-1.5 3-1.5 3.1 0.1 1.6 2.5-2.4 3.1-9.9 1.1-13.7-1.6-3.1-2.6-4.1-2.6-2.5z" />
                <path class="s0" d="m18.1 10.4c-2.1 2.5-2.4 8-0.7 12.1 0.9 2.1 1.9 3.6 2.1 3.3 0.3-0.3-0.1-1.8-1-3.4-1.9-3.7-1.9-6.7 0-10.4 1.7-3.2 1.5-3.9-0.4-1.6z" />
                <path fill-rule="evenodd" className="bg-emerald-900" d="m39.4 38c26.8 0 36.5 0.3 37.4 1.2 1.7 1.7 1.7 24.9 0 26.6-0.9 0.9-10.7 1.2-38 1.2-35.3 0-36.8-0.1-37.8-1.9-0.5-1.1-1-6.9-1-13 0-8.6 0.3-11.3 1.6-12.5 1.3-1.4 6.2-1.6 37.8-1.6zm0.3 1c-19.4 0-35.8 0.4-36.5 0.8-0.9 0.7-1.2 4-1 13.3l0.3 12.4 35.9 0.3c25.6 0.2 36.3-0.1 37.2-0.9 1.7-1.4 2-21 0.4-24-1-1.8-2.5-1.9-36.3-1.9z" />
                <path class="s0" d="m4.7 46.7c-1.1 1-0.8 12.3 0.3 12.3 0.6 0 1-1.9 1-4.3v-4.2l2.8 4.3c1.6 2.3 3.2 3.9 3.5 3.5 1.1-1 0.8-11.1-0.2-11.8-0.6-0.3-1.1 1.4-1.3 3.7l-0.3 4.3-2.6-4.3c-1.4-2.3-2.9-3.9-3.2-3.5z" />
                <path class="s0" d="m14 52.5v6.5h3.5c1.9 0 3.5-0.5 3.5-1 0-0.6-1.4-1-3.1-1-4.1 0-3.6-3.2 0.6-4.1l3-0.7-3.2-0.1c-2.6-0.1-3.3-0.5-3.3-2.1 0-1.6 0.7-2 3-2 1.7 0 3-0.5 3-1 0-0.6-1.6-1-3.5-1h-3.5z" />
                <path class="s0" d="m22.5 51.6c0.9 7.6 1.6 8.6 3.1 4.3l1.2-3.4 1.2 3.3c1.6 4.2 2.6 3.1 3.3-3.6 0.6-5.3-0.8-7.5-1.6-2.5-0.4 2.7-0.4 2.7-1.2 0.5-1-3-2.1-2.8-3.3 0.5l-1 2.8-0.1-3.2c-0.1-1.7-0.6-3.5-1.2-3.9-0.9-0.5-1 0.9-0.4 5.2z" />
                <path fill-rule="evenodd" class="s0" d="m40.8 47.3c2.1 2.5 2.5 6.6 0.8 9.2-1.9 2.9-2.9 3.1-5 0.9-2.1-2-2-7.3 0.1-9.6 1.9-2.1 2.7-2.2 4.1-0.5zm-3.4 2.1c-1 2.6 0 7.1 1.6 7.1 1.7 0 2.4-2.7 1.6-6.1-0.7-2.7-2.4-3.2-3.2-1z" />
                <path fill-rule="evenodd" class="s0" d="m46.4 46c3.5 0 5.2 2.5 3.7 5.6-0.8 1.8-0.8 3.1 0 4.5 1.8 3.5 0.1 3.3-2-0.2-2-3.3-2.4-3.2-3.4 1.6-0.3 1.1-0.5-1-0.6-4.8-0.1-6.4 0-6.7 2.3-6.7zm0.6 2c-1.5 0-2 0.5-1.8 1.7 0.2 1 1 1.8 1.8 1.8 0.8 0 1.6-0.8 1.8-1.8 0.2-1.2-0.3-1.7-1.8-1.7z" />
                <path fill-rule="evenodd" class="s0" d="m52.8 46c2.5 0 5.2 3.4 5.2 6.5 0 3.1-2.7 6.5-5.2 6.5-0.5 0-0.8-2.9-0.8-6.5 0-3.6 0.3-6.5 0.8-6.5zm1.2 7c0 2.2 0.2 4 0.5 4 1.1 0 2.5-4.3 2-6-1.1-3.4-2.5-2.2-2.5 2z" />
                <path class="s0" d="m60 52.5v6.5h3c1.7 0 3-0.5 3-1 0-0.6-1.1-1-2.5-1-1.8 0-2.5-0.5-2.5-1.9 0-1.5 0.8-2.1 3.3-2.4l3.2-0.4-3.2-0.1c-2.6-0.2-3.3-0.6-3.3-2.2 0-1.5 0.7-2 2.5-2 1.4 0 2.5-0.5 2.5-1 0-0.6-1.3-1-3-1h-3z" />
                <path fill-rule="evenodd" class="s0" d="m70.4 46c3.5 0 5.2 2.5 3.6 5.4-0.9 1.8-0.9 2.9-0.1 4.4 1.3 2.5 1.4 3.2 0.2 3.2-0.5 0-1.4-1.4-2.1-3.1-1.4-3.3-2.6-2.9-3.3 1.1-0.2 1.4-0.5-0.5-0.6-4.3-0.1-6.4 0-6.7 2.3-6.7zm0.7 2c-1.5 0-2.1 0.6-2.1 2.1 0 2.5 3.3 2.2 3.8-0.4 0.2-1.2-0.3-1.7-1.7-1.7z" />
              </g>
            </svg> */}
          </NavLink>
        </div>
        <TableStatusModal />
        <Table />
        <StatusFooter />
      </div>
    </>
  );
};


export default Home

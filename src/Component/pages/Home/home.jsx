import React from "react";
import Navbar from "../../Common/Navbar/navbar";
import Table from "../../Common/Table/table";
import Button from "../../Common/Button/button";
import { NavLink } from "react-router-dom";
import { SetTable } from "../../Common/Redux/Category/categorySlice";
import { connect, useDispatch } from "react-redux";
import StatusFooter from "../../Common/Footer/statusFooter";
import TableStatusModal from "../../Common/Modal/tableStatusModal";
import categoryMenu from "../../assets/Images/categroyMenu.svg";
import NewOrder from "../../assets/Images/new order.svg";
const Home = () => {

  const dispatch = useDispatch();

  const SetTableOnCategory = () => {
    let setTableNull = 0
    dispatch(SetTable(setTableNull))
  }



  return (
    <>
      <div className="home-section">
        <Navbar />
        <div className="absolute right-0">
          <NavLink to="/category">
            <img src={NewOrder} className="h-16 me-7" alt="Loading" />
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

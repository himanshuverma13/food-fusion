import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserSelect from '../SelectUser/userSelect';
import Category from '../../pages/Category/category';
import Payment from '../../pages/Payment/payment';
import Home from '../../pages/Home/home';
import Chef from '../../pages/Chef/chef';
import Registration from '../Auth/registration';
import Login from '../Auth/login';
import Waiter from '../../pages/Waiter/waiter';
import Menu from '../../pages/menu/menu';
import Order from '../../pages/order/order';




const RootRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserSelect />} />

          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/waiter" element={<Waiter />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          

        </Routes>
      </Router>
    </>
  )
}

export default RootRoutes
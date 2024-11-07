import React from 'react'
import navHome from '../../assets/Images/sideNavImg/navhome.svg'
import navMenu from '../../assets/Images/sideNavImg/navMenu.svg'
import navCart from '../../assets/Images/sideNavImg/navCart.svg'
import navInvoice from '../../assets/Images/sideNavImg/navInvoice.svg'
import invoice from '../../assets/Images/sideNavImg/Invoice.svg'
import staff from '../../assets/Images/sideNavImg/Staff management.svg'
import navSetting from '../../assets/Images/sideNavImg/navSetting.svg'
import navBack from '../../assets/Images/sideNavImg/navBack.svg'
import { NavLink } from 'react-router-dom'
const SideNavbar = () => {
  return (
   <>
   <div className='row-start-2 mt-20'>
   <NavLink to="/home">
    <img className='m-4 w-7' src={navHome} alt="loading" />
    </NavLink>
    <NavLink to="/menu">
    <img className='m-4 w-7' src={navMenu} alt="loading" />
    </NavLink>
    <NavLink to="/chef">
    <img className='m-4 w-7' src={navCart} alt="loading" />
    </NavLink>
    <img className='m-4 w-7' src={navInvoice} alt="loading" />
    <img className='m-4 w-7' src={invoice} alt="loading" />
    <img className='m-4 w-7' src={staff} alt="loading" />
   </div>
   <div className="row-start-5">
    <ul>
        <li className='text-center my-2'><img className=' w-6 mx-auto' src={navSetting} alt="loading" /><span className='text-[#cd3f14]'>settings</span></li>
        <li className='text-center my-2'><img className=' w-6 mx-auto' src={navBack} alt="loading" /><span className='text-[#cd3f14]'>sign out</span></li>
    </ul>
   </div>
   </>
  )
}

export default SideNavbar
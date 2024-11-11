// import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import Button from "../Button/button";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

// const Navbar = ({cart}) => {
//   console.log('cart: ', cart);
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   const navItems = [
//     { nav_id: 1, nav_text: "Home",link:"" },
//     { nav_id: 2, nav_text: "Category",link:"Category" },
//     { nav_id: 3, nav_text: "Payment",link:"payment" },
//     { nav_id: 4, nav_text: "Chef",link:"chef" },
//     { nav_id: 8, nav_text: "Waiter",link:"waiter" },
//     { nav_id: 6, nav_text: "Login",link:"login" },
//     { nav_id: 7, nav_text: "Registration",link:"registration" },
//     { nav_id: 5, nav_text: "Contact",link:"" },
//   ];

//   return (
//     <div className="flex justify-between items-center h-20 mx-auto px-6 bg-slate-500 text-slate-950">
//       <h1 className="w-full text-2xl font-semibold text-sky-300">
//         FOOD FUSION
//       </h1>

//       {/* Desktop Navigation */}
//       <ul className="hidden md:flex">
//         {navItems.map((item) => (
//           <Link to={`/${item?.link}`}>
//           <li
//             key={item.nav_id}
//             className="p-4 hover:bg-sky-300 rounded-xl m-2 cursor-pointer duration-300 text-white hover:text-black"
//           >
//             {item.nav_text}
//           </li>
//             </Link>
//         ))}
//       </ul>

//       {/* Mobile Navigation Icon */}
//       <div onClick={handleNav} className="block md:hidden">
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>
//       <div
//         className={`${
//           nav ? "block" : "hidden"
//         } absolute top-16 left-0 w-full bg-slate-500 bg-opacity-70 z-10 transition-transform duration-300 ease-in-out transform ${
//           nav ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <h1 className="text-3xl font-bold text-sky-300 text-center my-4">
//           REACT.
//         </h1>

//         {/* Mobile Navigation Items */}
//         <ul className="flex flex-col items-center">
//           {navItems.map((item) => (
//             <li
//               key={item.nav_id}
//               className="p-4 w-full text-center text-slate-50 border-b border-gray-600 hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer"
//               onClick={handleNav} // Close menu on item click
//             >
//               {item.nav_text}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };


// const mapStateToProps = (state) => ({
//   cart: state.cart,
// });

// export default connect(mapStateToProps, {})(Navbar);.



import React, { useState } from 'react';
import logoBgNo from '../../assets/Images/logo-svg.svg'
import billing from '../../assets/Images/cashier-svg.svg'
import { useNavigate } from 'react-router-dom';
import SideNavbar from './sideNav';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let navigate = useNavigate()

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="p-2 flex justify-between items-center">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className=" focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill='black' width="20" height="20" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
    
   
        <div onClick={() => navigate('/home')}  className="ml-4 cursor-pointer flex items-center justify-center">
          <img className='w-1/5 me-2' src={logoBgNo} alt="Loading" />

          <span className="food-fusion text-3xl text-[#cd3f14]">FOOD-SKILL</span>
        </div>
      </div>  
      <div className="flex items-center mx-4 space-x-4">
        <h3 className='m-0 '>CHASIER</h3>
        <img className='bg-red-700 h-11 rounded-full p-1' src={billing} alt="Loading" />
      </div>
      <div className={`fixed grid grid-cols-1 grid-rows-5 gap-4 inset-y-0 left-0 w-16 bg-[#ede9dd] transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <div className="p-4 mt-4 text-center">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill='black' width="20" height="20" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
          </button>
        </div>
        {/* Add your sidebar content here */}
        <SideNavbar/>
      </div>
    </nav>
  );
};

export default Navbar;
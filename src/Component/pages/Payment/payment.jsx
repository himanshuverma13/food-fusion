import React,{useState} from "react";
import { connect } from "react-redux";
import Navbar from "../../Common/Navbar/navbar";
import StatusFooter from "../../Common/Footer/statusFooter";
import Invoice from "../../Common/invoice/invoice";

const Payment = ({cart}) => {
    console.log('cart?.totalCount: ', cart); 
     // Side Nav Functionality
   const [moveSideNav, setmoveSideNav] = useState(true)
   const SideNavFunctionality = () => {
     setmoveSideNav(!moveSideNav)
   }
    return(
        <>
        <Navbar SideNavFunctionality={SideNavFunctionality}/>
         {/* <ul>
              <li>
                Total Items: {cart?.totalCount}
              </li>
              <li>
                Total Cost: ${cart?.totalCount * 2}
              </li>
             
            </ul> */}
            <div className={moveSideNav ? "ms-16" : "ms-0"}>
            <Invoice/>
            </div>
            <StatusFooter/>
        </>
    );
};


const mapStateToProps = (state) => ({
    cart: state.cart,
  });
  
  export default connect(mapStateToProps, {})(Payment);
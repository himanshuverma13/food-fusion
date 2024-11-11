import React from "react";
import { connect } from "react-redux";
import Navbar from "../../Common/Navbar/navbar";
import StatusFooter from "../../Common/Footer/statusFooter";
import Invoice from "../../Common/invoice/invoice";

const Payment = ({cart}) => {
    console.log('cart?.totalCount: ', cart); 
    return(
        <>
        <Navbar/>
         {/* <ul>
              <li>
                Total Items: {cart?.totalCount}
              </li>
              <li>
                Total Cost: ${cart?.totalCount * 2}
              </li>
             
            </ul> */}
            <Invoice/>
            <StatusFooter/>
        </>
    );
};


const mapStateToProps = (state) => ({
    cart: state.cart,
  });
  
  export default connect(mapStateToProps, {})(Payment);
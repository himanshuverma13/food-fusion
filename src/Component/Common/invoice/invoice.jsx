import React from 'react'
import { connect } from 'react-redux';

const Invoice = ({ cart }) => {
  console.log('cart: ', cart);

  // Calculate total price (if needed for the footer)
  const totalPrice = cart?.itemsInCart?.reduce((acc, item) => acc + item.price * item.quantity, 0);
  console.log('totalPrice: ', totalPrice);

  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-400 rounded-lg p-6">
      {/* Header */}
      <div className="text-center">
        <div className="bg-orange-400 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
          <img
            src="https://via.placeholder.com/30" // Replace with your logo URL
            alt="Logo"
            className="w-8 h-8"
          />
        </div>
        <h2 className="text-lg font-bold tracking-wider">Restaurant's name</h2>
        <p className="text-sm my-2">Address: 12, something, something</p>
      </div>

      {/* Invoice & Contact Information */}
      <div>
        <div className="flex justify-between text-sm">
          <p>
            <span className="">Invoice No.:</span> 12343
          </p>
          <p>
            <span className="">Date:</span> {new Date().toLocaleDateString()}
          </p>
        </div>
        <hr className="my-2 border-black" />
        <div className="text-sm">
          <p>
            <span className="font-semibold tracking-wider">Name:</span> Ms. jci3rc
          </p>
          <p>
            <span className="font-semibold tracking-wider">Contact No.:</span> 7869390996
          </p>
        </div>
        <hr className="mt-2 border-black" />
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-black">
            <th className="tracking-wider text-left">Item</th>
            <th className="tracking-wider text-center">Qty.</th>
            <th className="tracking-wider text-right">Price</th>
            <th className="tracking-wider text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over items in the cart */}
          {cart?.itemsInCart?.map((item) => (
            <tr className="border-b border-gray-300" key={item.id}>
              <td className="font-semibold">{item.food}</td>
              <td className="text-base font-semibold text-center">{item.quantity}</td>
              <td className="text-base font-semibold text-right">₹ {item.price}</td>
              <td className="text-base font-semibold text-right">₹ {item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="text-sm my-2">
        <p className="flex justify-between my-2">
          <span className="font-semibold tracking-wider">Total Quantity:</span> 
          <span>{cart?.itemsInCart?.reduce((acc, item) => acc + item.quantity, 0)}</span>
        </p>
        <p className="flex justify-between my-2">
          <span className="font-semibold tracking-wider">Tax:</span> <span>₹ 40</span>
        </p>
        <p className="flex justify-between my-2 tracking-wider text-lg">
          <span>SUB-TOTAL:</span> <span>₹ {totalPrice}</span>
        </p>
      </div>
      <hr className="mt-2 border-black" />

      {/* Contact Info */}
      <div className="text-center mt-4">
        <p className="text-sm flex justify-center items-center">
          <span className="bg-green-400 mx-1 p-2 rounded-full text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-4 h-4 text-white"
            >
              <path d="M3.654 1.328a1 1 0 00-.979.199C1.676 2.58.673 3.882.287 5.514c-.242 1.007-.202 2.232.456 3.49.598 1.167 1.455 2.442 2.51 3.497 1.055 1.056 2.33 1.912 3.497 2.51 1.258.658 2.483.698 3.49.456 1.631-.386 2.934-1.39 3.987-3.398a1 1 0 00-.198-.98l-2.408-2.408a1 1 0 00-.644-.287 1 1 0 00-.736.287l-1.08 1.08a1 1 0 01-1.415 0l-2.112-2.113a1 1 0 010-1.414l1.08-1.08a1 1 0 00.287-.736 1 1 0 00-.287-.644L4.633 1.526a1 1 0 00-.979-.199z" />
            </svg>
          </span>
          Contact No. - 7869390996
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {})(Invoice);

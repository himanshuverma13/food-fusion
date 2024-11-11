import React from 'react'
import { connect } from 'react-redux';

const Invoice = ({ cart }) => {
  console.log('cart: ', cart);
  const totalPrice = cart?.itemsInCart?.reduce((acc, food) => acc + food.price * food.quantity, 0);
  console.log('totalPrice: ', totalPrice);
  return (
    <>
      {/* <div className="w-1/2 border border-black shadow-md">
        <div className='text-center mt-4'>
          <h2 className='p-3 bg-slate-500 inline'>FUSION</h2>
        </div>
        <h4 className='text-center mt-2 font-bold'>FOOD FUSION</h4>
        <div className=' justify-center text-center' >
          <span>Invoice No. 130007</span>
        </div>
        <div className="flex justify-center">
          <h2 className='inline font-serif mx-2'>Customer Name : </h2> <h3 className='inline font-bold mx-2'>Admin Panel</h3>
        </div>
        <div className="flex justify-center">
          <h2 className='inline font-serif mx-2'>Mobile Number : </h2> <h3 className='inline font-bold mx-2'>+91 9876543210</h3>
        </div>


        <div
          class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border"
        >
          <table id="productTable" class="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th class="p-4 border-b border-slate-300 bg-slate-50">
                  <p class="block text-sm font-mono leading-none text-slate-900">
                    Items
                  </p>
                </th>

                <th class="p-4 border-b border-slate-300 bg-slate-50">
                  <p class="block text-sm font-mono leading-none text-slate-900">
                    Quantity
                  </p>
                </th>
                <th class="p-4 border-b border-slate-300 bg-slate-50">
                  <p class="block text-sm font-mono leading-none text-slate-900">
                    Price
                  </p>
                </th>
                <th class="p-4 border-b border-slate-300 bg-slate-50">
                  <p class="block text-sm font-mono leading-none text-slate-900">
                    Total
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>

              {cart?.itemsInCart?.map((item) =>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">{item?.food}</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">{item?.quantity}</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">₹ {item?.price}</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">₹ {item?.quantity * item?.price * 10}</p>
                  </td>
                </tr>
              )}

            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3"
                  class="p-4 text-left font-bold text-slate-800 border-t border-slate-300">
                  Discount :-
                </td>
                <td
                  colspan="1"
                  class="p-4 font-semibold text-slate-800 border-t border-slate-300"
                >
                  ₹ 00.00
                </td>
              </tr>
              <tr>
                <td
                  colSpan="3"
                  class="p-4 text-left font-bold text-slate-800 border-t border-slate-300"
                >
                  Total :-
                </td>
                <td
                  colspan="1"
                  class="p-4 font-semibold text-slate-800 border-t border-slate-300"
                >
                  ₹ {totalPrice * 10}.00
                </td>
              </tr>
            </tfoot>
          </table>
          <ul className='flex justify-between my-2'>
            <li className='mx-3'>PayMode : <span>UPI</span></li>
            <li className='mx-3'>Date : <span>{new Date().toDateString()}</span></li>
          </ul>
        </div>



      </div> */}

<div className="max-w-sm mx-auto bg-white border border-gray-400 rounded-lg p-6">
      {/* Header */}
      <div className="text-center ">
        <div className="bg-orange-400 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
          <img
            src="https://via.placeholder.com/30" // Replace with your logo URL
            alt="Logo"
            className="w-8 h-8"
          />
        </div>
        <h2 className="text-lg font-bold tracking-wider">Restaurant's name</h2>
        <p className="text-sm my-2">Address : 12, something, something</p>
      </div>

      {/* Invoice & Contact Information */}
      <div className="">
        <div className="flex justify-between text-sm">
          <p>
            <span className="">Invoice No.:</span> 12343
          </p>
          <p>
            <span className="">Date:</span> 31-10-24
          </p>
        </div>
        <hr className=' my-2 border-black' />
        <div className="text-sm">
          <p className=''>
            <span className="font-semibold tracking-wider">Name:</span> Ms. jci3rc
          </p>
          <p className=''>
            <span className="font-semibold tracking-wider">Contact No.:</span> 7869390996
          </p>
        </div>
        <hr className=' mt-2 border-black' />

      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead>
          <tr className=" border-b-2 border-black">
            <th className="tracking-wider text-left">Item</th>
            <th className="tracking-wider text-center">Qty.</th>
            <th className="tracking-wider text-right">Price</th>
            <th className="tracking-wider text-right">Total</th>
          </tr>
        </thead>
        <tbody className=''>
          <tr className=" border-b border-gray-300">
            <td className=' font-semibold'>Item 1</td>
            <td className=" text-base font-semibold   text-center">2</td>
            <td className=" text-base font-semibold   text-right">120</td>
            <td className=" text-base font-semibold   text-right">240</td>
          </tr>
          <tr className=" border-b border-gray-300">
            <td className=' font-semibold'>Item 1</td>
            <td className=" text-base font-semibold   text-center">2</td>
            <td className=" text-base font-semibold   text-right">120</td>
            <td className=" text-base font-semibold   text-right">240</td>
          </tr>
          <tr className=" border-b border-gray-300">
            <td className=' font-semibold'>Item 1</td>
            <td className=" text-base font-semibold   text-center">2</td>
            <td className=" text-base font-semibold   text-right">120</td>
            <td className=" text-base font-semibold   text-right">240</td>
          </tr>
          <tr className=" border-b border-gray-300">
            <td className=' font-semibold'>Item 1</td>
            <td className=" text-base font-semibold   text-center">2</td>
            <td className=" text-base font-semibold   text-right">120</td>
            <td className=" text-base font-semibold   text-right">240</td>
          </tr>
        </tbody>
      </table>


      {/* Totals */}
      <div className="text-sm my-2">
        <p className="flex justify-between my-2">
          <span className=" font-semibold tracking-wider ">Total Quantity:</span> <span>8</span>
        </p>
        <p className="flex justify-between my-2">
          <span className=" font-semibold tracking-wider ">Tax:</span> <span>Rs.40</span>
        </p>
        <p className="flex justify-between my-2  tracking-wider  text-lg">
          <span>SUB-TOTAL:</span> <span>Rs. 1000</span>
        </p>
      </div>
      <hr className=' mt-2 border-black' />


      {/* Contact Info */}
      <div className="text-center mt-4">
        <p className="text-sm flex justify-center items-center">
          <span className='bg-green-400 mx-1 p-2 rounded-full text-center'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-4 h-4 text-white "
          >
            <path d="M3.654 1.328a1 1 0 00-.979.199C1.676 2.58.673 3.882.287 5.514c-.242 1.007-.202 2.232.456 3.49.598 1.167 1.455 2.442 2.51 3.497 1.055 1.056 2.33 1.912 3.497 2.51 1.258.658 2.483.698 3.49.456 1.631-.386 2.934-1.39 3.987-3.398a1 1 0 00-.198-.98l-2.408-2.408a1 1 0 00-.644-.287 1 1 0 00-.736.287l-1.08 1.08a1 1 0 01-1.415 0l-2.112-2.113a1 1 0 010-1.414l1.08-1.08a1 1 0 00.287-.736 1 1 0 00-.287-.644L4.633 1.526a1 1 0 00-.979-.199z" />
          </svg>
          </span>
          Contact No. - 7869390996
        </p>
      </div>
    </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {})(Invoice);

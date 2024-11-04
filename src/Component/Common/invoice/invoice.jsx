import React from 'react'
import { connect } from 'react-redux';

const Invoice = ({ cart }) => {
  console.log('cart: ', cart);
  const totalPrice = cart?.itemsInCart?.reduce((acc, food) => acc + food.price * food.quantity, 0);
  console.log('totalPrice: ', totalPrice);
  return (
    <>
      <div className="w-1/2 border border-black shadow-md">
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



      </div>

    </>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {})(Invoice);

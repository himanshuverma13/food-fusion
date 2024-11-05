import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import Button from "../Button/button";

const PaymentModal = ({ isOpen, closeModal }) => {
    // const { register, handleSubmit, reset } = useForm();

    const handleModalClose = () => {
        reset();
        closeModal();
    };

    // const onSubmit = (data) => {
    //     console.log(data);
    //     // closeModal();
    // };

    const [paymentMethod, setPaymentMethod] = useState('');
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
      // Handle form submission
    };

    return (
        <>
            <Dialog
                open={isOpen}
                onClose={handleModalClose}
                className="fixed inset-0 z-10 flex items-center justify-center"
            >
                {/* <div
                    className="fixed inset-0 bg-black bg-opacity-50"
                    aria-hidden="true"
                    onClick={handleModalClose}
                /> */}
                {/* <div
                    className="relative bg-white p-6 rounded shadow-lg z-20"
                >
                    <h4 className="text-xl mb-4">
                        Payment Modal Form
                    </h4>
                    <div className="text-center flex justify-center">
                        <h4 className="px-3 w-1/2 py-5 border border-gray-500 bg-red-300 rounded-full">FUSION</h4>
                    </div>
                    <div className="flex justify-center">
                        <h2>FOOD FUSION</h2>  
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block mb-2">
                                Name
                                </label>
                                <input
                                className="border"
                                    type="text"
                                    id="name"
                                    name=""
                                    {...register("name")}
                                />
                            <label className="block mb-2">
                                Phone Number
                                </label>
                                <input
                                className="border"
                                    type="number"
                                    id="number"
                                    {...register('number')}
                                />
                        </div>
                        <Button
                            title="Submit"
                            btn_class="bg-blue-500 text-white px-4 py-2 rounded"
                            btn_type="submit"
                        />
                    </form>

                </div> */}
                <div className="max-w-md w-full mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Payment Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Payment Method</label>
          <div className="flex space-x-4">
            {['Cash', 'UPI', 'Card'].map((method) => (
              <label key={method} className="flex items-center">
                <input
                  type="checkbox"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                  className="mr-2"
                />
                {method}
              </label>
            ))}
          </div>
        </div>

        {paymentMethod === 'Cash' && (
          <>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="cashName">Name</label>
              <input
                {...register('cashName', { required: 'Name is required' })}
                id="cashName"
                className="w-full px-3 py-2 border rounded-lg"
              />
              {errors.cashName && <p className="text-red-500 text-sm mt-1">{errors.cashName.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="cashNumber">Number</label>
              <input
                {...register('cashNumber', { required: 'Number is required' })}
                id="cashNumber"
                className="w-full px-3 py-2 border rounded-lg"
              />
              {errors.cashNumber && <p className="text-red-500 text-sm mt-1">{errors.cashNumber.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="cashAmount">Amount</label>
              <input
                {...register('cashAmount', { required: 'Amount is required' })}
                id="cashAmount"
                type="number"
                className="w-full px-3 py-2 border rounded-lg"
              />
              {errors.cashAmount && <p className="text-red-500 text-sm mt-1">{errors.cashAmount.message}</p>}
            </div>
          </>
        )}

        {paymentMethod === 'UPI' && (
          <>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="upiName">Name</label>
              <input
                {...register('upiName', { required: 'Name is required' })}
                id="upiName"
                className="w-full px-3 py-2 border rounded-lg"
              />
              {errors.upiName && <p className="text-red-500 text-sm mt-1">{errors.upiName.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="upiNumber">Number</label>
              <input
                {...register('upiNumber', { required: 'Number is required' })}
                id="upiNumber"
                className="w-full px-3 py-2 border rounded-lg"
              />
              {errors.upiNumber && <p className="text-red-500 text-sm mt-1">{errors.upiNumber.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="upiAmount">Amount</label>
              <input
                {...register('upiAmount', { required: 'Amount is required' })}
                id="upiAmount"
                type="number"
                className="w-full px-3 py-2 border rounded-lg"
              />
              {errors.upiAmount && <p className="text-red-500 text-sm mt-1">{errors.upiAmount.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold">UPI Scanner</label>
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                {/* Add your UPI scanner component here */}
                <p>UPI Scanner Placeholder</p>
              </div>
            </div>
          </>
        )}

        {paymentMethod === 'Card' && (
          <>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="cardName">Name</label>
              <input
                {...register('cardName', { required: 'Name is required' })}
                id="cardName"
                className="w-full px-3 py-2 border rounded-lg"
              />
              {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="cardNumber">Card Number</label>
              <input
                {...register('cardNumber', { required: 'Card number is required' })}
                id="cardNumber"
                className="w-full px-3 py-2 border rounded-lg"
              />
              {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="cardExpiry">Expiry Date</label>
              <input
                {...register('cardExpiry', { required: 'Expiry date is required' })}
                id="cardExpiry"
                placeholder="MM/YY"
                className="w-full px-3 py-2 border rounded-lg"
              />
              {errors.cardExpiry && <p className="text-red-500 text-sm mt-1">{errors.cardExpiry.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="cardCVV">CVV</label>
              <input
                {...register('cardCVV', { required: 'CVV is required' })}
                id="cardCVV"
                type="password"
                maxLength="4"
                className="w-full px-3 py-2 border rounded-lg"
              />
              {errors.cardCVV && <p className="text-red-500 text-sm mt-1">{errors.cardCVV.message}</p>}
            </div>
          </>
        )}

        {paymentMethod && (
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Submit Payment
          </button>
        )}
      </form>
    </div>
            </Dialog>
        </>
    );
};
export default PaymentModal;

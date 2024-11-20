import React, { useState } from "react";
import { useForm } from "react-hook-form";

const TableReservationModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    setIsOpen(false);

  };

  return (
    <>
      <div className="relative flex items-center">
        <button
          className="border-solid border-2 border-[#544013] rounded-xl text-white bg-[#d79555] px-1.5 py-1 text-sm  font-bold tracking-wider uppercase"
          onClick={handleButtonClick}
        >
          Add Reservation
        </button>
        {isOpen && (
          <div className="fixed z-10 top-0 right-0 bottom-0 left-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="bg-[#f6f6e9] border-2 border-black rounded-lg shadow-lg p-4 w-1/4 h-2/2 mx-3">
              <div className="">
                <div className="flex justify-between">
                  <h2 className="text-2xl font-normal mb-2">
                    Table Reservation
                  </h2>
                  <svg
                    className="w-6 h-6 cursor-pointer"
                    onClick={handleModalClose}
                    fill="black"
                    stroke="black"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      {...register("name", { required: true })}
                      className="mt-1 block w-full border border-gray-300 py-1 px-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      {...register("mobile", {
                        required: true,
                        pattern: /^[0-9]{10}$/,
                      })}
                      className="mt-1 block w-full border border-gray-300 py-1 px-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.mobile && (
                      <span className="text-red-500 text-sm">
                        Invalid mobile number
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date
                    </label>
                    <input
                      type="date"
                      {...register("date", { required: true })}
                      className="mt-1 block w-full border border-gray-300 py-1 px-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.date && (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Time
                    </label>
                    <input
                      type="time"
                      {...register("time", { required: true })}
                      className="mt-1 block w-full border border-gray-300 py-1 px-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.time && (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Number of Persons
                    </label>
                    <input
                      type="number"
                      placeholder="No. of Persons"
                      {...register("numberOfPersons", {
                        required: true,
                        min: 1,
                      })}
                      className="mt-1 block w-full border border-gray-300 py-1 px-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.numberOfPersons && (
                      <span className="text-red-500 text-sm">
                        At least one person is required
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-600 text-white rounded-md py-2 hover:bg-gray-700"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default TableReservationModal;

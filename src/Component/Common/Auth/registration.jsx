import React from "react";
import { useForm } from "react-hook-form";

// Images
import User from "../../assets/Images/admin/Add user.svg";
import Navbar from "../Navbar/navbar";
const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
        
      <div>
      <Navbar />
        <div className="flex items-center ms-3">
          <img src={User} className="h-10" alt="Loading" />
          <p className="font-bold text-xl ms-2">Add New User</p>
        </div>
        <div className="border-solid border-4 px-2 pb-4 mx-3 border-[#544013] bg-[#ede9dd] py-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 grid-rows-5 gap-4"
          >
            <div>
              <label htmlFor="option" className="text-lg font-bold">
                Select Category
              </label>
              <div className="relative">
                <select
                  class="appearance-none w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg"
                  id="option"
                  {...register("option", {
                    required: "Please select an option",
                  })}
                >
                  <option value="">Please choose&hellip;</option>
                  <option value="1">Cashier</option>
                  <option value="2">Waiter Staff</option>
                  <option value="3">Chef</option>
                  <option value="3">Captain</option>
                </select>

                <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                  <svg
                    class="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                {errors.option && (
                  <span className="text-red-600">{errors.option.message}</span>
                )}
              </div>
            </div>
            <div className="">
              <label htmlFor="name" className="font-bold text-lg">
                Full Name{" "}
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Full Name"
                className="w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters long",
                  },
                })}
              />
              {errors.name && (
                <span className="text-red-600">{errors.name.message}</span>
              )}
            </div>
            <div className="">
              <label htmlFor="mobile_number" className="font-bold text-lg">
                Mobile Number{" "}
              </label>
              <input
                type="tel"
                id="mobile_number"
                placeholder="Enter Your Mobile Number"
                className="w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg"
                {...register("mobile_number", {
                  required: "Number is required",
                  minLength: {
                    // value: 2,
                    // message: "Number must be at least 10 characters",
                  },
                })}
              />
              {errors.mobile_number && (
                <span className="text-red-600">
                  {errors.mobile_number.message}
                </span>
              )}
            </div>
            <div className="">
              <label htmlFor="alternate_number" className="font-bold text-lg">
                Alternate Mobile Number{" "}
              </label>
              <input
                type="tel"
                id="alternate_number"
                placeholder="Enter Your Alternate Mobile Number"
                className="w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg"
                {...register("alternate_number", {
                  required: "Alternate Number is required",
                  minLength: {
                    // value: 2,
                    // message: "Number must be at least 10 characters",
                  },
                })}
              />
              {errors.alternate_number && (
                <span className="text-red-600">{errors.alternate_number.message}</span>
              )}
            </div>
            <div className="">
              <label htmlFor="email" className="font-bold text-lg">
                E-mail Address{" "}
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your E-mail"
                className="w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg"
                {...register("email", {
                  required: "Email is required",
                  minLength: {
                    // value: 2,
                    // message: "Number must be at least 10 characters",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="join_date" className="font-bold text-lg">
                Date Of Joining
              </label>
              <input
                type="join_date"
                id="join_date"
                // placeholder="Enter Your join_date "
                className="w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg"
                {...register("join_date", {
                  required: "join_date is required",
                  minLength: {
                    // value: 8,
                    // message: "date must be at least 8 characters long",
                  },
                })}
              />
              {errors.join_date && (
                <span className="text-red-600">{errors.join_date.message}</span>
              )}
            </div>
            <div>
              <label for="address" class="font-bold text-lg">
             Address{" "}
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter your Address"
                class="w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg"
                {...register("address", {
                    required: "Address is required",
                    minLength: {
                      // value: 8,
                      // message: "date must be at least 8 characters long",
                    },
                  })}
              />
              {errors.address && (
                <span className="text-red-600">
                  {errors.address.message}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="birth_date" className="font-bold text-lg">
                Date Of Birth
              </label>
              <input
                type="date"
                id="birth_date"
                placeholder="Enter Your Birth Date "
                className="w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg"
                {...register("birth_date", {
                  required: "Birth Date is required",
                  minLength: {
                    // value: 8,
                    // message: "date must be at least 8 characters long",
                  },
                })}
              />
              {errors.birth_date && (
                <span className="text-red-600">
                  {errors.birth_date.message}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="passcode" className="font-bold text-lg">
                Create Passcode{" "}
              </label>
              <input
                type="text"
                id="passcode"
                placeholder="Enter Your Passcode"
                className="w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg"
                {...register("passcode", {
                  required: "passcode is required",
                //   minLength: {
                //     value: 2,
                //     message: "Name must be at least 2 characters long",
                //   },
                })}
              />
              {errors.passcode && (
                <span className="text-red-600">{errors.passcode.message}</span>
              )}
            </div>

            <div className="">
              <label htmlFor="re_passcode" className="font-bold text-lg">
                Re-Enter Passcode{" "}
              </label>
              <input
                type="text"
                id="re_passcode"
                placeholder="Re-Enter Passcode"
                className="w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg"
                {...register("re_passcode", {
                  required: "Passcode is required",
                //   minLength: {
                //     value: 2,
                //     message: "Name must be at least 2 characters long",
                //   }, 
                })}
              />
              {errors.re_passcode && (
                <span className="text-red-600">{errors.re_passcode.message}</span>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="px-6 py-1 rounded-2xl bg-[#d79555] uppercase text-white"
              >
                Add User
              </button>
            </div>{" "}
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;

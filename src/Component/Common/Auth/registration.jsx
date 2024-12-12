import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Images
import User from "../../assets/Images/admin/Add user.svg";
import Navbar from "../Navbar/navbar";
import Button from "../Button/button";
import { NavLink } from "react-router-dom";
import { RegistrationAPI } from "../APIs/api";
import Loader from "../buttonLoader/buttonLoader";
import { toast } from "react-toastify";
const Registration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("passcode");
  const onSubmit = async (data) => {
    let Payload = {
      fullname: data?.name,
      email: data?.email,
      password: data?.passcode,
      confirmpassword: data?.re_passcode,
      mobileNum: data?.mobile_number,
      altNum: data?.alternate_number,
      address: data?.address,
      role: data?.option,
      joining: data?.join_date,
      salary: data?.salary,
      age: data?.age,
      dob: data?.birth_date,
    };
    // reset();
    setIsSubmitting(true);
    try {
      const response = await RegistrationAPI(Payload);
      console.log("response: ", response);
      if (response?.data.success) {
        setIsSubmitting(false);
        toast.success("User registered successfully!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        reset();
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  // Side Nav Functionality
  const [moveSideNav, setmoveSideNav] = useState(true);
  const SideNavFunctionality = () => {
    setmoveSideNav(!moveSideNav);
  };

  return (
    <>
      <Navbar SideNavFunctionality={SideNavFunctionality} />
      <div className="ms-20">
        <div className="text-2xl font-bold uppercase mb-2">Manage Users</div>
        <NavLink to="/admin/remove">
          <Button
            title="Remove User"
            btn_type="button"
            btn_class="border-black border-2 py-1 px-3 me-4 font-semibold bg-[#bd8954] tracking-widest text-black uppercase"
          />
        </NavLink>
        <NavLink to="/admin/usertable">
          <Button
            title="User Table"
            btn_type="button"
            btn_class="border-black border-2 py-1 px-2 font-semibold bg-[#bd8954] tracking-widest text-black uppercase"
          />
        </NavLink>
      </div>

      <div
        className={`flex flex-col items-center justify-center mt-4 ${
          moveSideNav ? "ms-16" : "ms-0"
        }`}
      >
        <div className=" w-4/5 border-solid border-2 border-[#544013] shadow-[#544013] rounded-2xl bg-[#ede9dd] shadow-xl">
          <div className="flex items-center justify-center bg-[#cd3f14] py-2 border-solid border-2 border-[#544013] rounded-t-2xl">
            <img
              src={User}
              className="h-10 rounded-full bg-[#72591c] p-2"
              alt="Loading"
            />
            <p className="font-bold text-xl ms-2 tracking-wider">
              Add New User
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-3 grid-rows-5 gap-4 px-3 py-2"
          >
            <div>
              <label htmlFor="option" className="text-base font-bold">
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
                  <option value="Cashier">Cashier</option>
                  <option value="Waiter Staff">Waiter Staff</option>
                  <option value="Chef">Chef</option>
                  <option value="Captain">Captain</option>
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
                  <span className="text-red-600">
                    {errors?.option?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="">
              <label htmlFor="name" className="font-bold text-base">
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
                <span className="text-red-600">{errors?.name?.message}</span>
              )}
            </div>
            <div className="">
              <label htmlFor="mobile_number" className="font-bold text-base">
                Mobile Number{" "}
              </label>
              <input
                type="tel"
                id="mobile_number"
                placeholder="Enter Your Mobile Number"
                className="w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg"
                {...register("mobile_number", {
                  required: "mobile_number is required",
                  minLength: {
                    // value: 2,
                    // message: "Number must be at least 10 characters",
                  },
                })}
              />
              {errors.mobile_number && (
                <span className="text-red-600">
                  {errors?.mobile_number?.message}
                </span>
              )}
            </div>
            <div className="">
              <label htmlFor="alternate_number" className="font-bold text-base">
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
                <span className="text-red-600">
                  {errors.alternate_number.message}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="birth_date" className="font-bold text-base">
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
              <label htmlFor="join_date" className="font-bold text-base">
                Date Of Joining
              </label>
              <input
                type="date"
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
              {errors?.join_date && (
                <span className="text-red-600">
                  {errors?.join_date?.message}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="age" className="font-bold text-base">
                Age
              </label>
              <input
                type="number"
                id="age"
                placeholder="Enter Your Age"
                className="w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg"
                {...register("age", {
                  required: "Age is required",
                  minLength: {
                    // value: 8,
                    // message: "date must be at least 8 characters long",
                  },
                })}
              />
              {errors.age && (
                <span className="text-red-600">{errors.age.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="salary" className="font-bold text-base">
                Salary
              </label>
              <input
                type="number"
                id="salary"
                placeholder="Enter Your Salary"
                className="w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg"
                {...register("salary", {
                  required: "Salary is required",
                  minLength: {
                    // value: 8,
                    // message: "date must be at least 8 characters long",
                  },
                })}
              />
              {errors.salary && (
                <span className="text-red-600">{errors.salary.message}</span>
              )}
            </div>
            <div className="">
              <label htmlFor="email" className="font-bold text-base">
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
              <label for="address" class="font-bold text-base">
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
                <span className="text-red-600">{errors.address.message}</span>
              )}
            </div>
            <div>
              <label for="passcode" className="font-bold text-base">
                Password
              </label>
              <input
                {...register("passcode", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 8 characters long",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[@#$%^&*(),.?":{}|<>]).+$/,
                    message:
                      "Password must contain at least one uppercase letter and one special character.",
                  },
                })}
                type="password"
                className={`w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg   ${
                  errors.passcode ? "is-invalid" : ""
                }`}
                name="passcode"
                placeholder="Enter your password"
              />
              {errors.passcode && (
                <span className="text-red-600">{errors.passcode.message}</span>
              )}
            </div>
            <div>
              <label className="font-bold text-base" for="re_passcode">
                Confirm Password
              </label>
              <input
                {...register("re_passcode", {
                  required: "Password confirmation is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                type="password"
                name="re_passcode"
                className={`w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg   ${
                  errors.re_passcode ? "is-invalid" : ""
                }`}
                placeholder="Enter your Confirm Password"
              />
              {errors.re_passcode && (
                <span className="text-red-600">
                  {errors.re_passcode.message}
                </span>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="px-6 py-1 rounded-2xl flex items-center bg-[#d79555] uppercase text-white hover:bg-[#8d6135]"
                // disabled={isSubmitting}
              >
                <span className={isSubmitting ? "me-2" : ""}>Add User</span>
                <Loader isVisible={isSubmitting} />
              </button>
            </div>{" "}
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;

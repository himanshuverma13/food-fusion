import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../Navbar/navbar";
import remove from "../../assets/Images/sideNavImg/remove-user.svg";
import Button from "../Button/button";
import { NavLink } from "react-router-dom";

const AdminRemoveUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    reset();
    setFormData(data);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    console.log(formData);
    setIsModalOpen(false);
    setFormData(null); // Clear formData after confirm
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setFormData(null); // Clear formData after cancel
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
        <div className="text-2xl font-bold uppercase mb-4">Manage Users</div>
        <NavLink to="/admin/register">
          <Button
            title="ADD NEW USER"
            btn_type="button"
            btn_class="border-black border-2 p-1 me-4 font-semibold bg-[#bd8954] tracking-widest text-black uppercase"
          />
        </NavLink>
        <NavLink to="/admin/usertable">
          <Button
            title="User Table"
            btn_type="button"
            btn_class="border-black border-2 p-1 font-semibold bg-[#bd8954] tracking-widest text-black uppercase"
          />
        </NavLink>
      </div>
      <div
        className={`flex flex-col items-center justify-center mt-4 ${
          moveSideNav ? "ms-16" : "ms-0"
        }`}
      >
        <div className="pb-4 w-4/5 border-solid border-2 border-[#544013] shadow-[#544013] rounded-2xl bg-[#ede9dd] shadow-xl">
          <div className="flex items-center justify-center bg-[#cd3f14] py-4 border-solid border-2 border-[#544013] rounded-t-2xl">
            <img
              className="h-12 rounded-full bg-[#72591c] p-2"
              src={remove}
              alt="Loading"
            />
            <h3 className="font-bold text-xl ms-2 tracking-wider">
              REMOVE USER
            </h3>
          </div>
          <div className="p-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-md mx-auto"
            >
              <div className="mb-4">
                <label className="text-lg font-bold">
                  Select User's Category:
                </label>
                <select
                  {...register("selector1", { required: true })}
                  className="appearance-none w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg"
                >
                  <option value="">Select an option</option>
                  <option value="Cashier">Cashier</option>
                  <option value="Chef">Chef</option>
                  <option value="Captain">Captain</option>
                  <option value="Waiter Staff">Waiter Staff</option>
                </select>
                {errors.selector1 && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label className="text-lg font-bold">Select User:</label>
                <input
                  {...register("selector2", { required: true })}
                  className="appearance-none w-full py-1 px-2 border-2 border-black rounded-lg text-gray-800 bg-white shadow-lg"
                  list="options"
                />
                <datalist id="options">
                  <option value="Cashier">Cashier</option>
                  <option value="Chef">Chef</option>
                  <option value="Captain">Captain</option>
                  <option value="Waiter Staff">Waiter Staff</option>
                </datalist>
                {errors.selector2 && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="px-6 py-1 rounded-2xl bg-[#d79555] uppercase text-white hover:bg-[#7a4f24]"
                >
                  Remove User
                </button>
              </div>
            </form>

            {isModalOpen && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>

                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>

                  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Confirm Submission
                      </h3>
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Are you sure you want to remove this user ?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        onClick={handleConfirm}
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Yes, Remove this user
                      </button>
                      <button
                        onClick={handleCancel}
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminRemoveUser;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Navbar/navbar';
import  remove  from '../../assets/Images/sideNavImg/remove-user.svg';

const AdminRemoveUser = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  const onSubmit = data => {
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

  return (
    <>
    <Navbar/>
    <div className='ms-9 flex items-end'>
        <img className='w-14' src={remove} alt="" />
        <h3 className='mb-1 mx-2 font-extrabold tracking-wider'>REMOVE USER</h3>
      </div>
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select User's Category:
          </label>
          <select
            {...register("selector1", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
          {errors.selector1 && <span className="text-red-500 text-xs">This field is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select User:
          </label>
          <input
            {...register("selector2", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            list="options"
          />
          <datalist id="options">
            <option value="optionA">Option A</option>
            <option value="optionB">Option B</option>
          </datalist>
          {errors.selector2 && <span className="text-red-500 text-xs">This field is required</span>}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>

      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

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
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default AdminRemoveUser;
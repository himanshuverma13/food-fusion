import React from "react";
import { Dialog } from "@headlessui/react";
import Button from "../Button/button";
import { useForm } from "react-hook-form";

const CategoryModal = ({
  isOpen,
  closeModal,
  selectedFoodItem,
  onSubmit,
}) => {
  const { register, handleSubmit, reset } = useForm();
  
  const handleModalClose = () => {
    closeModal();
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleModalClose}
        className="fixed inset-0 z-10 flex items-center justify-center"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          aria-hidden="true"
          onClick={handleModalClose}
        />
        <div className="relative bg-[#f6f6e9] w-1/2 px-4 py-6 rounded shadow-lg z-20">
          <h4 className="text-xl mb-4">
            Customize your {selectedFoodItem?.name}
          </h4>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 grid-rows-2 gap-0">
              {selectedFoodItem?.add_ons?.map((option) => (
                <div className="flex items-center my-2">
                  <label htmlFor={option?.option}>
                    <input
                      type="checkbox"
                      className="mx-1"
                      id={option?.option}
                      value={option?.price}
                      {...register(option?.option)}
                    />
                    <span>{option?.option} </span>
                    <span
                      className={`mx-1 text-red-500 font-semibold ${
                        option?.price > 0 ? "inline" : "hidden"
                      }`}
                    >
                      {" "}
                      (₹ {option?.price})
                    </span>
                  </label>
                </div>
              ))}
            </div>

            <hr className="w-full border border-black " />
            <Button
              btn_type="submit"
              title="Submit"
              btn_class="bg-green-600 text-white px-4 py-1 mt-5 border-solid border-2 border-black rounded-xl"
            />
          </form>
        </div>
      </Dialog>
    </>
  );
};
export default CategoryModal;

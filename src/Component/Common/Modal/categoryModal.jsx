import React from "react";
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import Button from "../Button/button";

const CategoryModal = ({  isOpen, closeModal, selectedFoodItem, onSubmit  }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleModalClose = () => {
    reset();
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
        <div
          className="relative bg-[#f6f6e9] w-1/3 p-6 rounded shadow-lg z-20"
        >
          <h4 className="text-xl mb-4">
            Customize your {selectedFoodItem?.name}
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block mb-2">
                <input
                  type="checkbox"
                  id={selectedFoodItem?.items[0]}
                  value={selectedFoodItem?.items[0]}
                  {...register(selectedFoodItem?.items[0])}
                />
                {selectedFoodItem?.items[0]}
              </label>
              <label className="block mb-2">
                <input
                  type="checkbox"
                  id={selectedFoodItem?.items[1]}
                  value={selectedFoodItem?.items[1]}
                  {...register(selectedFoodItem?.items[1])}
                />
                {selectedFoodItem?.items[1]}
              </label>
              <label className="block mb-2">
                <input
                  type="checkbox"
                  id={selectedFoodItem?.items[2]}
                  value={selectedFoodItem?.items[2]}
                  {...register(selectedFoodItem?.items[2])}
                />
                {selectedFoodItem?.items[2]}
              </label>
              {/* Add additional checkboxes as needed */}
              <hr className="my-3 border-gray-700"/>
              <label className="block mb-2">
                Comment
              </label>
                <textarea className="resize rounded-md border w-full" rows={3} name="" id=""
                {...register("comment")}
                />
            </div>
            <Button
             title="Submit"
              btn_class="bg-green-600 text-white px-4 py-1 border-solid border-2 border-black rounded-xl"
              btn_type="submit"
            />
          </form>
        </div>
      </Dialog>
    </>
  );
};
export default CategoryModal;

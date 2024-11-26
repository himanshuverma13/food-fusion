import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Button from "../Button/button";
import { useForm } from "react-hook-form";

const CategoryModal = ({ isOpen, closeModal, selectedFoodItem, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleModalClose = () => {
    setTimeout(() => {
      reset()
    }, 3000)
    closeModal();
  };

  // const [comment, setcomment] = useState()

  // const GetValue = (e) => {
  //  setcomment(e?.target?.value)
  // };



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
              {selectedFoodItem?.add_ons?.map((item) => (
                <div className="flex items-center my-2">
                  <label htmlFor={item?.option}>
                    <input
                      type="checkbox"
                      className="mx-1"
                      id={item?.option}
                      value={item.price}
                      {...register(item.option)}
                    />
                    <span>{item?.option} </span>
                    <span
                      className={`mx-1 text-red-500 font-semibold ${
                        item?.price > 0 ? "inline" : "hidden"
                      }`}
                    >
                      {" "}
                      (₹ {item?.price})
                    </span>
                  </label>
                </div>
              ))}
            </div>
                <hr className="w-full my-2 border border-black " />
              <div className="w-full">
                <label className="block mb-2 font-bold" htmlFor="note">
                  Note :
                </label>
                <textarea
                  // onChange={(e)=>GetValue(e)}
                  {...register("comment")}
                  // value={comment}
                  id="note"
                  placeholder="Additional Details..."
                  className="w-full px-3 py-2 border border-black rounded-lg"
                />
              </div>

            <Button
              btn_type="submit"
              onClick={()=>
                setTimeout(() => {
                  reset()
                }, 3000)
              }
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

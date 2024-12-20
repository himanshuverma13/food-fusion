import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
// import Button from "../Button/button";
import admin from "../../assets/Images/admin-svg.svg";
import chef from "../../assets/Images/Chef-svg.svg";
import billing from "../../assets/Images/cashier-svg.svg";
import staff from "../../assets/Images/staff-svg.svg";
import captain from "../../assets/Images/captain-svg.svg";
import Loader from "../buttonLoader/buttonLoader";

const UserSelectModal = ({ isOpen, closeModal, selectedUser, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleModalClose = () => {
    reset();
    closeModal();
  };

  const onSubmitHandler = async (data) => {
    setIsSubmitting(true); // Show loader

    await onSubmit(data);

    // After submitting, stop showing the loader
    setIsSubmitting(false);
  };

  const setUserImage = () => {
    let img = "";
    switch (selectedUser?.image) {
      case "admin":
        img = { img: admin, bg: selectedUser?.name };
        break;
      case "cashier":
        img = { img: billing, bg: selectedUser?.name };
        break;
      case "staff":
        img = { img: staff, bg: selectedUser?.name };
        break;
      case "captain":
        img = { img: captain, bg: selectedUser?.name };
        break;
      case "chef":
        img = { img: chef, bg: selectedUser?.name };
        break;
    }
    return img;
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
        <div className="relative bg-[#000000ab] p-6 rounded shadow-lg z-20">
          <span className="">
            <img
              src={setUserImage()?.img}
              className={`${
                setUserImage()?.bg
              } w-28 my-3 m-auto rounded-full p-3`}
              alt=""
            />
          </span>
          <form
            className="text-center"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div className="m-5">
              <label className="block mb-2 text-white font-semibold ">
                ENTER YOUR CODE
                <input
                  className="block w-full rounded-md my-5 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="text"
                  id="selectuser"
                  {...register("selecteuser")}
                />
              </label>
            </div>
            <div className="flex justify-center">
              <button
                // title="Submit"
                className="bg-blue-500 flex items-center justify-center text-white px-4 py-2 rounded"
                type="submit"
              >
                <span className={isSubmitting ? "me-2" : ""}>Submit</span>
                <Loader isVisible={isSubmitting} />
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  );
};
export default UserSelectModal;

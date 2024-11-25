import React from "react";
import { Dialog } from "@headlessui/react";
import Button from "../Button/button";
import { NavLink } from "react-router-dom";

const SignOutModal = ({ isOpen, closeModal }) => {
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
        <div className="relative bg-[#f6f6e9] w-1/3 px-4 py-6 rounded shadow-lg z-20">
          <h4 className="text-2xl font-bold mb-4">Sign Out</h4>
          <h3 className="py-3">Are You sure You want to Sign-Out?</h3>

          <hr className="w-full my-2 border border-black " />
          <NavLink to="/">
            <Button
              title="Sign Out"
              btn_class="rounded-2xl bg-[#63898c] py-1 px-4 text-xl font-normal bg-green-600 mx-3"
            />
          </NavLink>
          <Button
            title="Cancel"
            btn_class="rounded-2xl bg-[#63898c] py-1 px-4 text-xl font-normal bg-red-600"
            onClick={handleModalClose}
          />
        </div>
      </Dialog>
    </>
  );
};
export default SignOutModal;

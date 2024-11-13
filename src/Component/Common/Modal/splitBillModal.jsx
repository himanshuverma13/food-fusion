import React, { useState } from "react";
import Button from "../Button/button";

const SplitBill = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative flex items-center">
        <button
          className="mx-3 border-solid text-sm font-bold tracking-wider border-2 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-0.5 uppercase"
          onClick={handleButtonClick}
        >
          Split Bill

        </button>
        {isOpen && (
          <div className="fixed z-10 top-0 right-0 bottom-0 left-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="bg-[#f6f6e9] border-2 border-black rounded-lg shadow-lg p-4 w-2/1 h-2/2 mx-3">
              <div className="">
                <div className="flex justify-end">
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

                <h2 className="text-2xl font-normal mb-2">Split Bill</h2>
                <form>
                  <div class="group flex items-center my-2">
                    <label
                      for="number"
                      class="pb-1 text-xl font-light text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
                    >
                      Total Amount :
                    </label>
                    <input
                      id="number"
                      type="number"
                      placeholder="Rs."
                      class="peer py-2 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div class="group flex items-center my-2 pe-2">
                      <label
                        for="number"
                        class="pb-1 text-xl font-light text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
                      >
                        No. Of People :
                      </label>
                      <input
                        id="number"
                        type="number"
                        placeholder="Enter No. of People"
                        class="py-2 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
                      />
                    </div>
                    <div class="group flex items-center my-2">
                      <label
                        for="number"
                        class="pb-1 text-xl font-light text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
                      >
                        % :
                      </label>
                      <input
                        id="number"
                        type="number"
                        placeholder=""
                        class="py-2 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
                      />
                    </div>
                  </div>
                  <div class="group flex items-center my-2">
                    <label
                      for="number"
                      class="pb-1 text-xl font-light text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
                    >
                      Bill Per Person:
                    </label>
                    <input
                      id="number"
                      type="number"
                      class="py-2 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
                    />
                  </div>
                </form>
                <div className="flex">
                  <div class="flex items-center space-x-3 me-3 rounded-2xl bg-[#63898c] py-1 px-3 text-xl font-normal">
                    <input
                      type="checkbox"
                      class="border-gray-300 rounded h-5 w-5"
                    />
                    <p className="">Generate Bill For Each</p>
                  </div>

                  <Button
                    title="Continue"
                    btn_class="rounded-2xl bg-[#63898c] py-1 px-4 text-xl font-normal "
                    onClick={handleModalClose}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default SplitBill;

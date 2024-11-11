import React, { useState } from "react";
import Button from "../Button/button";

const ApplyOffer = () => {
    const [applyOffer, setApplyOffer] = useState('');
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
          className="mx-3 border-solid text-sm tracking-wider border-2 border-[#544013] rounded-xl bg-[#f6d8ba] px-3 py-0.5 uppercase"
          onClick={handleButtonClick}
        >
          Apply Offer

        </button>
        {isOpen && (
          <div className="fixed z-10 top-0 right-0 bottom-0 left-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="bg-[#f6f6e9] border-2 border-black rounded-lg shadow-lg p-4 w-1/3 h-2/2 mx-3">
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

                <h2 className="text-2xl font-normal mb-2">Apply Offer</h2>
                <div className=" my-0.5">
                    <form action="">
                      <hr className="border-dashed border-1 border-black" />
                      <div className="flex space-x-4 justify-evenly py-0.5">
                        {['5%', '10%', '20%'].map((offer) => (
                          <label key={offer} className="flex items-center">
                            <input
                              type="checkbox"
                              value={offer}
                              checked={applyOffer === offer}
                              onChange={() => setApplyOffer(offer)}
                              className="mr-2 rounded-full"
                            />
                            {offer}
                          </label>
                        ))}
                      </div>
                      <hr className="border-dashed border-1 border-black" />
                    </form>
                  </div>               

                  <Button
                    title="Continue"
                    btn_class="rounded-2xl bg-[#63898c] py-1 px-4 text-xl font-normal mt-3 "
                    onClick={handleModalClose}
                  />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default ApplyOffer;

import React, { useState } from "react";
import Button from "../Button/button";

function TableStatusModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };
const ReservationData =[
    {
        tableNo : 1,
        date:"20-11-2024",
        time: "5 p.m.",
        people: 4,
    },
    {
        tableNo : 3,
        date:"20-11-2024",
        time: "5 p.m.",
        people: 4,
    },
    {
        tableNo : 5,
        date:"20-11-2024",
        time: "5 p.m.",
        people: 4,
    },
    {
        tableNo : 5,
        date:"20-11-2024",
        time: "5 p.m.",
        people: 4,
    },
]
  return (
    <div className="relative top-64 flex justify-end items-center">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="fixed z-10 top-0 right-0 bottom-0 left-0 bg-gray-500 bg-opacity-75 flex justify-end items-center">
          <div className="bg-[#2320208f] rounded-lg shadow-lg overflow-auto p-4 w-96 h-2/3 mx-3">
            <div className="">
              <div className="flex justify-end">
                <svg
                  className="w-4 h-4 cursor-pointer"
                  onClick={handleModalClose}
                  fill="white"
                  stroke="white"
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

              <h2 className="text-2xl tracking-wider text-white mb-1">
                Reservations : 4
              </h2>
              <p className="text-black text-xl tracking-wider">
                Table Numbers :
              </p>

              {ReservationData.map((items, index) => (
             <div className="my-2">
             <div className="flex items-center">
                <div className="p-1 rounded-full border-2 border-solid border-black me-5">
                  <div className="px-4 py-2 rounded-full border-2 border-solid border-black">
                    {items.tableNo}
                  </div>
                </div>
                <div className="text-white">
                  <p className="font-sans">Date : {items.date}</p>
                  <p className="font-sans">Time : {items.time}</p>
                  <p className="font-sans">No. of People - {items.people}</p>
                </div>
              </div>
              <div className="flex justify-end gap-4 mb-2">
                <Button
                  title="Order"
                  btn_class="rounded-2xl bg-red-400 py-1 px-3 uppercase"
                  btn_type="button"
                />
                <Button
                  title="x"
                  btn_class="rounded-2xl bg-red-600 text-white py-1 px-3 uppercase"
                  btn_type="button"
                />
              </div>
              <hr />
              
             </div>
            ))}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TableStatusModal;

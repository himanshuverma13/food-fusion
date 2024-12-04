import React, { useState } from "react";
import Button from "../Button/button";
import TableReservationModal from "./reservationModal";

// Images
import Arrow from "../../assets/Images/Arrow.svg";
import { NavLink } from "react-router-dom";
function TableStatusModal() {
  const ReservationData = [
    {
      tableNo: 1,
      name: "xyz",
      number: 245678322,
      date: "20-11-2024",
      time: "5 p.m.",
      people: 4,
    },
    {
      tableNo: 3,
      name: "xyz",
      number: 245678322,
      date: "20-11-2024",
      time: "5 p.m.",
      people: 4,
    },
    {
      tableNo: 5,
      name: "xyz",
      number: 245678322,
      date: "20-11-2024",
      time: "5 p.m.",
      people: 4,
    },
    {
      tableNo: 5,
      name: "xyz",
      number: 245678322,
      date: "20-11-2024",
      time: "5 p.m.",
      people: 4,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="absolute right-0 top-1/2 flex justify-end items-center">
      <button
        className="bg-[#544013] hover:bg-red-700 text-white font-bold py-2 px-3 rounded-s-2xl"
        onClick={handleButtonClick}
      >
        <img src={Arrow} className="h-7" alt="Loading" />
      </button>
      {isOpen && (
        <div className="fixed z-10 top-0 right-0 bottom-0 left-0 bg-gray-500 bg-opacity-75 flex justify-end items-center">
          <div className="bg-[#2e2c2c8f] rounded-lg shadow-lg overflow-auto p-4 w-96 h-2/3 mx-3">
            <div className="">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl tracking-wider text-white mb-1">
                  Reservations : 4
                </h2>
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
              <div className="">
                <TableReservationModal />
              </div>

              <div>
                <p className="text-black font-bold text-xl tracking-wider">
                  Table Numbers :
                </p>
              </div>

              {ReservationData?.map((items, index) => (
                <div className="my-2">
                  <div className="flex items-center">
                    <div className="p-1 rounded-full border-2 border-solid border-white me-5">
                      <div className="px-4 py-2 rounded-full border-2 border-solid text-white border-white">
                        {items.tableNo}
                      </div>
                    </div>
                    <div className="text-white">
                      <p className="text-sm">Name : {items.name}</p>
                      <p className="text-sm">Number : {items.number}</p>
                      <p className="text-sm">Date : {items.date}</p>
                      <p className="text-sm">Time : {items.time}</p>
                      <p className="text-sm">No. of People - {items.people}</p>
                    </div>
                  </div>
                  <div className="flex justify-end gap-4 mb-2">
                    <NavLink to="/order">
                      <Button
                        title="Order"
                        btn_class="rounded-2xl bg-[#63898c] text-white py-1 px-3 uppercase"
                        btn_type="button"
                      />
                    </NavLink>
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

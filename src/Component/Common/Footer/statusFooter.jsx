import React, { useState } from "react";
import { connect } from "react-redux";
import PaymentModal from "../Modal/paymentModal";
import footerBot from "../../assets/Images/skill-bot.svg"

const StatusFooter = ({ cart }) => {
  console.log("cart: ", cart);
  const [ActiveStatus, setActiveStatus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = (item) => {
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-20">
      <footer
        className="relative bg-[#d79555] text-white py-1 px-6 cursor-pointer rounded-t-3xl"
        onMouseEnter={() => setActiveStatus(true)}
        onMouseLeave={() => setActiveStatus(false)}
      >
        <div className="flex justify-between items-center">
          <span className=" tracking-wider text-center text-green-800">
            Active tables <div>12</div>
          </span>
          <span className=" tracking-wider text-center text-red-600">
            Available tables <div>20</div>
          </span>
          <span className=" tracking-wider text-center text-white">
            Reservations <div>20</div>
          </span>
          <div className="flex items-center border bg-[#63898c] border-gray-300 rounded-full py-0 px-1">
            {/* Search Icon */}
            <svg
              className="h-5 mx-1 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            {/* Input Field */}
            <input
              type="text"
              className="flex-grow px-4 bg-transparent py-2 focus:outline-none"
              placeholder="table status"
            />

            {/* Arrow Icon */}
            <svg
              viewBox="0 0 22 22"
              className="me-2"
              fill="#fff"
              width="30"
              height="30"
            >
              <defs>
                <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
                  <path d="m7 12h14.32v9.99h-14.32z" />
                </clipPath>
                <clipPath clipPathUnits="userSpaceOnUse" id="cp2">
                  <path d="m0.32 0.24h21v19.76h-21z" />
                </clipPath>
              </defs>

              <g id="Clip-Path" clip-path="url(#cp1)">
                <g>
                  <path
                    class="s0"
                    d="m17.2 15.7c-1.4 1.8-3.6 3-6.1 3q-0.9 0-1.8-0.2l-1.5 2.7q1.6 0.5 3.3 0.5 2.1 0 4.2-0.8 1.9-0.8 3.4-2.3 1.3-1.3 2-2.9 0.2-0.3 0.3-0.5 0.5-1.2 0.7-2.5h-8.9l-1.8 3z"
                  />
                </g>
              </g>
              <g id="Clip-Path" clip-path="url(#cp2)">
                <g>
                  <path
                    class="s0"
                    d="m6.8 1.1q-2 0.9-3.5 2.5-0.2 0.2-0.5 0.5 0 0 0 0.1l4 6.8-2.2 3.7-3.9-6.5q-0.4 1.3-0.4 2.8 0 1.7 0.5 3.2 0.2 0.5 0.4 1 0.6 1.4 1.6 2.6 0.2 0.4 0.5 0.7l0.2 0.1q0.7 0.7 1.5 1.3l5.3-8.9-3.7-6.3c1.3-0.9 2.8-1.4 4.5-1.4 2.5 0 4.7 1.2 6.1 3h-6.2l1.8 3h8.9q-0.2-1.3-0.7-2.5-0.1-0.2-0.3-0.5-0.7-1.6-2-2.9-1.5-1.5-3.4-2.3-2.1-0.8-4.2-0.8-2.3 0-4.3 0.8z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <img src={footerBot} className="absolute bottom-0 right-0 h-20" alt="loading" />
          <div></div>
        </div>

        {/* Dropdown Content */}
        <div
          className={`${
            ActiveStatus ? "block" : "hidden"
          } absolute left-0 bottom-full w-full bg-gray-700 text-white py-2 shadow-lg`}
        >
          <ul className="text-center flex">
            {cart.itemsInCart?.map((item) => (
              <li
                onClick={() => openModal(item)}
                className={`${
                  cart?.status == "open" ? "bg-green-400" : ""
                } p-2 m-4 border border-white`}
              >
                {item?.tableNo} {cart?.status}
              </li>
            ))}
          </ul>
        </div>
      </footer>
      <PaymentModal
        isOpen={isOpen}
        closeModal={closeModal}
        //   selectedFoodItem={selectedFoodItem}
        //   onSubmit={onSubmit}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {})(StatusFooter);

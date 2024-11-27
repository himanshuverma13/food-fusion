  import React, { useState } from "react";
  import Button from "../Button/button";
  import { useForm } from "react-hook-form";

  const SplitBill = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset , formState: { errors },} = useForm();
    const [noOfPeople, setNoOfPeople] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [billPerPerson, setBillPerPerson] = useState(0);

    const handleButtonClick = () => {
      setIsOpen(true);
    };

    const handleModalClose = () => {
      setIsOpen(false);
    };

    const handleTotalAmountChange = (e) => {
      const amount = parseFloat(e.target.value);
      setTotalAmount(amount);
    };

    const handleSplitBill = (e) => {
      const people = parseInt(e.target.value, 10);
      setNoOfPeople(people);
      if (people > 0) {
        setBillPerPerson(totalAmount / people); // Calculate bill per person
      } else {
        setBillPerPerson(0); // Avoid division by zero
      }
    };
    const onSubmit = (data) => {
      console.log("data: ", data);
      reset();
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
              <div className="bg-[#f6f6e9] border-2 border-black rounded-lg shadow-lg p-4 w-1/2 h-2/2 mx-3">
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="group flex items-center my-2">
                      <label
                        for="totalAmount"
                        class="pb-1 text-xl font-light text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
                      >
                        Total Amount :
                      </label>
                      <input
                        id="totalAmount"
                        value={totalAmount}
                        onChange={handleTotalAmountChange}
                        type="number"
                        placeholder="Rs."
                        class="peer py-2 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
                        {...register("totalAmount", {
                          required: "Total Amount is Required",
                        })}
                      />
                      {errors.totalAmount && (
                        <span className="text-red-600">
                          {errors.totalAmount.message}
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between">
                      <div class="group flex items-center my-2 pe-2">
                        <label
                          for="numberOfPeople"
                          class="pb-1 text-xl font-light text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
                        >
                          No. Of People :
                        </label>
                        <input
                          id="numberOfPeople"
                          type="number"
                          placeholder="Enter No. of People"
                          value={noOfPeople}
                          onChange={handleSplitBill}
                          class="py-2 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
                          {...register("numberOfPeople", {
                            required: "No. of People is Required",
                          })}
                        />
                        {errors.numberOfPeople && (
                        <span className="text-red-600">
                          {errors.numberOfPeople.message}
                        </span>
                      )}
                      </div>
                      {/* <div class="group flex items-center my-2">
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
                      </div> */}
                    </div>
                    <div class="group flex items-center my-2">
                      <label
                        for="billPerPerson"
                        class="pb-1 text-xl font-light text-black transition-all duration-200 ease-in-out group-focus-within:text-[#544013] me-3"
                      >
                        Bill Per Person:
                      </label>
                      <input
                        id="billPerPerson"
                        type="number"
                        value={billPerPerson}
                        class="py-2 border-solid border-black border-2 rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-[#544013]"
                        {...register("billPerPerson", {
                          required: "Bill Per Person is Required",
                        })}
                      />
                      {errors.billPerPerson && (
                        <span className="text-red-600">
                          {errors.billPerPerson.message}
                        </span>
                      )}
                    </div>
                    {/* <div className="flex"> */}
                    <div class="flex items-center space-x-3 me-3 mb-2  rounded-2xl py-1 px-3 text-xl font-normal">
                      <input
                        type="checkbox"
                        class="border-gray-300 rounded h-5 w-5"
                      />
                      <p className="">Generate Bill For Each</p>
                    </div>

                    <Button
                      title="Continue"
                      btn_type="submit"
                      btn_class="rounded-2xl bg-[#63898c] py-1 px-4 text-xl font-normal "
                      // onClick={handleModalClose}
                    />
                    {/* </div> */}
                  </form>
                </div>
              </div>  
            </div>
          )}
        </div>
      </>
    );
  };
  export default SplitBill;

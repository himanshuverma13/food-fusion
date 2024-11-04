import React, { useState } from 'react';

function TableStatusModal() {
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(true);
    };

    const handleModalClose = () => {
        setIsOpen(false);
    };

    return (
        <div className=" relative top-40 flex justify-end items-center">
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
                <div
                    className="fixed z-10 top-0 right-0 bottom-0 left-0 bg-gray-500 bg-opacity-75 flex justify-end items-center"
                >
                    <div
                        className="bg-[#0000008f] rounded-lg shadow-lg p-4 w-96 h-96 mx-3"  
                    >

                        <div  className=''>
                            <div className='flex justify-end' ><svg
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
                            </svg></div>

                            <h2 className="text-lg font-bold mb-2">Modal Title</h2>
                            <p className="text-gray-500">Modal content goes here.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TableStatusModal;
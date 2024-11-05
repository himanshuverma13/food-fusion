import React, { useState } from 'react';

const DropdownButton = ({ options, buttonLabel }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left mx-2">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-[#ede9dd] px-5 py-1 tracking-wider text-[#544013] shadow-sm ring-1 ring-inset ring-[#cd3f14] hover:bg-[#f6d8ba]"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {buttonLabel}
          <svg
            className="-mr-1 h-5 w-5 text-[#544013]"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isDropdownOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#f6f6e9] shadow-lg ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                id={`menu-item-${index}`}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;

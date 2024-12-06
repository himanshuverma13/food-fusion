  import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import React, { useState } from 'react';

  const DropdownButton = ({ options, buttonLabel,selectedValue }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selected, setSelected] = useState(buttonLabel);

    const toggleDropdown = () => {
      setIsDropdownOpen((prev) => !prev);
    };

      // Function to handle selecting an option
      const handleSelect = (person) => {
        selectedValue(person)
        setSelected(person); // Update the selected person
        setIsDropdownOpen(false);
      };

    const handleBlur = (e) => {
      if (!e.currentTarget.contains(e?.relatedTarget)) {
        setIsDropdownOpen(false);
      }
    };

    return (
      <div
        className="relative inline-block mx-2"
        tabIndex={0} // Make the div focusable
        onBlur={handleBlur} // Handle blur to detect when the dropdown loses focus
      >
        <div
          onClick={toggleDropdown}
          className="relative tracking-wider cursor-pointer rounded-md w-full truncate py-1.5 pl-6 pr-9 text-left text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm ring-[#cd3f14] hover:bg-[#f6d8ba]"
        >
          <span className="flex items-center">
            <span className="block tracking-wider">{selected}</span>
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <FontAwesomeIcon className='text-xs' icon={faChevronDown} />
          </span>
        </div>
        {isDropdownOpen && (
          <div
            className="absolute z-10 mt-1 w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            // tabIndex={-1} // To allow this dropdown to be focusable for blur event
          >
            {options?.map((person, index) => (
              <div
                key={index}
                className="cursor-pointer select-none py-2 px-2 w-full text-black"
                tabIndex={0} // Make each option focusable
                onClick={() => handleSelect(person)}
              >
                <div className="flex items-center w-full">
                  <span className="block text-black">{person}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  export default DropdownButton;

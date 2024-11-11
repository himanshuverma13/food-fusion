import React, { useState } from 'react';
import foodItems from '../../assets/Json/foodCategory'


const AutoSuggestSearch = () => {

    const [query, setQuery] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);

    const options = []
    foodItems.map((item) => {
        return options?.push(item?.name)
    })


    // Function to filter options based on input query
    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value.length > 0) {
            const filtered = options.filter((option) =>
                option?.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredOptions(filtered);
        } else {
            setFilteredOptions([]);
        }
    };

    // Function to handle clicking on an option
    const handleOptionClick = (option) => {
        // setSelectedOption(option);
        // setShowModal(true); // Open modal on option click
        setQuery(''); // Reset search bar
        setFilteredOptions([]); // Hide suggestions
    };

    return (
        <div className=" flex flex-col items-center justify-center">
            {/* Search bar */}
            <div className="relative w-80">
                <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Search for a fruit..."
                    className="w-full px-4 py-2 bg-transparent border-0  rounded-lg shadow-sm focus:outline-none "
                />

                {/* Suggestions dropdown */}
                {filteredOptions?.length > 0 && (
                    <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                        {filteredOptions.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

       

        </div>
    );
};

export default AutoSuggestSearch;

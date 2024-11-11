import React, { useState } from 'react';

const AutoSuggestSearch = () => {
  const [query, setQuery] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = ['Apple', 'Banana', 'Grapes', 'Mango', 'Orange', 'Pineapple'];

  // Function to filter options based on input query
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  };

  // Function to handle clicking on an option
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowModal(true); // Open modal on option click
    setQuery(''); // Reset search bar
    setFilteredOptions([]); // Hide suggestions
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Search bar */}
      <div className="relative w-80">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for a fruit..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
        />

        {/* Suggestions dropdown */}
        {filteredOptions.length > 0 && (
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-80 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Selected Option</h2>
            <p>You selected: <strong>{selectedOption}</strong></p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoSuggestSearch;

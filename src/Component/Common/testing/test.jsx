// import React, { useState } from 'react';


// const people = [
//   { id: 1, name: 'John Doe' },
//   { id: 2, name: 'Jane Smith' },
//   { id: 3, name: 'Alice Johnson' },
//   { id: 4, name: 'Bob Brown' }
// ];
// const Test = ({ options, buttonLabel }) => {
//   const [selected, setSelected] = useState(people[0]); // Set default selection
//   const [isOpen, setIsOpen] = useState(false); // Toggle dropdown visibility

//   // Function to handle selecting an option
//   const handleSelect = (person) => {
//     setSelected(person); // Update the selected person
//     setIsOpen(false); // Close the dropdown
//   };

//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-900">Assigned to</label>
//       <div className="relative mt-2">
//         <div
//           onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on click
//           className="relative w-full cursor-pointer rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
//         >
//           <span className="flex items-center">
//             <span className="ml-3 block truncate">{selected.name}</span> {/* Show selected name */}
//           </span>
//           <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//             ▼ {/* Add dropdown arrow */}
//           </span>
//         </div>

//         {isOpen && (
//           <div className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//             {people.map((person) => (
//               <div
//                 key={person.id}
//                 onClick={() => handleSelect(person)} // Handle option click
//                 className={`cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 ${
//                   selected.id === person.id
//                     ? 'bg-indigo-600 text-white font-semibold'
//                     : 'hover:bg-indigo-600 hover:text-white'
//                 }`}
//               >
//                 <div className="flex items-center">
//                   <span className="ml-3 block truncate">{person.name}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Test;
// import React, { useState } from 'react';

// const DropdownButton = ({ options, buttonLabel }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   const handleBlur = (e) => {
//     // Close dropdown when clicking outside or when the button loses focus
//     if (!e.currentTarget.contains(e.relatedTarget)) {
//       setIsDropdownOpen(false);
//     }
//   };

//   return (
//     <div
//       className="relative inline-block text-left mx-2"
//       onBlur={handleBlur} // Handles when the focus is lost
//     >
//       <div>
//         <button
//           type="button"
//           className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-[#ede9dd] px-5 py-1 tracking-wider text-[#544013] shadow-sm ring-1 ring-inset ring-[#cd3f14] hover:bg-[#f6d8ba]"
//           aria-expanded={isDropdownOpen}
//           aria-haspopup="true"
//           onClick={toggleDropdown}
//         >
//           {buttonLabel}
//           <svg
//             className="-mr-1 h-5 w-5 text-[#544013]"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//       </div>
//       {isDropdownOpen && (
//         <div
//           className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#f6f6e9] shadow-lg ring-1 ring-black ring-opacity-5"
//           role="menu"
//           aria-orientation="vertical"
//           aria-labelledby="menu-button"
//           tabIndex="-1"
//         >
//           <div className="py-1" role="none">
//             {options.map((option, index) => (
//               <a           
//                 key={index}
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700"
//                 role="menuitem"
//                 tabIndex="-1"
//                 id={`menu-item-${index}`}
//               >
//                 {option}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownButton;

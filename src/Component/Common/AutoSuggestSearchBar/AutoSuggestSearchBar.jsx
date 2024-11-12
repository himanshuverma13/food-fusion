import React, { useState } from 'react';
import foodItems from '../../assets/Json/foodCategory'
import CategoryModal from '../Modal/categoryModal';
import { connect, useDispatch } from 'react-redux';
import { add } from '../Redux/Category/categorySlice';


const AutoSuggestSearch = ({cart}) => {
    console.log('cart: ', cart);
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const [filteredOptions, setFilteredOptions] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFoodItem, setSelectedFoodItem] = useState(null);

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
            setFilteredOptions();
        }
    };

    // Function to handle clicking on an option
    const handleOptionClick = (option) => {
        console.log('option: ', option);
        let filterValue = foodItems.filter((item)=> {
            return  item.name == option;
            })
            console.log('filterValue: ', filterValue[0]);
        setIsOpen(true)
        setSelectedFoodItem(filterValue[0])
        setQuery(''); // Reset search bar
        setFilteredOptions(); // Hide suggestions
    };

    // modal functionality
    const closeModal = () => setIsOpen(false);

    const onSubmit = (data) => {
        let category = Object.values(data).filter((value) => value);
        let payload = {
          id: selectedFoodItem?.id,
          food: selectedFoodItem?.name,
          image: selectedFoodItem?.image,
          category: category,
          tableNo: cart?.TableNo,
          status: "open",
          quantity: 1,
          price: 1,
          amount: 1,
        };
        console.log("Payload:", payload);
        // setshowFoodData(selectedFoodItem);
        dispatch(add(payload));
        closeModal();
      };


    return (
        <>
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
            <CategoryModal
                isOpen={isOpen}
                closeModal={closeModal}
            selectedFoodItem={selectedFoodItem}
            onSubmit={onSubmit}
            />
        </>
    );
};

const mapStateToProps = (state) => ({
    cart: state.cart,
  });
  
  export default connect(mapStateToProps, {})(AutoSuggestSearch);
  
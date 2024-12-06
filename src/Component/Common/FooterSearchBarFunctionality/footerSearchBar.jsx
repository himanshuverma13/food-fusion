import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { GetOrderDetailstoAPI } from "../APIs/api";

const FooterSearchBar = ({ table }) => {
  // console.log('table: ', table?.OrderTable);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDropdownOpen(false);
    }
  };

  const handleKeyDown = async (e) => {
      if (e?.target?.value && e?.key === "Enter") {
        setIsDropdownOpen((prev) => !prev);
        let response = await GetOrderDetailstoAPI();
      }
  };

  return (
    <div
      className="relative inline-block"
      tabIndex={0} // Make the div focusable
      onBlur={handleBlur} // Handle blur to detect when the dropdown loses focus
    >
      <input
        type="text"
        className="flex-grow px-4 bg-transparent py-2 focus:outline-none"
        placeholder="table status"
        onKeyDown={handleKeyDown}
      />
      {isDropdownOpen && (
        <div
          className="absolute z-20 right-0 mb-2 w-64 rounded-md  py-1 text-base border-0 shadow-xl  focus:outline-none sm:text-sm"
          style={{ bottom: "100%" }} // This positions the dropdown above the button
        >
          <div className="chef-card grid grid-cols-1 grid-rows-4 border-solid rounded-3xl bg-white shadow-xl">
            <div className="border rounded-3xl px-4 py-0.5 m-0.5 bg-[#d79555] text-[#544013]">
              <div className="text-sm tracking-wider font-semibold">
                Order No. 007
              </div>
              <div className="flex justify-between text-sm tracking-wider font-semibold">
                <span>Time : {new Date()?.toLocaleTimeString()}</span>
                <span>Table No.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  table: state.table,
});

export default connect(mapStateToProps, {})(FooterSearchBar);

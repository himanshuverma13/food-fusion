import React, { useState } from "react";
import Navbar from "../../Common/Navbar/navbar";
import Button from "../../Common/Button/button";

const Inventory = () => {
  const InventoryTableData = [
    {
      name: "Tomato",
      supplier: "dsxcfvgbhnj",
      quantity: 5,
      cost: 150,
      total_cost: 1500,
      last_restock: "nabdcv",
      status: "active",
    },
    {
      name: "Potato",
      supplier: "dsxcfvgbhnj",
      quantity: 5,
      cost: 150,
      total_cost: 1500,
      last_restock: "nabdcv",
      status: "active",
    },
    {
      name: "Carrot",
      supplier: "dsxcfvgbhnj",
      quantity: 5,
      cost: 150,
      total_cost: 1500,
      last_restock: "nabdcv",
      status: "active",
    },
    {
      name: "Radish",
      supplier: "dsxcfvgbhnj",
      quantity: 5,
      cost: 150,
      total_cost: 1500,
      last_restock: "nabdcv",
      status: "active",
    },
    {
      name: "Onion",
      supplier: "dsxcfvgbhnj",
      quantity: 5,
      cost: 150,
      total_cost: 1500,
      last_restock: "nabdcv",
      status: "active",
    },
  ];

  const [filterInvtry, setfilterInvtry] = useState(InventoryTableData)
  // search bar functionality
  const SearchFilter = (e) => {
    const value = e.target.value;
    if (value?.length > 0) {
      const filterValue = InventoryTableData?.filter((items) => {
        return items?.name?.toLowerCase()?.includes(value?.toLowerCase());
      });
      return setfilterInvtry(filterValue)
    }
    setfilterInvtry(InventoryTableData)
  };

  // Side Nav Functionality
  const [moveSideNav, setmoveSideNav] = useState(true);
  const SideNavFunctionality = () => {
    setmoveSideNav(!moveSideNav);
  };

  return (
    <>
      <Navbar SideNavFunctionality={SideNavFunctionality} />
      <div className={moveSideNav ? "ms-16" : "ms-0"}>
        <div className="text-2xl font-bold ms-2 uppercase">Inventory</div>
        {/* Search bar */}
        <div class="text-black flex justify-between items-center ms-5 me-3">
          <div class="overflow-hidden flex justify-between border-solid border-2 w-96 border-black rounded-3xl bg-[#f6f6e9]">
            <input
              type="text"
              onChange={SearchFilter}
              class="px-2 py-0.5 tracking-wide w-full bg-[#f6f6e9]"
              placeholder="Search item"
            />
            <button class="flex items-center justify-center px-4">
              <svg
                class="h-4 w-4 text-grey-dark"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
          <Button
            title="Add New Item"
            btn_class="px-6 py-1 rounded-2xl bg-[#d79555] uppercase text-white hover:bg-[#7a4f24]"
            btn_type="button"
          />
        </div>

        {/* Inventory table */}
        <div class="overflow-x-auto me-2 ms-5 py-5">
          <table class="w-full text-sm text-left border border-slate-500">
            <thead class="text-xs text-white uppercase bg-[#d79555]">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 tracking-wider border border-slate-500"
                >
                  S. No.
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 tracking-wider border border-slate-500"
                >
                  Item Name
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 tracking-wider border border-slate-500"
                >
                  Supplier
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 tracking-wider border border-slate-500"
                >
                  Quantity with Unit
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 tracking-wider border border-slate-500"
                >
                  Cost per Unit
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 tracking-wider border border-slate-500"
                >
                  Total Cost
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 tracking-widest border border-slate-500"
                >
                  Last-Restock On
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 tracking-wider border border-slate-500"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="bg-[#ede9dd]">
              {filterInvtry?.map((items, index) => (
                <tr key={index}>
                  <th
                    scope="row"
                    class="px-6 py-4 border border-slate-500 font-medium whitespace-nowrap"
                  >
                    {++index}
                  </th>
                  <th class="px-6 py-4 border border-slate-500 font-medium whitespace-nowrap">
                    {items.name}
                  </th>
                  <td class="px-6 py-4 border border-slate-500">
                    {items.supplier}
                  </td>
                  <td class="px-6 py-4 border border-slate-500">
                    {items.quantity}
                  </td>
                  <td class="px-6 py-4 border border-slate-500">
                    {items.cost}
                  </td>
                  <td class="px-6 py-4 border border-slate-500">
                    {items.total_cost}
                  </td>
                  <td class="px-6 py-4 border border-slate-500">
                    {items.last_restock}
                  </td>
                  <td class="px-6 py-4 border border-slate-500">
                    {items.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Inventory;

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faEye,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/navbar";
const AdminUserTable = () => {
  const AdminUserTableData = [
    {
      name: "xyz",
      role: "Chasier",
      phone_Number: 1789641234,
      Joining_Date: 123,
      salary: 20000,
    },
    {
      name: "xyz",
      role: "Chef",
      phone_Number: 1789641234,
      Joining_Date: 123,
      salary: 20000,
    },
    {
      name: "xyz",
      role: "Waiter",
      phone_Number: 1789641234,
      Joining_Date: 123,
      salary: 20000,
    },
    {
      name: "xyz",
      role: "Chasier",
      phone_Number: 1789641234,
      Joining_Date: 123,
      salary: 20000,
    },
    {
      name: "xyz",
      role: "Chasier",
      phone_Number: 1789641234,
      Joining_Date: 123,
      salary: 20000,
    },
  ];

   // Side Nav Functionality
   const [moveSideNav, setmoveSideNav] = useState(true);
   const SideNavFunctionality = () => {
     setmoveSideNav(!moveSideNav);
   };

  return (
    <>
    <Navbar SideNavFunctionality={SideNavFunctionality}/>
      <div className={moveSideNav ? "ms-16" : "ms-0"}>
        {/* Inventory table */}
        <div class="overflow-x-auto me-2 m-5 py-5">
          <table class="w-full text-sm text-left border border-slate-500">
            <thead class="text-xs text-white uppercase bg-[#d79555]">
              <tr>
                <th scope="col" class="px-6 py-3 border border-slate-500">
                  S. No.
                </th>
                <th scope="col" class="px-6 py-3 border border-slate-500">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 border border-slate-500">
                  Role
                </th>
                <th scope="col" class="px-6 py-3 border border-slate-500">
                  Phone Number
                </th>
                <th scope="col" class="px-6 py-3 border border-slate-500">
                  Joining Date
                </th>
                <th scope="col" class="px-6 py-3 border border-slate-500">
                  Salary
                </th>
                <th scope="col" class="px-6 py-3 border border-slate-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="bg-[#ede9dd]">
              {AdminUserTableData?.map((items, index) => (
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
                    {items.role}
                  </td>
                  <td class="px-6 py-4 border border-slate-500">
                    {items.phone_Number}
                  </td>
                  <td class="px-6 py-4 border border-slate-500">
                    {items.Joining_Date}
                  </td>
                  <td class="px-6 py-4 border border-slate-500">
                    {items.salary}
                  </td>
                  <td class="px-6 py-4 border border-slate-500 flex items-center justify-between">
                    <FontAwesomeIcon
                      className="text-blue-500 text-xl cursor-pointer"
                      icon={faEye}
                    />
                    <FontAwesomeIcon
                      className="text-green-500 text-xl cursor-pointer"
                      icon={faPen}
                    />
                    <FontAwesomeIcon
                      className="text-red-500 text-xl  cursor-pointer"
                      icon={faTrash}
                    />
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

export default AdminUserTable;

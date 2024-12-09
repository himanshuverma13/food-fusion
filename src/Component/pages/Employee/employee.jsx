import React, { useState } from "react";
import Navbar from "../../Common/Navbar/navbar";

const EmployeeTable = () => {
  const employees = [
    {
      id: "001",
      name: "Sarah Lee",
      role: "Server",
      shift: "Morning",
      status: "Active",
      contact: "(123) 456-7890",
      availability: "Mon, Wed, Fri",
      hours: 24,
      notification: "Notify",
      floor: 1,
    },
    {
      id: "002",
      name: "John Martinez",
      role: "Chef",
      shift: "Afternoon",
      status: "On Leave",
      contact: "(321) 654-0987",
      availability: "Tue, Thu",
      hours: 16,
      notification: "Notify",
      floor: 1,
    },
    {
      id: "003",
      name: "Emily Chen",
      role: "Manager",
      shift: "Evening",
      status: "Active",
      contact: "(987) 654-1234",
      availability: "Mon-Fri",
      hours: 40,
      notification: "Notify",
      floor: 2,
    },
    {
      id: "006",
      name: "Tom Rivera",
      role: "Dishwasher",
      shift: "Afternoon",
      status: "Active",
      contact: "(333) 234-5678",
      availability: "Mon-Sun",
      hours: 35,
      notification: "Notify",
      floor: 1,
    },
  ];

  // Side Nav Functionality
  const [moveSideNav, setmoveSideNav] = useState(true);
  const SideNavFunctionality = () => {
    setmoveSideNav(!moveSideNav);
  };

  return (
    <>
      <Navbar SideNavFunctionality={SideNavFunctionality} />
      <div className={`overflow-x-auto p-4 ${moveSideNav ? "ms-16" : "ms-0"}`}>
        <table className="w-full border border-slate-500">
          <thead className="text-left bg-[#d79555] uppercase">
            <tr>
              <th className="py-2 px-4  border border-slate-500">
                Employee ID
              </th>
              <th className="py-2 px-4 border border-slate-500">Name</th>
              <th className="py-2 px-4 border border-slate-500">Role</th>
              <th className="py-2 px-4 border border-slate-500">Shift</th>
              <th className="py-2 px-4 border border-slate-500">Status</th>
              <th className="py-2 px-4 border border-slate-500">Contact</th>
              <th className="py-2 px-4 border border-slate-500">
                Availability
              </th>
              <th className="py-2 px-4 border border-slate-500">
                Hours This Week
              </th>
              <th className="py-2 px-4 border border-slate-500">
                Notification
              </th>
              <th className="py-2 px-4 border border-slate-500">Floor</th>
            </tr>
          </thead>
          <tbody className="bg-[#ede9dd]">
            {employees.map((employee) => (
              <tr key={employee.id} className="text-gray-700">
                <td className="py-2 px-4 border border-slate-500">
                  {employee.id}
                </td>
                <td className="py-2 px-4 border border-slate-500">
                  {employee.name}
                </td>
                <td className="py-2 px-4 border border-slate-500">
                  {employee.role}
                </td>
                <td className="py-2 px-4 border border-slate-500">
                  {employee.shift}
                </td>
                <td className="py-2 px-4 border border-slate-500">
                  {employee.status}
                </td>
                <td className="py-2 px-4 border border-slate-500">
                  {employee.contact}
                </td>
                <td className="py-2 px-4 border border-slate-500">
                  {employee.availability}
                </td>
                <td className="py-2 px-4 border border-slate-500">
                  {employee.hours}
                </td>
                <td className="py-2 px-4 border border-slate-500">
                  {employee.notification}
                </td>
                <td className="py-2 px-4 border border-slate-500">
                  {employee.floor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeTable;

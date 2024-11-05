import React from 'react';
import Navbar from '../../Common/Navbar/navbar';

const EmployeeTable = () => {
  const employees = [
    {
      id: '001',
      name: 'Sarah Lee',
      role: 'Server',
      shift: 'Morning',
      status: 'Active',
      contact: '(123) 456-7890',
      availability: 'Mon, Wed, Fri',
      hours: 24,
      notification: 'Notify',
      floor: 1,
    },
    {
      id: '002',
      name: 'John Martinez',
      role: 'Chef',
      shift: 'Afternoon',
      status: 'On Leave',
      contact: '(321) 654-0987',
      availability: 'Tue, Thu',
      hours: 16,
      notification: 'Notify',
      floor: 1,
    },
    {
      id: '003',
      name: 'Emily Chen',
      role: 'Manager',
      shift: 'Evening',
      status: 'Active',
      contact: '(987) 654-1234',
      availability: 'Mon-Fri',
      hours: 40,
      notification: 'Notify',
      floor: 2,
    },
    {
      id: '006',
      name: 'Tom Rivera',
      role: 'Dishwasher',
      shift: 'Afternoon',
      status: 'Active',
      contact: '(333) 234-5678',
      availability: 'Mon-Sun',
      hours: 35,
      notification: 'Notify',
      floor: 1,
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4 ">
      <table className="w-full bg-white border  border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4 font-[prompt] border">Employee ID</th>
            <th className="py-2 px-4 font-[prompt] border">Name</th>
            <th className="py-2 px-4 font-[prompt] border">Role</th>
            <th className="py-2 px-4 font-[prompt] border">Shift</th>
            <th className="py-2 px-4 font-[prompt] border">Status</th>
            <th className="py-2 px-4 font-[prompt] border">Contact</th>
            <th className="py-2 px-4 font-[prompt] border">Availability</th>
            <th className="py-2 px-4 font-[prompt] border">Hours This Week</th>
            <th className="py-2 px-4 font-[prompt] border">Notification</th>
            <th className="py-2 px-4 font-[prompt] border">Floor</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
              <tr key={employee.id} className="text-gray-700">
              <td className="py-2 px-4 font-[prompt] border">{employee.id}</td>
              <td className="py-2 px-4 font-[prompt] border">{employee.name}</td>
              <td className="py-2 px-4 font-[prompt] border">{employee.role}</td>
              <td className="py-2 px-4 font-[prompt] border">{employee.shift}</td>
              <td className="py-2 px-4 font-[prompt] border">{employee.status}</td>
              <td className="py-2 px-4 font-[prompt] border">{employee.contact}</td>
              <td className="py-2 px-4 font-[prompt] border">{employee.availability}</td>
              <td className="py-2 px-4 font-[prompt] border">{employee.hours}</td>
              <td className="py-2 px-4 font-[prompt] border">{employee.notification}</td>
              <td className="py-2 px-4 font-[prompt] border">{employee.floor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
                </>
  );
};

export default EmployeeTable;

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const UserMgnt = () => {
  return (
    <section className="py-3 px-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold uppercase">User Management</h1>
        <div>
          <table className="w-full border-collapse">
            <thead className="bg-gray-400">
              <tr>
                <th className="text-left p-2 w-1">Id</th>
                <th className="text-left p-2 w-1/4">Name</th>
                <th className="text-left p-2">Email</th>
                <th className="text-left p-2">Role</th>
                <th className="text-left p-2 w-1/6">Status</th>
                <th className="text-left p-2 w-1/6">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">01</td>
                <td className="p-2">Prateek Bahad</td>
                <td className="p-2">prateek@gmail.com</td>
                <td className="p-2">user</td>
                <td className="p-2 text-green-600 font-bold">Active</td>
                <td className="flex gap-5 p-2 text-xl">
                  <button className="hover:text-yellow-500 duration-300">
                    <FaEdit />
                  </button>
                  <button className="hover:text-red-500 duration-300">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-2">02</td>
                <td className="p-2">John Doe</td>
                <td className="p-2">john@gmail.com</td>
                <td className="p-2">user</td>
                <td className="p-2 text-green-600 font-bold">Active</td>
                <td className="flex gap-5 p-2 text-xl">
                  <button className="hover:text-yellow-500 duration-300">
                    <FaEdit />
                  </button>
                  <button className="hover:text-red-500 duration-300">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UserMgnt;

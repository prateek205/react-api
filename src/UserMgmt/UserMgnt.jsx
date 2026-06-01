import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MyUser } from "../context/UserContext";

const UserMgnt = () => {
  const { users, deleteUser } = MyUser();

  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              User Management
            </h1>
            <p className="text-gray-500">Manage all registered users</p>
          </div>

          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold">
            Total Users: {users.length}
          </div>
        </div>

        {/* Scrollable Table */}
        <div className="max-h-[500px] overflow-y-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-white shadow-sm z-10">
              <tr className="border-b bg-gray-50">
                <th className="p-4 text-left">User</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Role</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((item, index) => (
                <tr
                  key={item._id}
                  className={`border-b transition duration-200 hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  {/* User */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                        {item.name?.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          ID: {item._id.slice(-6)}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="p-4 text-gray-600">{item.email}</td>

                  {/* Role */}
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                      {item.role}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                      Active
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-4">
                    <div className="flex justify-center gap-3">
                      <button className="h-10 w-10 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-500 hover:text-white transition duration-300 flex items-center justify-center">
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => deleteUser(item._id)}
                        className="h-10 w-10 rounded-lg bg-red-100 text-red-600 hover:bg-red-500 hover:text-white transition duration-300 flex items-center justify-center"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UserMgnt;

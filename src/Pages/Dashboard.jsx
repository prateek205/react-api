import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FiUsers, FiShoppingBag } from "react-icons/fi";

const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [recentOrders, setRecentOrders] = useState([]);
  const [orders, setOrders] = useState([]);

  const BASE_URL = "https://e-commerce-backend-5q60.onrender.com/api/v1/admin";

  const adminData = async () => {
    try {
      const res = await axios.get(BASE_URL);

      setStats(res.data.stats);
      setRecentOrders(res.data.recentOrders);

      console.log("RECENT-ORDER:", res.data.recentOrders);
      console.log("DATA:", res.data.stats);
    } catch (error) {
      console.log(error);
    }
  };

  const orderData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/order`);

      setOrders(res.data.orders);

      console.log("ORDERS:", res.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    adminData();
    orderData();
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Welcome Admin 👋</h1>

        <p className="text-gray-500 mt-2">Manage your store dashboard easily</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* Revenue */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between hover:shadow-xl transition duration-300">
          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>

            <h2 className="text-3xl font-bold mt-2 text-pink-600">
              ₹{stats?.totalRevenue || 0}
            </h2>
          </div>

          <div className="bg-pink-100 p-4 rounded-full">
            <FaIndianRupeeSign className="text-3xl text-pink-600" />
          </div>
        </div>

        {/* Users */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between hover:shadow-xl transition duration-300">
          <div>
            <p className="text-gray-500 text-sm">Total Users</p>

            <h2 className="text-3xl font-bold mt-2 text-blue-600">
              {stats?.totalUsers || 0}
            </h2>
          </div>

          <div className="bg-blue-100 p-4 rounded-full">
            <FiUsers className="text-3xl text-blue-600" />
          </div>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between hover:shadow-xl transition duration-300">
          <div>
            <p className="text-gray-500 text-sm">Total Orders</p>

            <h2 className="text-3xl font-bold mt-2 text-green-600">
              {orders?.length || 0}
            </h2>
          </div>

          <div className="bg-green-100 p-4 rounded-full">
            <FiShoppingBag className="text-3xl text-green-600" />
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl shadow-md py-1 px-3">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Recent Orders</h2>

          <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>

            <tbody>
              {recentOrders?.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:bg-gray-50 transition duration-200"
                >
                  {/* Order ID */}
                  <td className="p-4 font-medium text-gray-700">
                    #{order._id.slice(-6)}
                  </td>

                  {/* Customer */}
                  <td className="p-4">{order?.userId?.name || "Unknown"}</td>

                  {/* Amount */}
                  <td className="p-4 font-semibold text-pink-600">
                    ₹{order.totalAmount}
                  </td>

                  {/* Status */}
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      Success
                    </span>
                  </td>

                  {/* Date */}
                  <td className="p-4 text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No Orders */}
        {recentOrders.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No Recent Orders Found
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;

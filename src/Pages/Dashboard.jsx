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
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 p-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Welcome Admin 👋
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Manage your store dashboard easily
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {/* Revenue */}
        <div className="group bg-white rounded-3xl border border-gray-200 p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Total Revenue
              </p>

              <h2 className="text-4xl font-bold text-pink-600 mt-2">
                ₹{stats?.totalRevenue || 0}
              </h2>
            </div>

            <div className="h-16 w-16 rounded-2xl bg-pink-100 flex items-center justify-center group-hover:scale-110 duration-300">
              <FaIndianRupeeSign className="text-3xl text-pink-600" />
            </div>
          </div>
        </div>

        {/* Users */}
        <div className="group bg-white rounded-3xl border border-gray-200 p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Total Users
              </p>

              <h2 className="text-4xl font-bold text-blue-600 mt-2">
                {stats?.totalUsers || 0}
              </h2>
            </div>

            <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:scale-110 duration-300">
              <FiUsers className="text-3xl text-blue-600" />
            </div>
          </div>
        </div>

        {/* Orders */}
        <div className="group bg-white rounded-3xl border border-gray-200 p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Total Orders
              </p>

              <h2 className="text-4xl font-bold text-green-600 mt-2">
                {orders?.length || 0}
              </h2>
            </div>

            <div className="h-16 w-16 rounded-2xl bg-green-100 flex items-center justify-center group-hover:scale-110 duration-300">
              <FiShoppingBag className="text-3xl text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Recent Orders</h2>

            <p className="text-sm text-gray-500">Latest customer purchases</p>
          </div>

          <button className="px-5 py-2 rounded-xl bg-black text-white hover:bg-gray-800 duration-300">
            View All
          </button>
        </div>

        {/* Orders Table */}
        {recentOrders?.length > 0 ? (
          <div className="max-h-[500px] overflow-y-auto">
            <table className="w-full">
              <thead className="sticky top-0 bg-white z-10 shadow-sm">
                <tr className="bg-gray-50 border-b">
                  <th className="p-4 text-left">Order ID</th>
                  <th className="p-4 text-left">Customer</th>
                  <th className="p-4 text-left">Amount</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Date</th>
                </tr>
              </thead>

              <tbody>
                {recentOrders.map((order, index) => (
                  <tr
                    key={order._id}
                    className={`border-b hover:bg-gray-50 duration-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                    }`}
                  >
                    {/* Order ID */}
                    <td className="p-4 font-semibold text-gray-700">
                      #{order._id.slice(-6)}
                    </td>

                    {/* Customer */}
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                          {order?.userId?.name?.charAt(0)?.toUpperCase() || "U"}
                        </div>

                        <div>
                          <p className="font-medium text-gray-800">
                            {order?.userId?.name || "Unknown"}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="p-4 font-bold text-pink-600">
                      ₹{order.totalAmount}
                    </td>

                    {/* Status */}
                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                        Completed
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
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-6xl mb-4">📦</div>

            <h3 className="text-xl font-semibold text-gray-700">
              No Orders Yet
            </h3>

            <p className="text-gray-500 mt-2 text-center">
              Orders will appear here once customers start purchasing.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MyProduct } from "../context/ProductContext";
import { useOutletContext } from "react-router-dom";

const AllProduct = () => {
  const { setShowUpdateProdPopup } = useOutletContext();
  const { products, deleteData } = MyProduct();

  return (
    <section className="p-6 h-full">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Product Management
            </h1>
            <p className="text-gray-500">Manage all products</p>
          </div>

          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold">
            Total Products: {products.length}
          </div>
        </div>

        {/* Scrollable Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-white shadow-sm z-10">
              <tr className="bg-gray-100 border-b">
                <th className="text-left p-4">Image</th>
                <th className="text-left p-4">Product Name</th>
                <th className="text-left p-4">Category</th>
                <th className="text-left p-4">Price</th>
                <th className="text-center p-4">Stock</th>
                <th className="text-center p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((item, index) => (
                <tr
                  key={item._id}
                  className={`border-b transition hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  {/* Image */}
                  <td className="p-4">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover border"
                    />
                  </td>

                  {/* Product Name */}
                  <td className="p-4 font-medium text-gray-800">
                    {item.name.length > 40
                      ? item.name.slice(0, 40) + "..."
                      : item.name}
                  </td>

                  {/* Category */}
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm">
                      {item.category}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="p-4 font-semibold text-green-600">
                    ₹{item.price}
                  </td>

                  {/* Stock */}
                  <td className="p-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.stock > 10
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.stock}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => setShowUpdateProdPopup(true)}
                        className="h-10 w-10 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-500 hover:text-white transition"
                      >
                        <FaEdit className="mx-auto" />
                      </button>

                      <button
                        onClick={() => deleteData(item._id)}
                        className="h-10 w-10 rounded-lg bg-red-100 text-red-600 hover:bg-red-500 hover:text-white transition"
                      >
                        <FaTrash className="mx-auto" />
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

export default AllProduct;

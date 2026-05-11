import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const AllProduct = () => {
  return (
    <section className="py-3 px-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold uppercase">Product Management</h1>
        <div>
          <table className="w-full border-collapse">
            <thead className="bg-gray-400">
              <tr>
                <th className="text-left p-2 w-1">Id</th>
                <th className="text-left p-2 w-1/6">Image</th>
                <th className="text-left p-2 w-1/6">Product Name</th>
                <th className="text-left p-2 w-1/6">Category</th>
                <th className="text-left p-2">Price</th>
                <th className="text-left p-2 w-1/6">Stock</th>
                <th className="text-left p-2 w-1/6">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-300">
                <td className="p-2">01</td>
                <td className="p-2 flex items-center justify-center">
                  <img
                    src="/images/bridal-makup-kit.webp"
                    alt=""
                    className="w-20 h-20 object-cover rounded-md"
                  />
                </td>
                <td className="p-2">
                  Just Herbs Bridal Makeup Kit Perfect Gifting Combo Set for
                  Women Bridal Party
                </td>
                <td className="p-2">Cosmatic</td>
                <td className="p-2">₹1100/-</td>
                <td className="p-2 text-green-600 font-bold">In Stock</td>
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

export default AllProduct;

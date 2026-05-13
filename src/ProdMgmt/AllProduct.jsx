import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MyProduct } from "../context/ProductContext";
import { useOutletContext } from "react-router-dom";

const AllProduct = () => {
  const { setShowUpdateProdPopup } = useOutletContext();
  const { products, deleteData } = MyProduct();

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
                <th className="text-left p-2 w-1/2">Product Name</th>
                <th className="text-left p-2 w-1/6">Category</th>
                <th className="text-left p-2">Price</th>
                <th className="text-left p-2 w-1">Stock</th>
                <th className="text-left p-2 w-1/3">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => {
                return (
                  <tr key={item._id} className="bg-gray-300">
                    <td className="p-2">{item._id}</td>
                    <td className="p-2 flex items-center">
                      <img
                        src={item.imageUrl}
                        alt=""
                        className="w-20 h-20 object-cover rounded-md"
                      />
                    </td>
                    <td className="p-2">{item.name.slice(0, 50)}...</td>
                    <td className="p-2">{item.category}</td>
                    <td className="p-2">₹{item.price}</td>
                    <td className="p-2 text-green-600 font-bold text-center">
                      {item.stock}
                    </td>
                    <td className="p-2 text-xl align-middle text-left">
                      <div className="flex gap-5">
                        <button
                          className="hover:text-yellow-500 duration-300"
                          onClick={() => setShowUpdateProdPopup(true)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="hover:text-red-500 duration-300"
                          onClick={() => deleteData(item._id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllProduct;

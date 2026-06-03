import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { MyProduct } from "../context/ProductContext";

const Layout = () => {
  const [showProductPopup, setShowProductPopup] = useState(false);
  const [showUpdateProdPopup, setShowUpdateProdPopup] = useState(false);

  const { form, handleChange, handleSubmit } = MyProduct();

  return (
    <section className="min-h-screen w-full">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-gray-900 text-white">
          <Sidebar
            setShowProductPopup={setShowProductPopup}
            setShowUpdateProdPopup={setShowUpdateProdPopup}
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1 bg-gray-300">
          <Navbar />
          <Outlet context={{ setShowUpdateProdPopup }} />
        </div>
      </div>

      {/* Add Product Popup */}
      {showProductPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white relative w-full sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-1/2 max-h-[90vh] overflow-y-auto p-4 md:p-6 rounded-xl flex flex-col gap-5">
            <button
              className="absolute top-3 right-3 text-2xl"
              onClick={() => setShowProductPopup(false)}
            >
              <IoClose />
            </button>

            <h2 className="text-xl md:text-2xl font-bold text-center">
              Add Product
            </h2>

            <form
              className="flex flex-col gap-5 w-full"
              onSubmit={(e) => handleSubmit(e, setShowProductPopup)}
            >
              <div className="w-full flex flex-col gap-2">
                <label className="font-bold">Image</label>
                <input
                  type="text"
                  placeholder="Img URL"
                  name="imageUrl"
                  value={form.imageUrl}
                  onChange={handleChange}
                  className="w-full py-3 px-3 rounded-md bg-gray-200 outline-none"
                />
              </div>

              <div className="w-full flex flex-col gap-2">
                <label className="font-bold">Product Name</label>
                <input
                  type="text"
                  placeholder="Product Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full py-3 px-3 rounded-md bg-gray-200 outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="w-full flex flex-col gap-2">
                  <label className="font-bold">Product Price</label>
                  <input
                    type="text"
                    placeholder="Product Price"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    className="w-full py-3 px-3 rounded-md bg-gray-200 outline-none"
                  />
                </div>

                <div className="w-full flex flex-col gap-2">
                  <label className="font-bold">Product Stock</label>
                  <input
                    type="text"
                    placeholder="Product Stock"
                    name="stock"
                    value={form.stock}
                    onChange={handleChange}
                    className="w-full py-3 px-3 rounded-md bg-gray-200 outline-none"
                  />
                </div>

                <div className="w-full flex flex-col gap-2">
                  <label className="font-bold">Product Category</label>
                  <input
                    type="text"
                    placeholder="Product Category"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full py-3 px-3 rounded-md bg-gray-200 outline-none"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col gap-2">
                <label className="font-bold">Product Description</label>
                <textarea
                  rows={5}
                  placeholder="Product Description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full py-3 px-3 rounded-md bg-gray-200 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-1/3 bg-gray-600 hover:bg-gray-900 text-white py-3 rounded-md transition"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Layout;

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Layout = () => {
  const [showProductPopup, setShowProductPopup] = useState(false);
  const [showUpdateProdPopup, setShowUpdateProdPopup] = useState(false);

  return (
    <section className="h-screen w-full">
      <div className="flex h-full">
        <h1 className="w-1/5 bg-gray-900 text-white p-2">
          <Sidebar
            setShowProductPopup={setShowProductPopup}
            setShowUpdateProdPopup={setShowUpdateProdPopup}
          />
        </h1>
        <div className="flex flex-col gap-5 bg-gray-300 w-full">
          <Navbar />
          <Outlet />
        </div>
      </div>
      {showProductPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center transition-all duration-300">
          <div className="bg-white relative w-1/2 p-4 rounded-xl flex items-center justify-center flex-col gap-5">
            <button
              className="absolute top-3 right-2 text-2xl"
              onClick={() => setShowProductPopup(false)}
            >
              <IoClose />
            </button>
            <h2 className="text-2xl font-bold">Add Product</h2>
            <form className="flex flex-col gap-6 items-start justify-center w-full ">
              <div className="w-full flex flex-col gap-1">
                <label className="font-bold">Image</label>
                <input
                  type="text"
                  placeholder="Img URL"
                  className="w-full py-2 px-2 outline-none rounded-md bg-gray-200 shadow-[0_0_2px_rgb(50,50,50)]"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-bold">Product Name</label>
                <input
                  className="w-full"
                  type="text"
                  placeholder="Product Name"
                  className="w-full py-2 px-2 outline-none rounded-md bg-gray-200 shadow-[0_0_2px_rgb(50,50,50)]"
                />
              </div>
              <div className="flex gap-5 w-full">
                <div className="w-full flex flex-col gap-2">
                  <label className="font-bold">Product Price</label>
                  <input
                    className="w-full"
                    type="text"
                    placeholder="Product Price"
                    className="w-full py-2 px-2 outline-none rounded-md bg-gray-200 shadow-[0_0_2px_rgb(50,50,50)]"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-bold">Product Stock</label>
                  <input
                    className="w-full"
                    type="text"
                    placeholder="Product Stock"
                    className="w-full py-2 px-2 outline-none rounded-md bg-gray-200 shadow-[0_0_2px_rgb(50,50,50)]"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-bold">Product Discount</label>
                  <input
                    className="w-full"
                    type="text"
                    placeholder="Product Discount"
                    className="w-full py-2 px-2 outline-none rounded-md bg-gray-200 shadow-[0_0_2px_rgb(50,50,50)]"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-bold">Product Description</label>
                <textarea
                  rows={10}
                  className="w-full"
                  type="text"
                  placeholder="Product Description"
                  className="w-full py-2 px-2 outline-none rounded-md bg-gray-200
                shadow-[0_0_2px_rgb(50,50,50)]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-1/4 bg-gray-600 hover:bg-gray-900 duration-300 hover:text-white py-2 px-1 rounded-md"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      )}
      {showUpdateProdPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center transition-all duration-300">
          <div className="bg-white relative w-1/2 p-6 rounded-xl flex items-center justify-center flex-col gap-5">
            <button
              className="absolute top-3 right-2 text-2xl"
              onClick={() => setShowUpdateProdPopup(false)}
            >
              <IoClose />
            </button>
            <h2 className="text-2xl font-bold">Update Product</h2>
            <form className="flex flex-col gap-6 items-start justify-center w-full ">
              <div className="w-full flex flex-col gap-1">
                <label className="font-bold">Image</label>
                <input
                  type="text"
                  placeholder="Img URL"
                  className="w-full py-2 px-2 outline-none rounded-md bg-gray-200 shadow-[0_0_2px_rgb(50,50,50)]"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-bold">Product Name</label>
                <input
                  className="w-full"
                  type="text"
                  placeholder="Product Name"
                  className="w-full py-2 px-2 outline-none rounded-md bg-gray-200 shadow-[0_0_2px_rgb(50,50,50)]"
                />
              </div>
              <div className="flex gap-5 w-full">
                <div className="w-full flex flex-col gap-2">
                  <label className="font-bold">Product Price</label>
                  <input
                    className="w-full"
                    type="text"
                    placeholder="Product Price"
                    className="w-full py-2 px-2 outline-none rounded-md bg-gray-200 shadow-[0_0_2px_rgb(50,50,50)]"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-bold">Product Stock</label>
                  <input
                    className="w-full"
                    type="text"
                    placeholder="Product Stock"
                    className="w-full py-2 px-2 outline-none rounded-md bg-gray-200 shadow-[0_0_2px_rgb(50,50,50)]"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-bold">Product Discount</label>
                  <input
                    className="w-full"
                    type="text"
                    placeholder="Product Discount"
                    className="w-full py-2 px-2 outline-none rounded-md bg-gray-200 shadow-[0_0_2px_rgb(50,50,50)]"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-bold">Product Description</label>
                <textarea
                  rows={10}
                  className="w-full"
                  type="text"
                  placeholder="Product Description"
                  className="w-full py-2 px-2 outline-none rounded-md bg-gray-200
                shadow-[0_0_2px_rgb(50,50,50)]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-1/4 bg-gray-600 hover:bg-gray-900 duration-300 hover:text-white py-2 px-1 rounded-md"
              >
                Update Product
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Layout;

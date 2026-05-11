import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section className="h-screen w-full">
      <div className="flex h-full">
        <h1 className="w-1/5 bg-gray-900 text-white p-2">
          <Sidebar />
        </h1>
        <div className="flex flex-col gap-5 bg-gray-300 w-full">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Layout;

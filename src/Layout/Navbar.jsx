import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="py-2 px-3 shadow shadow-gray-700">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <Link to="/login">
        <button className="py-1 px-2 bg-blue-400 rounded-md hover:bg-blue-300 duration-300 shadow-[0_0_5px_rgb(50,50,50)] text-lg">
          Admin
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;

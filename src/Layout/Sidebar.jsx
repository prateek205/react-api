import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { FaBox, FaUser } from "react-icons/fa";
import { MdAddShoppingCart, MdOutlineSystemUpdateAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = ({ setShowProductPopup, setShowUpdateProdPopup }) => {
  return (
    <section>
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-bold">Admin Panel</h1>
        <ul className="flex flex-col gap-5 text-lg">
          <Link to="dashboard">
            <li className="flex items-center gap-3">
              <AiFillDashboard /> Dashboard
            </li>
          </Link>
          <Link to="users">
            <li className="flex items-center gap-3">
              <FaUser /> Users
            </li>
          </Link>
          <Link to="products">
            <li className="flex items-center gap-3">
              <FaBox />
              Products
            </li>
          </Link>
          <li
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setShowProductPopup(true)}
          >
            <MdAddShoppingCart />
            Add Products
          </li>
          <li
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setShowUpdateProdPopup(true)}
          >
            <MdOutlineSystemUpdateAlt />
            Update Product
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;

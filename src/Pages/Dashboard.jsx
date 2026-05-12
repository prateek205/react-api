import React from "react";
import { FiUsers } from "react-icons/fi";

const Dashboard = () => {
  return (
    <section className="py-2 px-5 flex flex-col gap-5">
      <h1 className="text-4xl">Welcome Admin 👋</h1>

      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <div className="flex items-center justify-between w-1/5">
            <div>
              <h1>Total Users</h1>
              <p>1000</p>
            </div>
            <div>
              <FiUsers />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div>recent user</div>
          <div>recent product</div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

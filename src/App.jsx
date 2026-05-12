import React, { useState } from "react";
import Dashboard from "./Pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import Layout from "./Layout/Layout";
import UserMgnt from "./UserMgmt/UserMgnt";
import AllProduct from "./ProdMgmt/AllProduct";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<UserMgnt />} />
        <Route path="products" element={<AllProduct />} />
      </Route>
    </Routes>
  );
};

export default App;

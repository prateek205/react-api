import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const URL = "https://e-commerce-backend-5q60.onrender.com/api/v1/admin/users";
  const [users, setUsers] = useState([]);

  // GETALLUSER

  const getAllUser = async () => {
    try {
      const res = await axios.get(`${URL}`);
      const data = res.data;

      setUsers(res.data.users);
      console.log("user:", users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  //   DELETE USER
  const deleteUser = async (id) => {
    await axios.delete(`${URL}/${id}`);

    getAllUser();
  };

  return (
    <UserContext.Provider value={{ users, deleteUser }}>{children}</UserContext.Provider>
  );
};

export const MyUser = () => useContext(UserContext);

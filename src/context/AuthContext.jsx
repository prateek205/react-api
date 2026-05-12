import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const initialValue = {
    email: "",
    password: "",
  };

  const URL = "https://e-commerce-backend-5q60.onrender.com/api/v1/admin/login";

  const [user, setUser] = useState(initialValue);
  const navigate = useNavigate();

  //   GET USER

  const getUser = async () => {
    try {
      const res = await axios.get(`${URL}?email=${email}&password=${password}`);
      const data = res.data;

      setUser(res.data.user);
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    getUser();
    console.log("data", getUser);
    navigate("/dashboard");
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleChange }}>
      {children}
    </AuthContext.Provider>
  );
};

export const MyAuth = () => useContext(AuthContext);

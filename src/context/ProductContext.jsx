import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const URL = "https://e-commerce-backend-5q60.onrender.com/api/v1/products";

  const [products, setProducts] = useState([]);

  // GET DATA

  const getData = async () => {
    try {
      const res = await axios.get(URL);
      const data = res.data;

      setProducts(res.data.products);
      console.log("data:", products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //   DELETE DATA
  const deleteData = async (id) => {
    await axios.delete(`${URL}/${id}`);

    getData();
  };

  return (
    <ProductContext.Provider value={{ products, deleteData }}>
      {children}
    </ProductContext.Provider>
  );
};

export const MyProduct = () => useContext(ProductContext);

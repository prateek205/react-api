import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const URL = "https://e-commerce-backend-5q60.onrender.com/api/v1/products";

  const initialValue = {
    imageUrl: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
  };

  const [form, setForm] = useState(initialValue);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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

  // POST DATA

  const postData = async (newProduct) => {
    try {
      const res = await axios.post(URL, newProduct);
      const data = res.data;
      console.log("data:", res.data);
      getData();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e, setShowProductPopup) => {
    e.preventDefault();
    await postData(form);
    setShowProductPopup(false);
    setForm(initialValue);
    navigate("products");
  };

  //   DELETE DATA
  const deleteData = async (id) => {
    await axios.delete(`${URL}/${id}`);

    getData();
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        form,
        postData,
        handleChange,
        handleSubmit,
        deleteData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const MyProduct = () => useContext(ProductContext);

import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import axios from "axios";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Checkout from "../checkout/Checkout";

const ProductState = (props) => {
  const url = "https://secondplaceshoes.onrender.com/api";
  const [products, setProduct] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || ""); 
  const [authenticated, setAuthenticated] = useState(!!localStorage.getItem("token"));
  const [reload, setReload] = useState(false);
  const [cart, setCart] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [address, setAddress] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await axios.get(`${url}/products/get`);
        const ProductData = api.data.product;
        setProduct(ProductData);
        setFilterData(ProductData)
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchData();
    fetchCart();
    getAddress()
  }, [token, reload]);


  //register
  const register = async (name, email, phone, password) => {
    try {
      const api = await axios.post(
        `${url}/user/register`,
        { name, email, phone, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setReload(!reload);

      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });

      return api.data;
    } catch (error) {
      console.error("Registration failed", error);
    }
  };


  //login
  const login = async (email, password) => {
    try {
      const api = await axios.post(
        `${url}/user/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (api.data.token) {
        localStorage.setItem("token", api.data.token);
        setToken(api.data.token);
        setAuthenticated(true);
        setReload(!reload);
      }
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      return api.data;
    } catch (error) {
      console.error("Login failed", error);
    }
  };


  // Add to Cart
  const addToCart = async (productId, title, description, price, qty, imgSrc) => {
    try {
      const api = await axios.post(
        `${url}/cart/add`,
        { productId, title, description, price,qty, imgSrc },
        {
          headers: {
            "Content-Type": "application/json",
          auth:token
          },
          withCredentials: true
        }
      );
      setReload(!reload);
      setCart(api.data.cart.items)
      console.log("my cart", api.data.cart.items);

      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      
      return api.data;
    } catch (error) {
      console.error("Error adding to cart", error);
    }
  };


    // user Cart Item
    const fetchCart = async () => {
      try {
        const api = await axios.get(`${url}/cart/user`, {
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        });
        setCart(api.data.cart);
        // console.log(api.data.cart.items);
        
      } catch (error) {
        console.error("Error fetching cart items", error);
      }
    };

//Remove Qty
const decreaseQty = async (productId, qty) => {
  try {
    const api = await axios.post(
      `${url}/cart/decrease-qty`,
      {productId, qty},
      {
        headers: {
          "Content-Type": "application/json",
        auth:token
        },
        withCredentials: true
      }
    );
    setReload(!reload);
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
    
    // console.log("Decrease",api);
    
  } catch (error) {
    console.error("Error adding to cart", error);
  }
};
     

//remove Item from cart
const removeFromCart= async (productId) => {
  try {
    const api = await axios.delete(
      `${url}/cart/remove/${productId}`,
 
      {
        headers: {
          "Content-Type": "application/json",
        auth:token
        },
        withCredentials: true
      }
    );
    setReload(!reload);
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
    
    // console.log("Remove item from Cart",api);
    
  } catch (error) {
    console.error("Error adding to cart", error);
  }
};

//clear cart
const clearCart= async () => {
  try {
    const api = await axios.delete(
      `${url}/cart/clear`,
 
      {
        headers: {
          "Content-Type": "application/json",
        auth:token
        },
        withCredentials: true
      }
    );
    setReload(!reload);
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
    
    console.log("Remove item from Cart",api);
    
  } catch (error) {
    console.error("Error adding to cart", error);
  }
};
     
    
//Add Shipping Address 
const userAddress = async(fullname, address, city, state, country, pincode, phonenumber) => {
  const api = await axios.post(
    `${url}/address/add`,
    {fullname, address, city, state, country, pincode, phonenumber},
    {
      headers: {
        "Content-Type": "application/json",
      auth:token
      },
      withCredentials: true
    }

  );
  setReload(!reload);
  toast.success(api.data.message, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });
  console.log(api.data);  
  return api.data
}


//get address

  const getAddress = async () => {
    const api = await axios.get(`${url}/address/get`, {
      headers: {
        "Content-Type": "application/json",
      auth:token
      },
      withCredentials: true
    });
    
    setAddress(api.data.userAddress)
    console.log("Addrees is here", api.data.userAddress);
  }







  return (
    <ProductContext.Provider
      value={{
        setToken,
        token,
        authenticated,
        setAuthenticated,
        products,
        login,
        register,
        reload,
        setReload,
        cart,
        setCart,
        addToCart,
        filterData, 
        setFilterData,
        decreaseQty,
        removeFromCart,
        clearCart,
        userAddress,
        address,
        url
      
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

import React from "react";
import Header from "./components/header/Header";
import FavroutProduct from "./components/favProduct/FavroutProduct";
import Brand from "./components/Brand/Brand";
import OurStory from "./components/story/OurStory";
import Footer from "./components/footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Product from "./components/ProductPage/Product";
import ProductDetails from "./components/ProductPage/ProductDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/navbar/Navbar";
import CartItem from "./components/cartItem/CartItem";
import SearchProduct from "./components/ProductPage/SearchProduct";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Address from "./components/address/Address";
import Checkout from "./components/checkout/Checkout";

const App = () => {
  return (
    <>
    <BrowserRouter >
    <Navbar />
    <ToastContainer />
    <Routes>
        <Route path="/" element={
          <>
  
          <Header />
            <FavroutProduct />
            <Brand />
            <OurStory />
          </>
        } />
        <Route path="/product/search/:term" element={<SearchProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productdetail/:id" element={<ProductDetails />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/cartitem" element={<CartItem />}/>
        <Route path="/shipping" element={<Address />}/>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   
    </>
  );
};

export default App;

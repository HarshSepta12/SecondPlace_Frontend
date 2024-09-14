import React, { useContext, useEffect, useState } from "react";
import styles from "../cartItem/CartItem.module.css";
import TableProduct from "./TableProduct";
import ProductContext from "../Context/ProductContext";
import axios from "axios";


const Checkout = () => {
  const { cart,address , url} = useContext(ProductContext);
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);  
  console.log(cart);
  

  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (cart?.items) {
      for (let i = 0; i < cart.items.length; i++) {
        qty += cart.items[i].qty;
        price += cart.items[i].price * cart.items[i].qty;
      }
    }
    setPrice(price);
    setQty(qty);
  }, [cart]);

  const hadlePayment = async() =>{
    const response = await axios.post(`${url}/payment/checkout`,{amount:price, cartItem: cart?.items, userddress: address, userId:id },
    
  
)}

  return (
    <div className="container-fluid">
      <div className={`row ${styles.rowMT}`}>
        <div className="col-sm-12">
          <h1 className="text-center">Order Summary</h1>
        </div>

      </div>
      <div className="row">
        <div className={`col-sm-12 text-center  ${styles.checkout}`}>
          <div className="d-flex justify-content-center align-items-center ">

        <table className="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">Product Details</th>
      <th scope="col">Shipping Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <TableProduct cart={cart}/>

      </td>
      <td>
        <ul>
          <li>Name: {address?.fullname}</li>
          <li>Phone: {address?.phonenumber}</li>
          <li>Country:  {address?.country}</li>
          <li>State:  {address?.state}</li>
          <li>Pincode:  {address?.pincode}</li> 
          <li>Address:  {address?.address}</li> 
        </ul>
      </td>
    </tr>
  </tbody>
</table>
          </div>

    <div className="row">
      <div className="col-sm-12 text-center my-3">
          <button className="btn btn-outline-info fw-bold">Process To Pay</button>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

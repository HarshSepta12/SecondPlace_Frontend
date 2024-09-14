import React, { useContext, useEffect, useState } from "react";
import styles from "../cartItem/CartItem.module.css";
import TableProduct from "./TableProduct";
import ProductContext from "../Context/ProductContext";
import axios from "axios";

const Checkout = () => {
  const { cart, address, url } = useContext(ProductContext);
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (cart?.items) {
      cart.items.forEach((item) => {
        qty += item.qty;
        price += item.price * item.qty;
      });
    }
    setPrice(price);
    setQty(qty);
  }, [cart]);

  const handlePayment = async () => {
    await axios.post(`${url}/payment/checkout`, {
      amount: price,
      cartItem: cart?.items,
      userAddress: address,
    });
  };

  return (
    <div className="container-fluid">
      <div className={`row ${styles.rowMT}`}>
        <div className="col-12">
          <h1 className="text-center">Order Summary</h1>
        </div>
      </div>

      <div className="row">
        <div className={`col-12 text-center ${styles.checkout}`}>
          <div className="table-responsive">
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
                    <TableProduct cart={cart} />
                  </td>
                  <td>
                    <ul className="list-unstyled">
                      <li>Name: {address?.fullname}</li>
                      <li>Phone: {address?.phonenumber}</li>
                      <li>Country: {address?.country}</li>
                      <li>State: {address?.state}</li>
                      <li>Pincode: {address?.pincode}</li>
                      <li>Address: {address?.address}</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="row my-3">
            <div className="col-12 text-center">
              <button
                className="btn btn-outline-info fw-bold"
                onClick={handlePayment}
              >
                Process To Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

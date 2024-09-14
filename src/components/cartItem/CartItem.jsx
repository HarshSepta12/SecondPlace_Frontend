import React, { useContext, useEffect, useState } from "react";
import styles from "./CartItem.module.css";
import ProductContext from "../Context/ProductContext";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const { cart, decreaseQty, addToCart, removeFromCart, clearCart } =
    useContext(ProductContext);
  const navigate = useNavigate();
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

  return (
    <div className="container-fluid ">
      <div className="row ">
        {cart?.items?.length > 0 && (
          <div className={`${styles.priceQty} col-sm-12`}>
            <h2>Total Qty: {qty}</h2>
            <h2>Total Price: {price}</h2>
          </div>
        )}
      </div>

      <div className="row ">
        <div className="col-sm-12 text-center">
          {cart?.items?.length === 0 ? (
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/product")}
            >
              Continue Shopping...
            </button>
          ) : (
            <>
              <h1 className={styles.heading}>Cart Items</h1>
              <div className="row">
                <div className="col-sm-12">
                  {cart?.items?.map((product) => (
                    <div key={product._id} className="container bg-dark my-5">
                      <div className="d-flex justify-content-between align-items-center text-center">
                        <div className={`p-3 ${styles.cartImg}`}>
                          <img src={product.imgSrc} alt={product.title} />
                        </div>
                        <div className={`text-light ${styles.desc}`}>
                          <h2>{product.title}</h2>
                          <h4>Price: {product.price}</h4>
                          <h4>Quantity: {product.qty}</h4>
                        </div>

                        <div className={styles.action}>
                          <button
                            className="btn btn-secondary ms-3"
                            style={{ fontWeight: "bold" }}
                            onClick={() => decreaseQty(product.productId, 1)}
                          >
                            Decrease Qty (-)
                          </button>
                          <button
                            className="btn btn-info ms-3"
                            style={{ fontWeight: "bold" }}
                            onClick={() =>
                              addToCart(
                                product.productId,
                                product.title,
                                product.description,
                                product.price / product.qty,
                                1,
                                product.img
                              )
                            }
                          >
                            Increase Qty (+)
                          </button>
                          <button
                            className="btn btn-danger ms-3"
                            style={{ fontWeight: "bold" }}
                            onClick={() => {
                              if (
                                confirm(
                                  "Are you sure you want to remove this item from the cart?"
                                )
                              ) {
                                removeFromCart(product.productId);
                              }
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`col-sm-12 text-center ${styles.checkoutButton}`}>
                <button
                  className="btn btn-secondary mx-3"
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "20px",
                  }}
                  onClick={() => navigate("/shipping")}
                >
                  Checkout
                </button>
                <button
                  className="btn btn-danger"
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "20px",
                  }}
                  onClick={() => {
                    if (confirm("Are you sure you want to clear the cart?")) {
                      clearCart();
                    }
                  }}
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;

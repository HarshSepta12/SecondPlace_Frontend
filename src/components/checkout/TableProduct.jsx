import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import ProductContext from "../Context/ProductContext";

const TableProduct = ({ cart }) => {
  const { removeFromCart, addToCart, decreaseQty } = useContext(ProductContext);
  const navigate = useNavigate();
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);

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
//   console.log(cart);
  
  return (
    <div>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">Product Img</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Qty++</th>
            <th scope="col">Qty--</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart?.items?.map((item) => (
            <tr key={item._id}>
              <td>
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  style={{ width: "100px" }}
                />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
              <td>
                <FaPlus
                  style={{ fontSize: "20px" }}
                  onClick={() =>
                    addToCart(
                      item.productId,
                      item.title,
                      item.description,
                      item.price / item.qty,
                      1,
                      item.imgSrc
                    )
                  }
                />
              </td>
              <td>
                <FaMinus
                  style={{ fontSize: "20px" }}
                  onClick={() => decreaseQty(item.productId
                    , 1)}
                />
              </td>
              <td>
                <MdOutlineRemoveShoppingCart
                  style={{ fontSize: "25px" }}
                  onClick={() => {
                    removeFromCart(item.productId);
                  }}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <button className="btn btn-primary">Total</button>
            </td>
            <td>
              <button className="btn btn-warning">{price}</button>
            </td>
            <td>
              <button className="btn btn-info">{qty}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableProduct;

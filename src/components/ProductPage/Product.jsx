import React, { useContext, useEffect, useState } from "react";
import styles from "./Product.module.css";
import ProductContext from "../Context/ProductContext";
import { Link, useParams } from "react-router-dom";


const Product = () => {
  const {  filterData,  addToCart } = useContext(ProductContext);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className={`col-sm-12 mt-5 ${styles.mt}`}>
          <h1 className="text-center">Buy Anything</h1>
        </div>
      </div>

      <div className="row mt-3 ">
        {filterData.map((items) => {
          return (
            <div
              className="col-sm-3 d-flex gap-5 justify-content-evenly align-items-center mt-5"
              key={items._id}
            >
              <div
                className="card"
                style={{
                  width: "18rem", minHeight: "400px",
                  // borderRadius: "12px",
                  // border: "1px solid blue",
                  height: "360px",
                  overflow: "hidden",
                }}
              >
                <img
                  className={`card-img-top ${styles.imgStyles}`}
                  src={items.img}
                  alt="Card image cap"
                  // style={{objectFit:"cover"}}
                />
                <div className="card-body">
                  <h4 className="text-center">{items.title}</h4>
                  <p className="card-text text-center">{items.description}</p>
                  <div className="text-center">
                    <Link
                      to={`/productdetail/${items._id}`}
                      className="btn btn-primary"
                    >
                      Buy Now
                    </Link>

                    <Link >
                      <button
                        className="ms-2 btn btn-warning"
                        onClick={() =>
                          addToCart(
                            items._id,
                            items.title,
                            items.description,
                            items.price,
                            1,
                            items.img
                          )
                        }
                      >
                        Add To Cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;

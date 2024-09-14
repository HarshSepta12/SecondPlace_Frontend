import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../Context/ProductContext";
import styles from "./Product.module.css";

const RelatedProduct = ({ productCategory }) => {
  const { products } = useContext(ProductContext);
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    setRelatedProduct(
      products.filter(
        (data) => data.title.toLowerCase() === productCategory.toLowerCase()
      )
    );
  }, [productCategory, products]);

  return (
    <div className="container-fluid mt-5 text-center">
      <div className="row">
        <div className="col-sm-12 d-flex justify-content-center align-items-center flex-wrap gap-5">
          {relatedProduct.map((data, index) => {
            return (
              <div className="card" style={{ width: "18rem" }} key={index}>
                <div className={styles.imgDiv}>
                  <img src={data.img} className={`${styles.cardImg} card-img-top`} alt={data.title} />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{data.title}</h4>
                  <p className="card-text">{data.description}</p>
                 <button className="btn btn-primary">₹{data.price}</button> 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Product.module.css";
import axios from "axios";
import RelatedProduct from "./RelatedProduct";

const ProductDetails = () => {
  const url = "http://localhost:1000/api";
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  // const [countProduct, setCountProduct] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await axios.get(`${url}/products/${id}`);
        const product = api.data.product[0]; 
        setProductDetails(product);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
      <div className={`row ${styles.marginTop}`}>
        <div className={`col-sm-6 mt-5 `}>
          <div
            className="card"
            style={{
              width: "20rem",
              borderRadius: "12px",
              border: "1px solid blue",
              maxHeight: "300px",
              overflow:"hidden",
            }}
          >
            <img
              className={`card-img-top ${styles.imgStyles}`}
              src={productDetails.img}
              alt={productDetails.name}
              
            />
          </div>
        </div>
        <div className="col-sm-6 mx-auto text-center mt-5">
            <h4>Brand:{productDetails.title}</h4>
            <p className="card-text text-center">Details: {productDetails.description}</p>
   
            <button className="btn btn-primary">₹{productDetails.price}</button>
            <button className="btn btn-warning ms-2">Add to Cart</button>

        
        </div>
      </div>
    </div>

    <RelatedProduct productCategory={productDetails.title}/>
    </>
  
  );
};

export default ProductDetails;

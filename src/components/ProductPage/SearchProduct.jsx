import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../Context/ProductContext";
import styles from "../ProductPage/Product.module.css";
import {Link, useParams} from "react-router-dom"

const SearchProduct = () => {
  const { products } = useContext(ProductContext);
  const [searchProduct, setSearchProduct] = useState([]);
  const navigate = useNavigate();

  const {term} = useParams();
  console.log(term);
  

  useEffect(() => {
    setSearchProduct(
     products.filter(
        (data) => data.title.toLowerCase().includes(term.toLowerCase())
      )
    );
  }, [term, products]);

  return (
    <div className="container-fluid mt-5 text-center">
      <div className="row">
        <div className="col-sm-12 mt-5 d-flex justify-content-center align-items-center flex-wrap gap-5">
          {searchProduct.map((data, index) => {
            return (
              <div className="card" style={{ width: "18rem" }} key={index}>
                <div className={styles.imgDiv}>
                  <img src={data.img} className={`${styles.cardImg} card-img-top`} alt={data.title} />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{data.title}</h4>
                  <p className="card-text">{data.description}</p>
                 <button className="btn btn-primary" onClick={() => navigate(`/productdetail/${data._id}`)}>₹{data.price}</button> 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;

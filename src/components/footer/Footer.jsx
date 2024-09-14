import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import img1 from '../../../public/logo2.png'

const Footer = () => {
  return (
    <div className="container-fluid mt-5">
      <div className={styles.footerParent}>
        <div className="row p-5">
          <div className="col-sm-3 mt-auto">
            <img
              src={img1}
              alt="logo2"
              style={{ width: "100px", padding: "10px" }}
            />
          </div>
          <div className="col-sm-3 mt-auto">
            <div className="d-flex justify-content-center align-items-center flex-column text-light gap-1">
              <h6>Menu</h6>
              <span className="text-center">Home</span>
              <span className="text-center">About</span>
              <span className="text-center">Bestseller</span>
              <span>Sneakers</span>
              <span className="text-center">Streetwear</span>
              <span className="text-center">Accessories</span>
            </div>
          </div>
          <div className="col-sm-6 mt-auto">
            <div className="text-light">
              <h6 className="text-start">Newsletter</h6>
              <p className="text-start">
                Sign up for exclusive offers and information about upcoming
                sneaker releases!
              </p>
            </div>
            <div className="text-light text-start">
            <FaInstagram className="me-3"/>
            <FaFacebook className="me-3"/>
            <FaXTwitter />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

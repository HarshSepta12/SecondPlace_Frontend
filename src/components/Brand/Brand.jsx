import React from "react";
import styles from "./Brand.module.css";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import img1 from '../../../public/Rectangle 264.png'
import img2 from '../../../public/Rectangle 265.png'
import img3 from '../../../public/Rectangle 267.png'
import img4 from '../../../public/Rectangle 268.png'
import img5 from '../../../public/Rectangle 12.png'
import img7 from '../../../public/Rectangle 13.png'
import img6 from '../../../public/Rectangle 14.png'

const Brand = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className={styles.brandGroup1}>
            <img src={img1} alt="Brand1" style={{width: "100%"}} />
            <div className={styles.brandPosition}>
              <p>Jordan</p>
              <a href="" className={styles.shopColor}>
                Shop Now
              </a>
            </div>
          </div>
          <div className={styles.brandGroup2}>
            <img src={img2}alt="Brand2" style={{width: "100%"}}/>
            <div className={styles.brandPosition}>
              <p>OGGi</p>
              <a href="" className={styles.shopColor}>
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className= {styles.brandGroup1}>
            <img src={img3} alt="Brand1"  style={{width: "100%"}}/>
            <div className={styles.brandPosition}>
              <p>Adidas</p>
              <a href="" className={styles.shopColor}>
                Shop Now
              </a>
            </div>
          </div>
          <div className={styles.brandGroup2}>
            <img src={img4} alt="Brand2" style={{width: "100%"}}/>
            <div className={styles.brandPosition}>
              <p>Air</p>
              <a href="" className={styles.shopColor}>
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 mt-4">
          <div className={styles.popularHeading}>
          <SlArrowLeft />
          <h1 className="text-center">Popular Products</h1>
          <SlArrowRight />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
        <div className={`p-4 ${styles.products}`}>
        <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top img-fluid"
                src={img5}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text text-center">Nike Mac Attack QS SP White Black</p>

                <div className="text-center">
                <a href="#" className="btn btn-primary">
                  Buy Product
                </a>
                </div>
           
              </div>
            </div>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top img-fluid"
                src={img7}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text text-center">Nike Mac Attack QS SP White Black</p>

                <div className="text-center">
                <a href="#" className="btn btn-primary">
                  Buy Product
                </a>
                </div>
           
              </div>
            </div>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top img-fluid"
                src={img6}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text text-center">Nike Mac Attack QS SP White Black</p>

                <div className="text-center">
                <a href="#" className="btn btn-primary">
                  Buy Product
                </a>
                </div>
           
              </div>
            </div>
            
            </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import img2 from '../../../public/img2.png'
import sliderImg1 from '../../../public/The-Best-Shoe-eCommerce-Website-Designs.jpg';
import sliderImg2 from '../../../public/pexels-pluyar-786003.jpg';
import deliver1 from '../../../public/Group 279.png'
import deliver2 from '../../../public/Group 280.png'
import deliver3 from '../../../public/Group.png'
import deliver4 from '../../../public/Vector.png'



const Header = () => {
  const Navigate = useNavigate()

  const ImgSlider = [
    sliderImg1,
    sliderImg2
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ImgSlider.length);
  };

  const PrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex == 0 ? ImgSlider.length - 1 : prevIndex - 1
    );
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % ImgSlider.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [ImgSlider.length]);
  return (
    <div className={`container-fluid ${styles.headerParent}`}>
      <div className="row">
        <div className="col-sm-12 ">
          <div className={`row ${styles.bgc}`}>
            <div className={`col-sm-1 mx-auto ${styles.leftArrow}`}>
              <SlArrowLeft onClick={() => PrevSlide()} />
            </div>
            <div className={`col-sm-6 ${styles.imgStyles}`}>
              <img
                src={ImgSlider[currentIndex]}
                alt="img-1"
                style={{
                  width: "400px",
                  borderRadius: "12px",
                  border: "1px solid yellow",
                }}
              />
            </div>
            <div className="col-sm-3 text-center d-flex justify-content-center align-items-center flex-column">
              <h3>Comfort that keeps up.</h3>
              <button className="btn btn-secondary mt-2" onClick={() => Navigate('/product')}>Shop Now</button>
            </div>
            <div className={`col-sm-1 ${styles.rightArrow}`}>
              <SlArrowRight onClick={() => nextSlide()} />
            </div>
            {/* <div className="col-sm-3 text-end">
              <img
                src={img2}
                alt="img-2"
                className={styles.imgStyle}
                style={{
                  width: "200px",
                  marginTop: "0rem",
                  overFlow: "hidden",
                  marginLeft: "9rem"
                }}
              />
            </div> */}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className={styles.secondBgc}>
            <div className={styles.iconCommon}>
              <img src={deliver1} alt="delivery" />
              <p>Fast Delivery</p>
            </div>
            <div className={styles.iconCommon}>
              <img src={deliver2} alt="delivery" />
              <p>Easy Return</p>
            </div>
            <div className={styles.iconCommon}>
              <img src={deliver3} alt="delivery" />
              <p>Customer Support</p>
            </div>
            <div className={styles.iconCommon}>
              <img src={deliver4} alt="delivery" />
              <p>Discount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

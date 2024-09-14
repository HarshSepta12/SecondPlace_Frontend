import React from "react";
import styles from "./FavProduct.module.css";
import { Link } from "react-router-dom";
import img1 from '../../../public/Rectangle 12.png'
import img2 from '../../../public/Rectangle 13.png'
import img3 from '../../../public/Rectangle 14.png'
import img4 from '../../../public/Rectangle 15.png'
import img5 from '../../../public/Rectangle 16.png'
import img6 from '../../../public/Rectangle 17.png'

const FavroutProduct = () => {

  return (
    <div className={`container-fluid ${styles.mt}`}>
      <div className="row">
        <div className="col-sm-12 mt-5 mb-5">
          <h2 className="text-center">Our favorites</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className={`p-4 ${styles.products}`}>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src={img1}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text text-center">Nike Mac Attack QS SP White Black</p>

                <div className="text-center">
                <Link to="/product" href="#" className="btn btn-primary">
                  Buy Product
                </Link>
                </div>
           
              </div>
            </div>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src={img2}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text text-center">Nike Mac Attack QS SP White Black</p>

                <div className="text-center">
                <Link to="/product" href="#" className="btn btn-primary">
                  Buy Product
                </Link>
                </div>
           
              </div>
            </div>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src={img3}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text text-center">Nike Mac Attack QS SP White Black</p>

                <div className="text-center">
                <Link to="/product" href="#" className="btn btn-primary">
                  Buy Product
                </Link>
                </div>
           
              </div>
            </div>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src={img4}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text text-center">Nike Mac Attack QS SP White Black</p>

                <div className="text-center">
                <Link to="/product" href="#" className="btn btn-primary">
                  Buy Product
                </Link>
                </div>
           
              </div>
            </div>
            <div className  ="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src={img5}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text text-center">Nike Mac Attack QS SP White Black</p>

                <div className="text-center">
                <Link to="/product" href="#" className="btn btn-primary">
                  Buy Product
                </Link>
                </div>
           
              </div>
            </div>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src={img6}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text text-center">Nike Mac Attack QS SP White Black</p>

                <div className="text-center">
                <Link to="/product" href="#" className="btn btn-primary">
                  Buy Product
                </Link>
                </div>
           
              </div>
            </div>
            {/* <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="public\Rectangle 12.png"
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
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="public\Rectangle 17.png"
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavroutProduct;

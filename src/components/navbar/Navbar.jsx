import React, { useContext, useEffect, useState } from "react";
import styles from "../header/Header.module.css";
import { CgAdidas } from "react-icons/cg";
import { SiPuma, SiNike } from "react-icons/si";
import { PiSneaker } from "react-icons/pi";
import ProductContext from "../Context/ProductContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import img1 from "../../../public/SECOND Place.png";
import img2 from "../../../public/red-chief-logo.png";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { authenticated, setAuthenticated, setToken, products, setFilterData, cart } =
    useContext(ProductContext);
    // console.log("user Cart= ", cart);
    
  const navigate = useNavigate();
  // const location = useLocation();

  const filterByCategory = (title) => {
    setFilterData(
      products.filter(
        (item) => item.title.toLowerCase() === title.toLowerCase()
      )
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className={`col-sm-12 ${styles.navFixed}`}>
            <div className={styles.navParent}>
              <div className={styles.logo}>
                <img
                  src={img1}
                  alt="Second Place Logo"
                  className="logo"
                  style={{ width: "140px", cursor: "pointer" }}
                  onClick={() => navigate("/")}
                />
              </div>
              <div className={styles.navCenter}>
                <CgAdidas
                  onClick={() => filterByCategory("adidas")}
                  style={{ cursor: "pointer" }}
                />
                <SiPuma
                  onClick={() => filterByCategory("puma")}
                  style={{ cursor: "pointer" }}
                />
                <img
                  src={img2}
                  alt="Red Chief"
                  style={{ width: "40px", cursor: "pointer" }}
                  onClick={() => filterByCategory("red chief")}
                />
                <SiNike
                  onClick={() => filterByCategory("nike")}
                  style={{ cursor: "pointer" }}
                />
                <PiSneaker
                  onClick={() => filterByCategory("Sneakers")}
                  style={{ cursor: "pointer" }}
                />
              </div>

              <div className={styles.navRight}>
                {!authenticated && (
                  <>
                    <Link to="/login">
                      <button className="btn btn-outline-primary">Login</button>
                    </Link>
                    <Link to="/register">
                      <button className="btn btn-outline-secondary">
                        Register
                      </button>
                    </Link>
                  </>
                )}

                {authenticated && (
                  <>
                    <button
                      className="btn btn-outline-danger mx-2"
                      onClick={() => {
                        localStorage.removeItem("token");
                        setAuthenticated(false);
                        setToken(" ");
                        toast.success("Logout Successfull", {
                          position: "top-right",
                          autoClose: 1500,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                          transition: Bounce,
                        });
                        navigate("/");
                      }}
                    >
                      Logout
                    </button>

                    <Link to="/profile">
                      <button className="btn btn-outline-info">Profile</button>
                    </Link>

                    <Link to={'/cartitem'}>
                      <button
                        type="button"
                        className="btn btn-secondary position-relative"
                      >
                        <FaShoppingCart />
                       { cart?.items?.length > 0 &&(
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart?.items?.length}
                          <span className="visually-hidden"></span>
                        </span>
                        )}
                      
                      </button>
                    </Link>
                  </>
                )}
                <div
                  className={`d-flex justify-content-center align-items-center ${styles.searchBar}`}
                >
                  <form onSubmit={submitHandler}>
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className={styles.inputStyle}
                    />
                    <button
                      className="btn btn-outline-success btn-sm"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

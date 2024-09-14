import React, { useContext, useState } from "react";
import styles from "./address.module.css";
import ProductContext from "../Context/ProductContext";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();
  const { userAddress, address } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    phonenumber: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullname, address, city, state, country, pincode, phonenumber } =
      formData;
    const result = await userAddress(
      fullname,
      address,
      city,
      state,
      country,
      pincode,
      phonenumber
    );

    if (result.success) {
      setFormData({
        fullname: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        phonenumber: "",
      });
      navigate("/checkout");
    }
  };

  return (
    <div className="container-fluid">
      <div className={`row  ${styles.address}`}>
        <h1 className="text-center">Shipping Address</h1>
        <div className={`col-sm-8 mx-auto ${styles.formStyle}`}>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="mb-3 col-sm-4">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control  bg-secondary text-light"
                  name="fullname"
                  value={formData.fullname}
                  onChange={(e) => onHandleChange(e)}
                />
              </div>

              <div className="mb-3 col-sm-4">
                <label className="form-label">Country</label>
                <input
                  type="text"
                  className="form-control  bg-secondary text-light"
                  name="country"
                  value={formData.country}
                  onChange={(e) => onHandleChange(e)}
                />
              </div>

              <div className="mb-3 col-sm-4">
                <label className="form-label">State</label>
                <input
                  type="text"
                  className="form-control bg-secondary text-light"
                  name="state"
                  value={formData.state}
                  onChange={(e) => onHandleChange(e)}
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-sm-4">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control  bg-secondary text-light"
                  name="city"
                  value={formData.city}
                  onChange={(e) => onHandleChange(e)}
                />
              </div>

              <div className="mb-3 col-sm-4">
                <label className="form-label">Pincode</label>
                <input
                  type="number"
                  className="form-control  bg-secondary text-light"
                  name="pincode"
                  value={formData.pincode}
                  onChange={(e) => onHandleChange(e)}
                />
              </div>

              <div className="mb-3 col-sm-4">
                <label className="form-label">Phone Number</label>
                <input
                  type="number"
                  className="form-control bg-secondary text-light"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={(e) => onHandleChange(e)}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address Nearby
              </label>
              <textarea
                className="form-control bg-secondary text-light"
                id="address"
                name="address"
                rows="3"
                value={formData.address}
                onChange={(e) => onHandleChange(e)}
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
           

            {address && (
              <div className="text-center mt-2">
                <button type="button" className="btn btn-warning" 
                onClick={() => navigate('/checkout')}>
                  Use Old Address
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Address;

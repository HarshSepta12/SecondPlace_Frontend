import React, { useContext, useState } from "react";
import styles from "../Login/Login.module.css";
import ProductContext from "../Context/ProductContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { register, setReload } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };
  const { name, email, phone, password } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await register(name, email, phone, password);
    // alert(result.message);
  
    if (result.success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
      navigate("/login");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`col-sm-12 ${styles.marginTop}`}>
        <h1 className="text-center">Register</h1>
        <div className={`col-sm-4 mx-auto mt-5 ${styles.formStyle}`}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={(e) => onHandleChange(e)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={(e) => onHandleChange(e)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="number"
                className="form-control"
                maxLength={10}
                name="phone"
                value={formData.phone}
                onChange={(e) => onHandleChange(e)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={(e) => onHandleChange(e)}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Register;

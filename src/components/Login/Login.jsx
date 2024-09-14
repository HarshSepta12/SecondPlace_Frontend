import React, { useContext, useState } from "react";
import styles from "../Login/Login.module.css";
import ProductContext from "../Context/ProductContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const { login } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };
  const { email, password } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    // alert(result.message);
    if (result.success) {
      setFormData({
        email: "",
        password: "",
      });
      navigate('/product')
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
      <div className={`col-sm-12 ${styles.marginTop}`}>
        <h1 className="text-center">Login</h1>
        <div className={`col-sm-4 mx-auto mt-5 ${styles.formStyle}`}>
          <form onSubmit={handleSubmit}>
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
                  Login
                </button>
            
            </div>
          </form>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Login;

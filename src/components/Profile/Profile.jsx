import React, { useContext, useEffect, useState } from "react";
import styles from "./Profile.module.css";
import axios from "axios";
import ProductContext from "../Context/ProductContext";

const Profile = () => {
  const { setAuthenticated, setToken, token } = useContext(ProductContext);
  const [profile, setProfile] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);    

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("token");
    console.log("Token from localStorage:", tokenFromLocalStorage);  
    
    if (tokenFromLocalStorage) {
      setToken(tokenFromLocalStorage);
      setAuthenticated(true);

      const fetchProfile = async () => {
        try {
          const api = await axios.get("https://secondplaceshoes.onrender.com/api/user/profile", {
            headers: {
              "Content-Type": "application/json",
              auth: tokenFromLocalStorage, 
            },
          });

          if (api.data) {
            setProfile(api.data);
          } else {
            throw new Error("No profile data returned");
          }

          setLoading(false);  
        } catch (error) {
          console.error("Failed to fetch profile:", error.response ? error.response.data : error.message);
          setError("Unable to fetch profile data.");
          setLoading(false); 
        }
      };

      fetchProfile(); 
    } else {
      setLoading(false);
      setError("No token found. Please log in first.");
    }
  }, [setToken, setAuthenticated]);

  return (
    <div className={`container ${styles.marginTop}`}>
      <div className="card text-center mt-5">
        <div className="card-header fw-bolder fs-3">User Profile</div>
        <div className="card-body">
          {loading ? (
            <p>Loading profile...</p>
          ) : error ? (
            <p>{error}</p>   
          ) : profile ? (
            <>
              <h5 className="card-title">Name: {profile.name}</h5>
              <h5 className="card-title">Email: {profile.email}</h5>
              <h5 className="card-title">Phone: {profile.phone}</h5>
            </>
          ) : (
            <p>No profile data available.</p>
          )}
        </div>
        <div className="card-footer text-body-secondary">
          Created At: {profile ? profile.createdAt : "N/A"}
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import sliceheaven from "../Images/Sliceheaven.png";
import { Link } from "react-router-dom";

export default function Adminnavbar(props) {

  const handleLogout =()=>{
    props.showAlert("Logged out successfully", "success");
    localStorage.removeItem('admintoken');  
  }

  return (
    <div>
      <nav
        className="navbar navbar-light d-flex "
        style={{ backgroundColor: "#0A1828", height: "10vh" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/admindash">
            <img
              src={sliceheaven}
              alt="Sliceheaven"
              width="165"
              className="d-inline-block align-text-top"
            />
          </Link>
          <div
            className="d-flex justify-content-around "
            style={{ width: "38%" }}
          >
            <Link
              className="btn "
              to="/admindash"
              role="button"
              style={{
                width: "20%",
                height: "5.3vh",
                color: "#E4AE31",
                fontSize: "1.3rem",
                padding: "0",
                fontWeight: "bold",
              }}
            >
              <i className="fa-solid fa-house" style={{ color: "#178582", marginRight: "10px" }} ></i>
              home
            </Link>
            <Link
              className="btn "
              to="/adminproduct"
              role="button"
              style={{
                width: "29%",
                height: "5.3vh",
                color: "#E4AE31",
                fontSize: "1.3rem",
                padding: "0",
                fontWeight: "bold",
              }}
            >
              <i
                className="fa-solid fa-pizza-slice"
                style={{ color: "#178582", marginRight: "10px" }}
              ></i>
              products
            </Link>
            <Link
              className="btn "
              to="/adminorder"
              role="button"
              style={{
                width: "24%",
                height: "5.3vh",
                color: "#E4AE31",
                fontSize: "1.3rem",
                padding: "0",
                fontWeight: "bold",
              }}
            >
              <i
                className="fa-solid fa-bag-shopping"
                style={{ color: "#178582", marginRight: "10px" }}
              ></i>
              orders
            </Link>
            <Link
              className="btn "
              to="/"
              role="button"
              onClick={handleLogout}
              style={{
                width: "27%",
                height: "5.3vh",
                color: "#E4AE31",
                fontSize: "1.3rem",
                padding: "0",
                fontWeight: "bold",
              }}
            >
              <i
                className="fa-solid fa-right-from-bracket"
                style={{ color: "#178582", marginRight: "10px" }}
              ></i>
              logout
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

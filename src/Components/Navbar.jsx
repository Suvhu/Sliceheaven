import React from "react";
import sliceheaven from "../Images/Sliceheaven.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light d-flex " style={{backgroundColor : "#0A1828",height:"10vh"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={sliceheaven}
              alt="Sliceheaven"
              width="165"
              className="d-inline-block align-text-top"
            />
          </Link>
        <div className="d-flex justify-content-around " style={{width: "22%"}}> 
        <Link className="btn " to="/userlogin" role="button" style={{width: "35%",height:"5.3vh",backgroundColor:"#178582",color: "#E4AE31",fontSize: "1.3rem", padding: "0", fontWeight: "bold"}}>user login</Link>
        <Link className="btn " to="/adminlogin" role="button" style={{width: "40%",height:"5.3vh",backgroundColor:"#178582",color: "#E4AE31",fontSize: "1.3rem", padding: "0", fontWeight: "bold"}}>admin login</Link>
        </div>
        </div>
      </nav>
    </div>
  );
}

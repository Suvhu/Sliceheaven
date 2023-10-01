import React from "react";
import img1 from "../Images/slideshow1.jpg";
import img2 from "../Images/slideshow2.jpg";
import img3 from "../Images/slideshow3.jpg";
import { Link } from "react-router-dom";

export default function Homebody() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{position: "absolute"}}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-item active">
            <img
              src={img2}
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(60%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img1}
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(60%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(80%)" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="d-flex flex-column justify-content-between align-items-center" style={{height: "90vh", zIndex: "3",paddingTop:"10vh",position: "relative",paddingBottom:"10vh",padding:"10vh 0"}}>
        <h1 style={{fontWeight: "bold" , fontSize: "150px" ,color:"#178582"}}>are u hungry?</h1>
        <h2 style={{fontWeight: "bold", fontSize: "80px",color:"#178582"}}>EAT NOW</h2>
        <div className="d-flex justify-content-around " style={{width: "40%"}}> 
        <Link className="btn " to="/usersignup" role="button" style={{width: "23%",height:"7vh",backgroundColor:"#0A1828",color: "#E4AE31",fontSize: "1.5rem",  fontWeight: "bold"}}>Signup</Link>
        {/* <Link className="btn " to="/about" role="button" style={{width: "23%",height:"7vh",backgroundColor:"#0A1828",color: "#E4AE31",fontSize: "1.5rem", fontWeight: "bold"}}>About us</Link> */}
        </div>
      </div>
    </div>
  );
}

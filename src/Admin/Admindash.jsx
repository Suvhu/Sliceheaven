import React, { useEffect, useContext } from 'react'
import { useNavigate, Link } from "react-router-dom";
import Adminnavbar from './Adminnavbar';
import allContext from '../Context/items/allContext';
import img1 from "../Images/slideshow1.jpg";
import img2 from "../Images/slideshow2.jpg";
import img3 from "../Images/slideshow3.jpg";


export default function Admindash(props) {

  let history = useNavigate();
  const context = useContext(allContext);
  const { admin, getAdmin} = context;

  useEffect(()=>{
    if(!localStorage.getItem('admintoken')){
      history("/adminlogin"); 
    }
    else{
      getAdmin();
    }
  },[])


  return (
    <div>
      <Adminnavbar showAlert = {props.showAlert} />
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
              style={{ filter: "brightness(40%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img1}
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(40%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(40%)" }}
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
      <div className="d-flex flex-column justify-content-center align-items-center" style={{height: "90vh", zIndex: "3",paddingTop:"10vh",position: "relative",paddingBottom:"10vh",padding:"10vh 0"}}>
        <h1 style={{fontWeight: "bold" , fontSize: "150px" ,color:"#178582"}}>Welcome Back</h1>
        <h2 style={{fontWeight: "bold", fontSize: "80px",color:"#178582"}}>{admin.name}</h2>
      </div>
    </div>
    </div>
  )
}

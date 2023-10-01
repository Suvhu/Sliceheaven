import React from 'react'
import Homeaboutcard from "./homeaboutcard.jsx"
import img1 from "../Images/aboutimg1.jpeg"
import img2 from "../Images/aboutimg2.jpeg"
import img3 from "../Images/aboutimg3.jpeg"


export default function Homeabout() {
  return (
    <div style={{height: "100vh", backgroundColor:"#0A1828"}}>
      <div className="d-flex flex-column justify-content-between align-items-center" style={{height: "60vh"}}>
        <h1 style={{fontWeight: "bold" , fontSize: "60px" ,color:"#178582",paddingTop:"5vh","color":"#E4AE31"}}>About Us</h1>
        <h3 style={{fontWeight: "bold", fontSize: "15px",color:"#178582"}}>since 2020</h3>
        <span style={{fontWeight: "bold", fontSize: "20px",color:"#178582", padding:"0 20vh"}}>Welcome to Sliceheaven, your one-stop destination for all your pizza cravings. Whether you're a die-hard pizza lover or simply looking for a quick and delicious meal, we've got you covered. Our website is designed to make ordering your favorite pizza as easy and convenient as possible. Join us on a journey through our digital Sliceheaven and discover the mouthwatering options we have in store for you.</span>
        <div className="d-flex flex-row justify-content-around align-items-center" style={{paddingTop: "7vh"}} >
          <Homeaboutcard img={img1} title="Easy Ordering" about="Click on your favourite to get started"/>
          <Homeaboutcard img={img3} title="Order Tracking" about="Know the status of your order"/>
          <Homeaboutcard img={img2} title="Fast Delivery" about="Experience superfast delivery"/>
        </div>
      </div>
    </div>
  )
}

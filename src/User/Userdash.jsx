import React, { useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Usernavbar from "./Usernavbar";
import Footer from "../Components/Footer";
import Userproduct from "./Userproduct";
import allContextuser from "../Context/items/allContextuser";
import img1 from "../Images/slideshow1.jpg";

export default function Admindash(props) {
  let history = useNavigate();
  const context = useContext(allContextuser);
  const { user, getUser } = context;

  useEffect(() => {
    if (!localStorage.getItem("usertoken")) {
      history("/userlogin");
    } else {
        getUser();
    }
  }, []);

  return (
    <div>
        <div>
      <Usernavbar showAlert={props.showAlert} />
      </div>
      <div style={{ height: "40vh" , position: "absolute", overflow:"hidden"}}>
        <img src={img1} className="d-block w-100 " alt="" />
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          height: "40vh",
          zIndex: "3",
          paddingTop: "10vh",
          position: "relative",
          paddingBottom: "10vh",
          padding: "8vh 0",
        }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: "50px", color: "#178582" }}>
          Welcome
        </h1>
        <h2 style={{ fontWeight: "bold", fontSize: "70px", color: "#178582" }}>
          {user.name}
        </h2>
      </div>
      <div>
        <Userproduct/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

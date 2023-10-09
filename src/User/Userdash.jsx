import React, { useEffect, useContext, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Usernavbar from "./Usernavbar";
import Footer from "../Components/Footer";
import Userproduct from "./Userproduct";
import allContextuser from "../Context/items/allContextuser";
import img1 from "../Images/slideshow1.jpg";
import Customcard from "./Customcard";

export default function Admindash(props) {
  let history = useNavigate();
  const context = useContext(allContextuser);
  const { user, getUser, products, getProducts , addCustomcart,success} = context;
  const ref = useRef(null);
  const refClose = useRef(null);
  const [pizzabase, setPizzabase]= useState("");
  const [pizzasauce, setPizzasauce]= useState("");
  const [pizzacheese, setPizzacheese]= useState("");

  useEffect(() => {
    if (!localStorage.getItem("usertoken")) {
      history("/userlogin");
    } else {
      getUser();
      getProducts();
    }
  }, []);



  const handleClick = () => {
    refClose.current.click();
    addCustomcart(pizzabase,pizzasauce,pizzacheese,user._id);
    setPizzabase("");
    setPizzacheese("");
    setPizzasauce("");
    if(success){
        props.showAlert("Added Successfully","success");
    }
    else{
        props.showAlert("Cannot add the pizza ", "danger");
    }
  };

  const userClick = () => {
    ref.current.click();
  };

  const onChange1 = (e)=>{
    setPizzabase(e.target.value);
  }

  const onChange2 = (e)=>{
    setPizzasauce(e.target.value);
  }

  const onChange3 = (e)=>{
    setPizzacheese(e.target.value);
  }



  return (
    <div>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
      >
        Launch demo modal1
      </button>

      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{
              backgroundColor: "#E4AE31",
              width: "90vw",
              maxHeight: "90vh",
              overflowY: "scroll",
              marginLeft: "-29vw",
            }}
          >
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalLabel"
                style={{
                  color: "#178582",
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                }}
              >
                Create your custom pizza
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ padding: "5px 15px" }}>
              <div
                className="row "
                style={{
                  padding: "2vw 3vw",
                  backgroundColor: "#0A1828",
                }}
              >
                <h1 style={{ color: "#E4AE31", fontWeight: "bold" }}>
                  Pizza bases
                </h1>
                {products.map((product) => {
                  if (product.category === "pizza base") {
                    return (
                      <div
                        className="form-check form-check-inline"
                        style={{ width: "18.7%", marginTop: "25px" }}
                        key={product.name}
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions1"
                          value={product._id}
                          onChange={onChange1}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio1">
                          {" "}
                          <Customcard
                            key={product._id}
                            product={product}
                            showAlert={props.showAlert}
                          />{" "}
                        </label>
                      </div>
                    );
                  }
                })}
              </div>
              <div
                className="row "
                style={{
                  padding: "2vw 3vw",
                  backgroundColor: "#0A1828",
                }}
              >
                <h1 style={{ color: "#E4AE31", fontWeight: "bold" }}>
                  Pizza sauces
                </h1>
                {products.map((product) => {
                  if (product.category === "pizza sauce") {
                    return (
                      <div
                        className="form-check form-check-inline"
                        style={{ width: "18.7%", marginTop: "25px" }}
                        key={product.name}
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions2"
                          value={product._id}
                          onChange={onChange2}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio2">
                          {" "}
                          <Customcard
                            key={product._id}
                            product={product}
                            showAlert={props.showAlert}
                          />{" "}
                        </label>
                      </div>
                    );
                  }
                })}
              </div>
              <div
                className="row "
                style={{
                  padding: "2vw 3vw",
                  backgroundColor: "#0A1828",
                }}
              >
                <h1 style={{ color: "#E4AE31", fontWeight: "bold" }}>
                  Pizza cheeses
                </h1>
                {products.map((product) => {
                  if (product.category === "pizza cheese") {
                    return (
                      <div
                        className="form-check form-check-inline"
                        style={{ width: "18.7%", marginTop: "25px" }}
                        key={product.name}
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions3"
                          value={product._id}
                          onChange={onChange3}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio3">
                          {" "}
                          <Customcard
                            key={product._id}
                            product={product}
                            showAlert={props.showAlert}
                          />{" "}
                        </label>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="modal-footer">
              <button
              ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                style={{ backgroundColor: "#0A1828" }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ backgroundColor: "#178582" }}
                disabled={ pizzabase.length === 0 || pizzasauce.length === 0 || pizzacheese.length === 0}
                onClick={()=>{
                  handleClick();
                }}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <div>
        <Usernavbar showAlert={props.showAlert} />
      </div>
      <div style={{ height: "43vh", position: "absolute", overflow: "hidden" }}>
        <img src={img1} className="d-block w-100 " alt="" />
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          height: "43vh",
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
        <button
          className="btn "
          style={{
            width: "14%",
            height: "7vh",
            color: "#E4AE31",
            fontSize: "1.8rem",
            padding: "0",
            fontWeight: "bold",
            backgroundColor: "#0A1828",
            border: "3px solid #178582",
            marginTop: "30px",
          }}
          onClick={() => {
            userClick();
          }}
        >
          custom pizza
        </button>
      </div>
      <div>
        <Userproduct  user ={user} showAlert={props.showAlert}/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

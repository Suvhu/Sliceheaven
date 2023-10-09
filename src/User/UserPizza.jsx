import React, { useEffect, useContext, useRef, useState } from "react";
import allContextuser from "../Context/items/allContextuser";

export default function UserPizza(props) {
  const { pizza,user } = props;
  const context = useContext(allContextuser);
  const { addCart,success } = context;

  const handleClick = () => {
    addCart(
      pizza.name,
      pizza.image,
      pizza.price,
      user._id);
      if(success){
        props.showAlert("Added Successfully","success");
    }
    else{
        props.showAlert("Cannot add the pizza ", "danger");
    }
  };

  return (
    <div
      className="d-flex flex-column justify-items-center align-items-center"
      style={{ width: "287px", margin: "20px 0 20px 0" }}
    >
      <div
        className="card"
        style={{ width: "231px", backgroundColor: "#178582" }}
      >
        <img
          src={pizza.image}
          className="card-img-top"
          alt="..."
          style={{ width: "230px", height: "230px" }}
        />
        <div className="card-body" style={{}}>
          <div className="d-flex align-items-center">
            <h5
              className="card-title"
              style={{
                marginTop: "6px",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "#E4AE31",
                width: "160px",
              }}
            >
              {pizza.name}
            </h5>
          </div>
          <h5
            style={{
              color: "#0A1828",
              margin: " 10px 0 8px 0",
              fontWeight: "bold",
            }}
          >
            ₹ {pizza.price}/-
          </h5>
          <button
            type="button"
            className="btn"
            style={{
              backgroundColor: "#E4AE31",
              color: "#0A1828",
              fontWeight: "bold",
              marginTop: "15px",
              fontSize: "1.1rem",
            }}
            onClick={() => {
              handleClick();
            }}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

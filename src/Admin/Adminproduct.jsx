import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Adminnavbar from "./Adminnavbar";
import allContext from "../Context/items/allContext";
import Pizzabase from "./Pizzabase";
import Pizzasauce from "./Pizzasauce";
import Pizzacheese from "./Pizzacheese";

export default function Adminproduct(props) {
  let history = useNavigate();

  let context = useContext(allContext);
  let { products, getProducts } = context;

  useEffect(() => {
    if (localStorage.getItem("admintoken")) {
      getProducts();
    } else {
      history("/adminlogin");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Adminnavbar showAlert={props.showAlert} />
      <Pizzabase products={products} showAlert={props.showAlert} />
      <Pizzasauce products={products} />
      <Pizzacheese products={products} />

      
    </div>
  );
}

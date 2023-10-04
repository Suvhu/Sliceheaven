import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Adminnavbar from "./Adminnavbar";
import allContext from "../Context/items/allContext";
import Pizza from  "./Pizza"
import Pizzabase from "./Pizzabase";
import Pizzasauce from "./Pizzasauce";
import Pizzacheese from "./Pizzacheese";

export default function Adminproduct(props) {
  let history = useNavigate();

  let context = useContext(allContext);
  let { products, getProducts ,pizzas, getPizza} = context;

  useEffect(() => {
    if (localStorage.getItem("admintoken")) {
      getProducts();
      getPizza();
    } else {
      history("/adminlogin");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Adminnavbar showAlert={props.showAlert} />
      <Pizza pizzas = {pizzas} showAlert = {props.showAlert}/>
      <Pizzabase products={products} showAlert={props.showAlert} />
      <Pizzasauce products={products} showAlert={props.showAlert} />
      <Pizzacheese products={products} showAlert={props.showAlert} />
    </div>
  );
}

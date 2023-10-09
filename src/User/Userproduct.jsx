import React, { useEffect, useContext, useRef, useState } from "react";
import allContextuser from "../Context/items/allContextuser";
import UserPizza from "./UserPizza";

export default function Userproduct(props) {
  const context = useContext(allContextuser);
  const { pizzas, getPizza } = context;
  const {user} = props ;

  useEffect(() => {
    getPizza();
  }, []);

  return (
    <div>
      <div
        className="row "
        style={{
          padding: "2vw 3vw",
          backgroundColor: "#0A1828",
          border: "2px solid #E4AE31",
          width:"99.7vw"
        }}
      >
        {pizzas.map((pizza) => {
          return <UserPizza key={pizza._id} pizza={pizza}  user={user} showAlert={props.showAlert}/>;
        })}
      </div>
    </div>
  );
}

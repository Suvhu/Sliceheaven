import React, { useEffect, useContext } from "react";
import Usernavbar from './Usernavbar';
import Footer from '../Components/Footer';
import { useNavigate } from "react-router-dom";
import allContextuser from "../Context/items/allContextuser";
import Ordercard from "./Ordercard";

export default function Userorder(props) {
  

  const context = useContext(allContextuser);
  const { getOrder, orders} = context;

  let history = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('usertoken')){
      history("/userlogin"); 
    }
    else{
      getOrder();
    }
  },[])


  
  return (
    <div>
        <Usernavbar showAlert = {props.showAlert} />
        <div style={{ minHeight: "83vh" , width: "100%" , backgroundColor: "#0A1828" , padding: "5vh 0", borderTop: "1px solid #E4AE31"}} className="d-flex flex-column align-items-center justify-content-center">

<h1 style={{color: "#178582", fontWeight: "bold"}}>Your Orders</h1>
{(orders.length === 0 ) ? 
<div> <h1>There is no order to display </h1></div> :
<div>
<div >
  {orders.map((order) => {
    return (<Ordercard order={order} key={order._id} showAlert={props.showAlert} />) ;
  })}
</div>

</div>
}
</div>
      <div><Footer/></div>
    </div>
  )
}

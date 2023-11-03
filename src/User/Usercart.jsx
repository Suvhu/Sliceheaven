import React, { useEffect, useContext } from "react";
import Usernavbar from "./Usernavbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import allContextuser from "../Context/items/allContextuser";
import Cartcard from "../Usercartcards/Cartcard";
import Customcartcard from "../Usercartcards/Customcartcard"

export default function Usercart(props) {
  const context = useContext(allContextuser);
  const { carts, getCart, customcarts, getCustomcart ,addOrder,deleteCart, deleteCustomcart,success,addCustomorder} = context;
  let history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("usertoken")) {
      history("/userlogin");
    } else {
      getCart();
      getCustomcart();
    }
  }, []);

  const handleclick = ()=>{
    carts.map((e) =>{
      addOrder(e);
      deleteCart(e._id);
  }) 
  customcarts.map((e) =>{
    addCustomorder(e);
    deleteCustomcart(e._id);
}) 
if(success){
  props.showAlert("Order placed successfully", "success");
}
else{
  props.showAlert("Order placed successfully", "success");
}
  history("/userorder");

  }

  let x = 0;
  carts.map((e) =>{
      x = parseInt(x) + e.price ;
  })
  customcarts.map((e) =>{
    x = parseInt(x) + e.price ;
})

  return (
    <div>
      <Usernavbar showAlert={props.showAlert} />
      
      <div style={{ minHeight: "83vh" , width: "100%" , backgroundColor: "#0A1828" , padding: "5vh 0", borderTop: "1px solid #E4AE31"}} className="d-flex flex-column align-items-center justify-content-center">

        <h1 style={{color: "#178582", fontWeight: "bold" }}>Your Cart</h1>
        {(carts.length === 0 && customcarts.length === 0) ? 
        <div> <h1>There is no product to display </h1></div> :
        <div>
        <div >
          {carts.map((cart) => {
            return (<Cartcard cart={cart} key={cart._id} showAlert={props.showAlert} />) ;
          })}

          {customcarts.map((customcart) => {
            return (<Customcartcard customcart={customcart} showAlert={props.showAlert} />) ;
          })} 
        </div>
        <div style={{ backgroundColor: "#0A1828", paddingTop :"30px"}}>
        <h1 style={{ fontWeight : "bold", marginLeft:"32%", color: "#178582"}} >Total price - <b>{x}/-</b></h1>
        </div>
        <div style={{ backgroundColor: "#0A1828", paddingTop :"50px"}}>
        <button type="button" className="btn " style={{ backgroundColor:"#E4AE31", fontWeight : "bold", fontSize : "1.5rem" , marginLeft:"43.2%", color: "#0A1828", border : "2px solid #178582" }} onClick={()=>{handleclick();}}> check out </button>
        </div>
        </div>
}
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
}

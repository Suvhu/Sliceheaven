import React, { useEffect, useContext } from "react";
import allContextuser from "../Context/items/allContextuser";
import img from "../Images/custompizza.jpg"

export default function Cartcard(props) {

    const { customcart } = props ;
    const context = useContext(allContextuser);
  const { deleteCustomcart} = context;


  return (
    <div>
      <div className="card mb-3 mt-4" style={{width: "65vw", height:"224px", backgroundColor: "#178582", border: "2px solid #E4AE31"}}>
  <div className="d-flex" style={{ width: "65vw", height:"220px"}}>
    <div className="">
      <img src={img} className="img-fluid rounded-start" alt="..." style={{width: "440px", height: "220px"}}/>
    </div>
    <div className="" >
      <div className="card-body">
        <h5 className="card-title" style={{fontWeight : "bold", color: "#E4AE31",fontSize: "1.4rem"}}>{customcart.name[0]} , {customcart.name[1]} , {customcart.name[2]} ( custom pizza )</h5>
        <p className="card-text" style={{fontWeight : "bold", color: "#0A1828",fontSize: "1.15rem"}}>₹{customcart.price}/-</p>
        <p className="card-text" style={{ color:'#0A1828'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto saepe sit explicabo perferendis, ea doloribus, ratione ducimus officiis ipsa doloremque incidunt? Ullam quod provident nam quae unde natus facere similique?</p>
        <p className="card-text"><small className="text-muted"> added on {customcart.date}</small></p>
      </div>
      <i className="fa-solid fa-trash fa-2xl" style={{ color: "#0A1828", position: "absolute", translate: "730px -182px", cursor: "pointer"  }} onClick={()=>{deleteCustomcart(customcart._id);}}  ></i>
    </div>
  </div>
</div>
    </div>
  )
}

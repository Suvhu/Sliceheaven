import React, { useContext} from "react";
import allContext from "../Context/items/allContext";


export default function Pizzacard(props) {
    let context = useContext(allContext);

    let { deletePizza } = context;

  const { pizza } = props;

  return (
      <div className="card my-3" style={{ width:"13vw" , margin:"0 1vw",backgroundColor:"#178582"}}>
        <div className="card-body">
          <img
            src={pizza.image}
            className="card-img-top"
            alt="..."
            style={{ width: "150px" , height:"180px"}}
          />
          <div className="d-flex align-items-center" >
            <h5 className="card-title" style={{marginTop:"10px", fontWeight :"bold", fontSize:"1.3rem" , color:"#E4AE31", width:"160px" }}>{pizza.name}</h5>
          </div>
          <h5 style={{color: "#0A1828", marginBottom:"20px" }}>price : {pizza.price}</h5>
          <i className="fa-solid fa-trash fa-xl mx-4" style={{color: "#E4AE31",cursor:"pointer", paddingLeft:"100px"}} onClick={() =>{deletePizza(pizza._id);
          props.showAlert("Deleted Successfully", "success");
        }} ></i>
        </div>
      </div>
  );
}

import React, { useContext} from "react";
import allContext from "../Context/items/allContext";


export default function Productcard(props) {
    let context = useContext(allContext);

    let { deleteProduct } = context;

  const { product , handleProduct2} = props;

  return (
      <div className="card my-3" style={{ width:"13vw" , margin:"0 1vw",backgroundColor:"#178582"}}>
        <div className="card-body">
          <img
            src={product.image}
            className="card-img-top"
            alt="..."
            style={{ width: "150px" , height:"180px"}}
          />
          <div className="d-flex align-items-center" >
            <h5 className="card-title" style={{marginTop:"10px", fontWeight :"bold", fontSize:"1.3rem" , color:"#E4AE31", width:"160px" }}>{product.name}</h5>
          </div>
          <h5 style={{marginTop:"10px", color: "#0A1828"}}>Amount : {product.number}</h5>
          <h5 style={{color: "#0A1828", marginBottom:"20px" }}>price : {product.price}</h5>
          <i className="fa-solid fa-pen-to-square fa-xl" style={{color: "#E4AE31",cursor:"pointer"}} onClick={() => {
                handleProduct2(product);
              }}></i>
          <i className="fa-solid fa-trash fa-xl mx-4" style={{color: "#E4AE31",cursor:"pointer"}} onClick={() =>{deleteProduct(product._id);
          props.showAlert("Deleted Successfully", "success");
        }} ></i>
        </div>
      </div>
  );
}

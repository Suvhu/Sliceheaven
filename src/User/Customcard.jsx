import React from "react";


export default function Usercustom(props) {

  const {product } = props;


  return (
    <div style={{width : "181px" }}>
      <div className="card" style={{ width:"181px",backgroundColor: "#178582"}}>
  <img src={product.image} className="card-img-top" alt="..." style={{ width : "180px", height : "180px" }}/>
  <div className="card-body" style={{}}>
    <div className="d-flex align-items-center" >
            <h5 className="card-title" style={{marginTop:"6px", fontWeight :"bold", fontSize:"1.3rem" , color:"#E4AE31", width:"160px" }}>{product.name}</h5>
          </div>
          <h5 style={{color: "#0A1828", margin:" 10px 0 8px 0" , fontWeight : "bold" }}>₹ {product.price}/-</h5>
  </div>
</div>
    </div>
  )
}

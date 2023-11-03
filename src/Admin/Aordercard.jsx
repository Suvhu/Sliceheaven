import React,{ useState , useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function Aordercard(props) {

    const { order, handleClick, handleClick1 } = props ;
    const[status,setStatus] = useState("ordered");

    useEffect(() => {
      setStatus(`${order.status}`)
    }, []);

  return (
    <div >
      {(order.category === "normal pizza")?
      <div className="card" style={{width:"60vw", backgroundColor:"#E4AE31", margin: "5vh 0"}}>
      <h5 className="card-header" style={{color : "#0A1828",  fontWeight : "bold" }}>Standard Pizza</h5>
      <small className="text-muted" style={{position: "absolute", translate: "620px 10px" , fontSize : "1.01rem"}}> ordered on {order.date}</small>
      <div className="card-body" style={{backgroundColor: "#178582", borderRadius: "5px"}}>
        <h5 className="card-title" style={{color : "#E4AE31",  fontWeight : "bold" , fontSize: "1.3rem" }}>{order.name}</h5>
        <p className="card-text" style={{ marginTop : "10px" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ab est? Porro beatae nihil minus magni officiis assumenda, earum tenetur distinctio velit repudiandae exercitationem maxime.</p>
        <h5 className="card-title" style={{color : "#E4AE31",   fontSize: "1.1rem" }}> ₹ {order.price}/-</h5>
        <h5 className="card-title" style={{color : "#E4AE31",   fontSize: "1.2rem" , position : "absolute" , translate: "750px -126px" , border : " 2px solid #E4AE31", padding: "5px 8px", borderRadius : "10px" }}> {status}</h5>
        
        {(order.status === "Completed" || order.status === "Cancelled")? <div> </div> : <button className="btn  my-3"  style={{backgroundColor: "#E4AE31", fontSize: "1.1rem", fontWeight: "bold", color: "#0A1828"}} onClick={()=>{handleClick1(order._id,order.status)}}  >update status</button>
   }
        
         <button className="btn  mx-4 "  style={{backgroundColor: "#E4AE31", fontSize: "1.1rem", fontWeight: "bold", color: "#0A1828"}} onClick={()=>{handleClick(order.userid)}} >user details</button>
      </div>
    </div> : <div className="card" style={{width:"60vw", backgroundColor:"#E4AE31", margin: "5vh 0"}}>
      <h5 className="card-header" style={{color : "#0A1828",  fontWeight : "bold" }}>Custom Pizza</h5>
      <small className="text-muted" style={{position: "absolute", translate: "620px 10px" , fontSize : "1.01rem"}}> ordered on {order.date}</small>
      <div className="card-body" style={{backgroundColor: "#178582", borderRadius: "5px"}}>
        <h5 className="card-title" style={{color : "#E4AE31",  fontWeight : "bold" , fontSize: "1.3rem" }}>{order.name[0]}, {order.name[1]}, {order.name[2]} </h5>
        <p className="card-text" style={{ marginTop : "10px" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ab est? Porro beatae nihil minus magni officiis assumenda, earum tenetur distinctio velit repudiandae exercitationem maxime.</p>
        <h5 className="card-title" style={{color : "#E4AE31",   fontSize: "1.1rem" }}> ₹ {order.price}/-</h5>
        <h5 className="card-title" style={{color : "#E4AE31",   fontSize: "1.2rem" , position : "absolute" , translate: "750px -126px" , border : " 2px solid #E4AE31", padding: "5px 8px", borderRadius : "10px" }}> {status}</h5>
        
        {(order.status === "Completed" || order.status === "Cancelled")? <div> </div> : <button className="btn  my-3"  style={{backgroundColor: "#E4AE31", fontSize: "1.1rem", fontWeight: "bold", color: "#0A1828"}} onClick={()=>{handleClick1(order._id,order.status)}}  >update status</button>
   }
    <button className="btn  mx-4 "  style={{backgroundColor: "#E4AE31", fontSize: "1.1rem", fontWeight: "bold", color: "#0A1828"}} onClick={()=>{handleClick(order.userid)}}>user details</button>
      </div>
    </div>}
    </div>
)}



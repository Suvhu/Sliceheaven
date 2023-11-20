import React, { useEffect, useContext, useRef, useState} from 'react'
import { useNavigate } from "react-router-dom";
import Adminnavbar from './Adminnavbar';
// import allContextuser from '../Context/items/allContextuser';
import allContext from '../Context/items/allContext';

import Aordercard from './Aordercard';


export default function Adminorder(props) {

  // const context = useContext(allContextuser);
  // const { getaOrder, aorders} = context;
  const context1 = useContext(allContext);
  const { getUsers, users,getaOrder, aorders, updateOrder} = context1;

  const [status, setStatus] = useState("");
  const [status1, setStatus1] = useState("");
  const [id1, setId1] = useState("");


  const ref = useRef(null);
  const ref1 = useRef(null);

  let history = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('admintoken')){
      history("/adminlogin"); 
    }
    else{
      getaOrder();
    }
  },[])


  const handleClick =(userid)=>{
    ref.current.click();
    // console.log(userid);
    getUsers(userid);

  }

  const handleClick1 =(id,stat)=>{
    ref1.current.click();
    setStatus1(stat);
    setId1(id);
  }

  const handleSubmit = ()=>{
    // console.log(status);
    setStatus("");
    updateOrder(id1, status);
    window.location.reload();
  }

  const onChange = (e)=>{
    setStatus(e.target.value);
  }


  return (
    <div>
      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal1" ref={ref1}>
  Launch demo modal
</button>
<div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content" style={{backgroundColor : "#E4AE31"}}>
      <div className="modal-header">
        <h1 className="modal-title fs-4" id="exampleModalLabel" style={{color: "#178582", fontWeight: "bold"}}>Update Status</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body" style={{ fontWeight : "bold"}}>
      <select className="form-select" aria-label="Default select example" value={status} onChange={onChange}>
        {(status1 === "Order placed")? <> <option value="">{status1}</option>
  <option value="In the kitchen">In the kitchen</option>
  <option value="Sent to delivery">Sent to delivery</option>
  <option value="Completed">Completed</option>
  <option value="Cancelled">Cancelled</option></> : (status1 === "In the kitchen")? <> <option value="">{status1}</option>
  <option value="Sent to delivery">Sent to delivery</option>
  <option value="Completed">Completed</option>
  <option value="Cancelled">Cancelled</option></> : (status1 === "Sent to delivery")? <> <option value="">{status1}</option>
  <option value="Completed">Completed</option>
  <option value="Cancelled">Cancelled</option></> : <> </>}
      
</select>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{backgroundColor: "#178582"}} onClick={()=>{handleSubmit()}} disabled ={status.length === 0}>Update</button>
      </div>
    </div>
  </div>
</div>
      
<button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
  Launch demo modal
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content" style={{backgroundColor : "#E4AE31"}}>
      <div className="modal-header">
        <h1 className="modal-title fs-4" id="exampleModalLabel" style={{color: "#178582", fontWeight: "bold"}}>User Details</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body" style={{ fontWeight : "bold"}}>
        <h5>Name - {users.name}</h5>
        <h5>City - {users.city}</h5>
        <h5>Town - {users.town}</h5>
        <h5>District - {users.district}</h5>
        <h5>Number - {users.number}</h5>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{backgroundColor: "#178582"}}>Okay</button>
      </div>
    </div>
  </div>
</div>
      <Adminnavbar showAlert = {props.showAlert}/>
      <div style={{ minHeight: "90vh" , width: "100%" , backgroundColor: "#0A1828" , padding: "5vh 0", borderTop: "1px solid #E4AE31"}} className="d-flex flex-column align-items-center justify-content-center">

<h1 style={{color: "#178582", fontWeight: "bold"}}>User Orders</h1>
{(aorders.length === 0 ) ? 
<div> <h1>There is no order to display </h1></div> :
<div>
<div >
  {aorders.map((order) => {
    return (<Aordercard order={order} key={order._id} showAlert={props.showAlert} handleClick = {handleClick} handleClick1 = {handleClick1}/>) ;
  })}
</div>

</div>
}
</div>
    </div>
  )
}

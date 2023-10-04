import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Adminnavbar from './Adminnavbar';


export default function Adminorder(props) {

  let history = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('admintoken')){
      history("/adminlogin"); 
    }
  },[])




  return (
    <div>
      <Adminnavbar showAlert = {props.showAlert}/>
    </div>
  )
}

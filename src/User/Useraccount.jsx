import React, { useEffect, useContext } from "react";
import Usernavbar from './Usernavbar';
import Footer from '../Components/Footer';
import { useNavigate } from "react-router-dom";

export default function Useraccount(props) {

  let history = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('usertoken')){
      history("/userlogin"); 
    }
  },[])


  return (
    <div>
        <Usernavbar showAlert = {props.showAlert} />
      <div>
      account
      </div>
      <div><Footer/></div>
    </div>
  )
}

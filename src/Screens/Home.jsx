import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Homebody from '../Components/Homebody'
import Homeabout from '../Components/Homeabout'
import { useNavigate } from "react-router-dom";

export default function Home() {

  let history = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('admintoken')){
      history("/admindash"); 
    }
    if(localStorage.getItem('usertoken')){
      history("/userdash"); 
    }

    // eslint-disable-next-line 
  },[])


  return (
    <div>
      <div><Navbar/></div>
      <div><Homebody/></div>
      <div><Homeabout/></div>
      <div><Footer/></div>
    </div>
  )
}

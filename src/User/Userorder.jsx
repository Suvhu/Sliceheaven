import React from 'react'
import Usernavbar from './Usernavbar';
import Footer from '../Components/Footer';

export default function Userorder(props) {
  return (
    <div>
        <Usernavbar showAlert = {props.showAlert} />
      <div>
        
      </div>
      <div><Footer/></div>
    </div>
  )
}

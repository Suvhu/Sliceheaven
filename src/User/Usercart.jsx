import React from 'react'
import Usernavbar from './Usernavbar';
import Footer from '../Components/Footer';

export default function Usercart(props) {
  return (
    <div>
      <Usernavbar showAlert = {props.showAlert} />
      <div>
        empty
      </div>
      <div><Footer/></div>
    </div>
  )
}

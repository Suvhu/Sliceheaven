import React from 'react'
import Usernavbar from './Usernavbar';
import Footer from '../Components/Footer';

export default function Useraccount(props) {
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

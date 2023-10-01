import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Homebody from '../Components/Homebody'
import Homeabout from '../Components/Homeabout'

export default function Home() {
  return (
    <div>
      <div><Navbar/></div>
      <div><Homebody/></div>
      <div><Homeabout/></div>
      <div><Footer/></div>
    </div>
  )
}

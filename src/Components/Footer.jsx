import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div style={{backgroundColor: "#0A1828", height: "30vh"}}>
      <br />
     <footer className="py-3 my-4 ">
    <ul className="nav justify-content-center pb-3 mb-3" >
      <li className="nav-item"><Link to="/" className="nav-link px-2 " style={{color: "#178582"}} >Home</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 " style={{color: "#178582"}} >Features</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 " style={{color: "#178582"}} >Pricing</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 " style={{color: "#178582"}} >FAQs</Link></li>
      <li className="nav-item"><Link to="/about" className="nav-link px-2 " style={{color: "#178582"}} >About</Link></li>
    </ul>
    <p className="text-center " style={{color: "#178582"}} >© 2023 Sliceheaven🍕</p>
  </footer>
    </div>
  )
}

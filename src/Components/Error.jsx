import React from 'react'
import {Link} from 'react-router-dom'

export default function Error() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-around'
    style={{height:"100vh", color:"#178582",backgroundColor:"#0A1828"}}
    >
        <div className='d-flex flex-column align-items-center justify-content-center' style={{height:"60vh",width:"30%", color:"#178582"}}>
      <h1 style={{fontWeight:"bold"}}>OOPS!</h1>
      <h2  style={{textAlign:"center"}}>We can't find the page that you're looking for :( </h2>
      </div>
      <Link
        className="btn "
        to="/"
        role="button"
        style={{
            width:"160px",
          height: "6vh",
          backgroundColor: "#178582",
          color: "#E4AE31",
          fontSize: "1.3rem",
          padding: "0",
          marginBottom:"200px",fontWeight:"bold"
        }}
      >
        Back to Home
      </Link>
    </div>
  )
}

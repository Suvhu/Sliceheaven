import React from "react";

export default function homeaboutcard(props) {
  return (
    <div className="d-flex flex-column align-items-center" style={{width :"350px", height:"20vh"}}>
      <div className="col">
        <div className="card h-100">
          <img src={props.img} className="card-img-top" alt="..." style={{width :"300px", height: "280px"}} />
          <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title" style={{color: "#E4AE31", fontWeight:"bold"}}>{props.title}</h5>
            <p className="card-text" style={{color: "#178582", fontWeight:"bold"}} >
             {props.about}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

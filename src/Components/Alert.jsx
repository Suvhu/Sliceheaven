import React from "react";

export default function Alert(props) {
    const capitalize = (word)=>{
        if (word === "danger"){
          word = "error";
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      }

  return (
    <div className=" my-3" style={{position: "fixed",zIndex:"5", width:"100%", padding:" 0 30vw"}}>
        {props.alert &&
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
      </div>
      }   
    </div>
  );
}

import React, { useState }  from 'react'
import{Link, useNavigate} from "react-router-dom"

export default function Adminsignup(props) {
    const [credentials, setCredentials] = useState({
        name:"",
        email:"",
        password:"",
        cpassword:"",
        secretkey:"",
    });
    let history = useNavigate();

    const onChange =(e) =>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const {name,email,password,cpassword,secretkey} = credentials;
        if(password === cpassword){
            const response = await fetch("http://localhost:5000/api/authadmin/createadmin",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name,email,password,secretkey}),
            });
            const json = await response.json();
            console.log(json);
            if(json.success){
                localStorage.setItem("admintoken",json.authtoken);
                history("/");
                props.showAlert("Account created successfully","success");
            }
            else{
                props.showAlert(json.errors,"danger");
            }
        }
        else{
            props.showAlert("password not matching","danger");
        }
    }

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ width: "100%", height: "100vh", backgroundColor: "#0A1828" }}
    >
      <Link
        className="btn "
        to="/"
        role="button"
        style={{
          width: "7%",
          height: "5.6vh",
          backgroundColor: "#178582",
          color: "#E4AE31",
          fontSize: "1.5rem",
          padding: "0",
          fontWeight: "bold",
          position: "absolute",
          margin: "0 90vw 85vh 0",
        }}
      >
        ⬅ Back
      </Link>
      <h2 className="my-7" style={{ fontWeight: "bold", color: "#E4AE31" }}>
        {" "}
        Create an account{" "}
      </h2>
      <form style={{ width: "30%" }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="form-label"
            style={{ color: "#178582" }}
          >
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            minLength={5}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
            style={{ color: "#178582" }}
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="form-label"
            style={{ color: "#178582" }}
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            minLength={5}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="cpassword"
            className="form-label"
            style={{ color: "#178582" }}
          >
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            minLength={5}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="secretkey"
            className="form-label"
            style={{ color: "#178582" }}
          >
            Secret key
          </label>
          <input
            type="string"
            className="form-control"
            id="secretkey"
            name="secretkey"
            onChange={onChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn my-3"
          style={{
            width: "23%",
            height: "6vh",
            backgroundColor: "#E4AE31",
            color: "#0A1828",
            fontSize: "1.3rem",
            fontWeight: "bold",
            marginLeft: "180px",
          }}
        >
          Sign up
        </button>
        <div
          className="my-2"
          style={{ color: "white", fontSize: "1.1rem", marginLeft: "94px" }}
        >
          Already have an account?
          <Link to="/adminlogin" style={{ textDecoration: "none" }}>
            {" "}
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

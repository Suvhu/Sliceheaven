import React, { useState }  from 'react'
import{Link, useNavigate} from "react-router-dom"

export default function Usersignup(props) {
    const [credentials, setCredentials] = useState({
        name:"",
        email:"",
        password:"",
        cpassword:"",
        city:"",
        town:"",
        district:"",
        pin:"",
        number:"",
    });
    let history = useNavigate();

    const onChange =(e) =>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const {name,email,password,cpassword,city,town,district,pin,number} = credentials;
        if(password === cpassword){
            const response = await fetch("http://localhost:5000/api/authuser/createuser",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name,email,password,city,town,district,number}),
            });
            const json = await response.json();
            console.log(json);
            if(json.success){
                localStorage.setItem("token",json.authtoken);
                history("/");
                props.showAlert("Account created successfully","success");
            }
            else{
                props.showAlert(json.error,"danger");
            }
        }
        else{
            props.showAlert("password not matching","danger");
        }
    }


  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{width: "100%" ,height: "140vh", backgroundColor:"#0A1828"}}>
      <Link className="btn " to="/" role="button" style={{width: "7%",height:"5.6vh",backgroundColor:"#178582",color: "#E4AE31",fontSize: "1.5rem", padding: "0", fontWeight: "bold",position:"absolute", margin:"0 90vw 125vh 0"}}>⬅ Back</Link>
      <h2 className="my-7" style={{fontWeight:"bold", color:"#E4AE31"}}> Create an account </h2>
      <form style={{width:"30%"}} onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{ color:"#178582"}}>
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
          <label htmlFor="email" className="form-label" style={{ color:"#178582"}}>
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
          <label htmlFor="password" className="form-label" style={{ color:"#178582"}}>
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
          <label htmlFor="cpassword" className="form-label" style={{ color:"#178582"}}>
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
          <label htmlFor="city" className="form-label" style={{ color:"#178582"}}>
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="town" className="form-label" style={{ color:"#178582"}}>
            Town
          </label>
          <input
            type="text"
            className="form-control"
            id="town"
            name="town"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="district" className="form-label" style={{ color:"#178582"}}>
            District
          </label>
          <input
            type="text"
            className="form-control"
            id="district"
            name="district"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pin" className="form-label" style={{ color:"#178582"}}>
            Pin
          </label>
          <input
            type="number"
            className="form-control"
            id="pin"
            name="pin"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label" style={{ color:"#178582"}}>
            Phone number
          </label>
          <input
            type="number"
            className="form-control"
            id="number"
            name="number"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label className="form-check-label" htmlFor="invalidCheck2" style={{ color:"#178582"}}>
        Agree to terms and conditions
      </label>
    </div>
        <button type="submit" className="btn my-3" style={{width: "23%",height:"6vh",backgroundColor:"#E4AE31",color: "#0A1828",fontSize: "1.3rem",  fontWeight: "bold", marginLeft:"180px"}}>
          Sign up
        </button>
        <div className='my-2' style={{ color: "white", fontSize:"1.1rem",marginLeft:"94px" }}>
            Already have an account?<Link to="/userlogin" style={{textDecoration: "none",}}> Login</Link>
        </div>
      </form>
    </div>
  )
}

import React, {useState} from "react";
import { useNavigate ,Link} from "react-router-dom";

export default function Login(props) {
  const [credentials, setCredentials] = useState({email: "", password: ""});
  let history = useNavigate();

  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value});
}

const handleSubmit = async(e)=>{
  e.preventDefault();
  const response = await fetch("https://slicehesvgh.onrender.com/api/authuser/login",{
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
       },
    body: JSON.stringify({email:credentials.email, password :credentials.password})
  }); 
  const json = await response.json();
  console.log(json); 
  if (json.success){
    // save the auth token and redirect
    localStorage.setItem('usertoken', json.authtoken);
    props.showAlert("logged in successfully", "success");
    history("/");  
  }
  else{
    props.showAlert("Invalid Details", "danger");
  }
}



  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ width: "100%", height: "100vh", backgroundColor: "#0A1828" }}
    ><Link className="btn " to="/" role="button" style={{width: "7%",height:"5.6vh",backgroundColor:"#178582",color: "#E4AE31",fontSize: "1.5rem", padding: "0", fontWeight: "bold",position:"absolute", margin:"0 90vw 85vh 0"}}>⬅ Back</Link>
      <h2 className="my-5" style={{ fontWeight: "bold", color: "#E4AE31" }}>
        Login to account
      </h2>
      <form style={{ width: "30%" }} onSubmit={handleSubmit}>
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
          Log in
        </button>
        <div className="d-flex " style={{marginLeft:"170px"}}>
          <Link to="/resetpassword" style={{ textDecoration: "none" }}>
            forgot password?
          </Link>
        </div>
        <div className="my-2" style={{ color: "white", fontSize: "1.1rem" ,marginLeft:"83px"}}>
          New to Sliceheaven? 
          <Link to="/usersignup" style={{ textDecoration: "none" }}>
             Create account
          </Link>
        </div>
      </form>
    </div>
  );
}

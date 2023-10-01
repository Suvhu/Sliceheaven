import React,{ useEffect, useState} from "react";
import { Link, useParams, useNavigate} from "react-router-dom";

export default function Forgotpassword(props) {
  const { id, token } = useParams();

  const history = useNavigate();

  const [password, setPassword] = useState("");

  const userValid = async () => {
    const response = await fetch(`http://localhost:5000/api/authuser/forgotpassword/${id}/${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      console.log("user valid");
    } else {
      history("*");
    }
  };

  const setVal = (e)=>{
    setPassword(e.target.value);
  }

  const sendpassword = async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/authuser/${id}/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({password})
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      setPassword("")
      props.showAlert("Password reset successfully", "success");
     } else {
      props.showAlert("Token expired", "danger");
    }

  }

  useEffect(()=>{
    userValid()
  },[])

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ width: "100%", height: "100vh", backgroundColor: "#0A1828" }}
    >
      <Link
        className="btn "
        to="/userlogin"
        role="button"
        style={{
          width: "11%",
          height: "4.8vh",
          backgroundColor: "#178582",
          color: "#E4AE31",
          fontSize: "1.3rem",
          padding: "0",
          fontWeight: "bold",
          position: "absolute",
          margin: "0 85vw 85vh 0",
        }}
      >
        ⬅ Back to login
      </Link>
      <h2 className="my-5" style={{ fontWeight: "bold", color: "#E4AE31" }}>
        Enter your new password
      </h2>
      <form style={{ width: "30%" }} onSubmit={sendpassword}>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="form-label"
            style={{ color: "#178582" }}
          >
            New password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={setVal}
            required
          />
        </div>
        <button
          type="submit"
          className="btn my-3"
          style={{
            width: "29%",
            height: "6vh",
            backgroundColor: "#E4AE31",
            color: "#0A1828",
            fontSize: "1.3rem",
            fontWeight: "bold",
            marginLeft: "170px",
          }}
        >
          Set
        </button>
      </form>
    </div>
  );
}

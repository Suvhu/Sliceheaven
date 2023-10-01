import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Aresetpassword(props) {
  const [credentials, setCredentials] = useState({ email: "" });
  let history = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/authadmin/resetpassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: credentials.email }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      setCredentials({ email: "" });
      props.showAlert("Password reset link sent successfully", "success");
      history("/aresetpassword");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  return (
    <div
    className="d-flex flex-column align-items-center justify-content-center"
    style={{ width: "100%", height: "100vh", backgroundColor: "#0A1828" }}
  >
    <Link
      className="btn "
      to="/adminlogin"
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
      Enter your Email
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
          value={credentials.email}
          aria-describedby="emailHelp"
          onChange={onChange}
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
        Send Link
      </button>
    </form>
  </div>
  )
}

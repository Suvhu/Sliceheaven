import React, { useEffect, useContext, useRef, useState } from "react";
import Usernavbar from "./Usernavbar";
import Footer from "../Components/Footer";
import allContextuser from "../Context/items/allContextuser";
import { useNavigate } from "react-router-dom";

export default function Useraccount(props) {
  let history = useNavigate();
  const context = useContext(allContextuser);
  const { user, getUser, updateUser } = context;
  const ref = useRef(null);
  const refClose = useRef(null);
  

  

  useEffect(() => {
    if (!localStorage.getItem("usertoken")) {
      history("/userlogin");
    } else {
      getUser();
    }
  }, []);
  const [users, setUsers] = useState({
    name: `${user.name}`,
    city:  `${user.city}`,
    town:  `${user.town}`,
    district:  `${user.district}`,
    number:  `${user.number}`,
  });

  const handleClick = () => {
    setUsers({
      name: `${user.name}`,
    city:  `${user.city}`,
    town:  `${user.town}`,
    district:  `${user.district}`,
    number:  `${user.number}`,
    })
    ref.current.click();
  };

  const handleSubmit = (id) => {
    console.log(id);
    updateUser(id,users.name,users.city, users.town,users.district, users.number);
    user.name = users.name ;
    user.city = users.city;
    user.town = users.town ;
    user.district = users.district;
    user.number = users.number ;
    refClose.current.click();
  };

  const onChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                change details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3 my-3">
                  <label
                    htmlFor="name"
                    className="form-label"
                    style={{ color: "#0A1828", fontWeight: "bold" }}
                  >
                    Name<b style={{ color: "red", fontWeight: "normal" }}>*</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={users.name}
                    //   aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3 my-3">
                  <label
                    htmlFor="city"
                    className="form-label"
                    style={{ color: "#0A1828", fontWeight: "bold" }}
                  >
                    City<b style={{ color: "red", fontWeight: "normal" }}>*</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    value={users.city}
                    //   aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3 my-3">
                  <label
                    htmlFor="town"
                    className="form-label"
                    style={{ color: "#0A1828", fontWeight: "bold" }}
                  >
                    Town<b style={{ color: "red", fontWeight: "normal" }}>*</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="town"
                    name="town"
                    value={users.town}
                    //   aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3 my-3">
                  <label
                    htmlFor="district"
                    className="form-label"
                    style={{ color: "#0A1828", fontWeight: "bold" }}
                  >
                    District<b style={{ color: "red", fontWeight: "normal" }}>*</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="district"
                    name="district"
                    value={users.district}
                    //   aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="number"
                    className="form-label"
                    style={{ color: "#0A1828", fontWeight: "bold" }}
                  >
                    Number<b style={{ color: "red", fontWeight: "normal" }}>*</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    name="number"
                    value={users.number}
                    onChange={onChange}
                    minLength={10}
                    required
                  />
                </div>
                
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
              disabled ={users.name.length<5 || users.city.length<5 ||users.town.length<5 || users.district.length<5 || users.number.length !== 10}
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  handleSubmit(user._id);
                }}
              >
                change
              </button>
            </div>
          </div>
        </div>
      </div>
      <Usernavbar showAlert={props.showAlert} />
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{
          width: "100vw",
          height: "88vh",
          borderTop: "2px solid #E4AE31",
          backgroundColor: "#0A1828",
          borderBottom: "2px solid #E4AE31",
        }}
      >
        <h1
          style={{ color: "#E4AE31", marginBottom: "20px", fontWeight: "bold" }}
        >
          My profile
        </h1>
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            width: "50vw",
            height: "60vh",
            backgroundColor: "#E4AE31",
            borderRadius: "10px",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: "100%", height: "10vh" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "30%",
                height: "100%",
                backgroundColor: "#178582",
                border: "2px solid #E4AE31",
                fontWeight: "bold",
                fontSize: "1.4rem",
                borderRadius: "10px",
              }}
            >
              Name
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "70%",
                height: "100%",
                backgroundColor: "#178582",
                border: "2px solid #E4AE31",
                fontWeight: "bold",
                fontSize: "1.4rem",
                borderRadius: "10px",
              }}
            >
              {user.name}
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: "100%", height: "10vh" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "30%",
                height: "100%",
                backgroundColor: "#178582",
                border: "2px solid #E4AE31",
                fontWeight: "bold",
                fontSize: "1.4rem",
                borderRadius: "10px",
              }}
            >
              Email
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "70%",
                height: "100%",
                backgroundColor: "#178582",
                border: "2px solid #E4AE31",
                fontWeight: "bold",
                fontSize: "1.4rem",
                borderRadius: "10px",
              }}
            >
              {user.email}
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: "100%", height: "10vh" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "30%",
                height: "100%",
                backgroundColor: "#178582",
                border: "2px solid #E4AE31",
                fontWeight: "bold",
                fontSize: "1.4rem",
                borderRadius: "10px",
              }}
            >
              City
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "70%",
                height: "100%",
                backgroundColor: "#178582",
                border: "2px solid #E4AE31",
                fontWeight: "bold",
                fontSize: "1.4rem",
                borderRadius: "10px",
              }}
            >
              {user.city}
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: "100%", height: "10vh" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "30%",
                height: "100%",
                backgroundColor: "#178582",
                border: "2px solid #E4AE31",
                fontWeight: "bold",
                fontSize: "1.4rem",
                borderRadius: "10px",
              }}
            >
              Town
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "70%",
                height: "100%",
                backgroundColor: "#178582",
                border: "2px solid #E4AE31",
                fontWeight: "bold",
                fontSize: "1.4rem",
                borderRadius: "10px",
              }}
            >
              {user.town}
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: "100%", height: "10vh" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "30%",
                height: "100%",
                backgroundColor: "#178582",
                border: "2px solid #E4AE31",
                fontWeight: "bold",
                fontSize: "1.4rem",
                borderRadius: "10px",
              }}
            >
              District
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "70%",
                height: "100%",
                backgroundColor: "#178582",
                border: "2px solid #E4AE31",
                fontWeight: "bold",
                fontSize: "1.4rem",
                borderRadius: "10px",
              }}
            >
              {user.district}
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: "100%", height: "10vh" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "30%",
                height: "100%",
                backgroundColor: "#178582",
                border: "2px solid #E4AE31",
                fontWeight: "bold",
                fontSize: "1.4rem",
                borderRadius: "10px",
              }}
            >
              Number
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "70%",
                height: "100%",
                backgroundColor: "#178582",
                border: "2px solid #E4AE31",
                fontWeight: "bold",
                fontSize: "1.4rem",
                borderRadius: "10px",
              }}
            >
              {user.number}
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn"
          style={{
            backgroundColor: "#E4AE31",
            width: "11vw",
            height: "7vh",
            fontWeight: "bold",
            fontSize: "1.3rem",
            marginTop: "30px",
            color: "#178582",
          }}
          onClick={() => {
            handleClick();
          }}
        >
          change details
        </button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

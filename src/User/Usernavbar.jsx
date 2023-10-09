import React, { useEffect, useContext} from "react";
import sliceheaven from "../Images/Sliceheaven.png";
import { Link } from "react-router-dom";
import allContextuser from "../Context/items/allContextuser";

export default function Usernavbar(props) {
  const context = useContext(allContextuser);
  const { carts, getCart, customcarts, getCustomcart} = context;
  
  const handleLogout = () => {
    props.showAlert("Logged out successfully", "success");
    localStorage.removeItem("usertoken");
  };

  const num = carts.length + customcarts.length ;

  useEffect(() => {
    if (localStorage.getItem("usertoken")) {
      getCart();
      getCustomcart();
    }
  }, []);

  return (
    <div>
      <nav
        className="navbar navbar-light d-flex "
        style={{ backgroundColor: "#0A1828", height: "10vh" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/userdash">
            <img
              src={sliceheaven}
              alt="Sliceheaven"
              width="165"
              className="d-inline-block align-text-top"
            />
          </Link>
          <div
            className="d-flex justify-content-around "
            style={{ width: "36%" }}
          >
            <Link
              className="btn "
              to="/userdash"
              role="button"
              style={{
                width: "20%",
                height: "5.3vh",
                color: "#E4AE31",
                fontSize: "1.3rem",
                padding: "0",
                fontWeight: "bold",
                border: "1px solid #E4AE31",
              }}
            >
              <i
                className="fa-solid fa-house"
                style={{ color: "#178582", marginRight: "10px" }}
              ></i>
              home
            </Link>
            <Link
              className="btn "
              to="/userorder"
              role="button"
              style={{
                width: "21%",
                height: "5.3vh",
                color: "#E4AE31",
                fontSize: "1.3rem",
                padding: "0",
                fontWeight: "bold",
                border: "1px solid #E4AE31",
              }}
            >
              <i
                className="fa-solid fa-bag-shopping"
                style={{ color: "#178582", marginRight: "10px" }}
              ></i>
              orders
            </Link>
            <Link
              className="btn "
              to="/usercart"
              role="button"
              style={{
                width: "17%",
                height: "5.3vh",
                color: "#E4AE31",
                fontSize: "1.3rem",
                padding: "0",
                fontWeight: "bold",
                border: "1px solid #E4AE31",
              }}
            >
              <i
                className="fa-solid fa-cart-shopping"
                style={{ color: "#178582", marginRight: "10px" }}
              ></i>
              cart
              {(carts.length !== 0 || customcarts.length !== 0) ?
                <span className="position-absolute badge rounded-pill " style={{ translate : "-10px 8px", color : "#E4AE31", fontWeight : "bold", backgroundColor : "#178582"}}>
                {num}
              </span> : <div></div>
              }
            </Link>

            <div
              className="dropdown"
              style={{
                border: "1px solid #E4AE31",
                padding: "0 5px",
                borderRadius: "8px",
              }}
            >
              <button
                className="dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  width: "29%",
                  height: "5.2vh",
                  color: "#E4AE31",
                  fontSize: "1.3rem",
                  padding: "0",
                  fontWeight: "bold",
                  backgroundColor: "#0A1828",
                  border: "none",
                  paddingBottom: "15px",
                }}
              >
                <i
                  className="fa-solid fa-user"
                  style={{ color: "#178582", marginRight: "10px" }}
                ></i>
                profile
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
                style={{ backgroundColor: "#E4AE31" }}
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/useraccount"
                    style={{ fontSize: "1.1rem", fontWeight: "bold" }}
                  >
                    <i
                      className="fa-solid fa-file"
                      style={{ color: "#178582", marginRight: "10px" }}
                    ></i>
                    account
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/"
                    style={{ fontSize: "1.1rem", fontWeight: "bold" }}
                    onClick={handleLogout}
                  >
                    <i
                      className="fa-solid fa-right-from-bracket"
                      style={{ color: "#178582", marginRight: "10px" }}
                    ></i>
                    logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

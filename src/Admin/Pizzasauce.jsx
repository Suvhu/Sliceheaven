import React, { useContext, useRef, useState } from "react";
import Productcard from "./Productcard";
import img from "../Images/addimg.png";
import allContext from "../Context/items/allContext";

export default function Pizzasauce(props) {
  const { products } = props;
  let context = useContext(allContext);

  let { addProduct,success,updateProduct} = context;
  const [image1, setImage1] = useState("");
  const [pizzabase,setPizzabase] = useState("");
  const [product1, setProduct1] = useState({
    category: "pizza sauce",
    name: "",
    number: "",
    price: "",
  });
  const [product2, setProduct2] = useState({
    id:"",
    enumber: "",
    eprice: "",
  });

  const addref = useRef(null);
  const  addrefClose = useRef(null);
  const  editref = useRef(null);
  const  editrefClose = useRef(null);
  const  ref = useRef(null);
  const  ref1 = useRef(null);

  const convertToBase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage1(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error:", error);
    };
  };

  const handleProduct1 = (e) => {
    addref.current.click();
  };

  const handleClick1 = (e) => {
    // e.preventDefault();
    
    addProduct(
      product1.category,
      product1.name,
      product1.number,
      `${image1}`,
      product1.price
    );
    setImage1("");
    setProduct1({
      category: "pizza sauce",
      name: "",
      number: "",
      price: ""
    });

    const element =ref1.current;
    element.value = null;
    
     addrefClose.current.click();
    if(success){
        props.showAlert("Added Successfully","success");
    }
    else{
        props.showAlert("Cannot add the pizza base", "danger");
    }
  };

  const handleProduct2 = (currentProduct) => {
     editref.current.click();
    setProduct2({id: currentProduct._id,enumber: currentProduct.number,eprice: currentProduct.price});
    setPizzabase(currentProduct.name);
    setImage1(currentProduct.image);
  };

  const handleClick2 = (e) => {
    // e.preventDefault();
    
    updateProduct(
        product2.id,
      product2.enumber,
      `${image1}`,
      product2.eprice
    );
    setImage1("");
        const element =ref.current;
        element.value = null;

    
     editrefClose.current.click();
        props.showAlert("Edited Successfully","success");
    
  };


  const onChange = (e) => {
    setProduct1({ ...product1, [e.target.name]: e.target.value });
  };

  const onChange2 = (e) => {
    setProduct2({ ...product2, [e.target.name]: e.target.value });
  };



  return (
    <>
    {/* updatenote */}
    <button
        ref={editref}
        type="button"
        className="btn btn-primary d-none "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal4"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal4"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ backgroundColor: "black" }}>
          <div className="modal-content" style={{ backgroundColor: "#E4AE31" }}>
            <div className="modal-header">
              <h1
                className="modal-title fs-4"
                id="exampleModalLabel"
                style={{ color: "#178582", fontWeight: "bold" }}
              >
                Edit {pizzabase}
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
                <div className="mb-3">
                  <label
                    htmlFor="number"
                    className="form-label"
                    style={{ color: "#0A1828", fontWeight: "bold" }}
                  >
                    Amount<b  style={{ color: "red", fontWeight: "normal" }}>*</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="enumber"
                    name="enumber"
                    value={product2.enumber}
                    onChange={onChange2}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="price"
                    className="form-label"
                    style={{ color: "#0A1828", fontWeight: "bold" }}
                  >
                    Price<b  style={{ color: "red", fontWeight: "normal" }}>*</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="eprice"
                    name="eprice"
                    value={product2.eprice}
                    onChange={onChange2}
                  />
                </div>
                <div className="mb-3 my-3">
                  <label
                    htmlFor="name"
                    className="form-label"
                    style={{ color: "#0A1828", fontWeight: "bold" }}
                  >
                    Image (<b  style={{ color: "red", fontWeight: "normal" }}>size should be less than 100KB *</b>)
                  </label>
                  <input
                  ref ={ref}
                    type="file"
                    className="form-control-file"
                    id="eimage"
                    name="eimage"
                    accept="image/*"
                    onChange={convertToBase64}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                style={{ backgroundColor: "#0A1828" }}
                ref={editrefClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ backgroundColor: "#178582" }}
                onClick={handleClick2}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      
      {/* add note modal */}
      <button
        ref={addref}
        type="button"
        className="btn btn-primary d-none "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal5"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal5"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ backgroundColor: "black" }}>
          <div className="modal-content" style={{ backgroundColor: "#E4AE31" }}>
            <div className="modal-header">
              <h1
                className="modal-title fs-4"
                id="exampleModalLabel"
                style={{ color: "#178582", fontWeight: "bold" }}
              >
                Add pizza base
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
                    Name<b  style={{ color: "red", fontWeight: "normal" }}>*</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={product1.name}
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
                    Amount<b  style={{ color: "red", fontWeight: "normal" }}>*</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="number"
                    name="number"
                    value={product1.number}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="price"
                    className="form-label"
                    style={{ color: "#0A1828", fontWeight: "bold" }}
                  >
                    Price<b  style={{ color: "red", fontWeight: "normal" }}>*</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    value={product1.price}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3 my-3">
                  <label
                    htmlFor="name"
                    className="form-label"
                    style={{ color: "#0A1828", fontWeight: "bold" }}
                  >
                    Image (<b  style={{ color: "red", fontWeight: "normal" }}>size should be less than 100KB *</b>)
                  </label>
                  <input
                  ref={ref1}
                    type="file"
                    className="form-control-file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={convertToBase64}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                style={{ backgroundColor: "#0A1828" }}
                ref={addrefClose}
              >
                Close
              </button>
              <button
                disabled ={product1.name.length<5 || product1.price.length<1 || product1.number.length<1 || image1.length ===0}
                type="button"
                className="btn btn-primary"
                style={{ backgroundColor: "#178582" }}
                onClick={handleClick1}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row "
        style={{
          padding: "2vw 5vw",
          backgroundColor: "#0A1828",
          border: "2px solid #E4AE31",
        }}
      >
        <h1 style={{ color: "#178582", fontWeight: "bold" }}>Pizza sauces</h1>
        {products.map((product) => {
          if (product.category === "pizza sauce") {
            return (
              <Productcard
                key={product._id}
                product={product}
                showAlert={props.showAlert}
                handleProduct2 = {handleProduct2}
              />
            );
          }
        })}
        <div
          className="card my-3"
          style={{ width: "13vw", margin: "0 1vw", backgroundColor: "#E4AE31" }}
        >
          <div
            className="card-body d-flex flex-column align-items-center justify-content-center"
            style={{}}
          >
            <img
              src={img}
              className="card-img-top"
              alt="..."
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleProduct1();
              }}
            />
            <h5 style={{ fontWeight: "bold", color: "#178582", width:"155px"  }}>
              add pizza sauce
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}



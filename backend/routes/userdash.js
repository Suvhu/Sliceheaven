const express = require('express');
const {body, validationResult } = require('express-validator');
const router = express.Router();
const fetchuser = require('../middleware/fetchUser');
const Product = require("../models/Product")
const Pizza = require("../models/Pizza")


//Route 1 : get all the products using: GET "api/userdash/fetch" . login required
router.get("/fetch", fetchuser, async (req, res) => {
    try {
      const product = await Product.find().select("-number");;
      res.json(product);
    } catch(error){
      console.error(error.message);
      res.status(500).send("Some error occured")
  } 
  });

//Route 2 : get all the pizza using: GET "api/userdash/fetchpizza" . login required
router.get("/fetchpizza", fetchuser, async (req, res) => {
  try {
    const pizza = await Pizza.find().select("-number");;
    res.json(pizza);
  } catch(error){
    console.error(error.message);
    res.status(500).send("Some error occured")
} 
});



module.exports = router ;
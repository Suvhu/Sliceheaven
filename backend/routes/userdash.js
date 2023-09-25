const express = require('express');
const {body, validationResult } = require('express-validator');
const router = express.Router();
const fetchuser = require('../middleware/fetchUser');
const Product = require("../models/Product")


//Route 1 : get all the products using: GET "api/admindash/fetch" . login required
router.get("/fetch", fetchuser, async (req, res) => {
    try {
      const product = await Product.find();
      res.json(product);
    } catch(error){
      console.error(error.message);
      res.status(500).send("Some error occured")
  } 
  });



module.exports = router ;
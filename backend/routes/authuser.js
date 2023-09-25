const express = require('express');
const User = require('../models/User');
const {body, validationResult } = require('express-validator');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fetchuser = require('../middleware/fetchUser');

const JWT_SECRET = 'Subuswain';

// Route - 1 -- Creating a user using : Post "api/authuser/createuser" . No log in required
router.post('/createuser',[body('name','Enter a valid name').isLength({min: 5}),body('email','Enter a valid email').isEmail(),body('password','short password').isLength({min: 5}),body('number','Enter a valid number').isLength(10)], async(req,res)=>{
    let success = false;
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({success,errors: errors.array()});
        }

        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({success,error:"sry a user with this email is already exist"});
        }
        const salt = await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(req.body.password, salt);

        user= await User.create({
            name: req.body.name,
            password: secpass,
            email: req.body.email,
            city: req.body.city,
            town: req.body.town,
            district: req.body.district ,
            number : req.body.number
        })


        const data ={
            user:{
                id: user.id
            }
        }

        const authtoken =jwt.sign(data, JWT_SECRET);
        success = true ;
        res.json({success, authtoken});
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

// Route - 2 -- Authenticate a User using: POST "api/auth/login" . No login required

router.post('/login',[body('email','Enter a valid email').isEmail(),body('password','password cannot be blank').exists()],async(req,res)=>{
    let success = false ;
    try{
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({success, error: error.array()});
        }
        const {email, password}= req.body;

        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success,error: "please try to login with correct credentials"});
        }

        const passwordCompare = await bcrypt.compare(password, user.password);

        if(!passwordCompare){
            return res.status(400).json({success,error: "please try to login with correct credentials"});
        }

        const data ={
            user:{
                id: user.id
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET);
        success= true ;
        res.json({success, authtoken});

    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})


// router - 3 -- get loggedin a User Details using: POST "api/auth/getuser" . login required

router.post('/getuser',fetchuser,async(req,res)=>{
    try{
        userid =req.user.id;
        const user = await User.findById(userid).select("-password");
        res.send(user);
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal server Error");
    }
})

module.exports = router ;
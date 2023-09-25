const express = require('express');
const Admin = require('../models/Admin');
const {body, validationResult } = require('express-validator');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fetchadmin = require('../middleware/fetchAdmin');

const JWT_SECRET = 'Subuswain';

// Route - 1 -- Creating a admin using : Post "api/authadmin/createadmin" . No log in required
router.post('/createadmin',[body('name','Enter a valid name').isLength({min: 5}),body('email','Enter a valid email').isEmail(),body('password','short password').isLength({min: 5}),body('secretkey','Enter a valid key').isLength(5) ], async(req,res)=>{
    let success = false;
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({success,errors: errors.array()});
        }
        if(req.body.secretkey != '1@3$5'){
            return res.status(400).json({success,errors: "Enter"});
        }

        let admin = await Admin.findOne({email: req.body.email});
        if(admin){
            return res.status(400).json({success,error:"sry a admin with this email is already exist"});
        }
        const salt = await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(req.body.password, salt);

        admin= await Admin.create({
            name: req.body.name,
            password: secpass,
            email: req.body.email
        })


        const data ={
            admin:{
                id: admin.id
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

// Route - 2 -- Authenticate a admin using: POST "api/auth/login" . No login required

router.post('/login',[body('email','Enter a valid email').isEmail(),body('password','password cannot be blank').exists()],async(req,res)=>{
    let success = false ;
    try{
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({success, error: error.array()});
        }
        const {email, password}= req.body;

        let admin = await Admin.findOne({email});
        if(!admin){
            return res.status(400).json({success,error: "please try to login with correct credentials"});
        }

        const passwordCompare = await bcrypt.compare(password, admin.password);

        if(!passwordCompare){
            return res.status(400).json({success,error: "please try to login with correct credentials"});
        }

        const data ={
            admin:{
                id: admin.id
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

router.post('/getadmin',fetchadmin,async(req,res)=>{
    try{
        adminid =req.admin.id;
        const admin = await Admin.findById(adminid).select("-password");
        res.send(admin);
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal server Error");
    }
})

module.exports = router ;
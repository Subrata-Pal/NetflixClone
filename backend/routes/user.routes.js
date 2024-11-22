const express = require('express');
const {body, validationResult} = require('express-validator');
const userModel = require('../models/user.models');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
router.get('/register', (req, res) => {
res.send("In Register");
}
)

router.post('/register', 
    body('email').trim().isEmail().isLength({min: 3}),
    body('password').trim().isLength({min : 6}),
    body('username').trim().isLength({min: 3}),
    async (req, res) => {
        const {email, username, password} = req.body;

        const errors = validationResult(req);

        if(!errors.isEmpty())
        {
            return res.status(400).json(
                {errors: errors.array(),
                 messsage: "Invalid Fields"
                });
        }

        const userData = await userModel.findOne({email});
        if(userData !== null)
        {
            return res.status(200).json({
                message: "User already exists",
                userData,
                success: false
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            email,
            username,
            password: hashedPassword
        })
        console.log(user);
        res.status(200).json({ message: "User is created", user, success: true});
})

router.post('/login',
    body('email').trim().isEmail().isLength({min : 3}),
    body('password').trim().isLength({min : 6}),
    body('username').trim().isLength({min: 3}),
    async (req, res)=>{

        const errors = validationResult(req);

        if(!errors)
        {
            return res.status(400).json(
                {errors: errors.array(),
                 message: "Invalid Fields"
                });
        }
        const {email, username, password} = req.body;
        const user = await userModel.findOne({email});

        if(!user)
        {
            return res.status(400).json({
                message: "Invalid Email or password"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch)
        {
            return res.status(400).json({
                message: "Invalid Email or password"
            })
        }

        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET);
        res.cookie('token', token);

        res.json({
            message: "Logged In Successfully",
            user,
            token
        })

})

router.get('/logout', (req, res) => {
    res.status(200).cookie('token',"").json({
        message: "Logout Successfully",
        success: true
    })
})

module.exports = router;
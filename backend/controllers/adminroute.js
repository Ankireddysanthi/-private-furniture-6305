const express = require("express");
const adminroute = express.Router();
const {     Admimodel
} = require("../Models/adminmodel");
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');

adminroute.post("/reg", async (req, res) => {
    const { username, email, phone_number, pass } = req.body;
    const existmail = await Admimodel.find({ email })
    try {
      if (existmail.length != 0) {
        res.send({ msg: "already exit" })
      } else {
        bcrypt.hash(pass, 5, async (err, hash) => {
          const user = new Admimodel({ username, email, pass: hash, phone_number });
          await user.save();
          // console.log(user)
        });
        res.send({ msg: "registration success" })
      }
  
    } catch (err) {
      res.send({ msg: "error message" })
    }
  })
  adminroute.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    try {
      const user = await Admimodel.findOne({ email });
      console.log(user._id)
      if (user) {
        bcrypt.compare(pass, user.pass, (err, result) => {
          if (result) {
            //  const token= jwt.sign({ "userid":user._id}, 'shhhhh');
            res.send({ msg: "login", "token": jwt.sign({ "userid": user._id }, 'shhhhh'), "username": user.username })
          }
        })
      } else {
        res.send({ msg: "please register" })
      }
  
    } catch (err) {
      res.send({ msg: "errormsg" })
    }
  })
  
  module.exports = {
    adminroute
  }
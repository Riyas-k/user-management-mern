const jwt = require("jsonwebtoken");
const db = require("../models/connection");
const bcrypt = require('bcrypt')

const credentials = {
  email: "mohammedriyazriyaz04@gmail.com",
  password: "123",
};

module.exports = {
  postAdmin: (req, res) => {
    const { email, password } = req.body;

    if (credentials.email === email && credentials.password === password) {
      const token = jwt.sign(
        {
          email: email,
          password: password,
        },
        "secret_key",
        { expiresIn: "7d" }
      );
      res.json({ status: true, admin: token });
    } else {
      res.json({ status: false });
    }
  },
  getUsers: async (req, res) => {
    await db.user.find({}).then((response) => {
      if (response) {
        res.json({ status: true, user: response });
      } else {
        res.json({ status: false });
      }
    });
  },
  deleteUser: async (req, res) => {
    console.log(req.params.id);
    await db.user.deleteOne({ _id: req.params.id }).then((response) => {
      console.log(response);
      if (response) {
        res.json({ status: true });
      } else {
        res.json({ Status: false });
      }
    });
  },
  addUser:async(req,res)=>{
    let {email,firstName,lastName,phone,password} = req.body
    let user = await db.user.findOne({email:email})
    if(user){
      res.json({status:false})
    }else{
     let hashPassword =  await bcrypt.hash(password,10)
      const newUser = await db.user({
        fname: firstName,
        lname: lastName,
        email: email,
        password: hashPassword,
        phone: phone,
      })
      await newUser.save().then((response)=>{
        res.json({status:true})
      })
    }
  }
};

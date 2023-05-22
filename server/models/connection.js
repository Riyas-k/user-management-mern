const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.log(err));


const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
    },
    photo:{
        type:String
    },
    password:{
        type:String,
        required:true
    }
})

module.exports ={
    user:mongoose.model('user',userSchema)
}
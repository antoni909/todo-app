const express = require('express')
const authRouter = express.Router()

const registerUser = async (req,res) => {
  try{
    const record = 'create user record'
    res.status(201).json(record)
  }catch(e){
    res.status(403).send(`ERR Registering User`);
  }
}

const loginUser = async (req,res) => {
  try{
    // 1. authorize user
    // 2. login user
    const user = 'authorized and able to login'
    res.status(200).json(user)
  }catch(e){
    console.log('e: ',e)
  }
}

authRouter.post('/signup',registerUser)
authRouter.post('/login',loginUser)

module.exports = authRouter;

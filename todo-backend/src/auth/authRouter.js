const express = require('express')
const authRouter = express.Router()
const basic = require('./middleware/basic')

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
    user = req.user
    console.log(user)
    res.status(200).json({user})
  }catch(e){
    console.log('e: ',e)
  }
}

authRouter.post('/signup',registerUser)
authRouter.post('/login',basic,loginUser)

module.exports = authRouter;

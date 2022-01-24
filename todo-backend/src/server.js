const express = require('express')
const app = express()
const notFoundHandler = require('./middleware/404')
const serverErrorHandler = require('./middleware/500')
const authRouter = require('./auth/authRouter')

app.use(express.json())

app.get('/', greetUser);

app.use('*',notFoundHandler)
app.use(serverErrorHandler)

async function greetUser(req,res){
  const message = 'hola, welcome to basic auth app 👋 , use a Client to login or register!'
  res.status(200).send(message)
}

module.exports = {
  app,
  start: port => {
    if(!port){throw new Error('missing PORT')}
    app.listen(port, ()=> {
      console.log(`server listening port:  ${port}`)
    })
  }
}

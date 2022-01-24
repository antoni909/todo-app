'use strict';

const base64 = require('base-64');
const res = require('express/lib/response');

const dummies = [
  {
    password:'password',
    username:'user-admin',
    role:'admin',
    capabilities:['create','read','update','delete']
  },
  {
    password: 'password',
    username: 'user-editor',
    role: 'editor',
    capabilities: ['read', 'update']
  },
  {
    password: 'password',
    username: 'user-writer',
    role: 'writer',
    capabilities: ['create']
  }
]

const basicAuth = async(req, res, next) => {
  // get username and password from headers
  if(!req.headers.authorization){return _authError}
  let basic = req.headers.authorization.split(' ').pop()
  let [ username, password ] = base64.decode(basic).split(':')
    for(let dummy in dummies){
      if(dummies[dummy].password === password && dummies[dummy].username === username)
      req.user = dummies[dummy]
    }
    next()
}

const _authError = () => {res.status(403).send('Basic Auth Invalid Login')}

module.exports = basicAuth;

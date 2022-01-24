'use strict';

const base64 = require('base-64');
const { User } = require('../models/index');

async function basicAuthentication(req, res, next){
  // get username and passoword from headers
  // decode
  // retrieve user from DB
  // return user
  next();
}

module.exports = basicAuthentication;

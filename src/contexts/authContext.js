import { createContext, useState, useEffect } from 'react'
// import jwt from 'jsonwebtoken'

let token = ''
let cookies = {}

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

export const UserContext = createContext()

export default function UserProvider({children}){
  const defaults = {
    login,
    logout,
    isAuthorized,
    isAuthenticated: false,
    curUser: {}
  }

  const [global, setGlobal] = useState(defaults)

  function login(username, password){
    let validatedUser = {}
    dummies.forEach( obj => {
      if(username === obj.username && password === obj.password){return validatedUser = obj}
    })

    token = 'Header+Payload+Secret'
    cookies = {...cookies, token}

    setGlobal({
      ...global,
      isAuthenticated: true,
      curUser: {...validatedUser} 
    })
  }

  function logout(){
    setGlobal(defaults)
  }

  function isAuthorized(capability){
    // WIP authorization logic
    return true
  }

  return ( 
    <UserContext.Provider value={global}>
      {children}
    </UserContext.Provider>
  )
}

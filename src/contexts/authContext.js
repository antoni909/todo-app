import { createContext, useState } from 'react'
// import jwt from 'jsonwebtoken'
// import cookies from react

let token = ''
let cookies = {}
let secret = '...:('

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

  const [curUser, setCurUser] = useState({})
  const [curCapabilities, setCurCapabilities] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function login(username, password){
    dummies.forEach( obj => {
      if(username === obj.username && password === obj.password){
        setIsAuthenticated(true)
        setCurUser({...obj})
        setCurCapabilities([...obj.capabilities])
      }
    })
    token = `Header+Payload+${secret}`
    cookies = {...cookies, token}
  }

  function logout(){
    setIsAuthenticated(false)
  }

  function isAuthorized(capability){
    return curCapabilities.includes(capability)
  }

  const global = {
    login,
    logout,
    isAuthorized,
    curCapabilities,
    isAuthenticated,
    curUser
  }

  return ( 
    <UserContext.Provider value={global}>
      {children}
    </UserContext.Provider>
  )
}

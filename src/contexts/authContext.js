import { createContext, useState, useEffect } from 'react'
// import jwt from 'jsonwebtoken'
// import cookies from react
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
    isAuthorized: authorization,
    curCapabilities: [],
    isAuthenticated: false,
    curUser: {}
  }

  const [global, setGlobal] = useState(defaults)
  function login(username, password){
    console.log(setGlobal({...global,newProp: 'newprop'}))
    let validatedUser = {}
    let caps =[]
    dummies.forEach( obj => {
      if(username === obj.username && password === obj.password){
        caps = [...obj.capabilities]
        validatedUser = obj
      }
    })
    console.log('**',caps, validatedUser)

    token = 'Header+Payload+Secret'
    cookies = {...cookies, token}
    setGlobal({
      ...global,
      isAuthenticated: true,
      curUser: {...validatedUser},
      curCapabilities: [...caps]
    })
    console.log('***',global)
  }

  function logout(){
    setGlobal(defaults)
  }

// async function authorization(capability){
//     console.log(global.curCapabilities)
//     let isAuthed = global.curCapabilities.includes(capability)
//     console.log(isAuthed)
//     return true
//   }

  function authorization(capability){
    return global.curCapabilities.includes(capability)
  }

  return ( 
    <UserContext.Provider value={global}>
      {children}
    </UserContext.Provider>
  )
}

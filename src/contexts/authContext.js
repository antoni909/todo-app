import { createContext, useState } from 'react'

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

export default function UserProvider(props){
  const defaults = {
    login,
    logout,
    isAuthenticated: false,
    isAuthorized: false,
    curUser: {}
  }

  const [global, setGlobal] = useState(defaults)

  function login(username, password){
    console.log('context: ',username,password)

    // let validatedUser = {}
    // dummies.forEach( obj => {
    //   if(username === obj.username && password === obj.password) { return validatedUser = obj}
    // } )

    // if(validatedUser){ token = 'Header+Payload+Secret'}

    // cookies = {...cookies, token}

    // setGlobal({...global,isAuthenticated: true,curUser: {validatedUser} })
  }

  function logout(){
    console.log('context logout')
    // empty out global user and auth's
    setGlobal(defaults)
  }

  function isAuthorized(capability){
    console.log('isAuthorized',capability)
  }

  return ( 
    <UserContext.Provider value={global}>
      {props.children}
    </UserContext.Provider>
  )
}


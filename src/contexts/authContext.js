
import { createContext, useState } from 'react'

// 'existing users'
const dummies = [
  {
    password:'password',
    name:'Administrator',
    role:'admin',
    capabilities:['create','read','update','delete']
  },
  {
    password: 'password',
    name: 'Editor',
    role: 'editor',
    capabilities: ['read', 'update']
  },
  {
    password: 'password',
    name: 'Writer',
    role: 'writer',
    capabilities: ['create']
  }
]

// creat auth/login context
const UserContext = createContext({})
export default function UserProvider(props){
  const defaults = {
    login,
    logout,
    isAuthenticated: false,
    isAuthorized: false,
    user: {capabilities: []}
  }

  const [global, setGlobal] = useState(defaults)
  
  function login(username, password){
    console.log('context: ',username,password)
    // search dummies and return that valid user
    // if is valid user, give token
    // save to react cookies, how to?
  }

  function logout(){
    console.log('context logout')
    // empty out global user and auth's
    setGlobal(defaults)
  }

  return ( 
    <UserContext.Provider value={{global,setGlobal}}>
      {props.children}
    </UserContext.Provider>
  )
}


import { useContext } from 'react'
import { UserContext } from '../contexts/authContext'
import AuthFail from './AuthFail'

const Auth = ({children, capability}) => {
  const global = useContext(UserContext);

  // global.isAuthenticated && global.isAuthorized(capability).then((result)=>{
  //   console.log(result)
  // })
  
  // let isAuthed = (global.isAuthenticated)
  //   ? global.isAuthorized(capability)
  //   : true

    let isAuthed = global.isAuthenticated && global.isAuthorized(capability)

    console.log('***',isAuthed)
  return (
    <div>
      <h1>Auth Component</h1>
      <>
        {(global.isAuthenticated)
        ?<p>
          {`Welcome, ${global.isAuthenticated && global.curUser.username}`}👋 
          </p>
        :<p>Welcome</p>
        }
      </>
      <>
        {(isAuthed)
          ? children
          : <AuthFail /> 
        }
      </>
    </div>
  )
}

export default Auth;

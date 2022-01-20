import { useContext } from 'react'
import { UserContext } from '../contexts/authContext'
import AuthFail from './AuthFail'

const Auth = ({children, capability}) => {
  const global = useContext(UserContext);
  // check their capabilities
  console.log('AUTHORIZED?',global.isAuthorized(capability))
  return (
    <div>
      <h1>Auth Component</h1>
      <hr />
      <>
        {(global.isAuthenticated && global.isAuthorized(capability))
          ? children
          : <AuthFail /> 
        }
      </>
    </div>
  )
}

export default Auth;

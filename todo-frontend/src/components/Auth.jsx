import { useContext } from 'react'
import { UserContext } from '../contexts/authContext'
// import AuthFail from './AuthFail'

const Auth = ({children, capability, roleOf}) => {

  const global = useContext(UserContext);
  let hasFailed = global.hasFailed
  let isAuthed = global.isAuthenticated && global.isAuthorized(capability)
  let hasRole = global.hasRole(roleOf)
  
  return (
    <div>
        {(isAuthed && hasRole)
          ? <>
              <h1>Hello {global.curUser.username} 👋 </h1>
              {children}
            </>
          :null
        }
    </div>
  )
}

export default Auth;

import { useContext } from 'react'
import { UserContext } from '../contexts/authContext'
// import AuthFail from './AuthFail'

const Auth = ({children, capability}) => {
  const global = useContext(UserContext);

    let isAuthed = global.isAuthenticated && global.isAuthorized(capability)

  return (
    <div>
        {(isAuthed)
          ? <>
              <h1>Hello {global.curUser.username} 👋 </h1>
              {children}
            </>
          : null 
        }
    </div>
  )
}

export default Auth;

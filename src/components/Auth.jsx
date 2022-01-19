
import AuthFail from './AuthFail'

const Auth = (props) => {
  // useContext <--- UserContext
  // check globals if authed
  // is the user authenticated and authorized? render children : null
 
  // check their capabilities
  const isAuthenticated = true
  const isAuthorized = false

  return (
    <div>
      <h1>Auth Component</h1>
      <>
        {(isAuthenticated && isAuthorized)
          ? props.children
          : <AuthFail /> 
        }
      </>
    </div>
  )
}

export default Auth;

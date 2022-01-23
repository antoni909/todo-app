
import { useState, useContext } from 'react'
import { UserContext } from '../contexts/authContext'
import useStyles from '../hooks/useStyles'

const Login = () => {
  const defaults = {username:'',password:''}
  const global = useContext(UserContext);
  const classes = useStyles()

  const [target, setTarget] = useState(defaults)
  
  function handleSubmit(e){
    e.preventDefault()
    setTarget({
      ...target, 
      username: e.target.username.value, 
      password: e.target.password.value}
    )
    global.login(target.username, target.password)
    setTarget({...defaults})
  }
 
  return (
    <div>
      {
        global.isAuthenticated
        ?<>
          <h1>Logout Component</h1>
          <button
            className={classes.button} 
            onClick={()=> global.logout()}
            type="submit">
          Logout
          </button>
         </>
        :<>
            <h1>Login Component</h1>
            <form 
              onSubmit={handleSubmit}
            >
              <label>
                Username
                <input
                  name="username"
                  type="text"
                  // value={target.username}
                  onChange={(e)=> setTarget({...target,[e.target.name]: e.target.value})}
                />
              </label>
              <label>
                Password 
                <input
                  name="password"
                  type="password"
                  // value={target.password}
                  onChange={(e)=> setTarget({...target,[e.target.name]: e.target.value})}
                />
              </label>
              <button 
                className={classes.button} 
                type="submit"
              >Login</button>
            </form>
         </>
      }
    </div>
  )
}

export default Login;

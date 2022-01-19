// import useForm from '../../src/hooks/form'
import { useState } from 'react'

const Login = () => {
  // display login form or logout button if logged in
  const defaults = {username:'',password:''}
  const [target, setTarget] = useState(defaults)
  
  function handleSubmit(e){
    e.preventDefault()
    console.log(e.form)
    //grab login function and pass args
    // login(target.username, target.password)
    setTarget({...defaults})
    
  }

  const isAuthenticated = false
 
  return (
    <div>
      {
        isAuthenticated
        ?<>
          <button 
            onClick={()=>(console.log('run global.logout()'))}
            type="submit">
          Logout
          </button>
         </>
        :<>
            <h1>Login Component</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Email or username
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
              <button type="submit">Login</button>
            </form>
          </>
      }

    </div>
  )
}

export default Login;

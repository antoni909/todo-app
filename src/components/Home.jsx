import UserProvider from "../contexts/authContext";
import Auth from "./Auth";
import Login from "./Login";
import Main from "./Main";

const Home = () => {
  return(
    <div>
      <h1>Home Component</h1>
      <p>Hold Basic States when user is Logged in and Logout Button</p>
      <p>Render the login form when logged out</p>

      <UserProvider>
        
        <Login />

        <Auth capability='administrator'>
          <Main />
        </Auth>

      </UserProvider>
    </div>
  )
}
export default Home;

import UserProvider from "../contexts/authContext";
import useStyles from "../hooks/useStyles";
import Container from '@mui/material/Container';

import Auth from "./Auth";
import Login from "./Login";
import Main from "./Main";

const Home = () => {
  const classes = useStyles()
  return(
    <div>    
      <UserProvider>
      <h1>Home Component</h1>
        
      <Container
        align="center" 
        className={classes.cardRoot}
        maxWidth="lg"
      >
          <Login />
          <br />
          <hr />
          <Auth capability='create' roleOf='writer'>
            <Main />
          </Auth>
          <Auth capability='update' roleOf='editor'>
            <Main />
          </Auth>
          <Auth capability='delete' roleOf='admin'>
            <Main />
          </Auth>
          
      </Container>

      </UserProvider>
    </div>
  )
}
export default Home;

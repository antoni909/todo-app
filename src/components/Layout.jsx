import {makeStyles} from '@material-ui/core'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@material-ui/core/Typography'
import { withThemeCreator } from '@material-ui/styles';

// each obj is a 'class' that can be used
const useStyles = makeStyles((theme)=> {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      borderRadius: 10,
      boxShadow: '20px 20px 5px 2px rgba(30, 203, 243, .3)',
    },
    button: {
      fontSize: 15,
      backgroundColor: 'pink',
      '&:hover':{
        backgroundColor: 'violet'
      }
    },
    appbar: {
      width: '100%', 
    },
    toolbar: theme.mixins.toolbar,
    logoName: {
      flexGrow: 1,
    }
  }
})

const Layout = ({children}) => {

  const classes = useStyles()

  return (
    <div>
      <AppBar
        className={classes.appbar}
        elevation="0"
      >
        <Toolbar>
          <Typography className={classes.logoName}>
            Todo App
          </Typography>
          <Typography>
            Some User
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>

    </div>
  )
}

export default Layout;

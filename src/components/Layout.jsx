import { makeStyles } from '@material-ui/core'
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@material-ui/core/Typography'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { HomeRounded, AssignmentInd } from '@mui/icons-material';

const drawerWidth = 240
// function that returns an obj using theme arg
const useStyles = makeStyles((theme)=> {
  return {
    active: {
      backgroundColor: '#f9f9f9',
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`, 
    },
    button: {
      fontSize: 15,
      backgroundColor: 'pink',
      '&:hover':{
        backgroundColor: 'violet'
      }
    },
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    logoName: {
      flexGrow: 1,
    },
    page: {
      background: '#f9f9f9',
      width: '100%',
      borderRadius: 10,
      boxShadow: '20px 20px 5px 2px rgba(30, 203, 243, .3)',
    },
    root : {
      display: 'flex',
    },
    title: {
      padding: theme.spacing(2)
    },
    toolbar: theme.mixins.toolbar,
  }
})

const Layout = ({children}) => {

  const classes = useStyles()

  const menuList = [
    {
      text: 'Home',
      icon: <HomeRounded color="secondary"/>,
      path: '/'
    },
    {
      text: 'About',
      icon: <AssignmentInd color="secondary"/>,
      path: '/about'
    },
  ]

  return (
    <div className={classes.root}>

      <AppBar
        className={classes.appbar}
        elevation={0}
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

      <Drawer
        className={classes.drawer}
        classes={{paper: classes.drawerPaper}}
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography 
            className={classes.title}
            variant="h5"
          >
            Todo App
          </Typography>
        </div>

        <List>
          {menuList.map(item => (
            <ListItem
              button 
              key={item.text}
            >
              <ListItemText primary={item.text} />
              <ListItemIcon>{item.icon}</ListItemIcon>
            </ListItem>  
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>

    </div>
  )
}

export default Layout;

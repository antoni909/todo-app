import { Link, Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'
import Drawer from '@mui/material/Drawer';
import Typography from '@material-ui/core/Typography'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { HomeRounded, FormatListNumbered, ErrorOutline } from '@mui/icons-material';

const drawerWidth = 260
// function that returns an obj using theme arg
const useStyles = makeStyles((theme)=> {
  return {
    active: {
      backgroundColor: '#f9f9f9',
    },
    button: {
      fontSize: 15,
      borderRadius: 10,
      boxShadow: '5px 5px 2.5px 2px rgba(30, 203, 243, .3)',
      backgroundColor: 'white',
      '&:hover':{
        backgroundColor: '#f11f11f11'
      },
      marginTop: '10px', 
    },
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    page: {
      background: '#f11f11f11',
      width: '100%',
      borderRadius: 10,
      boxShadow: '5px 5px 2.5px 2px rgba(30, 203, 243, .3)',
    },
    root : {
      display: 'flex',
    },
    title: {
      padding: theme.spacing(3)
    },
    // toolbar: theme.mixins.toolbar,
  }
})

const Layout = ({children}) => {

  const classes = useStyles()
  // look into MenuItem for rendering Link components
  // https://mui.com/components/menus/
  // https://stackoverflow.com/questions/37669391/how-to-get-rid-of-underline-for-link-component-of-react-router?rq=1
  const menuList = [
    {
      text: 'Home',
      icon: <HomeRounded color="secondary"/>,
      path: <Link style={{ textDecoration: 'none' }} to="/">Home</Link>,
    },
    {
      text: 'Main',
      icon: <FormatListNumbered color="secondary"/>,
      path: <Link style={{ textDecoration: 'none' }} to="/todos">Todos</Link>,
    },
    {
      text: 'Settings',
      icon: <FormatListNumbered color="secondary"/>,
      path: <Link style={{ textDecoration: 'none' }} to="/settings">Settings</Link>,
    },
    {
      text: 'NoMatch',
      icon: <ErrorOutline color="secondary"/>,
      path: <Link style={{ textDecoration: 'none' }} to="/catchall">Nothing Here</Link>
    },
  ]

  return (
    <div className={classes.root}>
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
            Menu
          </Typography>
        </div>

        <List>
          {menuList.map(item => (
            <ListItem
              button
              className={classes.button}
              key={item.text}
            >
              {/* <ListItemText primary={item.text} /> */}
              <ListItemText primary={item.path}/>
              <ListItemIcon >{item.icon}</ListItemIcon>
              <br />
            </ListItem>  
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        {/* <div className={classes.toolbar}></div> */}
        {children}
        <br />
        <Outlet />
      </div>

    </div>
  )
}

export default Layout;

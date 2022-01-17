import { Link, Outlet } from 'react-router-dom';

import useStyles from '../hooks/useStyles'
import Drawer from '@mui/material/Drawer';
import Typography from '@material-ui/core/Typography'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { HomeRounded, FormatListNumbered, ErrorOutline } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';


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
      icon: <SettingsIcon color="secondary"/>,
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
        <div className={classes.toolbar}></div>
        {children}
        <br />
        <Outlet />
      </div>

    </div>
  )
}

export default Layout;

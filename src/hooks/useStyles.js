import { makeStyles } from '@material-ui/core'

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
    toolbar: theme.mixins.toolbar,
  }
})

export default useStyles;

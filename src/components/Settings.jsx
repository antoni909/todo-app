import useStyles from '../hooks/useStyles'
import {useLocalStorage} from '../hooks/localStorage'

import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';

const Settings = () => {

  const [defaults, setDefaults] = useLocalStorage('defaults',{completedTodos: false, totalTodos:3})

  const classes = useStyles()

  return(
      <Container 
          maxWidth="md"
          align="center"
        >
          <h1>Adjust Settings</h1>
          <Card 
            boolean="true"
            className={classes.card}
          >
            <CardHeader title='Show Completed'></CardHeader>
            <CardContent>
              dont show
              <Switch 
                onChange={()=> setDefaults({...defaults,completedTodos: !defaults.completedTodos})} 
                value={true} variant="contained"
                />show
            </CardContent>
          </Card>
          <Card 
            boolean="true"
            className={classes.card}
            >
            <CardHeader title='Items per page'></CardHeader>
              <Button
                className={classes.button}
                onClick={() => setDefaults({...defaults,totalTodos: defaults.totalTodos - 1})}
                size="small"
                variant="outlined"
              > - </Button>
              <span style={{margin: '20px'}}>{defaults.totalTodos}</span>
              <Button
                className={classes.button}
                onClick={() => setDefaults({...defaults,totalTodos: defaults.totalTodos + 1})}
                size="small"
                variant="outlined"
              > + </Button>
          </Card>
      </Container>
  )
}
export default Settings;

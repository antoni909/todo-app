import { useState,useEffect } from 'react'

import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';

const Settings = () => {

  const getLocal = () => {
    const saved = localStorage.getItem('defaults')
    const savedVal = JSON.parse(saved)
    console.log(savedVal)
    return savedVal || {completedTodos: false, totalTodos:3}
  }

  const [defaults, setDefaults] = useState(getLocal)

  useEffect(()=>{
    localStorage.setItem('defaults', JSON.stringify(defaults))
  },[defaults])

  return(
      <Container 
          maxWidth="md"
          align="center"

        >
          <h1>Adjust Settings</h1>
          <Card boolean="true">
            <CardHeader title='Show Completed'></CardHeader>
            <CardContent>
              dont show
              <Switch 
                onChange={()=> setDefaults({...defaults,completedTodos: !defaults.completedTodos})} 
                value={true} variant="contained"
                />show
            </CardContent>
          </Card>
          <Card boolean="true">
            <CardHeader title='Items per page'></CardHeader>
              <Button
                // className={classes.button}
                onClick={() => setDefaults({...defaults,totalTodos: defaults.totalTodos - 1})}
              > - </Button>
              {defaults.totalTodos}
              <Button
                onClick={() => setDefaults({...defaults,totalTodos: defaults.totalTodos + 1})}
              > + </Button>
          </Card>
      </Container>
  )
}
export default Settings;

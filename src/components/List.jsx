import React, { useContext } from 'react';
import useStyles from '../hooks/useStyles';
import { SettingsContext } from '../contexts/settings';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';

const List = () => {
  
  const classes = useStyles()
  const {settings, setSettings} = useContext(SettingsContext) 
  const startIdx = (settings.pageNumber - 1) * settings.maxDisplay
  const sliceList = settings.list.slice(startIdx, startIdx + settings.maxDisplay);
  
  function deleteItem(id){
    const filtered = settings.list.filter( item => item.id !== id )
    console.log('new items: ',filtered)
    setSettings({
      ...settings, 
      list: [...filtered]
    })
  }

  function toggleComplete(id){
    const items = settings.list.map( item => {
      if( item.id === id )item.complete = !item.complete
      return item
    })
    setSettings({...settings, items})
  }

  return (
    <div>
      {sliceList.map((item,idx) => (
            <Container
              className={classes.cardRoot}
              key={idx}
              maxWidth="md"
              // align="center"
            >
              <Card 
                boolean="true"
              >
                <button 
                  className={classes.cardDeleteButton}
                  onClick={()=>deleteItem(item.id)}
                  size="small"
                  type="button"
                  variant="outlined"
                >x</button>
                <p>person: {item.assignee}</p>
                <p>todo: {item.text}</p>
                <p onClick={()=>toggleComplete(item.id)}></p>
                <p>completed? {item.complete.toString()}</p>
                <p>difficulty: {item.difficulty}</p>
              </Card>
              <br />
            </Container>
      ))}
    </div>
  )
//end
}

export default List;

  /* 
    for pages/components
    <Grid container>
      <Grid item xs={12} md={6} lg={4} >
        <Paper> {note} </Paper>
      </Grid>
    </Grid>
  */

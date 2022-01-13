import React, { useContext } from 'react'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { SettingsContext } from '../contexts/settings';

const List = () => {

  const {settings, setSettings} = useContext(SettingsContext)

  function toggleComplete(id){

    const items = settings.list.map( item => {
      if( item.id === id )item.complete = !item.complete
      return item
    })
    setSettings({
      ...settings, 
      items
    })
  }

  const startIdx = (settings.page - 1)*settings.maxDisplay
  
  const sliceList = settings.list.slice(startIdx, startIdx+ settings.maxDisplay);
  return (
    <>
      {

        // setting.list.map((item,idx) => (
        sliceList.map((item,idx) => (
        <Container 
          key={idx}
          maxWidth="md"
          align="center"
        >
          <Card 
            boolean="true"
          >
              <p>person: {item.assignee}</p>
              <p>todo: {item.text}</p>
              <p onClick={()=>toggleComplete(item.id)}>
                completed? {item.complete.toString()}
              </p>
              <p>difficulty: {item.difficulty}</p>
          </Card>
          <br />
        </Container>
      ))}
    </>
  )
}

export default List;

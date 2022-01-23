import React, { useContext, useEffect } from 'react'
import { SettingsContext } from '../contexts/settings';
import useForm from '../hooks/form';
import useStyles from '../hooks/useStyles';
import { v4 as uuidv4 } from 'uuid';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import List from './List'
import Paginate from '../components/Pagination'

const Todo = () => {
  const classes = useStyles()
  const {settings, setSettings,} = useContext(SettingsContext)
  const { handleChange, handleSubmit } = useForm(addItem)

  function addItem(item){
    item.id = uuidv4()
    item.complete = false
    setSettings({
      ...settings,
      list: [...settings.list,item],
    })
  }

  useEffect(()=> {
    let incompleteCount = settings.list.filter(item => !item.complete).length
    setSettings({...settings,incomplete: incompleteCount})
    document.title = `Todo List: ${settings.incomplete}`
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[settings.list])

  return (
    <Container
    className={classes.cardRoot}
    >
      <Paper
        className={classes.paper}
      >
        <form onSubmit={handleSubmit}>
          <h2>Todo's pending: {settings.incomplete}</h2>
          
          <label
            className={classes.formInputs}
          >
            <span>Todo </span>
            <input 
              onChange={handleChange}
              name="text"
              type="text"
              placeholder="Item Details"
            />
          </label>
          <label
            className={classes.formInputs}
          >
            <span>Assigned </span>
            <input 
              onChange={handleChange}
              name="assignee"
              type="text"
              placeholder="Assignee Name" 
            />
          </label>
          <label
            className={classes.formInputs}
          >
          <span>Difficulty</span>
            <input 
              onChange={handleChange}
              name="difficulty"
              defaultValue="3"
              type="range"
              step="1"
              min="1"
              max="5"
            />
          </label>
          <label>
            <button 
              className={classes.button}
              type="submit">Add Item</button>
          </label>
        </form>
      </Paper>
        <br></br>
        <List />
        <br></br>
        <Paginate />
    </Container>
  )
}

export default Todo;

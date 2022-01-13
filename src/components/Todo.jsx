import React, { useContext, useEffect } from 'react'
import { SettingsContext } from '../contexts/settings';

import List from './List'
import useForm from '../hooks/form'

import { v4 as uuidv4 } from 'uuid';

const Todo = () => {

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

  function deleteItem(id){
    const items = settings.list( item => item.id !== id )
    setSettings({
      ...settings, 
      list: [...settings.list,items]
    })
  }

  useEffect(()=> {

    let incompleteCount = settings.list.filter(item => !item.complete).length
    setSettings({...settings,incompleteCount})
    document.title = `Todo List: ${settings.incomplete}`
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[settings.list])

  return (
    <>
        <header>
          <h1>
            Todo List
          </h1>
          <h2>
            {settings.incomplete} items pending
          </h2>
        </header>
        <>theme is: {settings.theme}</>
      <hr />
      <form onSubmit={handleSubmit}>
        <h2>Add Todo Item</h2>
        
        <label>
          <span>Todo Item</span>
          <input 
            onChange={handleChange}
            name="text"
            type="text"
            placeholder="Item Details"
          />
        </label>
        <label>
          <span>Assigned To</span>
          <input 
            onChange={handleChange}
            name="assignee"
            type="text"
            placeholder="Assignee Name" 
          />
        </label>
        <label>
        <span>Difficulty</span>
          <input 
            onChange={handleChange}
            name="difficulty"
            defaultValue={3}
            type="range"
            min="1"
            max="5"
          />
        </label>
        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>
      <hr />
      <List />
    </>
  )
}

export default Todo;

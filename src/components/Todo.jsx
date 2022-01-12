import React, { useEffect, useState } from 'react'
import useForm from '../hooks/form'
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  
  const [list,setList] = useState([])
  const [incomplete, setIncomplete] = useState([])
  const { handleChange, handleSubmit } = useForm(addItem)
  
  function addItem(item){
    console.log('**addItem')
    item.id = uuidv4()
    item.complete = false
    console.log('...list',[...list])
    setList([...list,item])
    console.log('[...list,item]',[...list,item])
  }

  function deleteItem(id){
    const items = list.filter( item => item.id !== id )
    setList(items)
  }

  function toggleComplete(id){

    const items = list.map( item => {
      if( item.id === id )item.complete = !item.complete
      return item
    } )
    setList(items)
  }

  useEffect(()=>{
    let incompleteCount = list.filter(item =>!item.complete).length
    setIncomplete(incompleteCount)
    document.title = `Todo List: ${incomplete} `
  }, [list,incomplete])

  return (
    <>
      <header>
        <h1>
          Todo List
        </h1>
        <h2>
          {incomplete} items pending
        </h2>
      </header>
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
            defaultValue="3"
            type="range"
            min="1"
            max="5"
          />
        </label>
        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>
      {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><smal>Assigned to: {item.assignee}</smal>Difficulty: {item.difficulty}</p>
          <p></p>
          <div onClick={()=>toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
          </div>
          <hr />
        </div>
      ))}
    </>
  )
}

export default Todo;

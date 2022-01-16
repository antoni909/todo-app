import { useState,useEffect } from 'react'

import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

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
    <div>
      <h1>Update Your Settings:</h1>
      <div>
      <h2>Show Completed Todos</h2>
      dont show<Switch onChange={()=> setDefaults({...defaults,completedTodos: !defaults.completedTodos}) } value={true} variant="contained"/>show
      </div> 
      <div>
        number of todos per page
        <Button
          onClick={() => setDefaults({...defaults,totalTodos: defaults.totalTodos - 1})}
        > - </Button>
        {defaults.totalTodos}
        <Button
          onClick={() => setDefaults({...defaults,totalTodos: defaults.totalTodos + 1})}
        > + </Button>
      </div>
    </div>
  )
}
export default Settings;

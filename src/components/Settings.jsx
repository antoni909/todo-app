import { useContext, useState } from 'react'
import { SettingsContext } from '../contexts/settings';

import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import {  } from '@mui/icons-material';

const Settings = () => {

  const {settings, setSettings} = useContext(SettingsContext)

  const info = {totalTodos: 0,showCompleted: false}
  const [updates, setUpdates] = useState(info)

  return(
    <div>
      <h1>Update Your Settings:</h1>
 
      <div>Show Completed Todos:
      <div>
        dont show<Switch onChange={()=> setUpdates({...updates,showCompleted: !updates.showCompleted}) } value={true} variant="contained"/>show
      </div>

      </div> 
      <p>
        number of todos per page
        <Button
          onClick={() => setUpdates({...updates,totalTodos: updates.totalTodos - 1})}
        > - </Button>
        {updates.totalTodos}
        <Button
          onClick={() => setUpdates({...updates,totalTodos: updates.totalTodos + 1})}
        > + </Button>
      </p>
      <p>
        Default sort field - assignee //string
      </p>
      <p>
        save the above updated settings to local storage
          - form submit hanleUpdate
      </p>
    </div>
  )
}
export default Settings;

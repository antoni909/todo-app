import React, { useContext } from 'react'
import { SettingsContext } from '../contexts/settings';
import Button from '@mui/material/Button';

const Paginate = () => {

  const {settings, setSettings} = useContext(SettingsContext)

  const totalPages = Math.ceil(settings.list.length/settings.maxDisplay)
  const pages = [...Array(totalPages).keys()].map(num => num +1)

  return(
    <>
      <div>
        { pages? 
          pages.map((num,idx) => (      
            <Button
              variant="primary"
              key={idx}
              onClick={() => setSettings({...settings,pageNumber: num})}
              >
                {num}
            </Button>
          ))
          : null
        }
      </div>
    </>
  )
}

export default Paginate

import React, { useContext } from 'react'
import { SettingsContext } from '../contexts/settings';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';

const Paginate = () => {

  const {settings, setSettings} = useContext(SettingsContext)

  const totalPages = Math.ceil(settings.list.length/settings.maxDisplay)
  const pages = [...Array(totalPages).keys()].map(num => num +1)

  const handleClick = num => {
    setSettings({
      ...settings,
      pageNumber: num
    })

  }

  return(
    <>
      {/* <div>
        { pages? 
          pages.map((num,idx) => (      
            <Pagination
              count={totalPages}
              onClick={() => handleClick(num)}
              shape="rounded"
              variant="outlined"
              color="primary"
              >
            </Pagination>
          ))
          : null
        }
      </div> */}
      <div>
        { pages? 
          pages.map((num,idx) => (      
            <Button
              key={idx}
              onClick={() => handleClick(num)}
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

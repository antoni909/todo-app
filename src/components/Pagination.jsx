import React, { useContext } from 'react'
import { SettingsContext } from '../contexts/settings';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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

      {/* <Stack spacing={2}>
        <Pagination count={5} color='primary' />
      </Stack> */}

      <div>
      { pages? 
        pages.map((num,idx) => (
          <button
            key={idx}
            onClick={() => handleClick(num)}
          >{num}</button>
        ))
        : null
      }
    </div>
    </>
  )
}

export default Paginate

import React, { useContext } from 'react'
import { SettingsContext } from '../contexts/settings';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

const Paginate = () => {

  const {settings, setSettings} = useContext(SettingsContext)

  const totalPages = settings.list && settings.list.length

  const pages = [...Array(totalPages).keys()].map(num => num +1)

  const handleClick = num => {
    setSettings({
      ...settings,
      page: num
    })
  }

  return(
    <>
      Pagination
      {/* <Stack spacing={2}>
        <Pagination count={5} color='primary' />
      </Stack> */}
      <div>
      { pages.map(num => (
        <button
          key={num}
          onClick={() => handleClick(num)}
        >{num}</button>
      )) }
    </div>
    </>
  )
}

export default Paginate

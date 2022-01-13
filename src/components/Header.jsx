import React, { useContext } from 'react'
import { SettingsContext } from '../contexts/settings';

const Header = () => {
  const {settings} = useContext(SettingsContext)

  return(

    <header>
    <h1>
      Todo List
    </h1>
    <h2>
      {/* items pending {settings.incomplete} */}
    </h2>
  </header>

  )

}

export default Header;

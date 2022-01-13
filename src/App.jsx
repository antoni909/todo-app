import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Todo from './components/Todo'
import { SettingsContext } from './contexts/settings'

function App() {

  const [settings, setSettings] = useState({
    list: [],
    displayItems: false,
    maxDisplay: 3,
    page: 1,
    incomplete: [],
    sort: 0,
    theme: 'dark'
  })

  return (
    <SettingsContext.Provider value={{settings, setSettings}} >
      <Container 
        maxWidth="lg"
        align="center"
      >
        <Todo />
      </Container>
    </SettingsContext.Provider>

  );
}

export default App;

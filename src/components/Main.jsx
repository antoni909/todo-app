import React, { useState } from 'react'
import { SettingsContext } from '../contexts/settings'
import Container from '@mui/material/Container';

import Header from './Header'
import Todo from './Todo'
// import Settings from './Settings'
import Footer from './Footer'
// import Layout from './Layout'

function Main() {

  const [settings, setSettings] = useState({
    list: [],
    displayItems: false,
    maxDisplay: 3,
    pageNumber: 1,
    incomplete: [],
    sort: 0,
    theme: 'light'
  })

  // function in your context that saves user preferences (for the above) to local storage.
  // need to stringify state prior to saving to local storage, and parse it when retrieve it.

  return (
            <SettingsContext.Provider value={{settings, setSettings}} >

                    <Container maxWidth="lg"align="center">
                      <Header />
                      <Todo />
                      <Footer />
                    </Container>

            </SettingsContext.Provider>
  );
}

export default Main;

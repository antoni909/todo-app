import React, { useState } from 'react'
import { SettingsContext } from './contexts/settings'
import Container from '@mui/material/Container';

import Header from './components/Header'
import Todo from './components/Todo'
import Footer from './components/Footer'
import Layout from './components/Layout'

function App() {

  const [settings, setSettings] = useState({
    list: [],
    displayItems: false,
    maxDisplay: 3,
    pageNumber: 1,
    incomplete: [],
    sort: 0,
    theme: 'light'
  })

  /* 
    for pages/components
    <Grid container>
      <Grid item xs={12} md={6} lg={4} >
        <Paper> {note} </Paper>
      </Grid>
    </Grid>
  */
  return (
    <SettingsContext.Provider value={{settings, setSettings}} >

        <Layout>
            <Container maxWidth="lg"align="center">
              <Header />
              <Todo />
              <Footer />
            </Container>
        </Layout>

    </SettingsContext.Provider>
  );
}

export default App;

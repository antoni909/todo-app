import { useContext } from 'react'
import { SettingsContext } from '../contexts/settings'
import { UserContext } from '../contexts/authContext'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useAPI } from '../hooks/useAPI'
import Container from '@mui/material/Container';

import Header from './Header'
import Todo from './Todo'
import Footer from './Footer'

function Main() {
  // const global = useContext(UserContext);
  const [settings, setSettings] = useLocalStorage('defaults',{
    completedTodos: false, 
    maxDisplay:3,
    pageNumber: 1,
    list: [],
    incomplete: [],
    sort: 0,
    theme: 'light'
  })

  return (
            <SettingsContext.Provider 
              value={{settings, setSettings}} 
            >
              <Container maxWidth="lg"align="center">
                <Header />
                <Todo />
                <Footer />
              </Container>
            </SettingsContext.Provider>
  );
}

export default Main;

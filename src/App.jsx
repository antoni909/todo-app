import { Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Layout from './components/Layout'
import Settings from './components/Settings'
import SimpleTodo from './components/SimpleTodo'

const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="todos" element={<SimpleTodo/>} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
    )
}

export default App;

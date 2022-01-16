import { Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import Main from './components/Main'
import NoMatch from './components/NoMatch'
import Layout from './components/Layout'
import Settings from './components/Settings'

const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="todos" element={<Main />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
    )
}

export default App;

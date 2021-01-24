import React from 'react'
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'

import { CssBaseline } from '@material-ui/core'
import Navbar from '../components/Navbar'
import Home from '../components/pages/Home'
import Research from '../components/pages/Research'
function App() {




  return (
    <Router>
      <div style={{background:'gray'}}>
        <Navbar />
        <Switch>
          <Route exact path='/research' component={Research} />
          <Route exact path='/' component={Home} />
        </Switch>
        <div style={{background: 'gray', height: '3000px'}}>
          
        </div>
        <CssBaseline />
      </div>

    </Router>
  )
}

export default App

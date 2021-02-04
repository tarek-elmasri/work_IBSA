import React from 'react'
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'

import { CssBaseline } from '@material-ui/core'
import Navbar from '../components/Navbar'
import Home from '../components/pages/Home'
import Research from '../components/pages/Research'
import Footer from '../components/Footer'
function App() {




  return (
    <Router>
      <div style={{background:'white'}}>
        <Navbar />
        <Switch>
          <Route exact path='/research' component={Research} />
          <Route exact path='/' component={Home} />
        </Switch>
        <Footer />
        <CssBaseline />
      </div>

    </Router>
  )
}

export default App

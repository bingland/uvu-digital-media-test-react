import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Frame174109 from './views/frame174109'
import Frame29124 from './views/frame29124'

const RootComponent = () => {
  return (
    <Router>
      <div>
        <Route exact component={Frame174109} path="/" />
        <Route exact component={Frame29124} path="/Frame29124" />
      </div>
    </Router>
  )
}

ReactDOM.render(<RootComponent />, document.getElementById('app'))

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import './codesandbox/style.module.css'
import Home from './views/home'
import index from './views/index'
import Frame174109 from './codesandbox/views/frame174109'
import Frame29124 from './codesandbox/views/frame29124'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={index} path="/" />
        <Route exact component={Frame174109} path="/frame1" />
        <Route exact component={Frame29124} path="/frame2" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

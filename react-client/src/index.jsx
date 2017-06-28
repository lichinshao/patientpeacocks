import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Home from './components/homepage.jsx';
import Login from './components/login.jsx';
import signUp from './components/signUp.jsx';
import userPage from './components/userPage.jsx';
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
        <Router history={hashHistory}>
          <Route path='/homePage' component={Home} />
          <Route path='/login' component={Login} />
          <Route path = '/signup' component = {signUp}/>
          <Route path ='/userpage' component = {userPage}/>
        </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
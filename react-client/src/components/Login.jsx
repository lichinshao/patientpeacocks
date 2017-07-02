import React from 'react';
import { Redirect, Link } from 'react-router'
import $ from 'jquery';

import { Router, Switch, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToUser: false
    }
    this.UserPass = {};
    this.loginRequest = this.loginRequest.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.UserPass = {
      name: this.userName.value,
      password: this.password.value
    }
    this.loginRequest();
  }

  loginRequest() {
    $.ajax({
      url: '/login',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(this.UserPass),
      success: () => {
        window.username = this.UserPass.name;
        console.log('login was successful');
        browserHistory.push('/');
        // this.setState({
        //   redirectToUser: true
        // })
        // if(this.state.redirectToUser) {
          // this.props.router.push('/userpage')
        // }
      },
      error: function (err) {
        console.log('login failed', err);
        alert('invalid username or password.');
      }
    })
  }

  render() {
    return (
      <div className = 'loginPage'>
        <form method="POST" onSubmit={this.handleSubmit.bind(this)}>
          <h2>Login</h2>
          <div>
            <label>
              Username:
              <input type="text" ref={(input) => this.userName = input} />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="password" ref={(input) => this.password = input} />
            </label>
          </div>
          <div>
            <input type="submit"  value="Login!" />
          </div>
        </form>
        <Link to='/signup'>Click here to create an account!</Link><br></br>
        <Link to='/'>Back to homepage</Link>
      </div>
    );
  }
}

export default Login;
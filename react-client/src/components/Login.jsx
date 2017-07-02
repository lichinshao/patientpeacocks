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
          <div className="login-text">
            Login
          </div>
          <div className="loginpg-text">
    
              Username: <br></br>
              <input type="text" ref={(input) => this.userName = input} />
            
          </div>
          <div className="loginpg-text">
           
              Password: <br></br>
              <input type="password" ref={(input) => this.password = input} />
           
          </div>
          <div className="login-button" >
            <input  type="submit"  className="log-button"  value="Login!" />
          </div>
        </form>
        <div className="links">
          <Link to='/signup'>Click here to create an account!</Link><br></br>
          <Link to='/'>Back to homepage</Link>
        </div>
      </div>
    );
  }
}

export default Login;





//style={buttonStyle}
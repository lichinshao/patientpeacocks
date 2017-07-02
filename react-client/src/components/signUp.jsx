import React, { Component } from 'react'
import $ from 'jquery';
import { Redirect, Link } from 'react-router'


class signUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      redirectToUser: false
    }
    this.UserPass = {};
    this.signUpRequest = this.signUpRequest.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.UserPass = {
      name: this.userName.value,
      password: this.password.value
    }
    this.signUpRequest();
  }

  signUpRequest() {
    $.ajax({
      url: '/register',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(this.UserPass),
      success: () => {
        window.username = this.UserPass.name;
        console.log('Signup was successful');
        this.setState({
          redirectToUser: true
        })
        if(this.state.redirectToUser) {
          this.props.router.push('/userpage')
        }
      },
      error: function (err) {
        console.log('Signup failed', err);
      }
    })
  }


  render() {
    return (
      <div className = 'signupPage'>
        <form method="POST" onSubmit={this.handleSubmit.bind(this)}>
          <div className="login-text">
            Sign Up
          </div>
          <div className="loginpg-text">
            Username: <br></br>
            <input type="text" ref={(input) => this.userName = input} /> 
          </div>
          <div className="loginpg-text">
            Password: <br></br>
            <input type="text" ref={(input) => this.password = input} />
          </div>
          <div className="login-button">
            <input type="submit" value="Signup!" className="log-button"/>
          </div>
        </form>
        <div className="links">
          <Link to='/login'>Click here if you have an account!</Link><br></br>
          <Link to='/'>Back to homepage</Link>
        </div>
      </div>
    );
  }
}

export default signUp;
import React from 'react';
import $ from 'jquery';

class signUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.UserPass = {};
  }

  handleSubmit(event){
    event.preventDefault();
    this.UserPass = {
      body: {
      name: this.userName.value,
      password: this.password.value
      }
    }
    this.signUpRequest();
  
  }

  signUpRequest() {
    $.ajax({
      url: '/register',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(this.UserPass),
      success: function() {
        console.log('Signup was successful');
      },
      error: function(err) {
        console.log('Signup failed', err);
      }
    })
  }
  

  render() {
    return (
      <div>
        <form method = "POST" onSubmit={this.handleSubmit.bind(this)}>
          <h2>Sign Up</h2>
          <div>
            <label>
              Username:
              <input type="text" ref={(input) => this.userName = input} />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="text" ref={(input) => this.password = input} />
            </label>
          </div>
          <div>
            <input type="submit" value="Login"/>>
          </div>
        </form>
      </div>
    );
  }
}

export default signUp;
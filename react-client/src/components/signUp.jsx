import React from 'react';

class signUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <form method = "POST">
          <h2>Sign Up</h2>
          <div>
            <label>
              Username:
              <input id="username" type="text" name="username"/>>
            </label>
          </div>
          <div>
            <label>
              Password:
              <input id="password" type="password" name="password"/>>
            </label>
          </div>
          <div>
            <input type="submit" value="login"/>>
          </div>
        </form>
      </div>
    );
  }
}

export default signUp;
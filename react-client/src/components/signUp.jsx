import React from 'react';
import Button from 'react-bootstrap/lib/Button';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  reqSignUp () {

  }

  render () {
    return (
      <div>
        <Button bsStyle="info">SignUp/Login</Button>
      </div>
    )
  }
}

export default SignUp;
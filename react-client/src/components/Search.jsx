import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  reqEventful () {
    this.props.eventful();
  }

  reqMeetUP () {
    this.props.meetUp();
  }

  render () {
    return (
      <div>
      <ButtonToolbar>
        <Button bsStyle="info" bsSize="small" onClick = {this.reqEventful.bind(this)}>searchEventful</Button>
        <Button bsStyle="info" bsSize="small" onClick = {this.reqMeetUP.bind(this)}>searchMeetUp</Button>
        </ButtonToolbar>
      </div>
    );
  }




}

export default Search;
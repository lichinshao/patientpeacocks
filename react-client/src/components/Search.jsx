import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }


  reqEventful() {
    this.props.eventful();
  }

  reqMeetUP() {
    this.props.meetUp();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.changeLocation(this.input.value);
  }

  render() {
    return (
      <div>
        <ButtonToolbar className = "search">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              Location:
              <input type="text" placeholder="search by city..." ref={(input) => this.input = input} />
            </label>
            <input className="location-submit" type="submit" value="Submit" class="button"/>
          </form>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Search;
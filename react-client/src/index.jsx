import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Search from './components/Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  getEventful() {
    $.ajax({
      url: '/eventful',
      type: 'GET',
      success: (item) => {
        console.log('ajax was successful at get request from Eventful') 
      }
    })
  }

  getMeetup() {
    $.ajax({
      url: '/meetup',
      type: 'GET',
      success: (item) => {
        console.log('ajax was successful at get request from Meetup')
      }
    })
  }

  render () {
    return (
      <div>
        <h5>Event Planner</h5>
        <Search eventful = {this.getEventful.bind(this)} meetUp = {this.getMeetup.bind(this)}/>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));
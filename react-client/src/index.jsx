import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Search from './components/Search.jsx';
import Mount from './components/Mount.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsBar: [],
      loaded: false
    }
  }

  componentDidMount() {
    const appKey = 'app_key=CwcF9Lt3qkKh4gWB';

    $.ajax({
      method: "GET",
      url: 'http://api.eventful.com/json/events/search?' + appKey + '&l=san+francisco&date=future',
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      dataType: 'jsonp',
      success: (data) => {
        this.setState({eventsBar: data.events.event, loaded: true});

      },
      error: (err) => {
        console.log(err)
      }
    });
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
        {this.state.loaded ? <Mount events={this.state.eventsBar}/> : null}
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));
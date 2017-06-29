import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Button from 'react-bootstrap/lib/Button';
import CarouselPageUser from './CarouselUser.jsx';
import Search from './Search.jsx';
import SignUp from './signUp.jsx';
import SearchListUser from './searchListUser.jsx';
import { Component } from 'react';
// import Login from './components/Login.jsx'
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Mount from './Mount.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Router, Switch, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

class userPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsBar: [],
      loaded: false,
      location: 'san francisco'
    }
  }

  changeLocation(location) {
    this.setState({
      location: location
    })
  }

  getEventful(category) {
    $.ajax({
      url: '/eventful',
      data: JSON.stringify({
        location: this.state.location,
        topic: category
      }),
      type: 'POST',
      contentType: 'application/json',

      success: (item) => {
        console.log('ajax was successful at post request from Eventful');
        this.setState({
          eventsBar: item.slice(0, 5)
        })

        // console.log(this.state.location, this.state.eventsBar);
      },
      error: () => {
        console.log('ajax failed at post request from Eventful');
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

  render() {
    return (
      <div>
        <div className='titleContainer'>
          <PageHeader className='title'>Event Planner
            <small className='signup'>
              Lalalala Sandwich
              <Link to='/'>Logout</Link>
            </small>
          </PageHeader>
        </div>
        <div>
          <CarouselPageUser />
        </div>
        <br></br>
        <div>
          <Search eventful={this.getEventful.bind(this)} changeLocation ={this.changeLocation.bind(this)} meetUp={this.getMeetup.bind(this)} />
          <SearchListUser events={this.state.eventsBar} getEvents = {this.getEventful.bind(this)}/>
        </div>
      </div>
    );
  }
}
/* data: {
        location: 'san francisco',
        topic: 'music'
      },
      type: 'GET',
      dataType: 'jsonp',
*/

export default userPage;
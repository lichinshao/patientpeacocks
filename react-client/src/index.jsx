import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Button from 'react-bootstrap/lib/Button';
import CarouselPage from './components/Carousel.jsx';
import Search from './components/Search.jsx';
import SignUp from './components/signUp.jsx';
import SearchList from './components/searchList.jsx';
// import Login from './components/Login.jsx'
import PageHeader from 'react-bootstrap/lib/PageHeader';
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
      data: JSON.stringify({
        location: 'san francisco',
        topic: 'music'
      }),
      type: 'POST',
      contentType: 'application/json',
     
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

  render() {
    return (
      <div>
<<<<<<< HEAD
        <div className='titleContainer'>
          <PageHeader className='title'>Event Planner
            <small className='signup'>
              <SignUp />
            </small>
          </PageHeader>
        </div>
        <div>
          <CarouselPage />
        </div>
        <div>
          <Search eventful={this.getEventful.bind(this)} meetUp={this.getMeetup.bind(this)} />
        </div>
        <br></br>
        <div>
          <SearchList />
        </div>
=======
        <h5>Event Planner</h5>
        <Search eventful = {this.getEventful.bind(this)} meetUp = {this.getMeetup.bind(this)}/>
        {this.state.loaded ? <Mount events={this.state.eventsBar}/> : null}
>>>>>>> a2637d7dfb5f3b63c0fbee5b5625ddc0df138271
      </div>
    );
  }
}


<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById('app'));
=======
ReactDOM.render(<App/>, document.getElementById('app'));


/* data: {
        location: 'san francisco',
        topic: 'music'
      },
      type: 'GET',
      dataType: 'jsonp',
*/
>>>>>>> a2637d7dfb5f3b63c0fbee5b5625ddc0df138271

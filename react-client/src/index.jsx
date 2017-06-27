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
      loaded: false,
      location: 'san francisco'
    }
  }

  // componentDidMount() {
  //   const appKey = 'app_key=CwcF9Lt3qkKh4gWB';

  //   $.ajax({
  //     method: "GET",
  //     url: 'http://api.eventful.com/json/events/search?' + appKey + '&l=san+francisco&date=future',
  //     headers: {
  //       "Access-Control-Allow-Origin": "*"
  //     },
  //     dataType: 'jsonp',
  //     success: (data) => {
  //       this.setState({ eventsBar: data.events.event, loaded: true });

  //     },
  //     error: (err) => {
  //       console.log(err)
  //     }
  //   });
  // }
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
          eventsBar: item.slice(0,5)
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
              <SignUp />
            </small>
          </PageHeader>
        </div>
        <div>
          <CarouselPage />
        </div>
        <br></br>
        <div>
          <Search eventful={this.getEventful.bind(this)} changeLocation ={this.changeLocation.bind(this)} meetUp={this.getMeetup.bind(this)} />
          <SearchList events={this.state.eventsBar} getEvents = {this.getEventful.bind(this)}/>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));


/* data: {
        location: 'san francisco',
        topic: 'music'
      },
      type: 'GET',
      dataType: 'jsonp',
*/

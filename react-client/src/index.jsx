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
        <div>
          <Search eventful={this.getEventful.bind(this)} meetUp={this.getMeetup.bind(this)} />
        </div>
        <br></br>
        <div>
          <SearchList />
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
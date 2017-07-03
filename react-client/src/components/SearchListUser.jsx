import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import WelcomeNote from './WelcomeNote.jsx';
class SearchListUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tabList: ['music', 'food', 'arts', 'books', 'animals'],
      welcome: true
    }
  }

  reqEvents () {
    this.props.search();
  }

  searchValue(event) {
    console.log(event);
    this.props.getEvents(event);
    this.state.welcome = false;
  }

  render() {
    return (
      <div>
       <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={3} className='col3'>
                <Nav bsStyle="pills" className="category-tab" stacked >
                <NavItem  className="search-tab white" eventKey={'saved'} onSelect = {()=> {this.props.retrieveEvents()}} >Saved</NavItem>
                <NavItem  className="search-tab white" eventKey={'music' } onSelect = {this.searchValue.bind(this)} >Music</NavItem>
                <NavItem  className="search-tab white" eventKey={'food'} onSelect = {this.searchValue.bind(this) }>Food</NavItem>
                <NavItem  className="search-tab white" eventKey={'arts'} onSelect = {this.searchValue.bind(this)} >Arts</NavItem>
                <NavItem  className="search-tab white" eventKey={'books'} onSelect = {this.searchValue.bind(this)} >Books</NavItem>
                <NavItem  className="search-tab white" eventKey={'animals'} onSelect = {this.searchValue.bind(this)} >Animals</NavItem>
              </Nav>
            </Col>
            <Col sm={6} className = 'col9'>
              <Tab.Content animation>
              {this.props.events.map((event, index) => (
                  <div key={index}>

						        <h4 >{event.name}</h4>
                    <br/>
						        <h5 >{event.time}</h5>
						        <h5 >{event.location}</h5>
						        <h5 >{event.description}</h5>
                    <button onClick={ ()=> this.props.save(event) }>Save</button>
                    <br/>
                    <a href={ event.url } >{event.name}</a>
                    <br/>

					        </div>
              ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    )
  }
}

export default SearchListUser;
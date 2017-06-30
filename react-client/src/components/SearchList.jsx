import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tabList: ['music', 'food', 'arts', 'books', 'animals']
    }
  }

  reqEvents () {
    this.props.search();
  }

  searchValue(event) {
    this.props.getEvents(event);
  }

  render() {
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={4}>
              <Nav bsStyle="pills" stacked onSelect = {this.searchValue.bind(this)}> 
                <NavItem eventKey={'music'}>Music</NavItem>
                <NavItem eventKey={'food'}>Food</NavItem>
                <NavItem eventKey={'arts'}>Arts</NavItem>
                <NavItem eventKey={'books'}>Books</NavItem>
                <NavItem eventKey={'animals'}>Animals</NavItem>
              </Nav>
            </Col>
            <Col sm={8} >
              <Tab.Content animation>
              {this.props.events.map((event, index) => (
                  <div key={index}>
                    
						        <h4 >{event.name}</h4> 
                    <br/>
						        <h5 >{event.time}</h5>
						        <h5 >{event.location}</h5>
						        <h5 >{event.description}</h5>
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

export default SearchList;
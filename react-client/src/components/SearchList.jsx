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
    console.log(event);
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
                <Tab.Pane key = {index} eventKey={this.state.tabList[index]}>
                  <div className="mount-entry" key={event.id}>
						        <h4 className="mountTitle">{event.title}</h4> 
						        <h5 className="mountDate">{event.start_time}</h5>
						        <h5 className="mountCity">{event.city_name}</h5>
						        <h5 className="mountDescripton">{event.description}</h5>
					        </div>
                </Tab.Pane>
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
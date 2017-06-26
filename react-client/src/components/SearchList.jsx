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
    }
  }

  reqSignUp() {

  }

  render() {
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={4}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="first">Tab 1</NavItem>
                <NavItem eventKey="second">Tab 2</NavItem>
                <NavItem eventKey="three">Tab 3</NavItem>
                <NavItem eventKey="four">Tab 4</NavItem>
                <NavItem eventKey="five">Tab 5</NavItem>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first">Tab 1 content</Tab.Pane>
                <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
                <Tab.Pane eventKey="three">Tab 3 content</Tab.Pane>
                <Tab.Pane eventKey="four">Tab 4 content</Tab.Pane>
                <Tab.Pane eventKey="five">Tab 5 content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    )
  }
}

export default SearchList;
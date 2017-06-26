import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Carousel from 'react-bootstrap/lib/Carousel'

class CarouselPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      direction: null
    }
    this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, e) {
    var context = this;
    context.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    return (
      <Carousel className = 'carousel' activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect.bind(this)}>
        <Carousel.Item>
          <img width={500} height={300} alt="500x300" src="https://cdn.pixabay.com/photo/2014/03/05/19/23/dog-280332_960_720.jpg" />
          <Carousel.Caption>
            <h3>Puppy</h3>
            <p>Cute puppy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={500} height={300} alt="500x300" src="http://7r7m646bco73w5dhw1kfab26.wpengine.netdna-cdn.com/wp-content/uploads/2015/08/176.jpg" />
          <Carousel.Caption>
            <h3>2nd puppy</h3>
            <p>hi pupppy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={500} height={300} alt="500x300" src="https://www.aspca.org/sites/default/files/adoptable-dogs-your-local-shelter.jpg" />
          <Carousel.Caption>
            <h3>3rd puppy</h3>
            <p>another puppy</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default CarouselPage;
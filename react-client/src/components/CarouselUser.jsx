import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Carousel from 'react-bootstrap/lib/Carousel'

class CarouselPageUser extends React.Component {
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
          <img width={2000} height={2000} alt="2000x2000" src="https://voltcommerce.com/news/wp-content/uploads/2014/04/Coachella_Night_Pano_2-FINAL_Flat.jpg" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={2000} height={2000} alt="2000x2000" src="http://www.visitdenmark.com/sites/default/files/styles/block_ratio/public/vdk_images/Attractions-Activities-interest-accommodation-people-geo/Events/Sporting-events/color-run-credit-colorrun.dk.jpg?itok=udG3wZA3" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={2000} height={2000} alt="2000x2000" alt="300x1000" src="http://cdn.funcheap.com/wp-content/uploads/2014/07/fireworks21.jpg" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default CarouselPageUser;
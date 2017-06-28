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
          <img width={500} height={300} alt="500x300" src="http://orig01.deviantart.net/a688/f/2014/357/f/a/troll_head_by_imfanof-d8axvxn.png" />
          <Carousel.Caption>
            <h3>hehe</h3>
            <p>Cute puppy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={500} height={300} alt="500x300" src="http://orig01.deviantart.net/a688/f/2014/357/f/a/troll_head_by_imfanof-d8axvxn.png" />
          <Carousel.Caption>
            <h3>hehehe</h3>
            <p>hi pupppy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={500} height={300} alt="500x300" src="http://orig01.deviantart.net/a688/f/2014/357/f/a/troll_head_by_imfanof-d8axvxn.png" />
          <Carousel.Caption>
            <h3>hehehehe</h3>
            <p>another puppy</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default CarouselPageUser;
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
          <img width={2000} height={2000} alt="2000x2000" src="300x1000" src="http://www.essentialibiza.com/assets/img/ibiza-boat-party-tickets-images/oceanbeat-ibiza-boat-party-show-with-after-party-in-bora-bora-ibiza-1.jpg" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={2000} height={2000} alt="2000x2000" src="http://offspring.com/o/photos/2012.08.19%20(Sunset%20Strip%20Music%20Festival)/panorama_ssmf.jpg" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1500} height={0} alt="300x1000" src="http://www.essentialibiza.com/assets/img/ibiza-boat-party-tickets-images/oceanbeat-ibiza-boat-party-show-with-after-party-in-bora-bora-ibiza-1.jpg" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
    //TESTING WEB PACK
  }
}
export default CarouselPage;
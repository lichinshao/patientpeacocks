import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../react-client/src/components/Carousel.jsx';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Component: App', () => {
  const items = ['Learn react', 'rest', 'go out'];

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <Carousel/>
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
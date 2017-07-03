import React from 'react';
import ReactDOM from 'react-dom';
import homepage from '../react-client/src/components/homepage.jsx';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Component: App', () => {
  const items = ['Learn react', 'rest', 'go out'];

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <homepage/>
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
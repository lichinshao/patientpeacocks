import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../react-client/src/components/Search.jsx';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';


describe('Component: Search', () => {
  
  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <Search />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
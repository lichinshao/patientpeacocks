import React from 'react';
import ReactDOM from 'react-dom';
import searchListUser from '../react-client/src/components/SearchListUser.jsx';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Component: App', () => {
  const items = ['Learn react', 'rest', 'go out'];

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <searchListUser/>
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
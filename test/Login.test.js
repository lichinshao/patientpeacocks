import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../react-client/src/components/Login.jsx';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Component: App', () => {
  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <Login/>
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Should change redirect to User', () => {
  const redirect = Test.Utils.renderIntoDocument(<Login/>)
});
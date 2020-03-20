import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { BrowserRouter } from 'react-router-dom';
import Landing from './Landing';

describe('Landing Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected if not logged in', () => {
    const wrapper = shallow(<Landing />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
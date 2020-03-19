import React from 'react';
import ReactDOM from 'react-dom';
// import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json'
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });


});
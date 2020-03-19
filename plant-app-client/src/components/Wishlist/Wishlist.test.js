import React from 'react';
import ReactDOM from 'react-dom';
// import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json'
import Wishlist from './Wishlist';

describe('Wishlist Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Wishlist/>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });


});
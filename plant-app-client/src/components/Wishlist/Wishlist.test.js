import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Wishlist from './Wishlist';

describe('Wishlist Component', () => {

  const Context = React.createContext({ wishlist: [{cmn_name: 'Pothos', sci_name: 'Epipremnum aureum', photo: 'https://plant-app-images.s3.us-east-2.amazonaws.com/epipremnum-aureum.jpg', light: 'medium', pet_safe: 'no', water: 'low', size: 'tabletop', care_level: 'beginner'}]})

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Wishlist/>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a message with no plants when empty', () => {
    const wrapper = shallow(<Wishlist />);
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('renders a wishlisted plant', () => {
    const wrapper = shallow(
      <Context.Provider>
        <Wishlist />
      </Context.Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  })

});
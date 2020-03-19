import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Results from './Results';

describe('Results Component', () => {

  const Context = React.createContext({ plants: [{ cmn_name: 'Pothos', sci_name: 'Epipremnum aureum', photo: 'https://plant-app-images.s3.us-east-2.amazonaws.com/epipremnum-aureum.jpg', light: 'medium', pet_safe: 'no', water: 'low', size: 'tabletop', care_level: 'beginner'}] })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Results/>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a plant', () => {
    const wrapper = shallow(
      <Context.Provider>
        <Results />
      </Context.Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  })

});
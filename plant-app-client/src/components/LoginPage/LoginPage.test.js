import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoginPage from './LoginPage';
import LoginForm from '../LoginForm/LoginForm'

describe('Login Page Component', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
      <LoginPage />,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });

  it('renders Login Form', () => {
    const wrapper = shallow(
      <LoginPage>
        <LoginForm/>
      </LoginPage>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  })

})
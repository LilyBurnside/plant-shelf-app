import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Quiz from './Quiz';

describe('Quiz Component', () => {

  const Context = React.createContext({questions: [{ question: 'Sample Q', answer_1: 'answer1', answer_2: 'answer2', answer_3: 'answer3', answer_4: 'answer4' }]})

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Quiz/>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  
  it('renders a question', () => {
    const wrapper = shallow(
      <Context.Provider>
        <Quiz />
      </Context.Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot()
  })

});
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../Landing/Landing'
import QuizPage from '../Quiz/Quiz'
import ResultsPage from '../Results/Results'
import './App.css';

class App extends React.Component {

  render(){
    return (
      <main className='App main'>
        <Switch>
          <Route
            exact
            path={'/'}
            component={LandingPage}
          />
          <Route 
            path={'/quiz'}
            component={QuizPage}
          />
          <Route
            path={'/results'}
            component={ResultsPage}
          />
        </Switch>
      </main>
    );
  }
}

export default App;

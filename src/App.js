import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';
import ClassContainer from './classComponents/classContainer';
import FunctionContainer from './functionalComponents/functionContainer';
function App() {
  return (
    <div className="App">
        <Router >
        <Switch>
          <Route path='/' exact={true} component={ClassContainer}/>
          <Route path='/function' exact={true} component={FunctionContainer}/>
          </Switch> 
        </Router>
    </div>
  );
}

export default App;

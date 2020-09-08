import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import Projects from './pages/index';
import PageNotFound from './pages/404';
import Resume from './pages/resume';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Projects}/>
          <Route exact path="/resume" component={Resume}/>


          <Route exact path="/404" component={PageNotFound}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>
    </div>
  );
}



export default App;

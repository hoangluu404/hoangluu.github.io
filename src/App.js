import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Projects from './pages/index';
import PageNotFound from './pages/404';
import Resume from './pages/resume';
import Contacts from './pages/contacts';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/contacts" component={Contacts}/>
          <Route exact path="/404" component={PageNotFound}/>
          <Route exact path="/" component={Projects}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>
    </div>
  );
}



export default App;

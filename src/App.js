import React from 'react';
import { BrowserRouter as Router, Route, Switch } from
  'react-router-dom'

import Page1 from './pages/Page1'
import Header from './components/Header'



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Page1} />


      </Switch>
    </Router>
  );
}





export default App;

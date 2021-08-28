import React from 'react';
import { BrowserRouter as Router, Route, Switch } from
  'react-router-dom'
import Page2 from './pages/Page2'
import Page1 from './pages/Page1'
import Page3 from './pages/Page3'
import Header from './components/Header'



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Page1} />
        <Route exact path='/Page2' component={Page2} />
        <Route exact path='/Page3' component={Page3} />
      </Switch>
    </Router>
  );
}





export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from
  'react-router-dom'
import Page2 from './pages/Page2'
import Page1 from './pages/Page1'
import Page3 from './pages/Page3'
import Header from './components/Header'
import PageA from './pages/PageA';
import PageB from './pages/PageB';



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Page1} />
        <Route exact path='/Page2' component={Page2} />
        <Route exact path='/Page3' component={Page3} />
        <Route exact path='/PageA' component={PageA} />
        <Route exact path='/PageB' component={PageB} />
        <Route exact path='/PageA/:params' component={PageA} />
      </Switch>
    </Router>
  );
}





export default App;

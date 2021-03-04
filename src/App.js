import React, { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Users from './components/Users/Users';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return(
    <div>
      <Layout/> 
      <Router>
        <Switch>
          <Route exact path="/"><Users /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;




import React from "react";
import Layout from "./components/Layout/Layout";
import Users from "./components/Users/Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <Layout />
      <Router>
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

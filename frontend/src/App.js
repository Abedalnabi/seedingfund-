import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/navigation/index";
import BeforeSignUp from "./components/auth/signUp";
import login from "./components/auth/login";

const App = () => {
  return (
    <div className="App">
      <Navigation></Navigation>
      {/* <Route exact path="/" component={Navigation} /> */}
      <Route exact path="/Register" component={BeforeSignUp} />
      <Route exact path="/login" component={login} />
    </div>
  );
};

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/navigation/index";
import BeforeSignUp from "./components/auth/signUp";
import login from "./components/auth/login";
import AddFunding from "./components/addFunding";
import GetMyFunding from "./components/gettMyfunding/index";
import GetAllRequisites from "./components/getAllRequstes/index";

const App = () => {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Route exact path="/Register" component={BeforeSignUp} />
      <Route exact path="/home" component={BeforeSignUp} />
      <Route exact path="/" component={BeforeSignUp} />
      <Route exact path="/login" component={login} />
      <Route exact path="/addFunding" component={AddFunding} />
      <Route exact path="/myFunding" component={GetMyFunding} />
      <Route exact path="/allRequest" component={GetAllRequisites} />
    </div>
  );
};

export default App;

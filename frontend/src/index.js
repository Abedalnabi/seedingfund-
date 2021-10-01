import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// import provider
import { Provider } from "react-redux";
// import store
import store from "./reducers";

ReactDOM.render(
  // The provider will enable the child components to access the store
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

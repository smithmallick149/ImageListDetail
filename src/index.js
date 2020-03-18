import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./Components/App";
import Heading from "./Components/Heading";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import PersonDetail from "./Components/PersonDetail";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(
  createStore
);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <Heading />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/:name" component={PersonDetail} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

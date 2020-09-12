import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Signup from "./Signup";
import axios from "axios";
import { getCookie, signout } from "./utils/helpers";
import Forgot from "./Forgot";
import Activate from "./Activate";
import Reset from "./Reset";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
axios.interceptors.request.use((config) => {
  const token = getCookie("token");
  config.headers.Authorization = token;

  return config;
});

// null for success, and second parameter cllback for failure
axios.interceptors.response.use(null, (error) => {
  if(error.response.status === 401) {
    signout(() => {
      window.location.href = "/";
    });
  }
  return Promise.reject(error);
});

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup" exact component={Signup} />
          <Route path="/auth/password/forgot" exact component={Forgot} />
          <Route path="/auth/activate/:token" exact component={Activate} />
          <Route path="/auth/password/reset/:token" exact component={Reset} />
          <Route path="/">
            <Header />
            <Home />
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

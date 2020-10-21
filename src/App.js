import React, {useEffect} from "react";
import "./App.css";
import {useDispatch, useSelector} from 'react-redux'
import Header from "./components/layout/Header"
import About from "./components/layout/About"
import Footer from "./components/layout/Footer"
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import UserProfile from './components/user/UserProfile'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {PrivateRoute} from './routes'
import { alertActions, userActions } from "./actions";
import { history } from "./utils";
import Home from "./components/layout/Home";
import PathTasks from "./components/pathitem/PathTasks";

function App() {

  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(userActions.getCurrentUser());
    history.listen(function (location, action) {
      dispatch(alertActions.clear());
    });
  }, [loggedIn])

  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <PrivateRoute path="/path/:id" component={PathTasks} />
      <PrivateRoute path="/profile" component={UserProfile} />
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;

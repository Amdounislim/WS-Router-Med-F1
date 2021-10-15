import React, { useState } from "react"
import './App.css';
import Users from './components/Users/Users';
import { Link, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';
import { Persons } from './UsersData'
import UserProfile from "./components/UserProfile/UserProfile";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./components/Admin";

function App() {
  const [users, setUsers] = useState(Persons)
  const [isAuth, setIsAuth] = useState(false)

  const login = () => setIsAuth(true)
  const logout = () => setIsAuth(false)



  return (
    <div className="App">
      <NavBar isAuth={isAuth} login={login} logout={logout} />

      {/* <Link to='/users'>
        users page
      </Link> */}
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path="/users" component={Users} /> */}
        <Route exact path="/users" render={() => <Users users={users} />} />
        <Route path="/users/:id" component={UserProfile} />
        <PrivateRoute path="/admin" component={Admin} isAuth={isAuth} />
        <Route path='/*' render={() => <img src="https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg" alt="notFound" />} />
      </Switch>
    </div>
  );
}

export default App;

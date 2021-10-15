import React, { useState } from "react"
import './App.css';
import Users from './components/Users/Users';
import { Link, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';
import { Persons } from './UsersData'
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  const [users, setUsers] = useState(Persons)
  return (
    <div className="App">
      <NavBar />

      {/* <Link to='/users'>
        users page
      </Link> */}
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path="/users" component={Users} /> */}
        <Route exact path="/users" render={() => <Users users={users} />} />
        <Route path="/users/:id" component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;

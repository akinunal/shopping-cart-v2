import React from 'react';
import classes from './App.module.css';
import { NavLink, Route, Switch } from 'react-router-dom';
import Spinner from './Components/UI/Spinner/Spinner';

function App() {
  return (
    <div className={classes.App}>
      <NavLink className={classes.links} to='/'>Home</NavLink>
      <NavLink className={classes.links} to='/about'>About</NavLink>
      <NavLink className={classes.links} to='/users'>Users</NavLink>

      <Route path='/' exact render={() => <h1>HOME PAGE</h1>}/>
      <Route path='/about' component={Spinner}/>
      <Route path='/users' render={() => <h1>USERS PAGE</h1>}/>
    </div>
  );
}

export default App;

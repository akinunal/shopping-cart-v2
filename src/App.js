import React from 'react';
import classes from './App.module.css';
import { NavLink, Route } from 'react-router-dom';
import Spinner from './Components/UI/Spinner/Spinner';
import { connect } from 'react-redux';

class App extends React.Component {
  // axios.get('https://my-json-server.typicode.com/jubs16/Products/Products')
  render() {
    return (
      <div className={classes.App}>
        <div>
          <NavLink className={classes.links} to='/'>Home</NavLink>
          <NavLink className={classes.links} to='/about'>About</NavLink>
          <NavLink className={classes.links} to='/users'>Users</NavLink>
        </div>
        <h1>{this.props.ctr}</h1>
        <button onClick={this.props.onIncrementCounter}>CLICK ME</button>
  
        <Route path='/' exact render={() => <h1>HOME PAGE</h1>}/>
        <Route path='/about' component={Spinner}/>
        <Route path='/users' render={() => <h1>USERS PAGE</h1>}/>
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
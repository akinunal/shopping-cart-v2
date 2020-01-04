import React from 'react';
import classes from './App.module.css';
import { NavLink, Route } from 'react-router-dom';
import ProductContainer from './Containers/ProductContainer/ProductContainer';
import CartButton from './Components/UI/CartButton/CartButton';
import ProductDetail from './Containers/ProductDetail/ProductDetail';

class App extends React.Component {

  render() {
    return (
      <div className={classes.App}>
        <div className={classes.header}>
          <NavLink className={classes.links} to='/'>Featured Products</NavLink>
          <CartButton />
        </div>

        <Route path='/' exact component={ProductContainer}/>
        <Route path='/products/:name' component={ProductDetail}/>
        <Route path='/cart' component={ProductContainer} />
      </div>
    );
  }
}

export default App;

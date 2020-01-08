import React from 'react';
import classes from './App.module.css';
import { NavLink, Route, Switch } from 'react-router-dom';
import ProductContainer from './Containers/ProductContainer/ProductContainer';
import CartButton from './Components/UI/CartButton/CartButton';
import ProductDetail from './Containers/ProductDetail/ProductDetail';
import Cart from './Containers/Cart/Cart';
import Invoice from './Containers/Invoice/Invoice';
import Auth from './Containers/Auth/Auth';

class App extends React.Component {

  render() {
    return (
      <div className={classes.App}>
        <Auth>
          <div className={classes.header}>  
              <NavLink className={classes.links} to='/'>Featured Products</NavLink>
              <CartButton />
          </div>

          <Switch>
            <Route path='/' exact component={ProductContainer}/>
            <Route path='/products/:name' component={ProductDetail}/>
            <Route path='/cart' component={Cart} />
            <Route path='/invoice' component={Invoice} />
          </Switch>
        </Auth>
      </div>
    );
  }
}

export default App;

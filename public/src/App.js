import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Cart from './components/Cart';
import ProductListing from './components/ProductListing';
import OrderTracking from './components/OrderTracking';
import Reviews from './components/Reviews';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/cart" component={Cart} />
          <Route path="/products" component={ProductListing} />
          <Route path="/track-order" component={OrderTracking} />
          <Route path="/reviews" component={Reviews} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

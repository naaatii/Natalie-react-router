import React from 'react';//ESTO TIENE QUE ESTAR SIEMPRE
import './index.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom' 

import Home from '../../pages/home'
import Category from '../../pages/category'
import Search from '../../pages/search'
import Navbar from '../Navbar'
import Footer from '../Footer'


const App = props => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/category/:slug" component={Category} />
        <Route path="/search/:slug" component={Search} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;//hace q pueda ir a otro componente y exportarlo

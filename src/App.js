import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigate from './components/navigate';
import NotFound from './components/notFound';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {

  render() {
    return (

      <Navigate />

      // <BrowserRouter>

      //   <Switch>

      //     <Route exact path="/" component={Home} />
      //     <Route path="/about" component={About} />
      //     <Route path="/products" component={Products} />

      //     <Route component={NotFound} />

      //   </Switch>

      // </BrowserRouter>
    );
  }
}

export default App;

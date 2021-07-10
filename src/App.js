import React from "react";
import { Route } from 'react-router-dom';
import Search from "./search";
import Episode from "./episode"
import Dimension from "./dimension"

function App() {

  function handleClick() {

  }
  return (
    <>
    <a href="/">HOME</a>
      <Route exact path='/' component={Search} />
      <Route exact path='/location/:id' component={Dimension} />
      <Route exact path='/episode/:id' component={Episode} />
    </>
  );
}

export default App;
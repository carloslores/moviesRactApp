import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';


import PopularMovies from "./components/PopularMovies"
import MovieDetails from "./components/MovieDetials"

import './App.css';

export default function App (){
  

  return (
    <div className="App">
      
      <PopularMovies/>
     <Switch>
       <Route exact path="/movie/:id" render={(match)=><MovieDetails {...match}></MovieDetails>}/>
     </Switch>
    </div>
  );

}


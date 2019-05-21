import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';


import PopularMovies from "./components/PopularMovies"
import Movie from "./components/MovieContainer"
import MovieDetails from "./components/MovieDetials"

import './App.css';

export default function App (){
  

  return (
    <div className="App">
      
      
     <Switch>
       <Route exact path="/" component={PopularMovies}/>
       <Route exact path="/:movieId" component={Movie}/>
     </Switch>
    </div>
  );

}


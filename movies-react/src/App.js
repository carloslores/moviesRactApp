import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import PopularMovies from "./components/PopularMovies"
import Movie from "./components/MovieContainer"
import MovieDetails from "./components/MovieDetials"

import './App.css';

export default function App (){
  

  return (
    <div className="App">
      <React.Fragment>
      
     <Switch>
       <Route exact path="/" component={PopularMovies}/>
       <Route exact path="/:movieId" component={Movie}/>
     </Switch>
     </React.Fragment>
    </div>
  );

}


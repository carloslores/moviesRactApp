import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import PopularMovies from "./components/PopularMovies"
import Movie from "./components/MovieContainer"
import HomePage from "./components/HomePage"
import NavBar from "./components/NavBar"
// import Actors from "./components/ActorsDetails"

import './App.css';

export default function App (){
  

  return (
    <div className="App">
    <NavBar/>
      <React.Fragment>
      
     <Switch>
       <Route exact path="/" component={HomePage}/>
       <Route exact path="/popularmovies" component={PopularMovies}/>
       <Route exact path="/:movieId" component={Movie}/>
       {/* <Route exact path="/:movieId/cast" component={Actors}/> */}
     </Switch>
     </React.Fragment>
    </div>
  );

}


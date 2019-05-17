import React from "react"
import {connect} from "react-redux"
import {getMovie} from "../actions"




 const MovieDetails = (movie) =>{
    return <div>
        <h1>{movie.title}</h1>
    </div>
}


export default MovieDetails
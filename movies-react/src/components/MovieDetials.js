import React from "react"
import PropTypes from "prop-types"
// import {connect} from "react-redux"
// import {getMovie} from "../actions"




 const MovieDetails = ({movie, directors, actors, loading}) =>{
     console.log(movie.movie !== null ? movie.movie : null)
     //const url = `https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`

    return (
        <main>
        {movie.movie !== null  
            ? 
            <div>
                 <h1>{movie.movie.title}</h1>
                 <img src={`https://image.tmdb.org/t/p/w1280${movie.movie.backdrop_path}`}/>
                 </div>
            :null}
        </main>
    )
}
MovieDetails.propTypes = {
    movie: PropTypes.object
}

export default MovieDetails
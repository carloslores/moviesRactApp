import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
// import {connect} from "react-redux"
// import {getMovie} from "../actions"
import Rater from 'react-rater'




 const MovieDetails = ({movie, directors, actors, loading}) =>{
     console.log(movie.movie !== null ? movie.movie.homepage: null)
     console.log(directors)

     //const url = `https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`

    return (
        <main>
        {movie.movie !== null  
            ? 
            <div>
       {/* <img src={`https://image.tmdb.org/t/p/w1280${movie.movie.belongs_to_collection.backdrop_path}`} /> */}
<div class="card card-cascade wider reverse">


  <div class="view view-cascade overlay">
    <img class="card-img-top" src={`https://image.tmdb.org/t/p/w1280${movie.movie.backdrop_path}`} alt="Card image cap"/>
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div class="card-body card-body-cascade text-center">


    <h4 class="card-title"><strong>{movie.movie.original_title}</strong></h4>
    {/* <i class="fas fa-film"></i> */}
{movie.movie.genres.map(gen=><h4 className="gen">{gen.name}</h4>)}
    <h6 class="font-weight-bold indigo-text py-2">Overview</h6>
   
   
    <p class="card-text">{movie.movie.overview}</p>
    {/* <h4 className="rate"><Rater total={5} rating={movie.movie.popularity / 30} id="starts"/></h4> */}

    {/* <a class="px-2 fa-lg li-ic"><i class="fab algolia
"></i></a> */}
    
    <a class="px-2 fa-lg tw-ic"><i class="fab fa-twitter"></i></a>
  
    <a class="px-2 fa-lg fb-ic"><i class="fab fa-facebook-f"></i></a>
    <a href={movie.movie.homepage}> Movie homepage</a>

  </div>

</div>

                 {/* <h1>{movie.movie.title}</h1>
                 <img src={`https://image.tmdb.org/t/p/w1280${movie.movie.backdrop_path}`}/>
                 </div> */}
</div>

            :null}
        </main>
    )
}
MovieDetails.propTypes = {
    movie: PropTypes.object
}

export default MovieDetails
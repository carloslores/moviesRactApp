import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'



//import ActorsDetails from "./ActorsDetails"
// import {connect} from "react-redux"
// import {getMovie} from "../actions"





 const MovieDetails = ({movie, directors, actors, loading}) =>{
     console.log(movie.movie !== null ? movie.movie.id: null)
     console.log(movie.movie !== null ? movie.movie.homepage: null)
     console.log(actors.actors !== null ? actors.actors: null)
     console.log(actors.actors !== null ? actors.actors.cast.map(actor=>{
       return `${actor.character} Play by: ${actor.name}`
        
        }) : null)

     //const url = `https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`

    return (
        <main className="movie-details">
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
  
        {/* <Link to={`/${movie.movie.id}/cast`} render={<ActorsDetails actors={actors.actors}/>}>Cast</Link> */}
    <a href={movie.movie.homepage}> Movie homepage</a>
    

  </div>

</div>

                 {/* <h1>{movie.movie.title}</h1>
                 <img src={`https://image.tmdb.org/t/p/w1280${movie.movie.backdrop_path}`}/>
                 </div> */}
</div>

            :null}
            <div className="col-12">
            <div className="row">
            <article className="col-12"> 


<div className="card-container row">
       
                
            {actors.actors !== null ? actors.actors.cast.map(actor=>{
              console.log(actor.profile_path)
       return(
         
        <div class="card actors-card">

  
  <div class="view overlay">
    {actor.profile_path !== null 
      ? <img class="card-img-top" src={`https://image.tmdb.org/t/p/w1280${actor.profile_path}`} alt="Card image cap"/> 
      :
      <img class="default-img" src="https://www.dhresource.com/0x0s/f2-albu-g7-M01-C7-B4-rBVaSVvtHdWAAz_TAAMeNwIX8Bw862.jpg/ropa-para-mascotas-cosplay-pirata-perros.jpg" alt="Card image cap"/>
      }
    <a>
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

 
  


  <div class="card-body body-actor">


    <h4 class="card-title">{actor.name}</h4>
    <hr/>
 
    <h6>As: {actor.character}</h6>

  </div>


  

</div>
    //     {/* // <ul>
    // //     <li key={actor.cast_id}>{actor.character} Play by: {actor.name}</li>
    // // <img class="card-img-top" src={`https://image.tmdb.org/t/p/w1280${actor.profile_path}`} alt="Card image cap"/>
       
    // //     </ul> */}
       )
        
        }) : null}
               </div> 
        {/* {actors.actors !== null ? actors.actors.cast.map(actor=>{
       return( <ul>
        <li key={actor.cast_id}>{actor.character} Play by: {actor.name}</li>
    <img class="card-img-top" src={`https://image.tmdb.org/t/p/w1280${actor.profile_path}`} alt="Card image cap"/>
       
        </ul>
       )
        
        }) : null} */}
        

</article>
</div>
</div>
        </main>
    )
}
MovieDetails.propTypes = {
    movie: PropTypes.object
}

export default MovieDetails
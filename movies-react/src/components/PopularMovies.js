import React, {Component} from "react"
import {connect} from "react-redux"
import {
    popularMovies,
    // getMovie
} from "../actions"
import MoviesCards from "./MoviesCards"


class PopularMovies extends Component{

  

    componentWillMount(){
        this.props.popularMovies() 
      }
    renderPopularMovies(){
        console.log(Array.isArray(this.props.movies.movies))
        if(this.props.movies.length !== 0)
        return this.props.movies.movies.map(movie=> <MoviesCards key={movie.id} {...movie}/>)
     
    }

   
   render(){
 
       return(
           <main className="container">
               <h1>Estamos en Popular movies</h1>
                <div className="col-12">
                <div className="row">
               
               {
                   this.renderPopularMovies()
                
               }
               </div>
               </div>
               
           </main>
       )
   }






}

function mapStateToProps(state){
    return{
      movies: state.movies 
    }
  }
// const mapDispatchToPrtops = {
//     getMovie
// }
  
export default connect(mapStateToProps, {popularMovies})(PopularMovies);
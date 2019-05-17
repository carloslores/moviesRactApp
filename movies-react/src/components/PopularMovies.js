import React, {Component} from "react"
import {connect} from "react-redux"
import {
    popularMovies,
    // getMovie
} from "../actions"
import MoviesCards from "./MoviesCards"


class PopularMovies extends Component{

    // componentDidMount(){
    //     const {movieId}= this.props.match.params
    //     this.props.getMovie(movieId)
    // }

    componentWillMount(){
        this.props.popularMovies() 
      }
    renderPopularMovies(){
        console.log(Array.isArray(this.props.movies.movies))
        if(this.props.movies.length !== 0)
        return this.props.movies.movies.map(movie=> <MoviesCards key={movie.id} {...movie}/>)
     
    }

    // getMovie = movieId =>{
    //     this.props.getMovie(movieId)
    // }
//   constructor(){
//       super()
//     this.state = {
//         movies: []
//     }
//     this.serviceMovies = new Apiservice()
    

//   }

//  getMovies = () =>{
//      return this.serviceMovies.getPopularMovies()
//         .then(Movies=>{
//             this.setState({movies: Movies})
//         })
//  }

// componentDidMount(){
//     this.getMovies()
// }

   render(){
    //this.state.movies.map(_=>console.log(_.title))
//    console.log(this.state.movies.results)
       return(
           <main className="container">
               <h1>Estamos en Popular movies</h1>
                <div className="col-12">
                <div className="row">
               
               {
                   this.renderPopularMovies()
                 //this.state.movies.length !== 0 ?  this.state.movies.results.map(movie=><MoviesCards key={movie.id} {...movie}/>) : null
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
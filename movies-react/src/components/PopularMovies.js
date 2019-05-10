import React, {Component} from "react"
import Apiservice from "../services/apiservice"
import MoviesCards from "./MoviesCards"


export default class PopularMovies extends Component{


  constructor(){
      super()
    this.state = {
        movies: []
    }
    this.serviceMovies = new Apiservice()
    

  }

 getMovies = () =>{
     return this.serviceMovies.getPopularMovies()
        .then(Movies=>{
            this.setState({movies: Movies})
        })
 }

componentDidMount(){
    this.getMovies()
}

   render(){
    //this.state.movies.map(_=>console.log(_.title))
   console.log(this.state.movies.results)
       return(
           <main className="container">
               <h1>Estamos en Popular movies</h1>
                <div className="col-12">
                <div className="row">
               
               {
                 this.state.movies.length !== 0 ?  this.state.movies.results.map(movie=><MoviesCards key={movie.id} {...movie}/>) : null
               }
               </div>
               </div>
               
           </main>
       )
   }






}
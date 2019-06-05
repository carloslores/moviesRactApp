import React, { Component } from "react"
import { connect } from "react-redux"
import {getMovie, getActors} from "../actions"
import MovieDetails from "./MovieDetials"

class MovieContainer extends Component {
    componentDidMount() {
        const { movieId } = this.props.match.params
        console.log(this.props.actors)
        this.props.getMovie(movieId)
    }
 

    getMovie = movieId => {
        this.props.getMovie(movieId)
    }
  render(){
      console.log(this.props.actors !== null? this.props.actors : null)
      return(
          <MovieDetails movie={this.props.movie} actors={this.props.actors}/>
          
      )
  }

}

const mapStateToProps = state => {
    console.log(state.actors)
    return {
        movie: state.movie,
        actors: state.actors
        
    }
  
}

const mapDispatchToProps = {
    getMovie,
    getActors
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(MovieContainer)

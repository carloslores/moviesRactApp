import React, { Component } from "react"
import { connect } from "react-redux"
import {getMovie} from "../actions"
import MovieDetails from "./MovieDetials"

class MovieContainer extends Component {
    componentDidMount() {
        const { movieId } = this.props.match.params
        console.log(this.props)
        this.props.getMovie(movieId)
    }
    // componentDidUpdate(){
    //     const { movieId } = this.props.match.params;
    //     const { movie, actors, directors } = this.props;
   
    // }

    getMovie = movieId => {
        this.props.getMovie(movieId)
    }
  render(){
      console.log(this.props.movie !== null? this.props.movie : null)
      return(
          <MovieDetails movie={this.props.movie} directors={this.props.directors}/>
          
      )
  }

}

const mapStateToProps = state => {
    console.log(state.movie)
    return {
        movie: state.movie
        
    }
  
}

const mapDispatchToProps = {
    getMovie
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(MovieContainer)

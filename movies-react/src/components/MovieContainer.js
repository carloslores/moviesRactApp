import React, { Component } from "react"
import { connect } from "react-redux"
import {getMovie} from "../actions"
import MovieDetils from "./MovieDetials"

class MovieContainer extends Component {
    componentDidMount() {
        const { movieId } = this.props.match.params
        this.props.getMovie(movieId)
    }


    getMovie = movieId => {
        this.props.getMovie(movieId)
    }
  render(){
      return(
          <MovieDetils movie={this.props.movie}/>
          
      )
  }

}

const mapStateToProps = state => {
    return state.movie
}
const mapDispatchToProps = {
    getMovie
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(MovieContainer)

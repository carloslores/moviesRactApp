import axios from "axios"
import API_KEY from "../configs"

export const SHOW_POPULAR_MOVIES = "SHOW_POPULAR_MOVIES"
export const GET_MOVIE = "GET_MOVIE"


export const popularMovies=()=>{
    return (dispatch, getState)=>{
          axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(response=>{
                dispatch({type:SHOW_POPULAR_MOVIES, payload: response.data.results})})
    }
}

export const getMovie=(movieId)=>{

    return (dispatch, getState)=>{
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
          .then(response=>{
           
              console.log(response.data)
             dispatch({type:GET_MOVIE, payload: response.data})
          })
    }
}

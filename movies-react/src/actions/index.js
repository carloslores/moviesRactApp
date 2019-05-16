import axios from "axios"
import API_KEY from "../configs"

export const SHOW_POPULAR_MOVIES = "SHOW_POPULAR_MOVIES"


export const popularMovies=()=>{
    return (dispatch, getState)=>{
          axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(response=>{
                console.log(Array.isArray(response.data.results))
                dispatch({type:SHOW_POPULAR_MOVIES, payload: response.data.results})})
    }
}
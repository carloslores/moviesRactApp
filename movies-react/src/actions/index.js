import axios from "axios"
import API_KEY from "../configs"

export const SHOW_POPULAR_MOVIES = "SHOW_POPULAR_MOVIES"
export const SHOW_ONE_MOVIE = "SHOW_ONE_MOVIE"


export const popularMovies=()=>{
    return (dispatch, getState)=>{
          axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(response=>{
                dispatch({type:SHOW_POPULAR_MOVIES, payload: response.data.results})})
    }
}

// export const getMovie=()=>{
//     return (dispatch, getState)=>{
//         axios.get(`https://api.themoviedb.org/3/movie/${movieId}api_key=${API_KEY}`)
//           .then(response=>{
//              dispatch({type:SHOW_ONE_MOVIE, payload: response.data.results})
//           })
//     }

// }
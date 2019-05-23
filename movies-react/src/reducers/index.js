import {combineReducers} from "redux"
import {showPopularMovies, getOneMovie, getCast} from "./movies"

const rootReducer = combineReducers({
    movies: showPopularMovies,
    movie: getOneMovie,
    actors: getCast
})

export default rootReducer 
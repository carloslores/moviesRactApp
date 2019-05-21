import {combineReducers} from "redux"
import {showPopularMovies, getOneMovie} from "./movies"

const rootReducer = combineReducers({
    movies: showPopularMovies,
    movie: getOneMovie
})

export default rootReducer 
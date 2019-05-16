import {combineReducers} from "redux"
import {showPopularMovies} from "./movies"

const rootReducer = combineReducers({
    movies: showPopularMovies
})

export default rootReducer 
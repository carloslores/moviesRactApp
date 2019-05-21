import {
    SHOW_POPULAR_MOVIES,
    GET_MOVIE
} from "../actions"

const initialSate = {
    movies:[],
    movie: null,
    actors: null
}


export function showPopularMovies(state=initialSate,action){
    switch(action.type){
        case SHOW_POPULAR_MOVIES:
        console.log(Array.isArray(action.payload))
            return Object.assign({}, state, {movies: action.payload})
        case GET_MOVIE:
            return Object.assign({}, state, {movie: action.payload.movie})
        default:
            return state
    }

}
import {SHOW_POPULAR_MOVIES} from "../actions"

const initialSate = {
    movies:[]
}


export function showPopularMovies(state=initialSate,action){
    switch(action.type){
        case SHOW_POPULAR_MOVIES:
        console.log(Array.isArray(action.payload))
            return Object.assign({}, state, {movies: action.payload})
        default:
            return state
    }

}
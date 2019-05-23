import {
    SHOW_POPULAR_MOVIES,
    GET_MOVIE,
    GET_CAST
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
        // case GET_MOVIE:
        //   console.log(action.payload)
        //     return Object.assign({}, state, {movie: action.payload})
             
        default:
            return state
    }

}
export function getOneMovie(state=initialSate,action){
    switch(action.type){
        case GET_MOVIE:
        console.log(action.payload)
        return Object.assign({}, state, {movie: action.payload})
        default:
        return state
    }
}
export function getCast(state=initialSate,action){
    switch(action.type){
        case GET_CAST:
        console.log(action.payload)
        return Object.assign({}, state, {actors: action.payload})
        default:
        return state
    }

}
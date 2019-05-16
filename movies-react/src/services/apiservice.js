import axios from "axios"
import API_KEY from "../configs"


class Apiservice {

constructor(){
    this.service = axios.create({
        baseURL: "https://api.themoviedb.org",
       withCredentials:false
    })
}

getPopularMovies =() =>{
    return this.service.get(`/3/movie/popular?api_key=${API_KEY}`)
    .then(response=>response.data)
    .catch(err=>console.log(err))
}





}



export default Apiservice
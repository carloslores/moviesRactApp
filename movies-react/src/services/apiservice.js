import axios from "axios"


class Apiservice {

constructor(){
    this.service = axios.create({
        baseURL: "https://api.themoviedb.org",
       withCredentials:false
    })
}

getPopularMovies =() =>{
    return this.service.get("/3/movie/popular?api_key=2fa65f5723aae07b04e1fff6c02c71a4")
    .then(response=>response.data)
    .catch(err=>console.log(err))
}





}



export default Apiservice
import React from "react"

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  };
  


const MoviesCards = movie => {
const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return(
      
            <article className="col-sm-6 col-md-4 col-lg-6"> 


<div className="card-container" id="hamburgers-card" >
        <Card
            className="card" >
            <CardActionArea className="card card-hamburger">
                
                <img className="card-hamburger-img" src={url}></img>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {movie.title}
                    </Typography>
                  {/* <Link className="details" to={`/hamburger/${hamburger._id}`}> Detalles</Link> */}
                </CardContent>
               
            </CardActionArea>
           
        </Card>
</div>

{/* <h1>{movie.title}</h1>
<img src={url}></img> */}
</article> 


  )






}

export default  withStyles(styles)(MoviesCards)
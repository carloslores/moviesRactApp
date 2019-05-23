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

const ActorsDetails = (actors)=>{
    console.log(actors !== undefined || actors !== null  ? actors : null)
    return(
        <h1>Hola</h1>
    )

}

export default ActorsDetails
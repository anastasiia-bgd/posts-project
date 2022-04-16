import React from 'react'
import './index.css'

import {Card as CardMUI} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const Card = ({postItem}) => {
  return (
<CardMUI sx={{ maxWidth: 345 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
         {postItem.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         {postItem.author.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {postItem.text}
        </Typography>
       
        <Typography variant="body2" color="text.secondary">
        Tags: {postItem.tags}  
        </Typography>
      
      </CardContent>
      
    </CardMUI>
  );

  

    // <div className='card'>
    //     <div className='card_author'>{props.author}</div>
    //     <div className='card_text'>{props.text}</div>
    //     <div className='card_tag'>{props.tags}</div>
        
    // </div>
  // )
}


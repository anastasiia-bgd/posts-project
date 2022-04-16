import React from 'react'
import './index.css'

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Card = (props) => {
  return (
    <div className='card'>
        <div className='card_author'>{props.author}</div>
        <div className='card_text'>{props.text}</div>
        <div className='card_tag'>{props.tags}</div>
        
    </div>
  )
}

export default Card
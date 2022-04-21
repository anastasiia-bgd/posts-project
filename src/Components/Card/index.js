import React, { useState, useEffect } from 'react'
import './index.css'

import { Card as CardMUI } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import api from '../../utils/api';

export const Card = ({ postItem, isItLike, setLike, like}) => {
  const [likeCount, setLikeCount] = useState(postItem.likes.length)
  const writeLS = (key, value) => {
    const storage = JSON.parse(localStorage.getItem(key)) || [];
    storage.push(value)
    localStorage.setItem(key, JSON.stringify(storage))
  }

  const removeLS = (key, value) => {
    const storage = JSON.parse(localStorage.getItem(key))
    const filteredStorage = storage.filter((itemID) => value !== itemID)
    localStorage.setItem(key, JSON.stringify(filteredStorage))
  }

  const addLike = () => {
    writeLS('like', postItem._id)
    setLike(((prevState) => [...prevState, postItem._id]))
    api.showLike(postItem._id)
      .then(() => {
       console.log('Like!')
        window.location.reload()
      })
      .catch(() => {
        alert('UPS!')
      })
  }

  const removeLike = () => {
    removeLS('like', postItem._id)
    setLike((prevState) => prevState.filter((itemID) => postItem._id !== itemID));
    api.deleteLike(postItem._id)
      .then(() => {
        console.log('Delete Like');
        window.location.reload()
      })
      .catch(() => {
        alert('UPS!');
      })
  }
 
  
  return (
    <CardMUI sx={{ maxWidth: 345 }}>

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {postItem.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {postItem.author?.email}
        </Typography>
        <CardMedia component='img' image={postItem.image} alt={postItem.title} sizes='cover' />
        <Typography variant="body2" color="text.secondary">
          {postItem.text}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Tags: {postItem.tags} 
        </Typography>
        {isItLike ? (
          <IconButton aria-label="add to favorites" onClick={removeLike} >
            <FavoriteIcon color='warning'/> 
            <Typography >
            {postItem.likes.length}
           </Typography>
          </IconButton>
        ) : (
          <IconButton aria-label="add to favorites" onClick={addLike}>
            <FavoriteBorderOutlinedIcon />
            <Typography >
          {postItem.likes.length}
          
           </Typography>
          </IconButton>
        )}
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


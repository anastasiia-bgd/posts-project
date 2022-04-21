import React from 'react'
import {Card}  from '../Card';
import './index.css'

const List = ({list, like, setLike}) => {
  return ( 
  <div className='posts'> 
  {list?.map((post) => 
    (<Card 
      key={post._id} 
      postItem={post}
      isItLike={like.includes(post._id)}
      setLike={setLike}
      like={like}
      />    
  ))};
</div>
  )
}

export default List
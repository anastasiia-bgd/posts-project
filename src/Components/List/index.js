import React from 'react'
import {Card}  from '../Card';
import './index.css'

const List = ({list}) => {
  return ( 
  <div className='posts'> 
  {list.map((post) => 
    (<Card key={post._id} postItem={post}/>
  ))};
</div>
  )
}

export default List
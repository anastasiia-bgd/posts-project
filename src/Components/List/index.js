import React from 'react'
import Card from '../Card'
import './index.css'
import data from '../../data.json';

const List = () => {

  return (
   
    <div className='posts'>
          
        {data.map(el => <Card tags ={el.tags} key={el.id} text={el.text}/>)}
  
    </div>
        
  )
}

export default List
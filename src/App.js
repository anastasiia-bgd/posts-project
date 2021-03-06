import React, { useEffect, useState } from 'react';

import api from './utils/api';
import './index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Card  from './Components/Card';
import  List from './Components/List';
import { Button } from './Components/Button';
import Pagination from './Components/Pagination';

// import Logo from './Components/Logo'

function App() {
  const [postsData, setPostsData] = useState(null)
 const [like, setLike] = useState(JSON.parse(localStorage.getItem('like'))|| [])


  useEffect(() => {
    api.getPosts()
    .then(data => setPostsData(data))
    .catch((err) => console.log(err))
  },[])
  
  
  
  return (

        <div className='container'>
    <Header/>
<div className='info'>
  <div className='info_text'> 
  <h3>
    <p>Welcome to Our Image Board!</p>
  </h3>
  <h5>
  <p>We're stoked that you're here. 🥳</p>
  </h5>
  </div>
  <div className='info_button'><Button/>
  </div>
</div>
     <List 
     list={postsData} 
     like={like} 
     setLike={setLike}
      />
    <Pagination/>
    <Footer/>
    </div>
    );
  }

  export default App;

import React, { useEffect, useState } from 'react';

import api from './utils/api';
import './index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Card  from './Components/Card';
import  List from './Components/List';

import Logo from './Components/Logo'

function App() {
    
   
    return (
        <div className='container'>
    <Header/>
     <List/>
    <Footer/>
    </div>
    );
  }

  export default App;

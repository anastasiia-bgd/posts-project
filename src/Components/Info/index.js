import React, { useEffect, useState } from 'react'
import api from '../../utils/api'



export const Info = () => {
    const [user, setUser] = useState(null)

useEffect(()=> {
    api.getCurrentUser().then((user) => setUser(user));
  },[])
  
  return (
    <div> {user?.name} </div>
  )
}

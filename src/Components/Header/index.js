import { Button } from '../Button'
import React from 'react'
import './index.css'
import Logo from '../Logo'
import { Info } from '../Info'


export const Header = () => {
  return (
    <header>
      <div className='header_logo'> <Logo /> </div>
      <div>
      <Info/>
      </div>
      <div className='header_buttons'>
        <Button />
        <Button />
        <Button /> 
      </div>

    </header>
  )
}

export default Header

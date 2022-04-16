import { Button } from '../Button'
import React from 'react'
import './index.css'
import Logo from '../Logo'


export const Header = () => {
  return (
    <header>
      <div className='header_logo'> <Logo /> </div>
      <div className='header_buttons'>
        <Button />
        <Button />
        <Button />
      </div>
    </header>
  )
}

export default Header

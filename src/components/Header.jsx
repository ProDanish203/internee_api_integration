import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='flex items-center justify-between py-5 sm:px-10 px-2 gap-2 shadow-lg'>
      <Link to='/' className='text-3xl font-bold text-primary'>LOGO</Link>

      <nav className='flex items-center justify-center gap-4 text-xl cursor-pointer text-primary'>
        <i className='fas fa-heart'></i>
        <i className='fas fa-shopping-cart'></i>
      </nav>
    </header>
  )
}

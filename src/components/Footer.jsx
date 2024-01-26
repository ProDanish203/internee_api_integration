import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='py-4 text-center bg-bg shadow-lg max-sm:text-sm'>
      Created with <span className='text-primary font-semibold'>❤</span> By <Link to="https://danish-siddiqui.vercel.app" target='_blank' className='text-primary font-semibold'>Danish Siddiqui</Link>
    </footer>
  )
}

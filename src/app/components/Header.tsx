import React from 'react'
import Nav from './Nav'

function Header() {
  return (
    <>
        <header className='h-20 bg-black'>
            <h1 className='text-white'>Header</h1>
            <Nav />
        </header>
    </>
  )
}

export default Header
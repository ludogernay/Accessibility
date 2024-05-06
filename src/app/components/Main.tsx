import React from 'react'
import Product from './Product'

interface MainProps {
  children: React.ReactNode
}

function Main( {children}: MainProps)  {

  return (
    <main className='h-auto w-[80%] mx-auto bg-[rgba(0,0,0,0.85)] border-2 rounded-md border-border-gold -z-10 flex justify-center items-center '>
        {children}
    </main>
  )
}

export default Main
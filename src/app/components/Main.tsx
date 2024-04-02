import React from 'react'
import Product from './Product'

function Main() {
  return (
    <main className='h-[calc(100vh-8rem)] w-[80%] mx-auto pt-20 bg-[rgba(0,0,0,0.85)] border-2 rounded-md border-border-gold'>
        <Product/>
    </main>
  )
}

export default Main
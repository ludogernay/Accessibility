import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <nav className='h-full'>
      <ul className='text-white justify-around flex items-center h-full'>
        <li><Link href={'https://google.fr'} target='blank'>Home</Link></li>
        <li><Link href={'https://google.fr'} target='blank'>About</Link></li>
        <li><Link href={'/contact'} target='blank'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
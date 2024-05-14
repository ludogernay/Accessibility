import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <nav className='h-full'>
      <ul className='text-white justify-around flex items-center h-full'>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/contact'}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
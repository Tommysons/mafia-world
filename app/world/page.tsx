"use client"
import Chat from '@/components/Chat'
import Link from 'next/link'
import React from 'react'

const World = () => {
  return (
   <section>
    <Link href='/#'>
        <button className='bg-gray-300 hover:bg-gray-800 text-black font-bold
        py-2 px-4 rounded'>Back</button>
    </Link>
    <Chat/>
   </section>
  )
}

export default World

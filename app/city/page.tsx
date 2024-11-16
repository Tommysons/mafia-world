"use client"
import Chat from '@/components/Chat'
import Link from 'next/link'
import React from 'react'

const City = () => {
    return (
        <section>
            <Link href='/#'>
                <button className='bg-gray-300 hover:bg-gray-800 text-black font-bold
                py-2 px-4 rounded'>
                    Back
                </button>
            </Link>
            <div>Blacksmith</div>
            <div>Hospital</div>
            <div>Market</div>
            <div>Arena</div>
            <div>Guild Hall</div>
            <div>Tavern</div>
            <div>Library</div>
            <div>Bank</div>
            <div>Housing District</div>
            <div>Town Square</div>
            <div>
                <Chat/>
            </div>
        </section>
    )
}

export default City

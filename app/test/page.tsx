"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Item } from '@/types/item'
import initialProfile from '@/constats/initialProfile'
import initialItems from '@/data/initialItems'
import LeftColumn from '@/components/LeftColumn'
import AvatarColumn from '@/components/Avatar'
import RightColumn from '@/components/RightColumn'

const Profile = () => {
    const [inventory, setInventory] = useState<Item[]>(initialItems)
    const [profile, setProfile] = useState<{ [key: string]: Item | null }>(initialProfile)

    const handleInventoryClick = (uniqueId: string) => {
        const item = inventory.find(i => i.uniqueId === uniqueId)
        if (!item) return;

        const slotKey = item.id
        const existingItem = profile[slotKey]
        if (existingItem) setInventory(prev => [...prev, existingItem])

        setProfile(prev => ({ ...prev, [slotKey]: item }))
        setInventory(prev => prev.filter(i => i.uniqueId !== uniqueId))
    }

    const handleProfileClick = (slotKey: string) => {
        const item = profile[slotKey]
        if (!item) return

        setInventory(prev => prev.some(i => i.uniqueId === item.uniqueId) ? prev : [...prev, item])
        setProfile(prev => ({ ...prev, [slotKey]: null }))
    }

    return (
        <section className='flex left-1 p-8'>
            <div>
                <Link href={`/#`}>
                    <button className='bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded'>Back</button>
                </Link>
            </div>
            <div className='relative grid grid-cols-3 bg-gray-100 p-8 ml-2 rounded-lg max-w-[456px] max-h-[548px]'>
                <LeftColumn profile={profile} handleProfileClick={handleProfileClick} />
                <AvatarColumn />
                <RightColumn profile={profile} handleProfileClick={handleProfileClick} />
            </div>
            {/* Inventory Section */}
            <div className='bg-gray-100 p-2 rounded-lg overflow-y-scroll max-h-[456px] w-[355px] mt-[2px] ml-[750px]'>
                <div className='flex justify-center items-center col-span-5 mb-4 font-bold'>Inventory</div>
                <div className='grid grid-cols-3 gap-3 cursor-pointer'>
                    {inventory.map(item => (
                        <div
                            className='flex justify-center items-center border rounded-lg h-[100px] w-[100px] bg-yellow-50 text-center'
                            key={item.uniqueId}
                            onDoubleClick={() => handleInventoryClick(item.uniqueId)}
                        >{item.name}</div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Profile

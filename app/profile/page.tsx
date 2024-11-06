"use client"
import React, {useState} from "react"
import Link from "next/link"
import { Item } from "@/types/item"
import initialItems from "@/data/initialItems"
import initialProfile from "@/constats/initialProfile"
import LeftColumn from "@/components/LeftColumn"
import AvatarColumn from "@/components/Avatar"
import RightColumn from "@/components/RightColumn"

const Profile = () => {
    const [inventory, setInventory] = useState<Item[]>(initialItems)
    const [profile, setProfile] = useState<{[key: string]: Item | null}>(initialProfile)

    //Inventory
    const handleInventoryClick = (uniqueId: string) =>{
        const item = inventory.find(i => i.uniqueId === uniqueId)
        if(!item) return

        const slotKey = item.id
        const existingItem = profile[slotKey]
        if(existingItem) setInventory(prev => [...prev, existingItem])

        setProfile(prev => ({...prev, [slotKey] : item}))
        setInventory(prev => prev.filter(i => i.uniqueId !== uniqueId))
    }
    //Profile
    const handleProfileClick = (slotKey: string) => {
        const item = profile[slotKey]
        if(!item) return

        setInventory(prev => prev.some(i => i.uniqueId === item.uniqueId) ? prev
            : [...prev, item])
        setProfile(prev => ({...prev, [slotKey]: null}))
    }

    return (
        <section className="flex left-1 p-8">
            <div>
                <Link href={'/#'}>
                    <button className="bg-gray-300 hover:bg-gray-800 text-black
                    font-bold py-2 rounded">Back</button>
                </Link>
            </div>
            {/*Profile Section */}
            <div className="relative grid grid-cols-3 bg-gray-100 p-8 ml-2 rounded
            max-w[456px] max-h-[548px]">
                <LeftColumn profile={profile} handleProfileClick={handleProfileClick}/>
                <AvatarColumn/>
                <RightColumn profile={profile} handleProfileClick={handleProfileClick}/>
            </div>
            {/*Inventory Section*/}
            <div className="bg-gray-100 p-2 rounded-lg overflow-y-scroll max-w-[355px]
            max-h-[456px] mt-[2px] ml-[750px]">
                <div className="flex justify-center items-center col-span-5 mb-4
                font-bold">Inventory</div>
                {inventory.map(item => (
                    <div
                        className="flex just item border rounded-lg w-[100px] h-[100px]
                        bg-yellow-300 text-center"
                        key={item.uniqueId}
                        onDoubleClick={() => handleInventoryClick(item.uniqueId)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Profile
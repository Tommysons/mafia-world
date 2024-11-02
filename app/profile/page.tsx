"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Item } from '@/types/item'
import initialProfile from '@/constats/initialProfile'
import initialItems from '@/data/initialItems'

const Profile = () => {
    const [inventory, setInventory] = useState<Item[]>(initialItems)
    const [profile, setProfile] = useState<{ [key: string]: Item | null }>(initialProfile)

    //Handle double click on inventory item
    const handleInventoryClick = (uniqueId: string) => {
        const item = inventory.find(i => i.uniqueId === uniqueId)
        if (!item) return;

        // Find the corresponding profile slot based on the item ID
        const slotKey = item.id

        // If the slot is occupied, move the existing item back to inventory
        const existingItem = profile[slotKey]
        if (existingItem) {
            setInventory(prev => [...prev, existingItem])
        }

        // Place the new item in the profile slot
        setProfile(prev => ({
            ...prev,
            [slotKey]: item
        }))

        // Remove the selected item from inventory
        setInventory(prev => prev.filter(i => i.uniqueId !== uniqueId))
    }
    //Handle double click on profile item
    const handleProfileClick = (slotKey: string) => {
        const item = profile[slotKey]
        if (!item) return

        // Return the item back to the inventory
        setInventory(prev => {
            // Check if the item already exists in inventory
            const itemExists = prev.find(i => i.uniqueId === item.uniqueId)
            if (!itemExists) {
                return [...prev, item]; // Add the item back to the inventory
            }
            return prev; // If the item already exists, just return the current inventory
        });

        // Clear the profile slot
        setProfile(prev => {
            const updatedProfile = { ...prev, [slotKey]: null };
            console.log("Updated Profile:", updatedProfile);
            return updatedProfile;
        });
    }


    return (
        <section className='flex left-1 p-8'>
            <div>
                <Link href={`/#`}>
                    <button className='bg-gray-300 hover:bg-gray-400 text-black
                font-bold py-2 px-4 rounded'>Back</button>
                </Link>
            </div>
            <div className='relative grid grid-cols-3 bg-gray-100 p-8 ml-2 rounded-lg 
        max-w-[456px] max-h-[548px]'>
                {/*Left Column */}
                <div className='flex flex-col items-center cursor-pointer -translate-x-[21px] 
            -translate-y-[31px] gap-[2px]'>
                    {/*Helmet */}
                    <div className='bg-white rounded-lg h-[80px] w-[150px]
                    border border-gray-300 text-center'>
                        {Object.keys(profile)
                            .filter((key) => key === 'helmet')
                            .map((key) => (
                                <div
                                    className="flex justify-center items-center h-full"
                                    key={key}
                                    onDoubleClick={() => { handleProfileClick(key) }}
                                >
                                    {profile[key] ? profile[key]?.name : "Helmet"}
                                </div>
                            ))}
                    </div>
                    {/*Necklace */}
                    <div className='bg-white p-2 rounded-lg h-11 w-[150px]
                border border-gray-300 text-center'>
                        {Object.keys(profile)
                            .filter((key) => key === 'necklace')
                            .map((key) => (
                                <div
                                    className='flex justify-center items-center h-full'
                                    key={key}
                                    onDoubleClick={() => { handleProfileClick(key) }}
                                >
                                    {profile[key] ? profile[key]?.name : "Necklace"}
                                </div>
                            ))}
                    </div>
                    {/*Sword*/}
                    <div className='bg-white p-2 rounded-lg h-[200px] w-[150px]
                border border-gray-300 text-center'>
                        {Object.keys(profile)
                            .filter((key) => key === "sword")
                            .map((key) => (
                                <div
                                    className='flex justify-center items-center h-full'
                                    key={key}
                                    onDoubleClick={() => { handleProfileClick(key) }}
                                >
                                    {profile[key] ? profile[key]?.name : "Sword"}
                                </div>
                            ))}
                    </div>
                    {/*Chest*/}
                    <div className='bg-white p-2 rounded-lg h-[150px] w-[150px]
                border border-gray-300 text-center'>
                        {Object.keys(profile)
                            .filter((key) => key === 'chest')
                            .map((key) => (
                                <div
                                    className='flex justify-center items-center h-full'
                                    key={key}
                                    onDoubleClick={() => { handleProfileClick(key) }}
                                >
                                    {profile[key] ? profile[key]?.name : "Chest"}
                                </div>
                            ))}
                    </div>
                    {/*Belt*/}
                    <div className='bg-white p-2 rounded-lg h-[65px] w-[150px]
                border border-gray-300 text-center'>
                        {Object.keys(profile)
                            .filter((key) => key === "belt")
                            .map((key) => (
                                <div
                                    className='flex justify-center items-center h-full'
                                    key={key}
                                    onDoubleClick={() => { handleProfileClick(key) }}
                                >
                                    {profile[key] ? profile[key]?.name : "Belt"}
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/*Avatar column*/}
                <div className='flex flex-col items-center'>
                    {/*Health Bar */}
                    <div className='relative mb-1 bg-red-600 rounded-sm w-32 flex items-center
                    justify-center'>Health Bar</div>
                    {/*Mana bar*/}
                    <div className='relative mb-1 bg-blue-600 rounded-sm w-32 flex items-center
                    justify-center'>Mana Bar</div>
                    <div className='w-[150px] h-[330px] border border-gray-300 bg-gray-400 flex justify-center items-center text-center'>Avatar</div>
                    {/*Achievements*/}
                    <div className='grid grid-cols-3 bg-gray-100 rounded-lg w-full justify-center
                    gap-1 mt-1 cursor-pointer -translate-x-[1px]'>
                        <div className='border rounded-lg h-10 w-11 bg-red-300'>Nr1</div>
                        <div className='border rounded-lg h-10 w-11 bg-red-300'>Nr2</div>
                        <div className='border rounded-lg h-10 w-11 bg-red-300'>Nr3</div>
                        <div className='border rounded-lg h-10 w-11 bg-red-300'>Nr4</div>
                        <div className='border rounded-lg h-10 w-11 bg-red-300'>Nr5</div>
                        <div className='border rounded-lg h-10 w-11 bg-red-300'>Nr6</div>
                    </div>
                </div>
                {/*Right Column*/}
                <div className='flex flex-col items-center cursor-pointer -translate-x-[-20px]
                -translate-y-[31px] gap-[2px]'>
                    {/*Rings together*/}
                    <div className='flex space-x-1'>
                        {/*LE*/}
                        <div className='bg-white p-2 rounded-lg h-10 w-[74px] border
                        border-gray-300 text-center'>
                            {Object.keys(profile)
                                .filter((key) => key === "le")
                                .map((key) => (
                                    <div
                                        className='flex justify-center items-center h-full'
                                        key={key}
                                        onDoubleClick={() => { handleProfileClick(key) }}
                                    >
                                        {profile[key] ? profile[key]?.name : 'LE'}
                                    </div>
                                ))
                            }
                        </div>
                        {/*RE*/}
                        <div className='bg-white p-2 rounded-lg h-10 w-[74px] border
                        border-gray-300 text-center'>
                            {Object.keys(profile)
                                .filter((key) => key === "re")
                                .map((key) => (
                                    <div
                                        className='flex justify-center items-center h-full'
                                        key={key}
                                        onDoubleClick={() => { handleProfileClick(key) }}
                                    >
                                        {profile[key] ? profile[key]?.name : "RE"}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/*Gloves*/}
                    <div className='bg-white p-2 rounded-lg w-[150px] h-[70px]
                        border border-gray-300 text-center'>
                        {Object.keys(profile)
                            .filter((key) => key === "gloves")
                            .map((key) => (
                                <div
                                    className='flex justify-center items-center h-full'
                                    key={key}
                                    onDoubleClick={() => { handleProfileClick(key) }}
                                >
                                    {profile[key] ? profile[key]?.name : "Gloves"}
                                </div>
                            ))
                        }
                    </div>
                    {/*Shield*/}
                    <div className='bg-white p-2 rounded-lg w-[150px] h-[200px]
                        border border-gray-300 text-center'>
                        {Object.keys(profile)
                            .filter((key) => key === "shield")
                            .map((key) => (
                                <div
                                    className='flex justify-center items-center h-full'
                                    key={key}
                                    onDoubleClick={() => { handleProfileClick(key) }}
                                >
                                    {profile[key] ? profile[key]?.name : "Shield"}
                                </div>
                            ))
                        }
                    </div>
                    {/*Pants*/}
                    <div className='bg-white p-2 rounded-lg w-[150px] h-[140px] border
                        border-gray-300 text-center'>
                        {Object.keys(profile)
                            .filter((key) => key === "pants")
                            .map((key) => (
                                <div
                                    className='flex justify-center items-center h-full'
                                    key={key}
                                    onDoubleClick={() => { handleProfileClick(key) }}
                                >
                                    {profile[key] ? profile[key].name : "Pants"}
                                </div>
                            ))
                        }
                    </div>
                    {/*Boots*/}
                    <div className='bg-white p-2 rounded-lg w-[150px] h-[90px] border
                        border-gray-300 text-center'>
                        {Object.keys(profile)
                            .filter((key) => key === "boots")
                            .map((key) => (
                                <div
                                    className='flex justify-center items-center h-full'
                                    key={key}
                                    onDoubleClick={() => { handleProfileClick(key) }}
                                >
                                    {profile[key] ? profile[key]?.name : "Boots"}
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
            {/*Character profile stats */}
            <div className='ml-4'>
                <h1 className='font-bold text-xl'>Character profile:</h1>
                <h2 className='font-bold text-lg'>Fitness:</h2>
                <p>Breath :11111111111111</p>
                <p>Strength</p>
                <p>Healing</p>
                <h2 className='font-bold text-lg'>Ability:</h2>
                <p>Healing rate</p>
                <p>Movement Speed</p>
                <p>Critical hit</p>
                <p>Gathering</p>
                <p>Luck</p>
                <h2 className='font-bold text-lg'>Battle Stats:</h2>
                <p>Attack</p>
                <p>Defense</p>
                <p>Stamina</p>
                <p>Item drop rate</p>
                <p>Healing Received</p>
            </div>
            <div>

            </div>
            {/*Inventory Section on Right Side */}
            <div className='bg-gray-100 p-2 rounded-lg overflow-y-scroll max-h-[456px] w-[355px]
        mt-[2px] ml-[750px]'>
                <div className='flex justify-center items-center col-span-5 mb-4 font-bold'>Inventory</div>
                <div className='grid grid-cols-3 gap-3 cursor-pointer'>
                    {inventory.map(item => (
                        <div
                            className=' flex justify-center items-center border rounded-lg h-[100px] w-[100px] bg-yellow-50 text-center'
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
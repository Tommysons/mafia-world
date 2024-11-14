"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Item } from "@/types/item";
import initialItems from "@/data/initialItems";
import initialProfile from "@/constats/initialProfile";
import LeftColumn from "@/components/LeftColumn";
import AvatarColumn from "@/components/Avatar";
import RightColumn from "@/components/RightColumn";
import Test from "../test/page";

const Profile = () => {
    const [inventory, setInventory] = useState<Item[]>(initialItems);
    const [profile, setProfile] = useState<{ [key: string]: Item | null }>(initialProfile);

    // Inventory
    const handleInventoryClick = (uniqueId: string) => {
        const item = inventory.find(i => i.uniqueId === uniqueId);
        if (!item) return;

        const slotKey = item.id;
        const existingItem = profile[slotKey];
        if (existingItem) setInventory(prev => [...prev, existingItem]);

        setProfile(prev => ({ ...prev, [slotKey]: item }));
        setInventory(prev => prev.filter(i => i.uniqueId !== uniqueId));
    };

    // Profile
    const handleProfileClick = (slotKey: string) => {
        const item = profile[slotKey];
        if (!item) return;

        setInventory(prev => (prev.some(i => i.uniqueId === item.uniqueId) ? prev : [...prev, item]));
        setProfile(prev => ({ ...prev, [slotKey]: null }));
    };

    return (
        <section className="flex flex-col items-center p-4 md:p-8">
            <div className="mb-4">
                <Link href="/#">
                    <button className="bg-gray-300 hover:bg-gray-800 text-black font-bold py-2 px-4 rounded">
                        Back
                    </button>
                </Link>
            </div>

            {/* Responsive Container for Profile and Inventory */}
            <div className="flex flex-col lg:flex-row lg:space-x-8 items-center justify-between">
                
                {/* Profile Section */}
                <div className="inline-flex bg-gray-100 p-[2px] rounded border gap-2 -translate-x-[250px]">
                    <LeftColumn profile={profile} handleProfileClick={handleProfileClick}/>
                    <AvatarColumn />
                    <RightColumn profile={profile} handleProfileClick={handleProfileClick} />
                </div>

                {/*Stats*/}
                <div className="-translate-x-[240px]">
                    <h2 className="font-bold mt-2">Fitness</h2>
                    <p>Breath - increase Stamina</p>
                    <p>Strength - weight</p>
                    <p>Health</p>
                    <h2 className="font-bold mt-3">Ability</h2>
                    <p>Healing Rate: 111111111111111111111111111111111111</p>
                    <p>Movement Speed</p>
                    <p>Critical hit</p>
                    <p>Fishing</p>
                    <p>Gathering</p>
                    <p>Luck</p>
                    <h2 className="font-bold mt-3">Battle Stats</h2>
                    <p>Attack</p>
                    <p>Defense</p>
                    <p>Stamina</p>
                    <p>Item drop rate</p>
                    <p>Healing Received</p>

                </div>
                {/* Inventory Section */}
                <div className="bg-gray-100 p-4 rounded-lg overflow-y-scroll max-h-[300px] md:max-h-[456px] 
                                mt-4 lg:mt-0 lg:ml-8">
                    <div className="flex justify-center items-center font-bold mb-4">Inventory</div>
                    <div className="grid grid-cols-3 gap-2 md:gap-3 cursor-pointer">
                        {inventory.map(item => (
                            <div
                                className="flex items-center justify-center border rounded-lg w-full h-[80px] md:w-[100px] md:h-[100px] bg-yellow-300 text-center"
                                key={item.uniqueId}
                                onDoubleClick={() => handleInventoryClick(item.uniqueId)}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;

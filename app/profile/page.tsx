"use client";
import React, { useState } from "react";
import Link from "next/link";
import LeftColumn from "@/components/LeftColumn";
import AvatarColumn from "@/components/Avatar";
import RightColumn from "@/components/RightColumn";
import { useInventoryProfile } from "@/hooks/useInventoryProfile";
import Inventory from "@/components/Inventory";
import Stats from "@/components/Stats";
import Chat from "@/components/Chat";

const Profile = () => {
    const { inventory, profile, handleInventoryClick, handleProfileClick } = useInventoryProfile();

    return (
        <section className="flex flex-col items-center p-4 md:p-8">
            <div className="mb-4">
                <Link href="/#">
                    <button className="bg-gray-300 hover:bg-gray-800 text-black 
                    font-bold py-2 px-4 rounded">
                        Back
                    </button>
                </Link>
            </div>

            {/* Responsive Container for Profile and Inventory */}
            <div className="flex flex-col lg:flex-row lg:space-x-8 md:grid-cols-2 sm:grid-cols-1 items-center justify-between">
                
                {/* Profile Section */}
                <div className="inline-flex bg-gray-100 p-[2px] rounded border gap-2 lg:-translate-x-[250px]">
                    <LeftColumn profile={profile} handleProfileClick={handleProfileClick}/>
                    <AvatarColumn />
                    <RightColumn profile={profile} handleProfileClick={handleProfileClick} />
                </div>
                {/*Stats*/}
                <div className="lg:-translate-x-[250px]">
                    <Stats/>
                </div>
                {/* Inventory Section */}
                <Inventory inventory={inventory} handleInventoryClick={handleInventoryClick}/>
            </div>
            <div>
                <Chat/>
            </div>
        </section>
    );
};

export default Profile;

import React from "react";
import { Item } from "@/types/item";

interface RightColumnProps {
    profile: {[key: string]: Item | null}
    handleProfileClick: (slotKey: string) => void
}

const RightColumn: React.FC<RightColumnProps> = ({ profile, handleProfileClick }) => (
    <div className="flex flex-col items-center cursor-pointer -translate-x-[-20px]
    -translate-y-[31px] gap-[2px]">
        {/*Earings together*/}
        <div className="flex space-x-1">
            <div className="bg-white p-2 rounded-lg h-10 w-[74px] border border-gray-300 text-center">
                {Object.keys(profile)
                    .filter((key) => key === 'le')
                    .map((key) => (
                        <div
                            className="flex justify-center items-center h-full"
                            key={key}
                            onDoubleClick={()=> {handleProfileClick(key)}}
                        >
                            {profile[key] ? profile[key]?.name : 'LE'}
                        </div>
                    ))
                }
            </div>
            <div className="bg-white p-2 rounded-lg h-10 w-[74px] border border-gray-300 text-center">
                {Object.keys(profile)
                    .filter((key) => key === 're')
                    .map((key) => (
                        <div
                            className="flex justify-center items-start h-full"
                            key={key}
                            onDoubleClick={()=> {handleProfileClick(key)}}
                        >
                            {profile[key] ? profile[key]?.name : "RE"}
                        </div>
                    ))
                }
            </div>
        </div>
        {['gloves', "shield", "pants", "boots"].map(slotKey => (
            <div
                key={slotKey}
                className="flex justify-center items-center bg-white p-2 rounded-lg
                border border-gray-300 text-center"
                style={{height: slotKey === "gloves" ? "70px" : slotKey === "shield" ? "200px"
                    : slotKey === "pants" ? "140px" : "90px", width: "150px"}}
                onDoubleClick={() => handleProfileClick(slotKey)}
            >
                {profile[slotKey] ? profile[slotKey]?.name : slotKey.charAt(0).toUpperCase()
                + slotKey.slice(1)}
            </div>
        ))}
    </div>
)

export default RightColumn
import React from "react";
import { Item } from "@/types/item";

interface LeftColumnProps {
    profile: { [key: string]: Item | null }
    handleProfileClick: (slotKey: string) => void
}

const LeftColumn: React.FC<LeftColumnProps> = ({ profile, handleProfileClick }) => (
    <div className="flex flex-col items-center cursor-pointer -translate-x-[21px]
    -translate-y-[31px] gap-[2px]">
        {['helmet', 'necklace', 'sword', 'chest', 'belt'].map(slotKey => (
            <div
                className="flex justify-center items-center bg-white rounded-lg border
                border-gray-300 text-center"
                key={slotKey}
                style={{
                    height: slotKey === "helmet" ? '80px'
                        : slotKey === "necklace" ? "44px" : slotKey === 'sword' ? "200px"
                            : slotKey === 'chest' ? "150px" : "65px", width: '150px'
                }}
                onDoubleClick={()=> {handleProfileClick(slotKey)}}
            >
                {profile[slotKey] ? profile[slotKey]?.name
                    : slotKey.charAt(0).toUpperCase() + slotKey.slice(1)}
            </div>
        ))}
    </div>
)

export default LeftColumn
import React from "react";
import { Item } from "@/types/item";

interface LeftColumnProps {
    profile: { [key: string]: Item | null}
    handleProfileClick: (slotKey: string) => void
}

const Test: React.FC<LeftColumnProps>=({profile, handleProfileClick}) => (
    <div className="flex flex-col items-center cursor-pointer gap-[2px]">
        {['helmet', 'necklace', 'sword', 'chest', 'belt'].map(slotkey => {
            //Set base dimensions for each item
            let baseHeight, baseWidth
            switch (slotkey) {
                case 'helmet':
                    baseWidth = 150
                    baseHeight = 80
                    break
                case 'necklace':
                    baseWidth = 150
                    baseHeight = 44
                    break
                case "sword":
                    baseWidth = 150
                    baseHeight = 200
                    break
                case 'chest':
                    baseWidth = 150
                    baseHeight = 150
                    break
                case 'belt':
                    baseWidth = 150
                    baseHeight = 65
                    break
                default:
                    baseWidth = 150
                    baseHeight = 70
            }

            //Apply scaling factor to both width and height
            const style = {
                width: `calc(${baseWidth}px * var(--scale-factor))`,
                height: `calc(${baseHeight}px * var(--scale-factor))`
            }
            return(
                <div
                    className="flex justify-center items-center bg-white
                    rounded-lg border border-gray-300 text-center"
                    key={slotkey}
                    style={style}
                    onDoubleClick={() =>handleProfileClick(slotkey)}
                >
                    {profile[slotkey] ? profile[slotkey]?.name 
                    : slotkey.charAt(0).toLocaleUpperCase() + slotkey.slice(1)}
                </div>
            )
        })}
    </div>
)

export default Test
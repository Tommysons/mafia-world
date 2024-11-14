import React from "react";
import { Item } from "@/types/item";

interface RightColumnProps {
    profile: {[key: string]: Item | null}
    handleProfileClick: (slotKey: string) => void
}

const RightColumn: React.FC<RightColumnProps> = ({profile, handleProfileClick}) => (
    <div className="flex flex-col justify-center cursor-pointer gap-[2px]">
        {/*Rings together */}
        <div className="flex space-x-1 justify-center">
            {['le', 're'].map((earKey) => (
                <div
                    key={earKey}
                    className="flex items-center justify-center text-center
                    bg-white p-2 rounded-lg border border-gray-300"
                    style={{
                        width: `calc(74px * var(--scale-factor))`,
                        height: `calc(40px * var(--scale-factor))`
                    }}
                    onDoubleClick={() => handleProfileClick(earKey)}
                >
                    {profile[earKey] ? profile[earKey]?.name
                    : earKey.toUpperCase()}
                </div>
            ))}
        </div>
        {['gloves', 'shield', 'pants', 'boots'].map(slotKey => {
            //Set base diminsions for each item
            let baseWidth, baseHeight
            switch(slotKey){
                case 'gloves':
                    baseWidth = 150
                    baseHeight = 70
                    break
                case 'shield':
                    baseWidth = 150
                    baseHeight = 200
                    break
                case 'pants':
                    baseWidth = 150
                    baseHeight = 140
                    break
                case 'boots':
                    baseWidth = 150
                    baseHeight = 90
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
                    className="flex justify-center items-center bg-white p-2 rounded-lg border
                     border-x-gray-300 text-center text-sm sm:text-base"
                     key={slotKey}
                     style={style}
                     onDoubleClick={()=> handleProfileClick(slotKey)}
                >
                    {profile[slotKey] ? profile[slotKey]?.name
                    : slotKey.charAt(0).toUpperCase() + slotKey.slice(1) }
                </div>
            )
        })}
    </div>
)

export default RightColumn
"use client"

import React from "react"
import { Item } from "@/types/item"

interface InventoryProps{
    inventory: Item[]
    handleInventoryClick:   (uniqueId: string) => void
}

const Inventory: React.FC<InventoryProps> = ({inventory, handleInventoryClick}) => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg overflow-y-scroll max-h-[300p]
        md:max-h-[456px] mt-4 lg:mt-0 lg:ml-8">
            <div className="flex justify-center items-center font-bold mb-4">Inventory</div>
            <div className="grid grid-cols-3 gap-2 md:gap-3 cursor-pointer">
                {inventory.map(item => (
                    <div
                        className="flex items-center justify-center border rounded-lg w-full
                        h-[80px] md:w-[100px] md:h-[100px] bg-yellow-300 text-center"
                        key={item.uniqueId}
                        onDoubleClick={() => handleInventoryClick(item.uniqueId)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Inventory
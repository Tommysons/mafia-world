import React from "react";

const AvatarColumn: React.FC = ()=>(
    <div className="flex flex-col items-center">
        <div className="relative mb-1 bg-red-600 rounded-sm w-32 flex items-center
        justify-center">Health Bar</div>
        <div className="relative mb-1 bg-green-600 rounded-sm w-32 flex items-center
        justify-center">Hunger</div>
        <div className="w-[150px] h-[330px] border border-gray-300 bg-gray-400
        flex justify-center items-center text-center">Avatar</div>
        <div className="grid grid-cols-3 bg-gray-100 rounded-lg justify-center
        gap-1 cursor-pointer -translate-x-[1px]">
            {[...Array(6)].map((_, i) => (
                <div 
                    className="border rounded-lg h-10 w-11 bg-red-300"
                    key={i}
                >Nr{i + 1}</div>
            ))}
        </div>
    </div>
)

export default AvatarColumn
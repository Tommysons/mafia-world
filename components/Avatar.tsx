import React from "react";

const AvatarColumn = ()=>(
    <div className="flex flex-col items-center mt-8">
        <div className="relative mb-1 bg-red-600 rounded-sm flex items-center justify-center
        -translate-y-[30px]"
        style={{width: `calc(180px * var(--scale-factor))`}}
        >
            Health
        </div>
        <div
            className="relative mb-1 bg-green-600 rounded-sm flex items-center justify-center
            -translate-y-[30px]"
            style={{width: `calc(180px * var(--scale-factor))`}}
        >
            Hunger
        </div>
        <div
            className="border border-gray-300 bg-gray-400 flex justify-center items-center text-center
            -translate-y-[20px]"
            style={{
                width: `calc(180px * var(--scale-factor))`,
                height: `calc(330px * var(--scale-factor))`
            }}
        >
            Avatar
        </div>
        <div className="grid grid-cols-3 bg-gray-100 rounded-lg justify-center gap-1 cursor-pointer
        -translate-x-[1px] -translate-y-[10px]">
            {[...Array(6)].map((_, i) =>(
                <div
                    className="border rounded-lg bg-red-300 text-center"
                    key={i}
                    style={{
                        width: `calc(44px * var(--scale-factor))`,
                        height: `calc(40px * var(--scale-factor))`
                    }}
                >
                    Nr{i + 1}
                </div>
            ))}
        </div>
    </div>
)

export default AvatarColumn 
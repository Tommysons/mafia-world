import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (

    <section className="flex left-1 p-8">
      <div>
        <Link href={`/3`}>
          <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">Back</button>
        </Link>
      </div>
      <div className="relative grid grid-cols-3 bg-gray-100 p-8 rounded-lg max-w-5xl">
        {/* Left Column */}
        <div className="flex flex-col items-center justify-between">
        <div className="bg-white p-2 rounded-lg h-[80px] w-[150px] border -translate-x-[30px] -translate-y-[-35px] border-gray-300 text-center mb-4">Helmet</div>
          <div className="bg-white p-2 rounded-lg w-[150px] border -translate-y-[-13px] border-gray-300 text-center">Necklace</div>
          {/* Sword */}
          <div className="flex justify-center items-center h-[200px]">
            <div className="bg-white p-2 rounded-lg h-[200px]  w-[150px] -translate-x-[30px] -translate-y-[-36px] border border-gray-300 text-center">Sword</div>
          </div>
          <div className="bg-white p-2 rounded-lg h-[150px] w-[150px] translate-x-[-30px] -translate-y-[-30px] border border-gray-300 text-center">Chest</div>
        </div>

        {/* Avatar Column */}
        <div className="flex flex-col items-center">
          <div className='relative top-[-20px] bg-red-400 rounded-sm w-32 flex items-center justify-center'>
            Health bar
          </div>
          
          <div className="relative bg-gray-300 rounded-full h-[350px] w-32 flex items-center justify-center mb-4">
            Avatar
          </div>
          <div className="bg-white p-2 rounded-lg h-[90px] w-[148px] -translate-y-[-30px] border border-gray-300 text-center">Belt</div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center justify-between">
        <div className="bg-white p-2 rounded-lg h-10 w-[74px] border  -translate-x-[39px] -translate-y-[-37px] border-gray-300 text-center">LE</div>
          <div className="bg-white p-2 rounded-lg h-10 w-[74px] border -translate-x-[-37px] -translate-y-[3px] border-gray-300 text-center">RE</div>
          <div className="bg-white p-2 rounded-lg h-[80px] w-[150px] -translate-y-[2px]  border border-gray-300 text-center">Gloves</div>
          {/* Shield */}
          <div className="flex justify-center items-center h-[200px]">
            <div className="bg-white p-2 rounded-lg h-[200px] w-[150px] -translate-y-[1px] border border-gray-300 text-center">Shield</div>
          </div>
          <div className="bg-white p-2 rounded-lg h-[150px] w-[150px] border border-gray-300 text-center">Pants</div>
        </div>
      </div>
    </section>
  );
};

export default Page;
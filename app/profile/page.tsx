import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (

    <section className="flex left-1 p-8">
      <div>
        <Link href={`/#`}>
          <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">Back</button>
        </Link>
      </div>
      <div className="relative grid grid-cols-3 bg-gray-100 p-8 rounded-lg max-w-5xl max-h-[549px]">
        {/* Left Column */}
        <div className="flex flex-col items-center justify-between">
          <div className="bg-white p-2 rounded-lg h-[80px] w-[150px] border -translate-x-[30px] -translate-y-[30px] border-gray-300 text-center mb-4">Helmet</div>
          <div className="bg-white p-2 rounded-lg h-11 w-[150px] border -translate-x-[30px] -translate-y-[51px] border-gray-300 text-center">Necklace</div>
          {/* Sword */}
          <div className="flex justify-center items-center h-[200px]">
            <div className="bg-white p-2 rounded-lg h-[200px]  w-[150px] -translate-x-[30px] -translate-y-[57px] border border-gray-300 text-center">Sword</div>
          </div>
          <div className="bg-white p-2 rounded-lg h-[150px] w-[150px] translate-x-[-30px] -translate-y-[62px] border border-gray-300 text-center">Chest</div>
          <div className="bg-white p-2 rounded-lg h-[65px] w-[150px] translate-x-[-30px] -translate-y-[67px] border border-gray-300 text-center">Belt</div>
        </div>

        {/* Avatar Column */}
        <div className="flex flex-col items-center">
          <div className='relative top-[-20px] bg-red-400 rounded-sm w-32 flex items-center justify-center'>
            Health bar
          </div>

          <div className="w-[150px] h-[350px] overflow-hidden relative flex justify-center">
            {/* Wider Avatar positioned absolutely within the container */}
            <div className="bg-gray-300 rounded-full h-[350px] w-[200px] absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center mb-4">
              Avatar
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center justify-between">
          <div className="bg-white p-2 rounded-lg h-10 w-[74px] border  -translate-x-[8px] -translate-y-[30px] border-gray-300 text-center">LE</div>
          <div className="bg-white p-2 rounded-lg h-10 w-[74px] border -translate-x-[-67px] -translate-y-[70px] border-gray-300 text-center">RE</div>
          <div className="bg-white p-2 rounded-lg h-[70px] w-[150px] -translate-x-[-30px] -translate-y-[69px]  border border-gray-300 text-center">Gloves</div>
          {/* Shield */}
          <div className="flex justify-center items-center h-[200px]">
            <div className="bg-white p-2 rounded-lg h-[200px] w-[150px] -translate-x-[-30px] -translate-y-[68px] border border-gray-300 text-center">Shield</div>
          </div>
          <div className="bg-white p-2 rounded-lg h-[140px] w-[150px] -translate-x-[-30px] -translate-y-[67px] border border-gray-300 text-center">Pants</div>
          <div className="bg-white p-2 rounded-lg h-[90px] w-[150px] -translate-x-[-30px] -translate-y-[66px] border border-gray-300 text-center">Boots</div>
        </div>
      </div>
    </section>
  );
};

export default Page;
import React from 'react';

const Page = () => {
  return (
    <section className="flex left-1 p-8">
      <div className="relative grid grid-cols-3 bg-gray-100 p-8 rounded-lg max-w-5xl">
        {/* Left Column */}
        <div className="flex flex-col items-center justify-between">
          <div className="bg-white p-2 rounded-lg h-10 w-10 border -translate-x-[-260px] -translate-y-[-32px] border-gray-300 text-center">LE</div>
          <div className="bg-white p-2 rounded-lg w-[80px] border -translate-y-[-43px] border-gray-300 text-center">Necklace</div>
          {/* Sword */}
          <div className="flex justify-center items-center h-[200px]">
            <div className="bg-white p-2 rounded-lg h-[200px] w-[80px] border border-gray-300 text-center">Sword</div>
          </div>
          <div className="bg-white p-2 rounded-lg h-[150px] w-[150px] border border-gray-300 text-center">Chest</div>
        </div>

        {/* Avatar Column */}
        <div className="flex flex-col items-center">
          <div className='relative top-[-20px] bg-red-400 rounded-sm w-32 flex items-center justify-center'>
            Health bar
          </div>
          <div className="bg-white p-2 rounded-lg h-[80px] w-[80px] border -translate-x-[150px] -translate-y-[-21px] border-gray-300 text-center mb-4">Helmet</div>
          <div className="relative bg-gray-300 rounded-full h-[350px] w-32 flex items-center justify-center mb-4">
            Avatar
          </div>
          <div className="bg-white p-2 rounded-lg h-[70px] w-[100px] border border-gray-300 text-center">Belt</div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center justify-between">
          <div className="bg-white p-2 rounded-lg h-10 w-10 border -translate-y-[-32px] border-gray-300 text-center">RE</div>
          <div className="bg-white p-2 rounded-lg h-[70px] w-[70px] border border-gray-300 text-center">Gloves</div>
          {/* Shield */}
          <div className="flex justify-center items-center h-[200px]">
            <div className="bg-white p-2 rounded-lg h-[200px] w-[80px] -translate-y-3 border border-gray-300 text-center">Shield</div>
          </div>
          <div className="bg-white p-2 rounded-lg h-[150px] w-[150px] border border-gray-300 text-center">Pants</div>
        </div>
      </div>
    </section>
  );
};

export default Page;

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
      <div className="relative grid grid-cols-3 bg-gray-100 p-8 rounded-lg max-w-[456px] max-h-[548px]">

        {/* Left Column */}
        <div className="flex flex-col items-center justify-between cursor-pointer">
          <div className="bg-white p-2 rounded-lg h-[80px] w-[150px] border -translate-x-[22px] -translate-y-[30px] border-gray-300 text-center mb-4">Helmet</div>
          <div className="bg-white p-2 rounded-lg h-11 w-[150px] border -translate-x-[22px] -translate-y-[51px] border-gray-300 text-center">Necklace</div>
          <div className="bg-white p-2 rounded-lg h-[200px] w-[150px] -translate-x-[22px] -translate-y-[57px] border border-gray-300 text-center">Sword</div>
          <div className="bg-white p-2 rounded-lg h-[150px] w-[150px] translate-x-[-22px] -translate-y-[62px] border border-gray-300 text-center">Chest</div>
          <div className="bg-white p-2 rounded-lg h-[65px] w-[150px] translate-x-[-22px] -translate-y-[67px] border border-gray-300 text-center">Belt</div>
        </div>

        {/* Avatar Column */}
        <div className="flex flex-col items-center">
          <div className="relative top-[-20px] bg-red-400 rounded-sm w-32 flex items-center justify-center mb-1">
            Health bar
          </div>
          <div className="relative top-[-20px] bg-blue-400 rounded-sm w-32 flex items-center justify-center mb-1">
            Mana bar
          </div>

          <div className="w-[150px] h-[330px] flex items-center justify-center relative">
            <div className="h-full w-full overflow-hidden flex justify-center items-center">
              <div className="bg-gray-300 h-full w-full flex items-center justify-center">
                Avatar
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 bg-gray-100 rounded-lg w-full justify-center mr-1 gap-2 mt-5 cursor-pointer">
            <div className='border rounded-lg h-10 w-11 bg-red-300'>nr1</div>
            <div className='border rounded-lg h-10 w-11 bg-red-300'>nr2</div>
            <div className='border rounded-lg h-10 w-11 bg-red-300'>nr3</div>
            <div className='border rounded-lg h-10 w-11 bg-red-300'>nr4</div>
            <div className='border rounded-lg h-10 w-11 bg-red-300'>nr5</div>
            <div className='border rounded-lg h-10 w-11 bg-red-300'>nr6</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center justify-between cursor-pointer">
          <div className="bg-white p-2 rounded-lg h-10 w-[74px] border -translate-x-[17px] -translate-y-[30px] border-gray-300 text-center">LE</div>
          <div className="bg-white p-2 rounded-lg h-10 w-[74px] border -translate-x-[-58px] -translate-y-[70px] border-gray-300 text-center">RE</div>
          <div className="bg-white p-2 rounded-lg h-[70px] w-[150px] -translate-x-[-21px] -translate-y-[69px] border border-gray-300 text-center">Gloves</div>
          <div className="flex justify-center items-center h-[200px]">
            <div className="bg-white p-2 rounded-lg h-[200px] w-[150px] -translate-x-[-21px] -translate-y-[68px] border border-gray-300 text-center">Shield</div>
          </div>
          <div className="bg-white p-2 rounded-lg h-[140px] w-[150px] -translate-x-[-21px] -translate-y-[67px] border border-gray-300 text-center">Pants</div>
          <div className="bg-white p-2 rounded-lg h-[90px] w-[150px] -translate-x-[-21px] -translate-y-[66px] border border-gray-300 text-center">Boots</div>
        </div>
      </div>

      <div className='ml-4'>
        <h1 className='font-bold text-xl'>Character profile:</h1>
        <h2 className='font-bold text-lg'>Fitness:</h2>
        <p>Breath</p>
        <p>Strength</p>
        <p>Healing</p>
        <h2 className='font-bold text-lg'>Ability:</h2>
        <p>Healing rate</p>
        <p>Movement Speed</p>
        <p>Critical hit</p>
        <p>Gathering</p>
        <p>Luck</p>
        <h2 className='font-bold text-lg'>Battle Stats:</h2>
        <p>Attack</p>
        <p>Defense</p>
        <p>Stamina</p>
        <p>Item drop rate</p>
        <p>Healing Received</p>
      </div>

      {/* Inventory Section on Right Side */}
      <div className="bg-gray-100 p-2 rounded-lg overflow-y-scroll max-h-[548px] w-[355px] mt-[2px] ml-[750px]">
        <div className="flex justify-center items-center col-span-5 mb-4 font-bold">Inventory</div>
        <div className='grid grid-cols-3 gap-3 cursor-pointer'>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
          <div className="border rounded-lg h-[100px] w-[100px] bg-yellow-200 text-center">Item 1</div>
        </div>
      </div>
      {/* Chat Section */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4">
        <div className="flex flex-col">
          <div className="flex-grow overflow-y-auto">
            {/* Chat messages go here */}
            <p className="p-2 bg-gray-200 rounded-lg mb-2">User1: Hello!</p>
            <p className="p-2 bg-blue-200 rounded-lg mb-2 self-end">User2: Hi there!</p>
            {/* Add more messages as needed */}
          </div>
          <div className="flex mt-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-grow p-2 border rounded-lg focus:outline-none"
            />
            <button className="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

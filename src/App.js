import React from 'react';
import stew from './image/stew.jpg';
import curry from './image/noodles.jpg';
import noodles from './image/curry.jpg';
import './js/index'

function App() {
  return (
    
    <div className='md:grid grid-cols-3 text-gray-600 font-nuni'>
      <div class='md:col-span-1 md:flex md:justify-end'>
        <nav class='text-right'>
          <div class=' items-center justify-between flex'>
            <h1 className='p-4 text-2xl font-bold uppercase'> 
              <a href='/' class='hover:text-gray-800'>Reacttails</a>
            </h1>
            <div class='px-4 cursor-pointer md:hidden'>
              <svg id='burger' class='w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
          <ul class='text-sm mt-6 hidden md:block' id='menu'>
            <li class='py-2 text-gray-700 font-bold'>
              <a class='px-4 flex justify-end border-r-4 border-red-400' href='#'> 
                <span>Home</span>
                <svg class='w-5 ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </a> 
            </li>
            <li class='py-2 text-gray-700 font-bold'>
              <a class='px-4 flex justify-end border-r-4 border-white' href='#'>
                <span>About</span>
                <svg class='w-5 ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </li>
            <li class='py-2 text-gray-700 font-bold'>
              <a class='px-4 flex justify-end border-r-4 border-white' href='#'>
                <span>Contact</span>
                <svg class='w-5 ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div> {/* end of nav */}


      <main class='md:col-span-2 px-16 py-6 bg-gray-100'>

        <div class='flex text-sm justify-center md:justify-end'>
          <a class='btn text-red-400 border-red-400 md:border-2 hover:bg-red-400 hover:text-white ' href='#'>Log In</a>
          <a class='ml-2 text-red-400 btn border-red-400 md:border-2 hover:bg-red-400 hover:text-white' href='#'>Sign Out</a> 
        </div>
 
        <header class=' py-2'>
          <h2 class='text-gray-700 py-3 text-6xl'>Menu</h2>
          <h3 class='text-xl py-2 font-medium'>For Kings</h3>
        </header>

        <div>
          <h4 class='font-bold uppercase pb-8 mt-12 border-b border-gray-200'>Latest Menu</h4>

          <div class='mt-8 grid lg:grid-cols-3 gap-10'>

            {/* cards go here */}

            <div class='card hover:shadow-lg'>
              <img src={stew} alt='stew' class='w-full object-cover h-32 sm:h-48' />
              <div class='m-4'>
                <span class='font-bold'>5 Bean Chilli Stew</span>
                <span class='block text-gray-500 text-sm'>Recipe by Mario</span>
              </div>
              <div class='badge'>
              <svg class='w-5 pr-1 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
                <span>25 mins</span>
              </div>
            </div>
            <div class='card hover:shadow-lg'>
              <img src={curry} alt='stew' class='w-full object-cover h-32 sm:h-48' />
              <div class='m-4'>
                <span class='font-bold'>5 Bean Chilli Stew</span>
                <span class='block text-gray-500 text-sm'>Recipe by Mario</span>
              </div>
              <div class='badge'>
              <svg class='w-5 pr-1 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
                <span>25 mins</span>
              </div>
            </div>
            <div class='card hover:shadow-lg'>
              <img src={noodles} alt='stew' class='w-full object-cover h-32 sm:h-48' />
              <div class='m-4'>
                <span class='font-bold'>5 Bean Chilli Stew</span>
                <span class='block text-gray-500 text-sm'>Recipe by Mario</span>
              </div>
              <div class='badge'>
              <svg class='w-5 pr-1 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
                <span>25 mins</span>
              </div>
            </div>

          </div>

            <h4 class='font-bold uppercase pb-8 mt-12 border-b border-gray-200'>Most Popular</h4>

            <div class='pt-8 pb-8'>
              {/* cards go here */}
            </div>

            <div class='flex'>
              <div className='btn hover:shadow-inner text-sm bg-green-200 text-green-700'>Load more</div>
            </div>

        </div>
      </main>

    </div>

  );
}

export default App;
 
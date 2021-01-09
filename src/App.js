import React from 'react';
import stew from './image/stew.jpg';

function App() {
  return (
    
    <div className='text-pri font-inter'>
      <div>
        <nav>
          <div>
            <h1 className='text-green-600 sm:text-red-600 lg:text-blue-600 p-4 text-3xl font-semibold uppercase border-b border-gray-200 '> 
              <a href='/'>Reacttails</a>
            </h1>
          </div>
          <ul>
            <li class='text-gray-700 font-bold'>
              <a href='#'> 
                <span>Home</span>
              </a> 
            </li>
            <li>
              <a href='#'>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div> {/* end of nav */}


      <main class='px-16 py-6'>

        <div class='flex justify-center md:justify-end'>
          <a href='#'>Log In</a>
          <a class='ml-2' href='#'>Sign Out</a> 
        </div>
 
        <div class='flex items-end'>
          <div class='bg-blue-300 h-8 w-8'></div>
          <div class='bg-blue-600 h-16 w-8'></div>
          <div class='bg-blue-900 h-20 w-8'></div>
        </div>
 
        <header>
          <h2 class='text-gray-700 text-6xl'>Menu</h2>
          <h3 class='text-xl p-2'>For Kings</h3>
        </header>

        <div>
          <h4 class='font-bold uppercase pb-8 mt-12 border-b border-gray-200'>Latest Menu</h4>

          <div class='pt-8 pb-8'>

            {/* cards go here */}

            <div>
              <img src={stew} alt='stew' />
              <div>
                <span>5 Bean Chilli Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>

            <h4 class='font-bold uppercase pb-8 mt-12 border-b border-gray-200'>Most Popular</h4>

            <div class='pt-8 pb-8'>
              {/* cards go here */}
            </div>

            <div>
              <div className='bg-green-300 text-green-900'>Load more</div>
            </div>

          </div>
        </div>
      </main>

    </div>

  );
}

export default App;
 
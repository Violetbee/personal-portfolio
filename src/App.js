import NavBar from './components/NavBar';
import { useState } from 'react';
import HomePage from './pages/HomePage';

function App() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className='bg-zinc-900'>
      <div className='flex flex-col items-center mx-auto min-h-screen pt-20 gap-10 w-11/12 md:w-10/12 lg:w-10/12 xl:max-w-[900px]'>
        <div className='rounded mt-2 w-full px-1 py-2'>
          <NavBar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
        </div>
        <div className='rounded mb-2 min-w-full px-1 py-2 mt-1'>
          <div className='px-1 flex flex-col justify-between'>
            {!menuToggle && <HomePage />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

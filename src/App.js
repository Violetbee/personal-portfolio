import NavBar from './components/NavBar';
import { useState } from 'react';
import HomePage from './pages/HomePage';

function App() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className='bg-[#06283D]'>
      <div className='flex flex-col items-center mx-auto min-h-screen md:pt-5 lg:pt-10 gap-10 w-11/12 md:w-10/12 lg:w-9/12 xl:max-w-[900px]'>
        <div className='mt-2 w-full py-2'>
          <NavBar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
        </div>
        <div className='w-full mt-1'>{!menuToggle && <HomePage />}</div>
      </div>
    </div>
  );
}

export default App;

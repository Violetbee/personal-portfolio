import NavBar from './components/NavBar';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import { useState } from 'react';

function App() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
<<<<<<< HEAD
    <div className='flex flex-col items-center justify-center mx-auto min-h-screen bg-slate-700'>
      <div className='rounded mt-2 w-11/12 md:w-4/5 2xl:w-9/12 px-1 py-2 bg-slate-800 shadow-md shadow-gray-900'>
        <NavBar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      </div>

      <div className='rounded mb-2 w-11/12 md:w-4/5 2xl:w-9/12 px-1 py-2 mt-1 bg-slate-800 shadow-md shadow-gray-900'>
        <div className='px-1 flex flex-col-reverse md:flex-row justify-between'>
          {!menuToggle && <LeftBar />}
          <RightBar />
=======
    <div className='bg-slate-700'>
      <div className='flex flex-col items-center justify-center  mx-auto min-h-screen w-11/12 md:w-10/12 lg:w-10/12 xl:max-w-[1300px]'>
        <div className='rounded mt-2 w-full px-1 py-2 bg-slate-800 shadow-md shadow-gray-900'>
          <NavBar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
        </div>
        <div className='rounded mb-2 min-w-full px-1 py-2 mt-1 bg-slate-800 shadow-md shadow-gray-900'>
          <div className='px-1 flex flex-col-reverse md:flex-row justify-between'>
            {!menuToggle && <LeftBar />}
            <RightBar />
          </div>
>>>>>>> 114e11ee2f12b6c89e61092ad98970049a4b8394
        </div>
      </div>
    </div>
  );
}

export default App;

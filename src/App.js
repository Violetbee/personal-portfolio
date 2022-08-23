import NavBar from './components/NavBar';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import { useState } from 'react';

function App() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className='flex flex-col items-center justify-center mx-auto min-h-screen bg-slate-700'>
      <div className='rounded mt-2 w-11/12 md:4/5 px-1 py-2 bg-slate-800 shadow-md shadow-gray-900'>
        <NavBar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      </div>
      <div className='rounded mt-1 mb-2 w-11/12 md:4/5 px-1 py-2 bg-slate-800 shadow-md shadow-gray-900'>
        <div className='px-1 flex flex-col-reverse md:flex-row justify-between'>
          {!menuToggle && <LeftBar />}
          <RightBar />
        </div>
      </div>
    </div>
  );
}

export default App;

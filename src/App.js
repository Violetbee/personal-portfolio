import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';

function App() {
  return (
    <div className='flex flex-col items-center justify-center mx-auto min-h-screen bg-slate-700'>
      <div className='rounded w-4/5 px-1 py-2 bg-slate-800 shadow-md shadow-gray-900'>
        <NavBar />
      </div>
      <div className='rounded mt-1 w-4/5 px-1 py-2 bg-slate-800 shadow-md shadow-gray-900'>
        <div className='px-1 flex justify-between'>
          <LeftBar />
          <RightBar />
        </div>
      </div>
    </div>
  );
}

export default App;

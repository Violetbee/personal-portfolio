import anime from '../images/randAnime.png';
import dokap from '../images/dokap.jpeg';
import todo from '../images/todoApp.jpeg';
import ninjaRoute from '../images/ninjaRouter.png';
import { Route, Routes } from 'react-router-dom';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import HomePage from '../pages/HomePage';
import SharedLayout from './SharedLayout';
import User from '../pages/User';

const data = [
  {
    id: 0,
    url: anime,
    name: 'Anime Finder',
  },
  {
    id: 1,
    url: dokap,
    name: 'DOKAP App',
  },
  {
    id: 2,
    url: todo,
    name: 'Basic Todo App',
  },
  {
    id: 3,
    url: ninjaRoute,
    name: 'Routing App as ID Matchup',
  },
];

function LeftBar() {
  return (
    <div className='bg-slate-900 w-full md:mr-2 p-1 rounded-md group '>
      <div className='bg-slate-900 w-full mr-2 p-2 text-zinc-200 rounded-md border-4 border-neutral-300 border-opacity-5 border-dashed drop-shadow-lg h-full transition-all duration-300'>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            {/* Index sayesinde sadece nested component'ler display olur */}
            <Route index element={<HomePage />} />
            <Route path='/projects' element={<Projects data={data} />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/user' element={<User />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
export default LeftBar;

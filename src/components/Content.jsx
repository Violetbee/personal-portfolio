import { Route, Routes } from 'react-router-dom';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import HomePage from '../pages/HomePage';
import SharedLayout from './SharedLayout';
import User from '../pages/User';

function Content() {
  return (
    <div className='w-full md:mr-2 p-1 rounded-md group '>
      <div className='w-full mr-2 p-2 text-zinc-200  h-full transition-all duration-300'>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            {/* Index sayesinde sadece nested component'ler display olur */}
            <Route index element={<HomePage />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/user' element={<User />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
export default Content;

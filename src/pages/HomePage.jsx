import { Route, Routes } from 'react-router-dom';
import Projects from '../pages/Projects';
import User from '../pages/User';
import AboutMe from '../components/AboutMe';

function HomePage() {
  return (
    <div className='w-full md:mr-2 p-1 rounded-md group '>
      <div className='w-full p-1'>
        <Routes>
          {/* Index sayesinde sadece nested component'ler display olur */}
          <Route index element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
          <Route path='/user' element={<User />} />
        </Routes>
      </div>
    </div>
  );
}
export default HomePage;

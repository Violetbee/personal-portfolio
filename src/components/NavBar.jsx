import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function NavBar() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className='flex justify-between items-center p-2 '>
      {/* Logo */}
      <div className='text-xl md:text-2xl group'>
        <h2
          style={{ fontFamily: 'Poppins' }}
          className='cursor-pointer before:block before:absolute before:-inset-[6px] before:skew-y-[1.1deg] before:bg-gray-900 relative inline-block shadow-md shadow-yellow-400 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-lg duration-300'
        >
          <span className='relative text-white font-bold'>
            Çağlar Karahüseyin
          </span>
        </h2>
      </div>
      {/* Sağ Menü */}
      <div>
        <div>
          <div
            style={{ fontFamily: 'Poppins' }}
            className='text-indigo-200 hidden md:flex md:flex-row justify-center items-center md:space-x-3 z-20'
          >
            <button className='group'>
              Anasayfa
              <div className='subline  group-hover:opacity-100'></div>
            </button>
            <span className='opacity-50'>·</span>
            <button className='group'>
              Çalışmalarım
              <div className='subline  group-hover:opacity-100'></div>
            </button>
            <span className='opacity-50'>·</span>
            <button className='group'>
              İletişim<div className='subline  group-hover:opacity-100'></div>
            </button>
          </div>
        </div>
        <div className='md:hidden text-zinc-300'>
          <AiOutlineMenu
            onClick={() => {
              setMenuToggle(!menuToggle);
            }}
            className='cursor-pointer'
            size={30}
          />
        </div>
      </div>
      {/* Mobil Menü */}
      {menuToggle && (
        <div
          className='
       absolute flex items-center justify-center h-screen w-screen top-0 left-0 bg-black z-10'
        >
          <div>
            <div className='flex flex-col justify-center items-center space-y-5 text-white '>
              <button className='group'>
                Anasayfa
                <div className='subline  group-hover:opacity-100'></div>
              </button>
              <button className='group'>
                Çalışmalarım
                <div className='subline  group-hover:opacity-100'></div>
              </button>
              <button className='group'>
                İletişim<div className='subline  group-hover:opacity-100'></div>
              </button>
            </div>
          </div>
          <div className='text-white absolute top-10 right-10 cursor-pointer'>
            <AiOutlineClose
              onClick={() => {
                setMenuToggle(!menuToggle);
              }}
              size={30}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default NavBar;

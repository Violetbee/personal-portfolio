import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ReactComponent as BuyMeaCoffee } from '../svg/buymeacoffee.svg';

function NavBar({ menuToggle, setMenuToggle }) {
  // Bu alandan menüyü ayarlayabilirsiniz.
  const navItems = [
    {
      id: 0,
      name: '/home',
      route: '/',
    },
    {
      id: 1,
      name: '/projects',
      route: '/projects',
    },
  ];

  return (
    <div className=' flex justify-between items-center p-2 '>
      {/* Logo */}
      <Link to='/' className='text-xl sm:text-2xl lg:text-3xl group'>
        <h2 style={{ fontFamily: 'monospace' }} className='cursor-pointer '>
          <span className='relative text-white  tracking-widest'>
            Çağlar Karahüseyin
          </span>
        </h2>
      </Link>
      {/* Sağ Menü */}
      <div>
        <div
          style={{ fontFamily: 'Poppins' }}
          className='text-white hidden md:flex md:flex-row justify-center items-center md:space-x-5 z-20'
        >
          {navItems.map((item) => (
            <div key={item.id} className='hover:-translate-y-1 duration-200'>
              <Link to={item.route}>
                <button>{item.name}</button>
              </Link>
              <span className='opacity-30'>·</span>
            </div>
          ))}

          <a
            href='https://www.buymeacoffee.com/caglark'
            target='_blank'
            rel='noopener noreferrer'
            className=''
          >
            <button className='flex hover:-translate-y-1 duration-200'>
              /buymeacoffee
              <BuyMeaCoffee style={{ width: '23px', height: '23px' }} />
            </button>
          </a>
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
       absolute flex items-center justify-center h-screen top-0 left-0 right-0 bottom-0 bg-black z-10'
        >
          <div>
            <div className='flex flex-col justify-center items-center space-y-5 text-white '>
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.route}
                  onClick={() => {
                    setMenuToggle(!menuToggle);
                  }}
                >
                  <button className='hover:-translate-y-1 duration-300'>
                    {item.name}
                  </button>
                </Link>
              ))}
              <a
                href='https://www.buymeacoffee.com/caglark'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='flex hover:-translate-y-1 duration-300'>
                  /buymeacoffee
                  <BuyMeaCoffee style={{ width: '23px', height: '23px' }} />
                </button>
              </a>
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

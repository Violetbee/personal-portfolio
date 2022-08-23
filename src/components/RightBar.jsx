import logo from '../images/resim.jpg';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import { DiReact } from 'react-icons/di';
import {
  SiJavascript,
  SiCsswizardry,
  SiTailwindcss,
  SiMongodb,
} from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { useState } from 'react';

function RightBar() {
  const [readMore, setReadMore] = useState(true);
  return (
    <div className='mb-2 md:flex md:w-48 lg:w-60'>
      <div className='hidden h-full md:flex flex-col justify-between items-center'>
        <div className='h-[48%] bg-slate-900 w-[2px] rounded-full opacity-30'></div>
        <div className='h-[5px] bg-slate-900 w-[5px] rounded-full opacity-30'></div>
        <div className='h-[48%] bg-slate-900 w-[2px] rounded-full opacity-30'></div>
      </div>
      <div className='flex pl-2 flex-row md:flex-col items-center'>
        <div>
          <div className='p-2 w-32 lg:w-40 bg-slate-900 rounded-lg shadow-md'>
            <img className='rounded-md' src={logo} alt='ÇağlarK' />
          </div>
          <h3
            style={{ color: '#fccb00' }}
            className='text-center font-medium drop-shadow-lg shad'
          >
            Hakkımda
          </h3>
        </div>
        <div className='ml-2 md:ml-0'>
          <div className='relative'>
            {readMore && (
              <div className='xl:hidden absolute top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-slate-800/90  w-full h-full'></div>
            )}
            <p
              className={`text-[11px] xs:text-sm text-gray-300 ${
                readMore
                  ? 'line-clamp-2 sm:line-clamp-3 md:line-clamp-5 lg:line-clamp-6'
                  : 'line-clamp-none '
              } xl:line-clamp-none`}
            >
              Merhaba, sayfama hoş geldiniz. İsmim Çağlar Karahüseyin. Yazılım
              Mühendisliği 3. sınıf öğrencisiyim. Javascript ortamında çalışmayı
              seviyorum, kullandığım teknolojiler; JS, ReactJS, TailwindCSS.
              Hedefim MERN Stack seviyesine ulaşmaktır.
            </p>
          </div>
          <div className='flex justify-end md:justify-center'>
            <button
              className='xl:hidden flex font-bold justify-center items-center text-white  '
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? 'Devamını Oku' : 'Kapat'}
            </button>
          </div>
          <div className='w-full mt-2 pl-1 pr-[1px] py-1 bg-slate-900 rounded-md'>
            <Progress
              percent={85}
              status='react'
              theme={{
                react: {
                  symbol: <DiReact style={{ color: '#0693E3' }} />,
                  color: '#0693E3',
                },
              }}
            />
            <Progress
              percent={70}
              status='javascript'
              theme={{
                javascript: {
                  symbol: <SiJavascript style={{ color: '#fccb00' }} />,
                  color: '#fccb00',
                },
              }}
            />
            <Progress
              percent={75}
              status='css'
              theme={{
                css: {
                  symbol: <SiCsswizardry style={{ color: '#9C27B0' }} />,
                  color: '#9C27B0',
                },
              }}
            />
            <Progress
              percent={85}
              status='tailwind'
              theme={{
                tailwind: {
                  symbol: <SiTailwindcss style={{ color: '#DB3E00' }} />,
                  color: '#DB3E00',
                },
              }}
            />
            <Progress
              percent={45}
              status='nodejs'
              theme={{
                nodejs: {
                  symbol: <IoLogoNodejs style={{ color: '#4CAF50' }} />,
                  color: '#4CAF50',
                },
              }}
            />
            <Progress
              percent={35}
              status='mongodb'
              theme={{
                mongodb: {
                  symbol: <SiMongodb style={{ color: '#990b1e' }} />,
                  color: '#990b1e',
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default RightBar;

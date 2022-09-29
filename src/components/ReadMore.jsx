import 'react-sweet-progress/lib/style.css';
import { useState } from 'react';

function RightBar() {
  const [readMore, setReadMore] = useState(true);
  return (
    <div className='mb-2 '>
      <div className='flex pl-2 items-center'>
        <div className='ml-2 md:ml-0'>
          <div className='relative'>
            {readMore && (
              <div className='xl:hidden absolute top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900/90  w-full h-full'></div>
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
          {/* <ProgressComp /> */}
        </div>
      </div>
    </div>
  );
}
export default RightBar;

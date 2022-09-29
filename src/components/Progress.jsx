import {
  SiJavascript,
  SiCsswizardry,
  SiTailwindcss,
  SiMongodb,
} from 'react-icons/si';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import { DiReact } from 'react-icons/di';

import { IoLogoNodejs } from 'react-icons/io';

function ProgressComp() {
  return (
    <div className='w-full mt-2 pl-1 pr-[1px] py-1  rounded-md'>
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
  );
}
export default ProgressComp;

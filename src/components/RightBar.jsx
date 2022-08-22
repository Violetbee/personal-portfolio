import logo from '../images/resim.jpg';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

function RightBar() {
  return (
    <div className='hidden md:flex  md:w-48 lg:w-60'>
      <div className='h-full flex flex-col justify-between items-center'>
        <div className='h-[48%] bg-slate-900 w-[2px] rounded-full opacity-30'></div>
        <div className='h-[5px] bg-slate-900 w-[5px] rounded-full opacity-30'></div>
        <div className='h-[48%] bg-slate-900 w-[2px] rounded-full opacity-30'></div>
      </div>
      <div className='flex pl-2 flex-col justify-center items-center'>
        <div className='p-2 w-32 lg:w-40 bg-slate-900 rounded-lg shadow-md'>
          <img className='rounded-md' src={logo} alt='ÇağlarK' />
        </div>
        <h3 className='text-center font-medium text-amber-300 drop-shadow-lg shad'>
          Hakkımda
        </h3>
        <p className='text-justify text-gray-300 leading-5'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod cumque
          commodi perspiciatis accusamus
        </p>
        <Progress percent={69} />
      </div>
    </div>
  );
}
export default RightBar;

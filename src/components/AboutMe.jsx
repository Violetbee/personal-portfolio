import { ReactComponent as ShakeHand } from '../svg/shake-hand.svg';
import { ReactComponent as GitHubSVG } from '../svg/github.svg';
import { ReactComponent as LinkedIn } from '../svg/linkedin.svg';
import { ReactComponent as Instagram } from '../svg/instagram.svg';
import TypeMe from 'react-typeme';

function AboutMe() {
  return (
    <div className='text-white font-mono flex flex-col gap-28'>
      <div className='flex items-center gap-2'>
        <ShakeHand />
        <p className='text-2xl md:text-3xl font-bold'>
          Hello, I'm Çağlar<TypeMe></TypeMe>
        </p>
      </div>
      <div className='text-xl '>I'm a developer, coffe and tech lover.</div>
      <div className='text-lg space-y-2 items-center gap-1'>
        <p>I like to develop applications in javascript environment.</p>
        <p>
          Currently working on ReactJS, my main goal is to reach Full Stack
          level.
        </p>
      </div>
      <div className='self-end flex gap-3'>
        <a
          href='https://github.com/violetbee'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubSVG style={{ width: '23px', height: '23px' }} />
        </a>
        <a
          href='https://www.linkedin.com/in/caglarkrhsyn/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedIn style={{ width: '23px', height: '23px' }} />
        </a>
        <a
          href='https://instagram.com/caglar.krhsyn'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Instagram style={{ width: '23px', height: '23px' }} />
        </a>
      </div>
    </div>
  );
}
export default AboutMe;

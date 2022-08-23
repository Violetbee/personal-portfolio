import Cards from './Cards';
import anime from '../images/randAnime.png';
import dokap from '../images/dokap.jpeg';
import todo from '../images/todoApp.jpeg';
import ninjaRoute from '../images/ninjaRouter.png';

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
        <div className='grid gap-3 sm:grid-cols-2 xl:grid-cols-4'>
          {data.map((item) => {
            return <Cards id={item.id} url={item.url} name={item.name} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default LeftBar;

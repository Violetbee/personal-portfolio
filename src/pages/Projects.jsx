import Cards from '../components/Cards';
import anime from '../images/randAnime.png';
import dokap from '../images/dokap.jpeg';
import todo from '../images/todoApp.jpeg';
import ninjaRoute from '../images/ninjaRouter.png';

function Projects() {
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
  return (
    <div className='grid gap-3 sm:grid-cols-2'>
      {data.map((item) => {
        return <Cards id={item.id} url={item.url} name={item.name} />;
      })}
    </div>
  );
}
export default Projects;

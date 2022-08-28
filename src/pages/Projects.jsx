import Cards from '../components/Cards';

function Projects({ data }) {
  return (
    <div className='grid gap-3 sm:grid-cols-2'>
      {data.map((item) => {
        return <Cards id={item.id} url={item.url} name={item.name} />;
      })}
    </div>
  );
}
export default Projects;

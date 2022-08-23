function Cards({ id, url, name }) {
  return (
    <div
      key={id}
      className='flex md:flex-col bg-slate-800 rounded-md shadow-md shadow-slate-900 hover:scale-105 duration-300'
    >
      <img
        className='rounded-l-md md:rounded-l-none md:rounded-t-md object-cover w-24 sm:w-20 md:28 md:w-full md:h-32'
        src={url}
        alt='anime'
      />
      <div className='flex flex-col py-2 px-2 md:py-2 md:px-2'>
        <h1 className='text-xl'>{name}</h1>
        <p className='text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          consequatur.
        </p>
      </div>
    </div>
  );
}
export default Cards;

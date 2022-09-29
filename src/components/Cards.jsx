function Cards({ id, url, name }) {
  return (
    <div
      key={id}
      className='flex lg:flex-col gap-1 border-[5px] rounded-md hover:-translate-y-1 duration-300'
    >
      <img
        className='object-cover w-28 xs:w-36 sm:w-44 md:w-28 lg:h-36 lg:w-full'
        src={url}
        alt='anime'
      />
      <div className='flex flex-col py-2 px-2 gap-2 text-white font-mono'>
        <h1 className='text-2xl font-bold'>{name}</h1>
        <p className='text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          consequatur.
        </p>
      </div>
    </div>
  );
}
export default Cards;

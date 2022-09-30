function Cards({ url, name, body, gitUrl }) {
  return (
    <div className='bg-white shadow rounded border border-transparent hover:border-blue-500 '>
      <div
        className='h-32 w-full bg-gray-200 flex flex-col justify-between bg-cover bg-center'
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
      <div className='p-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-gray-600 font-medium'>{name}</h1>
        </div>
        <p className='text-gray-400 text-sm my-1'>Jack cooper</p>
        {body.map((item) => (
          <span
            className={`uppercase  text-xs ${item.color.bg} ${item.color.border} ${item.color.text} p-1 border rounded font-medium `}
          >
            {item.tech}
          </span>
        ))}
      </div>
    </div>
  );
}
export default Cards;

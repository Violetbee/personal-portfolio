import Cards from '../components/Cards';
import anime from '../images/randAnime.png';
import dokap from '../images/dokap.jpeg';
import todo from '../images/todoApp.jpeg';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

function Projects() {
  const data = [
    {
      id: 0,
      imgUrl: anime,
      name: 'Basic Todo App',
      body: [
        {
          tech: 'reactjs',
          color: {
            bg: 'bg-blue-50',
            border: 'border-blue-500',
            text: 'text-blue-500',
          },
        },
        {
          tech: 'expressjs',
          color: {
            bg: 'bg-black-50',
            border: 'border-black-500',
            text: 'text-black-500',
          },
        },
        {
          tech: 'mongodb',
          color: {
            bg: 'bg-green-50',
            border: 'border-green-500',
            text: 'text-green-500',
          },
        },
        {
          tech: 'tailwindcss',
          color: {
            bg: 'bg-red-50',
            border: 'border-red-500',
            text: 'text-red-500',
          },
        },
      ],
      gitUrl: '',
    },
    {
      id: 1,
      imgUrl: dokap,
      name: 'DOKAP App',
      body: [
        {
          tech: 'reactjs',
          color: {
            bg: 'bg-blue-50',
            border: 'border-blue-500',
            text: 'text-blue-500',
          },
        },
        {
          tech: 'expressjs',
          color: {
            bg: 'bg-black-50',
            border: 'border-black-500',
            text: 'text-black-500',
          },
        },
        {
          tech: 'mongodb',
          color: {
            bg: 'bg-green-50',
            border: 'border-green-500',
            text: 'text-green-500',
          },
        },
        {
          tech: 'tailwindcss',
          color: {
            bg: 'bg-red-50',
            border: 'border-red-500',
            text: 'text-red-500',
          },
        },
      ],
      gitUrl: '',
    },
    {
      id: 2,
      imgUrl: todo,
      name: 'Minify Social App',
      body: [
        {
          tech: 'reactjs',
          color: {
            bg: 'bg-blue-50',
            border: 'border-blue-500',
            text: 'text-blue-500',
          },
        },
        {
          tech: 'expressjs',
          color: {
            bg: 'bg-black-50',
            border: 'border-black-500',
            text: 'text-black-500',
          },
        },
        {
          tech: 'mongodb',
          color: {
            bg: 'bg-green-50',
            border: 'border-green-500',
            text: 'text-green-500',
          },
        },
        {
          tech: 'tailwindcss',
          color: {
            bg: 'bg-red-50',
            border: 'border-red-500',
            text: 'text-red-500',
          },
        },
      ],
      gitUrl: '',
    },
  ];

  // eslint-disable-next-line
  const [projects, setProjects] = useState(data.slice(0, data.length)); //post limit sayısı

  const [pageNumber, setPageNumber] = useState(0); //sayfa numarası
  const postsPerPage = 2; //sayfa başına gösterilecek post sayısı
  const pagesVisited = pageNumber * postsPerPage; //geçilen sayfa numarasına kadar olan tüm item'ları hesaplar

  const displayProjects = projects
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((item) => (
      <Cards
        key={item.id}
        gitUrl={item.gitUrl}
        body={item.body}
        id={item.id}
        url={item.imgUrl}
        name={item.name}
      />
    ));

  const pageCount = Math.ceil(projects.length / 3);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    // <div className='flex flex-col gap-10'>
    //   <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 '>
    //     {displayProjects.reverse()}
    //   </div>
    //   <div className='self-center'>
    //     <ReactPaginate
    //       previousLabel='previous'
    //       pageRangeDisplayed={1}
    //       nextLabel='next'
    //       pageCount={pageCount}
    //       onPageChange={changePage}
    //       containerClassName={'paginationButtons'}
    //       activeClassName={'paginationActivated'}
    //       disabledClassName={'paginationDisabled'}
    //     ></ReactPaginate>
    //   </div>
    // </div>
    <div className='text-white text-xl'>
      This page is under construction, check my GitHub repos.
    </div>
  );
}
export default Projects;

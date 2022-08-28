import { useEffect } from 'react';
import { useGit } from '../contexts/gitContext';
import { useQuery } from '@tanstack/react-query';

function HomePage() {
  useEffect(() => {
    fetchGitRepos();
    fetchGitDatas();
  }, []);

  const { gitRepos, fetchGitRepos, gitDatas, fetchGitDatas } = useGit();
  console.log(JSON.stringify(gitDatas, null, 3));

  return (
    <div className='grid md:grid-col-3'>
      <div className='flex gap-x-2 bg-slate-700 rounded-md p-2'>
        <div>
          <img
            className='w-16 rounded-md shadow-md'
            src={gitDatas?.avatar_url}
            alt='GitHub Profile'
          />
        </div>
        <div>
          <h2>GitHub Kullanıcı Adı: {gitDatas?.login}</h2>
        </div>
      </div>
    </div>
  );
}
export default HomePage;

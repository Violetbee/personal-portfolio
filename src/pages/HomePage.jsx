import { useGit } from '../contexts/gitContext';
import { FaQuoteRight } from 'react-icons/fa';
import { RiGitRepositoryFill, RiChatFollowUpFill } from 'react-icons/ri';
import { MdOutlineEmojiPeople } from 'react-icons/md';
import { Link } from 'react-router-dom';

function HomePage() {
  const { gitInfo, isLoadingData, isLoadingRepos } = useGit();
  console.log(JSON.stringify(gitInfo, null, 3));

  return (
    !(isLoadingData && isLoadingRepos) && (
      <div className='grid gap-2 grid-cols-4 font-mono tracking-tight text-slate-900'>
        <div className='flex relative gap-x-2 col-span-4 bg-slate-300 hover:bg-slate-700 hover:text-slate-300 duration-200 rounded-md p-2'>
          <div className='flex flex-col justify-center'>
            <div>
              <h2>GitHub Kullanıcı Adı: {gitInfo.login}</h2>
            </div>
            <div>
              <h3>{gitInfo.bio}</h3>
            </div>
          </div>
          <div className='absolute opacity-5 -top-1 right-0 text-7xl '>
            <FaQuoteRight />
          </div>
        </div>
        {/* Takipçi Sayısı */}
        <Link to='' className='midBoxContainer col-span-1'>
          <div className='midBoxInside'>
            <div className='flex space-x-0 lg:space-x-1 items-center text-xs sm:text-lg'>
              <span className='hidden xl:block text-xs sm:text-2xl'>
                <RiChatFollowUpFill />
              </span>
              <span className='text-center text-xs sm:text-lg'>
                Takipçi Sayısı
              </span>
            </div>
            <span className='text-2xl flex items-center'>
              <span className='block xl:hidden mr-1'>
                <RiChatFollowUpFill />
              </span>
              {gitInfo.followers}
            </span>
          </div>
        </Link>
        {/* Takip Ettiklerim */}
        <Link to='' className='midBoxContainer col-span-1'>
          <div className='midBoxInside'>
            <div className='flex space-x-0 lg:space-x-1 items-center'>
              <span className='hidden xl:block text-xs sm:text-2xl'>
                <MdOutlineEmojiPeople />
              </span>
              <span className='text-center text-xs sm:text-lg'>
                Takip Ettiklerim
              </span>
            </div>
            <span className='text-2xl flex items-center'>
              <span className='block xl:hidden mr-1'>
                <MdOutlineEmojiPeople />
              </span>
              {gitInfo.following}
            </span>
          </div>
        </Link>
        {/* Repository Sayısı */}

        <Link to='' className='midBoxContainer col-span-2'>
          <div className='midBoxInside'>
            <div className='flex space-x-0 lg:space-x-1 items-center'>
              <span className='hidden xl:block text-xs sm:text-2xl'>
                <RiGitRepositoryFill />
              </span>
              <span className='text-center text-xs sm:text-lg'>
                Repository Sayısı
              </span>
            </div>
            <span className='text-2xl flex items-center'>
              <span className='block xl:hidden mr-1'>
                <RiGitRepositoryFill />
              </span>
              {gitInfo.public_repos}
            </span>
          </div>
        </Link>
      </div>
    )
  );
}
export default HomePage;

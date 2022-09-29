import { createContext, useContext } from 'react';
import { Octokit } from 'octokit';
import { useQuery } from '@tanstack/react-query';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
  });

  const fetchGitDatas = async () => {
    const { data } = await octokit.request('/user');
    return data;
  };

  // const fetchGitRepos = async () => {
  //   const { data } = await octokit.request('/user/repos');
  //   return data;
  // };

  const { data: gitInfo, isLoading: isLoadingData } = useQuery(
    ['gitData'],
    fetchGitDatas
  );
  const { data: gitRepos, isLoading: isLoadingRepos } = useQuery(
    ['gitRepos'],
    fetchGitDatas
  );

  const values = { gitInfo, gitRepos, isLoadingData, isLoadingRepos };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const useGit = () => useContext(Context);

export default ContextProvider;

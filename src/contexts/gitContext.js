import { createContext, useContext, useState } from 'react';
import { Octokit } from 'octokit';
import { useQuery } from '@tanstack/react-query';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
  });
  const { isLoading, isFetching, error, data, status } = useQuery();

  const [gitDatas, setGitDatas] = useState({});
  const [gitRepos, setGitRepos] = useState([]);

  const fetchGitDatas = async () => {
    const { data: gitDatas } = await octokit.request('/user');
    setGitDatas(gitDatas);
  };

  const fetchGitRepos = async () => {
    const { data: gitRepos } = await octokit.request('/user/repos');
    setGitRepos(gitRepos);
  };

  const values = { gitDatas, gitRepos, fetchGitDatas, fetchGitRepos };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const useGit = () => useContext(Context);

export default ContextProvider;

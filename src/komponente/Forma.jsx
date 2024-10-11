import React, { useState } from 'react';
import ListaRepozitorija from './ListaRepozitorija';
import Korisnik from './Korisnik';

function Forma() {
  const [githubUsername, setGithubUsername] = useState('');
  const [repositoryList, setRepositoryList] = useState([]);
  const [githubUser, setGithubUser] = useState(null);

  
  const handleInputChange = (event) => {
    setGithubUsername(event.target.value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const repositories = await getRepositories();
    const user = await getUser();
    setRepositoryList(repositories.map(repo => repo.name));
    setGithubUser(user);
    console.log(user);
  };

  const handleReset = () => {
    setGithubUsername('');
    setRepositoryList([]);
    setGithubUser(null);
  };

  const getRepositories = async () => {
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
    const data = await response.json();
    return data;
  }

  const getUser = async () => {
    const response = await fetch(`https://api.github.com/users/${githubUsername}`);
    const data = await response.json();
    return data;
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Github Username:
          <input 
            type="text" 
            value={githubUsername} 
            onChange={handleInputChange} 
            placeholder="e.g. Facebook..."
          />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    {githubUser && <Korisnik avatar_url={githubUser.avatar_url} name={githubUser.name} location={githubUser.location} bio={githubUser.bio} /> }
    {repositoryList && repositoryList.length > 0 ? (<ListaRepozitorija repositoryList={repositoryList} />) : null}
    {githubUser && repositoryList && repositoryList.length > 0 && <button onClick={handleReset}>Reset</button>}
    </>
  );
}

export default Forma;

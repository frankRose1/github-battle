import axios from 'axios';

//for rate limiting, if needed just plug in the values
const id = 'client_id';
const secret = 'client_secret';
const params = `?client_id=${id}&client_secret${secret}`;

/**
 * Get a users github info
 * @param {string} username 
 */
async function getProfile(username){
  const profile = await axios.get(`https://api.github.com/users/${username}`);
  return profile.data;
}

/**
 * Get up to 100 repos for a user from the github api
 * @param {string} username 
 */
function getRepos(username){
  return axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
}

/**
 * Use reduce to get a users start count
 * @param {array} repos 
 */
function getStarCount(repos){
  return repos.data.reduce( (count, {stargazers_count}) => count + stargazers_count, 0);
}

function calcScore({followers}, repos){
  //total score
  return (followers * 3) + getStarCount(repos);
}

function handleError(err){
  console.warn(err);
  return null;
}

async function getUserData(player){
  const [profile, repos] = await Promise.all([
    getProfile(player),
    getRepos(player)
  ]);

  return {
    profile,
    score: calcScore(profile, repos)
  }
}

function sortPlayers(players){
  return players.sort( (a, b) => b.score - a.score);
}

export async function battle(players){
  const results = await Promise.all(players.map(getUserData))
    .catch(handleError);

  return results === null
    ? results
    : sortPlayers(results);
}

export async function fetchPopularRepos(language){
  const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
  const repos = await axios.get(encodedURI)
    .catch(handleError);

  return repos.data.items;
}
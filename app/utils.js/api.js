const axios = require('axios');

//for rate limiting
const id = 'client_id';
const secret = 'client_secret';
const params = `?client_id=${id}&client_secret${secret}`;

/**
 * Get a users github info
 * @param {string} username 
 */
function getProfile(username){
  return axios.get(`https://api.github.com/users/${username}`)
    .then(user => user.data);
}

/**
 * Get up to 100 repos for a user from the github api
 * @param {string} username 
 */
function getRepos(username){
  return axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
    .then(res => res.data);
}

/**
 * Use reduce to get a users start count
 * @param {array} repos 
 */
function getStarCount(repos){
  return repos.data.reduce( (count, repo) => count + repo.stargazers_count, 0);
}

function calcScore(profile, repos){
  const followers = profile.followers;
  const totalStars = getStarCount(repos);
  //total score
  return (followers * 3) + totalStars;
}

function handleError(err){
  console.warn(err);
  return null;
}

function getUserData(player){
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then(([profile, repos]) => {
    return {
      profile,
      score: calcScore(profile, repos)
    }
  });
}

function sortPlayers(players){
  return players.sort( (a, b) => b.score - a.score);
}

module.exports = {
  battle: function(players){
    return axios.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError);
  },
  fetchPopularRepos: function(language){
    const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
    return axios.get(encodedURI)
      .then(res => res.data.items);
  },

};
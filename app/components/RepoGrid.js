const React = require('react');
const PropTypes = require('prop-types');

const RepoGrid = ({repos}) => (
  <ul className="popular-list">
    {repos.map((repo, i) => (
      <li key={repo.name} className="popular-item">
        <p className="popular-rank">#{i + 1}</p>
        <ul className="space-list-items">
          <li>
            <img 
              className="avatar"
              src={repo.owner.avatar_url} 
              alt={`${repo.owner.login}'s picture`}/>
            </li>
            <li><a href={repo.html_url}>{repo.name}</a></li>
            <li>@{repo.owner.login}</li>
            <li>{repo.stargazers_count} stars</li>
        </ul>
      </li>
    ))}
  </ul>
);

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
};

module.exports = RepoGrid;

import React from 'react';
import PropTypes from 'prop-types';

const RepoGrid = ({repos}) => (
  <ul className="popular-list">
    {repos.map(({name, owner, html_url, stargazers_count}, i) => (
      <li key={name} className="popular-item">
        <p className="popular-rank">#{i + 1}</p>
        <ul className="space-list-items">
          <li>
            <img 
              className="avatar"
              src={owner.avatar_url} 
              alt={`${owner.login}'s picture`}/>
            </li>
            <li><a href={html_url}>{name}</a></li>
            <li>@{owner.login}</li>
            <li>{stargazers_count} stars</li>
        </ul>
      </li>
    ))}
  </ul>
);

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
};

export default RepoGrid;

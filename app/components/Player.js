import React from 'react';
import PropTypes from 'prop-types';
import PlayerPreview from './PlayerPreview';

const Profile = ({info}) => (
  <PlayerPreview avatar={info.avatar_url} username={info.login}>
    <ul className="space-list-item">
      {info.name && <li>{info.name}</li>}
      {info.location && <li>{info.location}</li>}
      {info.company && <li>{info.company}</li>}
      <li>Followers: {info.followers}</li>
      <li>Following: {info.following}</li>
      <li>Public Repos: {info.public_repos}</li>
      {info.blog && <li><a href={info.blog} target="_blank">{info.blog}</a></li>}
    </ul>
  </PlayerPreview>
);

Profile.propTypes = {
  info: PropTypes.object.isRequired
}

const Player = ({label, score, profile}) => (
  <div>
    <h1 className="header">{label}</h1>
    <h3 style={{textAlign: 'center'}}>Score: {score}</h3>
    <Profile info={profile} />
  </div>
);

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired
};

export default Player;
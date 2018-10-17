const React = require('react');
const PropTypes = require('prop-types');

const PlayerPreview = ({avatar, username, onReset, id}) => (
  <div>
    <div className="column">
      <img 
        src={avatar} 
        alt={`${username}'s Avatar`} 
        className="avatar"/>
      <h2 className="username">@{username}</h2>
    </div>
    <button className="reset" onClick={ () => onReset(id) }>reset</button>
  </div>
);

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

module.exports = PlayerPreview;
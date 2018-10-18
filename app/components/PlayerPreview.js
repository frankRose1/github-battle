const React = require('react');
const PropTypes = require('prop-types');

const PlayerPreview = (props) => (
  <div>
    <div className="column">
      <img 
        src={props.avatar} 
        alt={`${props.username}'s Avatar`} 
        className="avatar"/>
      <h2 className="username">@{props.username}</h2>
    </div>
    {props.children}
  </div>
);

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

module.exports = PlayerPreview;
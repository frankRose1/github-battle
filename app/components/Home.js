const React = require('react');
const {Link} = require('react-router-dom');

class Home extends React.Component {
  render(){
    return (
      <div className="home-container">
        <h1>Githib Battle: Battle your friends...and stuff</h1>
        <Link to="/battle" className="button">Battle</Link>
      </div>
    )
  }
}

module.exports = Home;
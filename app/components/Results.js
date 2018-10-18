const React = require('react');
const {parse} = require('query-string');
const {Link} = require('react-router-dom');
const {battle} = require('../utils/api');
const Player = require('./Player');
const Loading = require('./Loading');

class Results extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      winner: null,
      loser: null,
      error: null
    }
  }
  componentDidMount(){
    const {playerOneName, playerTwoName} = parse(this.props.location.search);
    battle([
      playerOneName,
      playerTwoName
    ]).then(res => {
      if(!res){
        this.setState({
          error: 'Looks like there was an error! Check to see that both users exist on github.',
          loading: false
        });
        return;
      }
      this.setState({
        loading: false, 
        error: null, 
        winner: res[0],
        loser: res[1]
      })
    })
  }
  render (){
    const {loading, winner, loser, error} = this.state;

    if (loading){
      return <Loading />;
    }

    if (error){
      return (
        <div>
          <p>{error}</p>
          <Link className="button" to="/battle">Try again</Link>
        </div>
      );
    }

    return (
      <div className="row">
        <Player
          label="Winner"
          score={winner.score}
          profile={winner.profile}/>
        <Player
          label="Loser"
          score={loser.score}
          profile={loser.profile}/>
      </div>
    )
  }
}

module.exports = Results;
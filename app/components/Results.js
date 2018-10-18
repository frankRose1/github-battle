import React from 'react';
import {parse} from 'query-string';
import {Link} from 'react-router-dom';
import {battle} from '../utils/api';
import Player from './Player';
import Loading from './Loading';

class Results extends React.Component {
  
  state = {
    loading: true,
    winner: null,
    loser: null,
    error: null
  }

  async componentDidMount(){
    const {playerOneName, playerTwoName} = parse(this.props.location.search);
    const players = await battle([
      playerOneName,
      playerTwoName
    ]);
    
    if(!players){
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

export default Results;
import React from 'react';
import {Link} from 'react-router-dom';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';


class Battle extends React.Component {

  state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }

  handleReset = (id) => {
    this.setState({
      [`${id}Name`]: '',
      [`${id}Image`]: null
    });
  }

  handleSubmit = (id, username) => {
    this.setState({
      [`${id}Name`]: username,
      [`${id}Image`]: `https://github.com/${username}.png?size=200`
    });
  }

  render(){
    const {playerOneName, playerTwoName, playerOneImage, playerTwoImage} = this.state;
    const {match} = this.props;
    return (
      <div>
        <div className="row">
          {!playerOneName 
            ? <PlayerInput 
                id="playerOne"
                label="Player One"
                onSubmit={this.handleSubmit}/>
            : <PlayerPreview
                avatar={playerOneImage}
                username={playerOneName}>
                  <button className="reset" onClick={ () => this.handleReset('playerOne') }>reset</button>
                </PlayerPreview> }
          {!playerTwoName
            ? <PlayerInput 
                id="playerTwo"
                label="Player Two"
                onSubmit={this.handleSubmit}/>
            : <PlayerPreview
                avatar={playerTwoImage}
                username={playerTwoName}>
                  <button className="reset" onClick={ () => this.handleReset('playerTwo') }>reset</button>
                </PlayerPreview> }
        </div>
        {playerOneImage && playerTwoImage && 
        <Link
          className="button" 
          to={{
            pathname: `${match.url}/results`,
            search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
          }}>
            Battle!
          </Link>}
      </div>
    )
  }
}

export default Battle;
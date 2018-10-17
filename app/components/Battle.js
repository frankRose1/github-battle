const React = require('react');
const PlayerInput = require('./PlayerInput');
const PlayerPreview = require('./PlayerPreview');

class Battle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(id){
    this.setState({
      [`${id}Name`]: '',
      [`${id}Image`]: null
    });
  }

  handleSubmit(id, username){
    this.setState({
      [`${id}Name`]: username,
      [`${id}Image`]: `https://github.com/${username}.png?size=200`
    });
    console.log(this.state)
  }

  render(){
    const {playerOneName, playerTwoName, playerOneImage, playerTwoImage} = this.state;
    return (
      <div className="row">
        {!playerOneName 
          ? <PlayerInput 
              id="playerOne"
              label="Player One"
              onSubmit={this.handleSubmit}/>
          : <PlayerPreview
              id="playerOne"
              avatar={playerOneImage}
              username={playerOneName}
              onReset={this.handleReset}/> }
        {!playerTwoName
          ? <PlayerInput 
              id="playerTwo"
              label="Player Two"
              onSubmit={this.handleSubmit}/>
          : <PlayerPreview
              id="playerTwo"
              avatar={playerTwoImage}
              username={playerTwoName}
              onReset={this.handleReset}/> }
      </div>
    )
  }
}

module.exports = Battle;
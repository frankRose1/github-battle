const React = require('react');
const PropTypes = require('prop-types');

class PlayerInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({username: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.props.id, this.state.username);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} className="column">
        <label className="header" htmlFor="username">{this.props.label}</label>
        <input 
          id='username'
          placeholder='github username'
          type='text'
          value={this.state.username}
          autoComplete='off'
          onChange={this.handleChange}/>
        <button
          type="submit"
          className="button"
          disabled={!this.state.username}>
            Submit
        </button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

PlayerInput.defaultProps = {
  label: 'Username',
}

module.exports = PlayerInput;
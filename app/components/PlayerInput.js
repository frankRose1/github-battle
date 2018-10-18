import React from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends React.Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }
  
  static defaultProps = {
    label: 'Username',
  }

  state = {
    username: ''
  }

  handleChange = (e) => {
    const val = e.target.value;
    this.setState({username: val});
  }

  handleSubmit = (e) => {
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

export default PlayerInput;
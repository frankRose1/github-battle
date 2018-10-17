const React = require('react');
const PropTypes = require('prop-types');

const SelectedLanguage = props => (
  <ul className="languages">
  {props.languages.map(lang => (
    <li
      style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
      onClick={ () => props.updateLanguage(lang)}
      key={lang}>
      {lang}
    </li>
  ))}
</ul>
);

SelectedLanguage.propTypes = {
  languages: PropTypes.array.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired
}




class Popular extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  
  updateLanguage(lang){
    this.setState({selectedLanguage: lang})
  }

  render(){
    const languages = ['All', 'JavaScript', 'Ruby', 'Python', 'CSS', 'Java'];
    return (
      <div>
        <SelectedLanguage 
        languages={languages}
        selectedLanguage={this.state.selectedLanguage}
        updateLanguage={this.updateLanguage}/>
      </div>
    )
  }
}

module.exports = Popular;
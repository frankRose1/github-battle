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

module.exports = SelectedLanguage;
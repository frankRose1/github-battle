const React = require('react');
const SelectedLanguage = require('./SelectedLanguage');
const RepoGrid = require('./RepoGrid');
const {fetchPopularRepos} = require('../utils/api');
const Loading = require('./Loading');


class Popular extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    }

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  
  updateLanguage(lang){
    this.setState({
      selectedLanguage: lang,
      repos: null
    });
    fetchPopularRepos(lang)
      .then(repos => {
        this.setState({repos})
      });
  }

  componentDidMount(){
    this.updateLanguage(this.state.selectedLanguage);
  }

  render(){
    const languages = ['All', 'JavaScript', 'Ruby', 'Python', 'CSS', 'Java'];
    return (
      <div>
        <SelectedLanguage 
          languages={languages}
          selectedLanguage={this.state.selectedLanguage}
          updateLanguage={this.updateLanguage}/>
          {!this.state.repos
            ? <Loading />
            : <RepoGrid
                repos={this.state.repos}/>}
      </div>
    )
  }
}

module.exports = Popular;
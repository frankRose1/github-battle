import React from 'react';
import SelectedLanguage from './SelectedLanguage';
import RepoGrid from './RepoGrid';
import {fetchPopularRepos} from '../utils/api';
import Loading from './Loading';


class Popular extends React.Component {
    
    state = {
      selectedLanguage: 'All',
      repos: null
    }

  updateLanguage = async (lang) => {
    this.setState({
      selectedLanguage: lang,
      repos: null
    });

    const repos = await fetchPopularRepos(lang);
    this.setState({repos});
  }

  componentDidMount(){
    this.updateLanguage(this.state.selectedLanguage);
  }

  render(){
    const {selectedLanguage, repos} = this.state;
    const languages = ['All', 'JavaScript', 'Ruby', 'Python', 'CSS', 'Java'];
    return (
      <div>
        <SelectedLanguage 
          languages={languages}
          selectedLanguage={selectedLanguage}
          updateLanguage={this.updateLanguage}/>
          {!repos
            ? <Loading />
            : <RepoGrid
                repos={repos}/>}
      </div>
    )
  }
}
export default Popular;
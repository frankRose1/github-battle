import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Popular from './Popular';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Results  from './Results';

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/battle" component={Battle} />
          <Route path="/battle/results" component={Results} />
          <Route path="/popular" component={Popular} />
          <Route render={() => <p style={{textAlign: 'center', fontSize: '35px'}}>Shoot! File Not Found :(</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
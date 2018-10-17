const React = require('react');
const Popular = require('./Popular');
const {Route, Switch} = require('react-router-dom');
const Nav = require('./Nav');
const Home = require('./Home');
const Battle = require('./Battle');

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/battle" component={Battle} />
          <Route path="/popular" component={Popular} />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
      </div>
    );
  }
}

module.exports = App;
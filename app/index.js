const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
require('./index.css');
const App = require('./components/App');


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
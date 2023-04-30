import { Router, Route } from 'preact-router';
import { render } from 'preact';
import { Home } from './home/home';

const Main = () => (
  <Router>
    <Route path={'/'} component={Home} />
  </Router>
);

render(<Main />, document.body);
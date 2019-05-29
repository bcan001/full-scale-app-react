/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import NoMatch from './Screens/NoMatch';
// import Home from './Screens/Home';
// import About from './Screens/About';
// import About from './Screens/Users';

// switched from lazy to loadable. EVERY SCREEN IS A CLASS COMPONENT THAT GETS LOADED ASYNCRONOUSLY
const HomeAsync = loadable(() => import('./Screens/Home'), {
  fallback: <div>Loading...</div>,
});
const AboutAsync = loadable(() => import('./Screens/About'), {
  fallback: <div>Loading...</div>,
});
const UsersAsync = loadable(() => import('./Screens/Users'), {
  fallback: <div>Loading...</div>,
});

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth) {
          // eslint-disable-next-line react/jsx-no-undef
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: '/',
              // eslint-disable-next-line react/prop-types
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

class App extends PureComponent {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={HomeAsync} />
            <Route path="/about/" component={AboutAsync} />
            <PrivateRoute path="/users/" auth component={UsersAsync} />
            <Route component={NoMatch} />
          </Switch>
          <div>footer</div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {};

export default App;

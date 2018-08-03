import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import PageNotFound from './containers/PageNotFound/PageNotFound';


class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/users" exact activeStyle={{color: '#20B2AA'}}>Users</NavLink></li>
              <li><NavLink to={{pathname: '/courses'}} exact activeStyle={{color: '#20B2AA'}}>Courses</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/users" exact component={Users} />
          <Route path="/courses" component={Courses} />
          <Redirect from='/all-courses' to='/courses' />
          <Route path='/' component={PageNotFound} />
        </Switch> 
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

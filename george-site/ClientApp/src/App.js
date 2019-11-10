import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Jobs } from './components/Jobs';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUniversity, faUserTie, faBriefcase } from '@fortawesome/free-solid-svg-icons';

library.add(faHome);
library.add(faUniversity);
library.add(faUserTie);
library.add(faBriefcase);

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Jobs} />
        <Route path='/jobs' component={Jobs} />
            <Route path='/education' component={Education} />
            <Route path="/projects" component={Projects} />
        </Layout>
        
    );
  }
}

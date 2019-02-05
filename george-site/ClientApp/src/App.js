import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Jobs } from './components/Jobs';
import { Education } from './components/Education';


export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/jobs' component={Jobs} />
        <Route path='/education' component={Education} />
        </Layout>
        
    );
  }
}

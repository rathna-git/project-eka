import React from 'react';
import {Switch, Route} from 'react-router-dom';


import './App.css';

import MiniHeader from './components/mini_header/mini_header.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about/about.component';

function App() {
  return (
    <div className="App">
      <MiniHeader />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about-us' component={AboutPage} />
      </Switch>
     </div>
  );
}

export default App;

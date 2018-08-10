import React, { Component } from 'react';
import {render} from 'react-dom';
import { Switch , BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.js';
import Homepage from './components/homepage.js';
import NotFound from './components/notfound.js';
import Artist from './components/artist.js'
import ArtistData from './data/artistdata.js';

const App = () => (
    <div>
      <div className="container">
        <header id="gmg-header">  
          <Navbar />
        </header>
      </div>  
            
      <div id="gmg-body">
        <BrowserRouter>
          <Switch>
            <Route exact path = "/" component = {Homepage} />
            <Route path ="/artist">
              <Artist artistData={ArtistData} />
            </Route>
            <Route component = {NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
)

export default App;
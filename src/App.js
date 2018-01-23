import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Film from "./film.js";
import Detail from "./detail.js";
import TMDB from "./TMDB.js";

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="film-library">

            <Film allFilms={TMDB.films} />


            <div className="film-details">
              <h1 className="section-title">DETAILS</h1>
            </div>
         </div>
      </div>
    );
  }
}

export default App;

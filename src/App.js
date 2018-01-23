import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Film from "./film.js";
import Detail from "./detail.js";
import TMDB from "./TMDB.js";

class App extends Component {

   handleClick = (event) => {
      
      console.log(event);
   }

  render() {
    return (
      <div className="App">
         <div className="film-library" >

            <Film allFilms={TMDB.films} clickCallback={this.handleClick}/>


            <div className="film-details">
              <h1 className="section-title">DETAILS</h1>
            </div>
         </div>
      </div>
    );
  }
}

export default App;

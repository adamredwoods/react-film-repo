import React, { Component } from 'react';
import './App.css';
import Film from "./film.js";
import Detail from "./detail.js";
import TMDB from "./TMDB.js";



class App extends Component {

   constructor(props) {
      super(props);
      this.state = {
         movieData: {}
      }
   }

   handleClick = (data) => {
      const url = `https://api.themoviedb.org/3/movie/${data}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
      console.log(data);
      fetch(url).then(response => {
        response.json().then(data => {
          //console.log(data) // take a look at what you get back!
          this.setState({ movieData: data});
       });
     });
   }

  render() {
    return (
      <div className="App">
         <div className="film-library" >

            <Film allFilms={TMDB.films} clickCallback={this.handleClick}/>
            <Detail movie={this.state.movieData}/>


         </div>
      </div>
    );
  }
}

export default App;

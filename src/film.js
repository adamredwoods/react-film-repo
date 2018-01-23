import React, {Component} from "react";


const FilmRow = (item) => {

}


class Film extends Component {
   render() {
      let prefix = "https://image.tmdb.org/t/p/w780";

      return (
         <div className="film-list">
           <h1 className="section-title">FILMS</h1>
           {this.props.allFilms.map( film=>
             <div className="film-row">
                 <img className="film-poster" src={prefix+film.poster_path} />
                 <div className="film-summary"><h1>{film.title}</h1></div>
             </div>
           )}
        </div>
     )
  }
}


export default Film;

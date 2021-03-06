import React from "react";

const PREFIX = "https://image.tmdb.org/t/p/w780";

const FilmRow = (props) => {
   // console.log(props);
   return (
      <div className="film-row" id={props.item.id} onClick={props.clickCallback.bind(this, props.item.id)}>
          <img className="film-poster" src={PREFIX+props.item.poster_path} alt={props.item.title}/>
          <div className="film-summary"><h1>{props.item.title}</h1></div>
      </div>
   )
}


const Film = (props) => {

   return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {props.allFilms.map( film=>(
          <FilmRow item={film} key={film.id} clickCallback={props.clickCallback}/>
       )
      )}
     </div>
  )
}


export default Film;

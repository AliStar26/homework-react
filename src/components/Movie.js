import React from "react";

function Movie(props) {
  const { title, director, releaseYear, country } = props;

  return (
    <div>
      <h1>Любимый фильм: {title}</h1>
      <p>Режиссер: {director}</p>
      <p>Год выпуска: {releaseYear}</p>
      <p>Страна: {country}</p>
    </div>
  );
}

export default Movie;

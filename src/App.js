import "./App.css";
import Movie from "./components/Movie";

function App() {
  const favoriteMovie = {
    title: "Остров проклятых",
    director: "Мартин Скорсезе",
    releaseYear: "2010",
    country: "США",
  };
  return (
    <div className="App">
      <Movie
        title={favoriteMovie.title}
        director={favoriteMovie.director}
        releaseYear={favoriteMovie.releaseYear}
        country={favoriteMovie.country}
      />
    </div>
  );
}

export default App;

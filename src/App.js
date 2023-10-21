import "./App.css";
import bayterek from "./img/bayterek.jpg";
import shatyr from "./img/shatyr.jpg";
function App() {
  return (
    <div className="App">
      <h1>Astana</h1>
      <p>Страна: Kazakhstan</p>
      <p>Год основания: 1991</p>
      <h2>Достопримечательности</h2>
      <div className="attractions">
        <img className="photo" src={bayterek} alt="Достопримечательность 1" />
        <img className="photo" src={shatyr} alt="Достопримечательность 2" />
      </div>
    </div>
  );
}

export default App;

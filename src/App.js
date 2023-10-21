import "./App.css";
import Jobs from "./components/Jobs";
import Shakespeare from "./components/Shakespeare";

function App() {
  return (
    <div className="App">
      <Shakespeare />
      <Jobs
        title="Гамлет"
        description="Трагедия Уильяма Шекспира о принце Гамлете Датском."
      />
      <Jobs
        title="Ромео и Джульетта"
        description="Трагедия Уильяма Шекспира о любви Ромео и Джульетты."
      />
    </div>
  );
}

export default App;

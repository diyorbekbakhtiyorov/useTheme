import logo from "./logo.svg";
import "./App.css";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { setTheme } = useTheme();

  function darkTheme(params) {
    setTheme("dark");
  }
  function lightTheme(params) {
    setTheme("light");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit src/App.js and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="center">
          <button onClick={() => lightTheme()}>Light</button>
          <button onClick={() => darkTheme()}>Dark</button>
        </div>
      </header>
    </div>
  );
}

export default App;

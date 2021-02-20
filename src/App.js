import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

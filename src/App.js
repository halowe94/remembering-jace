import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import "react-bootstrap";
//import MainDiv from "./MainDiv/MainDiv";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

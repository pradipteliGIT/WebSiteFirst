import "./App.css";
import Header from "./Components/Header/Header";
import Routing from "./Components/Routing/Routing";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routing />
      </Router>
    </div>
  );
}

export default App;

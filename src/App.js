import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FrontPage from "./Components/FrontPage/FrontPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer/Footer";
import Features from "./Components/Features/Features";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path={"/"} element={<FrontPage/>}/>
          <Route path={"/Features"} element={<Features/>}/>
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;

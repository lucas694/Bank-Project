import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Transactions from "./Components/Transactions";
import Organize from "./Components/Organize";
import Notifications from "./Components/Notifications";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Features/>
      <Transactions/>
      <Organize/>
      <Notifications/>

    </div>
  );
}

export default App;

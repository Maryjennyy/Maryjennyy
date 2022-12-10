import './App.css';
import About from './components/About';
import Cert from './components/Cert';
import Educ from './components/Educ';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Educ />
      <Cert />
    </div>
  );
}

export default App;

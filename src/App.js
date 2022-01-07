import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
      <Switch>
        
        <Route path="/" exact component={Home}>
        </Route>

        <Route path="/about" component={About}>
        </Route>
      
        <Route path="/menu" component={Menu}>
        </Route>
        <Route path="/contact" component={Contact}>
        </Route>
      </Switch>
        <Footer/>
      </Router>
      </div>
  );
}

export default App;

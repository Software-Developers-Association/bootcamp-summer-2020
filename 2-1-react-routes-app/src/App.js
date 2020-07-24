import React from 'react';
import Home from './components/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// A really good example of using destructoring
import {
  BrowserRouter as Router,// Import BrowserRouter with the alias Router
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { About } from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>

      <Footer />
      </Router>
    </div>
  );
}

export default App;

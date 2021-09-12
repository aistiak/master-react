import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Page404 from "./components/Page404";
import Gallery from "./components/Gallery";
import Secret from "./components/Secret";
import PrivateRoute from "./components/Route/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/secret">Secret</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/gallery">
            {/* has nested routing example */}
            <Gallery />
          </Route>
          <Route path="/gallery">
            {/* has nested routing example */}
            <Gallery />
          </Route>
          {/* exmaple of private route */}
          <PrivateRoute path="/secret" exact>
            <Secret />
          </PrivateRoute>

          {/* implementing 404 page */}
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

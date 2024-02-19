import React from "react";
import Projectheader from "./components/Projectheader";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Users from "./components/IndividualIntervalsExample";
import Hireme from "./components/Hireme";
import Resume from "./components/resume.pdf"
import Contact from "./components/Contact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      
      <div>
        <nav className="navbar navbar-expand-lg bg-secondary">
          <div className="container-fluid">
          <Link className="navbar-brand" to="/">My Portfolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
              Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">Skills</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Others </Link>
              <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="hireme">Hire Me</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/clients">My Happy Clients</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href={Resume} target="_blank"
                    rel="noreferrer">My Resume</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/contact">Contact me</Link></li>
          </ul>
            </li>
          </ul>
            </div>
          </div>
        </nav>

        

        
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/projects">
            <Projectheader/>
          </Route>
          <Route exact path="/skills">
            <Skills/>
          </Route>
          <Route exact path="/clients">
            <Users/>
          </Route>
          <Route exact path="/hireme">
            <Hireme/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}
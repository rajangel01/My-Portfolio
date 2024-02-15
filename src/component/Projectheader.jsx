import React from 'react'

import Projects from './Projects';
import Frontend from './Frontend';
import Fullstack from './Fullstack';
import Reactproject from './Reactproject';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // Redirect,
  // useLocation
} from 'react-router-dom';

function Projectheader() {
  return (
    <>
    <Router>
    <nav className="navbar bg-success my-3">
  <div className="container-fluid my-2 ">
  <h3 className='text-center'>Projects...</h3>
  </div>
</nav>

<div className="container text-center bg-dark text-white">
  <div className="row">
    <div className="col">
    <Link className="dropdown-item" to="/">All Projects</Link>
    </div>
    <div className="col">
    <Link className="dropdown-item" to="/allfrontend"> Frontend</Link>
    </div>
    <div className="col">
    <Link className="dropdown-item" to="/reactproject">React</Link>
    </div>
    <div className="col">
    <Link className="dropdown-item" to="/fullstack">Full Stack</Link>
    </div>
    
  </div>
</div>

        {/* <div className="dropdown text-center my-2">
          
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select Here Projects
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/"> My All Projects</Link></li>
    <li>
      <hr className='dropdown-divider' />
    </li>
    <li><Link className="dropdown-item" to="/allfrontend"> Frontend Projects</Link></li>
    <li>
      <hr className='dropdown-divider' />
    </li>
    <li><Link className="dropdown-item" to="/reactproject">React JS Projects</Link></li>
    <li>
      <hr className='dropdown-divider' />
    </li>
    <li><Link className="dropdown-item" to="/fullstack">Full Stack Projects</Link></li>
  </ul>
</div> */}
<Switch>
  <Route exact path='/'>
    <Projects/>
  </Route>

  <Route exact path='/allfrontend'>
    <Frontend/>
  </Route>

  <Route exact path='/reactproject'>
    <Reactproject/>
  </Route>

  <Route exact path='/fullstack'>
    <Fullstack/>
  </Route>
</Switch>
</Router>
    </>
  )
}

export default Projectheader

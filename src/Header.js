import React from 'react';
import {Link} from 'react-router-dom'
import './index.css';

function Header() {
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light header">
        <Link className="navbar-brand mscolor">Migrant Assignment</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to='/' className="links nav-link">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="links nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="links nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Header;
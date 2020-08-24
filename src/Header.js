import React from 'react';
import {Link} from 'react-router-dom'
import './index.css';

function Header() {
  return(
    <div>
      <nav className="header">
        <div>
          <h2 className="mscolor">Migrant Assignment</h2>
        </div>
        
        <ul>
          <li><Link to='/' className="links">Home</Link></li>
          <li><Link to='/about' className="links">About</Link></li>
          <li><Link to='/contact' className="links">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}
export default Header;
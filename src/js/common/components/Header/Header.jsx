import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends PureComponent {
  render() {
    const { pathname } = this.props.location;

    const isHome = pathname === '/';
    const isTracking = pathname === '/tracking';

    return (
      <header className="globalHeader">
        <ul>
          <li className={!isHome ? 'active' : ''}>
            {
              isHome ?
                'Home' : <Link to="/">Home</Link>

            }
          </li>
          <li className={!isTracking ? 'active' : ''}>
            {
              isTracking ?
                'Tracking' : <Link to="/tracking">Tracking</Link>
            }
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;

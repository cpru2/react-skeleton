import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header>

          <div className="logo">
            places ive been
          </div>

          <nav>
            <ul>
              <li className="first">
                <Link to='/'>map</Link>
              </li>
              <li>
                <Link to='/About'>about</Link>
              </li>
            </ul>
          </nav>

        </header>
      </div>
    );
  }
}

export default Header;

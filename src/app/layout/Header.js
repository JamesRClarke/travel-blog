import React from 'react'
import {NavLink} from 'react-router-dom'
class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar"
        aria-label="main navigation"
        style={{
          borderBottom: 'solid 1px #dddddd',
        }}>
        <div className="navbar-brand">
          <NavLink
            className="navbar-item"
            to="/"
            activeClassName="is-active"
            >
          </NavLink>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              to="/blog"
              activeClassName="is-active"
              >
              <span className="icon" style={{ marginRight: 5 }}>
                <i className="fa fa-plane" aria-hidden="true"></i>
              </span>
              My Journey
            </NavLink>
          </div>
          <div className="navbar-end">
            <NavLink
              className="navbar-item"
              to="/"
              activeClassName="is-active">
              Destinations
            </NavLink>
            <NavLink
              className="navbar-item"
              to="/"
              activeClassName="is-active">
              Food
            </NavLink>
            <div className="navbar-item">
            <a href="https://www.instagram.com/jamesrclarkee/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header

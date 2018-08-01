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
      <nav className="navbar" aria-label="main navigation">
        <button className="button navbar-burger" onClick={this.toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              exact
              to="/"
              activeClassName="is-active"
              >
              <span className="icon ">
                <i className="fas fa-home"></i>
              </span>
            </NavLink>
          </div>
          <div className="navbar-end">
            <NavLink
              className="navbar-item"
              to="/blog"
              activeClassName="is-active"
              >
              My Journey
              <span className="icon icon-plane">
                <i className="fas fa-plane" aria-hidden="true"></i>
              </span>
            </NavLink>
            <NavLink
              className="navbar-item"
              to="/food"
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

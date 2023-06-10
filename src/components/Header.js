import React from 'react';
import logo from '../images/fau_logo.png';

const Header = () => {
    return (
      <>
        <header className="App-header">
          <p style={{ fontSize: '50px' }}>
            <b><code>Welcome to FAU Social</code></b>
          </p>
          <br/><br/>
          <img src={logo} className="App-logo" alt="logo" />
          <br/><br/>
          <p className="Header-content">
          The goal of this web app is to connect students and faculty at Florida Atlantic University. 
          This is a work in progress and can be used as a resource for planning social activities nearby campus. <br/><br/>
          All listed activities are within a 5 mile radius.
          </p>
          <button className="header-button" tag="a" outline size="lg" target="_blank" href="#">
          View All Activities Now
          </button>
      </header>
      </>
    )
}

export default Header;
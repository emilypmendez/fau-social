import React from 'react';
import logo from '../images/fau_logo.png';
import "bootstrap/dist/css/bootstrap.min.css"

// import styled from 'styled-components';

import { useNavigate, Link } from 'react-router-dom';

const Home = () => {

    let navigate = useNavigate();
    const handleClick = () => {
        // HEADER BUTTON implementation details
        let path = `/activities`;
        navigate(path);
      };

    return (
        <>
        <div className="App-link">

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
                    <Link 
                        to="/activities" 
                        className="header-button" 
                        onClick={handleClick}
                        type="button"
                        tag="a" 
                        outline size="lg"
                    >
                    View Local Activities Now
                    </Link>
            </header>

            <div className="Body-headers">
                <h1>Upcoming Events</h1>
                <p>Here are some upcoming campus events that you can attend. <br/> 
                    Click on the event to learn more.</p>
            </div>

            {/* <div className="Body-content">
                {/* <div className="row">
                    <div className="col-sm">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Event 1</h5>
                                <p className="card-text">Event 1 Description</p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Event 2</h5>
                                <p className="card-text">Event 2 Description</p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Event 3</h5>
                                <p className="card-text">Event 3 Description</p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Event 1</h5>
                                <p className="card-text">Event 1 Description</p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Event 2</h5>
                                <p className="card-text">Event 2 Description</p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Event 3</h5>
                                <p className="card-text">Event 3 Description</p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="iframe-container">
                <iframe src="https://calendar.fau.edu/widget/combo?schools=fau&days=60&num=50&target_blank=1&html_descriptions=1&experience=inperson&format=html&template=card"
                    title="FAU Calendar"
                    width={1920}
                    height={1024}
                    sandbox='allow-scripts allow-same-origin'
                    loading="lazy"
                    >
                </iframe>
                </div>
            </div>

        </>
    )
}

export default Home;
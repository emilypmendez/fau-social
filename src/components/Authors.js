import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import emily from '../images/fau_headshot-epm.jpg';
import JLO from '../images/fau_headshot-jlo.jpeg';
import linkedIn from '../images/linkedin-logo.png';


const Authors = () => {

    return (
        <>
        <div className="container dark-background">
            <h1>Meet the Authors</h1>
            <div className="row">
                <div className="col-sm"> 
                    <div className="headshot-container">
                        <img src={emily} className="headshot" alt="headshot of emily portalatin-mendez" />
                    </div>
                    <h1>Emily Portalatín-Méndez</h1><br/>
                        <center>
                        <a href="https://linkedin.com/in/emilypmendez" target="_blank" rel="noreferrer">
                            <img 
                                src={linkedIn} 
                                alt="Emily's LinkedIn profile link" 
                                className="linkedin"
                            />
                        </a>
                        </center>
                    <br/><br/>
                    <p>Published in MIT Press and Media Labs, my passion for learning and scholarly pursuits 
                        are demonstrated in my independent research for artificial intelligence, blockchain, 
                        and design science. Consistent experience in these fields has enabled me to stay at 
                        the forefront of emerging technologies and has given me a unique perspective on how to 
                        leverage them to solve complex business problems.
                    </p>
                </div>
                <div className="col-sm">
                    <div className="headshot-container">
                        <img 
                            src={JLO} 
                            className="headshot" 
                            alt="headshot of jennifer uraga lopez" 
                        />
                    </div>
                    <h1>Jennifer Uraga Lopez</h1><br/>
                        <center>
                            <a href="https://www.imdb.com/name/nm0000182/" target="_blank" rel="noreferrer">
                                <img src={linkedIn} alt="Jennifer's LinkedIn profile link" className="linkedin"/>
                            </a>
                        </center>
                    <br/><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Authors;
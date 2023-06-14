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
                    <p>Published in MIT Press and Media Labs, Emily has a passion for learning and scholarly pursuits 
                        that are demonstrated in her independent research for artificial intelligence, blockchain, 
                        and design science. Consistent experience in these fields has enabled her to stay at 
                        the forefront of emerging technologies and has empowered her with a unique perspective on how to 
                        leverage them to solve complex business problems. Emily lives in New York City with her cat.
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
                            <a href="https://www.linkedin.com/in/jennifer-uragalopez" target="_blank" rel="noreferrer">
                                <img src={linkedIn} alt="Jennifer's LinkedIn profile link" className="linkedin"/>
                            </a>
                        </center>
                    <br/><br/>
                    <p>Jennifer is a rising senior at Lehman College, majoring in Computer Science. She is 
                        currently a Research Experience for Undergraduate (REU) student at Florida Atlantic University,
                        studying Artificial Intelligence for Smart Cities. She is also a member of the Lehman College
                        Computer Science Club and has participated in the Lehman College Hackathon. She is interested
                        in pursuing a career in software engineering and artificial intelligence. Jennifer lives in New York City with her dog.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Authors;
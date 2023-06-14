import React from "react";
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div>
            <div className="dark-mask">
                {/* <section className="section-footer" style={{ backgroundImage: `url(${background})` }}> */}
                    {/* <!-- Footer --> */}
                    {/* <footer className="bg-secondary text-white"> */}
                        {/* <!-- Grid container --> */}
                        <div className="container p-4">
                        {/* <!--Grid row--> */}
                        <div className="row">
                            {/* <!--Grid column--> */}
                            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">
                                <b>Let's Keep This Alive!</b>
                            </h5>

                            <p>
                                If you would like to contribute to this project, please contact us! 
                                You can contribute to the suggestion box by adding new features, fixing bugs, or even just giving us suggestions on what we can do to improve the website.
                            </p>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <Link to="/" id="active" className="text-white">Home</Link>
                                </li>
                                <li>
                                    <Link to="/activities" className="text-white">View Social Activities</Link>
                                </li>
                                <li>
                                    <Link to="/authors" className="text-white">Meet the Authors</Link>
                                </li>
                                <li>
                                    <Link to="/suggestions" className="text-white">Suggestion Box</Link>
                                </li>
                            </ul>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-0">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <Link to="https://github.com/emilypmendez/fau-social" className="text-white">GitHub Repo</Link>
                                </li>
                                <li>
                                    <Link to="https://calendar.fau.edu/" className="text-white">Events Calendar</Link>
                                </li>
                                <li>
                                    <Link to="https://onestop.fau.edu/" className="text-white">Get Help From FAU</Link>
                                </li>
                                <li>
                                    <Link to="https://directory.fau.edu/" className="text-white">Directory</Link>
                                </li>
                            </ul>
                            </div>
                            {/* <!--Grid column--> */}
                        </div>
                        {/* <!--Grid row--> */}
                        </div>
                        {/* <!-- Grid container --> */}

                        {/* <!-- Copyright --> */}
                        <div className="text-center p-3">
                        © 2023 All Rights Reserved. <br/>
                        <a className="text-white" href="https://emilypmendez.com/">Designed by Emily Portalatín-Méndez.</a>
                        </div>
                        {/* <!-- Copyright --> */}
                    {/* </footer> */}
                    {/* <!-- Footer --> */}
                    {/* </section> */}
                </div>
        </div>
    );
};

export default Footer;
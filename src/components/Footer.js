import { Link } from "react-router-dom";
import logo from "../images/foodbank.png"

const Footer = () => {
    return ( 
        <div>
            <div className="row mt-5 p-5 seventh-home-row">
                    <div className="row">
                        <div className="col-4 first-seg">
                            <img src={ logo } alt="app logo" />
                            <span> E-FoodBank</span>
                            <p className="mt-1">
                                Our mission is to eradicate hunger within our communities 
                                and Africa at large. With a mission to feed 1,000,000 in different 
                                African countries in the next 1 year. Our mission is to eradicate 
                                hunger within our communities annd Africa at large. 
                                With a mission to feed 1,000,000 in different African countries in the next 1 year.
                            </p>
                        </div>
                        <div className="col-2 ps-3 seg">
                            <h4><b>|</b> Quick Links</h4>
                            <Link to="/">About Us</Link>
                            <Link to="/register">Join Us</Link>
                            <Link to="/donate">Donate</Link>
                            <Link to="/register">Volunteer</Link>
                        </div>
                        <div className="col-3 seg">
                            <h4><b>|</b> Events</h4>
                            <Link to="/">Back to school feeding</Link>
                            <Link to="/">Lunch with a smile</Link>
                            <Link to="/">Street feeding</Link>
                            <Link to="/">Hunger is over</Link>
                        </div>
                        <div className="col-3">
                            <h4><b>|</b> Faculty Member</h4>
                            <p>Emmanuela - Product Mgr</p>
                            <p>Omosefe - Product Designer</p>
                            <p>Moyosore - Software Engineer</p>
                            <p>Barakat - Data Scientist</p>
                            <p>Chinonso - Cybersecurity</p>
                        </div>
                    </div>

                    <div className="row contact">
                        <div className="col-7"></div>
                        <div className="col-5">
                            <span className="me-5">Contact us:</span>
                            <Link to="/"><i className="fab fa-facebook-square"></i></Link>
                            <Link to="/"><i className="fab fa-twitter-square"></i></Link>
                            <Link to="/"><i className="fab fa-instagram"></i></Link>
                            <Link to="/"><i className="fab fa-linkedin"></i></Link>
                            <Link to="/"><i className="far fa-envelope"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="row px-5 py-3 eighth-home-row">
                    <div className="col-4">
                        <Link to="/">Privacy</Link>&nbsp;|&nbsp;
                        <Link to="/">Terms</Link>&nbsp;|&nbsp;
                        <Link to="/">Accessibility</Link>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4">
                        <p>&copy; 2022 FoodBank.ng | All Rights Reserved</p>
                    </div>
                </div>
        </div>
     );
}
 
export default Footer;

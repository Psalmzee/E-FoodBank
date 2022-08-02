import Navbar from "./Navbar";
// import logo from "../images/foodbank.png"
import hunger1 from "../images/hunger1.png";
import hunger2 from "../images/hunger2.png";
import hunger3 from "../images/hunger3.png";
import hunger4 from "../images/hunger4.png";
import hunger5 from "../images/hunger5.png";
import donate from "../images/donate-world.jpeg";
import tech4dev from "../images/tech4dev.png";
import microsoft from "../images/microsoft.png";
import un from "../images/un.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const HomeCarousel = () => {
    return ( 
        <div className="contents">
            <Navbar />
            <div className="container-fluid">
                <div className="row" style={{boxShadow: "0px 5px 8px 2px rgba(0, 0, 0, 0.15)"}}>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators home-carousel-button">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="d-block w-100 p-1" style={{backgroundColor: "rgba(249, 249, 249, 0.83)"}}>
                                    <div className="row home-carousel p-5">
                                        <div className="col-6 text-black">
                                            <h1 className="ps-2">FEED A SOUL TO FEED A NATION.</h1>
                                            <p className="p-2" style={{textAlign: "justify"}}>
                                                Feeding the hungry is protecting global health through food safety and education
                                                In a world where the World Health Organization reports that more than 870 million 
                                                people go to bed hungry each night, E-FoodBank NG is on a mission to address one of the biggest 
                                                challenges the world faces today: food insecurity.
                                                We believe that to eradicate hunger, the world needs to accomplish three essential goals: 
                                                reduce overall food waste, produce enough food to feed the growing population, 
                                                and establish universal food safety principles.
                                                The good news is that, E-FoodBank NG would be connecting beneficiaries to the benefactors which would be used to curb hunger. 
                                            </p>
                                            <div className="carousel-btn">
                                                <Link to="/register" className="btn btn-sm sign-up-btn px-3 py-2">VOLUNTEER</Link>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <img src={ hunger1 }  alt="hunger" />
                                        </div>
                                    </div>
                                </div>
                                {/* <img src={ carousel1 } class="d-block w-100" alt="..." style={{height: "600px"}} /> */}
                            </div>
                            <div class="carousel-item">
                            <div class="d-block w-100 p-1" style={{backgroundColor: "rgba(249, 249, 249, 0.83)"}}>
                                    <div className="row home-carousel p-5">
                                        <div className="col-6 text-black">
                                            <h1 className="ps-2">FEED A SOUL TO FEED A NATION.</h1>
                                            <p className="p-2" style={{textAlign: "justify"}}>
                                                Because access to safe food is such a basic human needs, it is the foundation 
                                                for many other industries, with far-reaching consequences when food safety protocols fail. 
                                                This will help improve the global economy as well as overall public health. 
                                                Enough beneficiary is linked today to feed everyone on the planet, but hunger 
                                                is on the rise, and some 821 million people are considered to be “chronically undernourished”. 
                                                What steps are being taken to ensure that everyone in Nigeria receives sufficient food?
                                                The good news is that, FB NG would be connecting beneficiaries to the benefactors which would be used to curb hunger. 
                                            </p>
                                            <div className="carousel-btn">
                                                <Link to="/register" className="btn btn-sm sign-up-btn px-3 py-2">VOLUNTEER</Link>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <img src={ hunger2 }  alt="hunger" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                            <div class="d-block w-100 p-1" style={{backgroundColor: "rgba(249, 249, 249, 0.83)"}}>
                                    <div className="row home-carousel p-5">
                                        <div className="col-6 text-black">
                                            <h1 className="ps-2">FEED A SOUL TO FEED A NATION.</h1>
                                            <p className="p-2" style={{textAlign: "justify"}}>
                                                Thanks to E-FoodBank NG, the number of people who aren’t getting enough to eat would 
                                                dropped by almost a half with regions such as Central Lagos, North and the east 
                                                making great strides in eradicating extreme hunger. However, that’s against a 
                                                background of the global population rising by nearly two billion.
                                                And now recent trends suggest that the hunger problem persists:
                                                Poor nutrition causes nearly half of deaths in children under five in the region, 
                                                some 3.1 million children per year.
                                                Achieving the 2030 goal of Zero Hunger, in other words ensuring that nobody goes 
                                                hungry wherever they are in the world, remains a major challenge. 
                                            </p>
                                            <div className="carousel-btn">
                                                <Link to="/register" className="btn btn-sm sign-up-btn px-3 py-2">VOLUNTEER</Link>
                                            </div>
                                            
                                        </div>
                                        <div className="col-6">
                                            <img src={ hunger4 }  alt="hunger" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row mt-5 px-5 py-2 second-home-row">
                    <div className="row px-5 py-2">
                        <div className="col-6">
                            <img src={ hunger2 }  alt="hunger" />
                        </div>
                        <div className="col-6 text-black">
                            <h1 className="ps-4">OUR MISSION</h1>
                            <ul>
                                <li className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna aliquet h adipiscing elit.</li>
                                <li className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna aliquet h adipiscing elit.</li>
                                <li className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna aliquet h adipiscing elit.</li>
                                <li className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna aliquet h adipiscing elit.</li>
                                <li className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna aliquet h adipiscing elit.</li>
                                <button className="btn btn-sm sign-up-btn mt-5 px-3 py-2">SIGN UP</button>
                            </ul>
                            
                            {/* <p className="p-4" style={{textAlign: "justify"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere massa eget sapien ultricies finibus ut ornare arcu.
                                Pellentesque vestibulum nisl et mauris bibendum laoreet. Quisque tristique augue et nulla dignissim, quis bibendum sem mollis. <br />
                                Vivamus eleifend, quam vel mattis mattis, quam ante ullamcorper ipsum, at vehicula purus neque nec magna. Integer nec viverra ligula.
                                Quisque eget odio venenatis, volutpat leo non, mattis ipsum.
                                Morbi sollicitudin mattis diam ut viverra. Etiam vitae purus eu enim placerat suscipit ac ut quam. 
                            </p> */}
                        </div>
                        
                    </div>
                </div>

                <div className="row mt-5 p-5 third-home-row">
                    <div className="row ps-5 pe-5 pb-3">
                        <h3>Recent events</h3>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <img src={ hunger3 } alt="event1" />
                            <h5>Slum feed project</h5>
                            <p className="event-location"><i className="fa fa-map-marker-alt"></i> Makoko, Lagos, Nigeria</p>
                            <p className="event-details">We feed 4,000 numbers of hungry home in Makoo, are of lagos with the help of  100 donors who helped us achieve our aim.</p>
                            <div className="carousel-btn">
                                <button className="btn btn-sm sign-up-btn">EXPLORE</button>
                            </div>
                        </div>
                        {/* <div className="col-1 ms-2 me-2"></div> */}
                        <div className="col-4">
                            <img src={ hunger4 } alt="event1" />
                            <h5>Lunch with a smile project</h5>
                            <p className="event-location"><i className="fa fa-map-marker-alt"></i> Kano, Nigeria</p>
                            <p className="event-details">We feed 4,000 numbers of hungry home in Makoo, are of lagos with the help of  100 donors who helped us achieve our aim.</p>
                            <div className="carousel-btn">
                                <button className="btn btn-sm sign-up-btn">EXPLORE</button>
                            </div>
                        </div>
                        {/* <div className="col-1 ms-2 me-2"></div> */}
                        <div className="col-4">
                            <img src={ hunger5 } alt="event1" />
                            <h5>Slum feed project</h5>
                            <p className="event-location"><i className="fa fa-map-marker-alt"></i> Lagos, Nigeria</p>
                            <p className="event-details">We feed 4,000 numbers of hungry home in Makoo, are of lagos with the help of  100 donors who helped us achieve our aim.</p>
                            <div className="carousel-btn">
                                <button className="btn btn-sm sign-up-btn">EXPLORE</button>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="row mt-5 p-5 fourth-home-row">
                    <div className="row pt-4">
                        <div className="col-2">
                            <p className="main">5,000+</p>
                            <p className="sub">Target</p>
                        </div>
                        <div className="col-2">
                            <p className="main">100+</p>
                            <p className="sub">Volunteer</p>
                        </div>
                        <div className="col-2">
                            <p className="main">12</p>
                            <p className="sub">Faculty board</p>
                        </div>
                        <div className="col-1">
                            <p className="main">54</p>
                            <p className="sub">African countries</p>
                        </div>
                        <div className="col-3">
                            <p className="main">1,216 Billion</p>
                            <p className="sub">Population</p>
                        </div>
                        <div className="col-2">
                            <p className="main">2,000+</p>
                            <p className="sub">Donors</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 p-5 fifth-home-row">
                    <div className="row ps-5 pe-5 pb-3">
                        <h4>Donor across the globe</h4>
                    </div>
                    <div className="row">
                        <img src={ donate } alt="donate" />
                    </div>
                </div>

                <div className="row mt-5 p-5 sixth-home-row">
                    <div className="row ps-5 pe-5 pb-3">
                        <h4>Our Partners</h4>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-2 m-2">
                            <img src={ tech4dev } alt="donate" style={{width: "180px", height: "58px"}} />
                        </div>
                        <div className="col-2 m-2">
                            <img src={ microsoft } alt="donate" style={{width: "180px", height: "58px"}} />
                        </div>
                        <div className="col-1 m-2">
                            <img src={ un } alt="donate" style={{width: "76px", height: "75px"}} />
                        </div>
                        <div className="col-2 m-2">
                            <img src={ tech4dev } alt="donate" style={{width: "180px", height: "58px"}} />
                        </div>
                        <div className="col-2 m-2">
                            <img src={ microsoft } alt="donate" style={{width: "180px", height: "58px"}} />
                        </div>
                        <div className="col-1 m-2">
                            <img src={ un } alt="donate" style={{width: "76px", height: "75px"}} />
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
     );
}
 
export default HomeCarousel;
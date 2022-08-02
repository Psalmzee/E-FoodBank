import Navbar from "./Navbar";
import unsplash from "../images/unsplash.png";
import Footer from "./Footer";

const Events = () => {
    return ( 
        <div className="contents">
            <Navbar />
            <div className="container-fluid">
                <div className="row event-row">
                    <div class="card bg-dark text-white">
                        <img src={ unsplash } class="card-img" alt="..." />
                        {/* <div class="card-img-overlay py-5">
                            <h5 class="card-title">LUNCH WITH A SMILE PROJECT</h5>
                            <p class="card-text event-p">February 15-17, 2022 | Makoko, Lagos</p>
                            <p className="event-timer">
                                <span>00</span>
                                <span>:</span>
                                <span>00</span>
                                <span>:</span>
                                <span>00</span>
                                <span>:</span>
                                <span>00</span>
                            </p>
                            <p className="event-timer-details">
                                <span>Days</span>
                                <span>:</span>
                                <span>Hours</span>
                                <span>:</span>
                                <span>Minutes</span>
                                <span>:</span>
                                <span>Seconds</span>
                            </p>

                            <button className="btn btn-sm sign-up-btn mt-5 px-5 py-2">JOIN</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Events;
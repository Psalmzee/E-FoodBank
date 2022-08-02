import DNavbar from "./DNavbar";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Donate = () => {
    return ( 
        <div className="contents">
            <DNavbar />
            <div className="container py-5 donate">
                <p>Dear, <span>Harry Den</span></p>
                <p>Thank you for your support. You have choose to support <span>Lorem Ipsum</span></p>
                <p>Please select your preferred mode</p>

                <div className="row">
                    <div className="col-8">
                        <h3 className="text-center mb-5">Support with food items</h3>
                        <div className="row">
                            <div className="col-7">
                                <h5 className="mb-3">You can deliver it to our office at:</h5>
                                <p>1, E-FoodBank Road, Ikeja, Lagos, Nigeria</p>
                                <p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126845.96885284268!2d3.293487813193988!3d6.5297011692424185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a3999%3A0xd7a8324bddbba1f0!2sIkeja!5e0!3m2!1sen!2sng!4v1644215437836!5m2!1sen!2sng" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" title="map"></iframe>
                                </p>
                            </div>
                            <div className="col-5">
                                <form className="form">
                                <h5>For pickup option, please supply the pickup location and date</h5>
                                <div className="form-group mb-1">
                                <label for="padress" className="form-label">Pickup Address</label>
                                    <input
                                        type="text"
                                        className="form-control" 
                                        id="padress"
                                    />
                                    <label for="pdate" className="form-label">Pickup date</label>
                                    <input
                                        type="date"
                                        className="form-control" 
                                        id="pdate"
                                    />
                                </div>
                                <div className="text-center profile-form">
                                    <Link to="/donate" className="btn sign-up-btn px-3 py-2 mt-3">Submit</Link>
                                </div>
                            </form>
                            </div>
                             
                        </div>
                    </div>
                    <div className="col-4">
                    <h3 className="text-center mb-5">Support with cash</h3>
                        <img 
                            src="https://thumbs.dreamstime.com/b/google-pay-app-payoneer-mastercard-visa-apple-paypal-popular-realistic-payment-logotype-icon-set-editorial-vector-illustration-199405549.jpg" 
                            alt="payicon"
                            style={{width: "100%", height: "200px"}} 
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Donate;
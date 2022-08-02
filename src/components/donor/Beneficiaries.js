import DNavbar from "./DNavbar";
import Board from "./Board";
import avatar from "../../images/avatar.jpg"
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Beneficiaries = () => {
    return ( 
        <div className="contents">
            <DNavbar />
            <div className="container py-5 beneficiary">
                
                <div className="row">
                    <div className="col-8">
                        <h3>E-FoodBank Beneficiaries</h3>
                        <div className="row benficiary-card">
                            <div className="col-4">
                                <div class="card" style={{width: "18rem"}}>
                                    <div className="text-center">
                                        <img src={ avatar } className="card-img-top rounded-circle" alt="avatar"
                                        style={{width: "250px", height: "250px", borderRadius: "50%"}}
                                    />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Harry Den <i className="bi bi-patch-check-fill" style={{color: "green"}}></i></h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna aliquet h adipiscing elit.</p>
                                        <div className="text-center">
                                            <Link to="/donate" className="btn sign-up-btn px-3 py-2">Support</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 mx-2"></div>
                            <div className="col-4">
                                <div class="card" style={{width: "18rem"}}>
                                    <div className="text-center">
                                        <img src={ avatar } className="card-img-top rounded-circle" alt="avatar"
                                        style={{width: "250px", height: "250px", borderRadius: "50%"}}
                                    />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Harry Den <i className="bi bi-patch-check-fill" style={{color: "green"}}></i></h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna aliquet h adipiscing elit.</p>
                                        <div className="text-center">
                                            <Link to="/donate" className="btn sign-up-btn px-3 py-2">Support</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row my-3"></div>

                        <div className="row benficiary-card">
                            <div className="col-4">
                                <div class="card" style={{width: "18rem"}}>
                                    <div className="text-center">
                                        <img src={ avatar } className="card-img-top rounded-circle" alt="avatar"
                                        style={{width: "250px", height: "250px", borderRadius: "50%"}}
                                    />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Harry Den <i className="bi bi-patch-check-fill" style={{color: "green"}}></i></h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna aliquet h adipiscing elit.</p>
                                        <div className="text-center">
                                            <Link to="/donate" className="btn sign-up-btn px-3 py-2">Support</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 mx-2"></div>
                            <div className="col-4">
                                <div class="card" style={{width: "18rem"}}>
                                    <div className="text-center">
                                        <img src={ avatar } className="card-img-top rounded-circle" alt="avatar"
                                        style={{width: "250px", height: "250px", borderRadius: "50%"}}
                                    />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Harry Den <i className="bi bi-patch-check-fill" style={{color: "green"}}></i></h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna aliquet h adipiscing elit.</p>
                                        <div className="text-center">
                                            <Link to="/donate" className="btn sign-up-btn px-3 py-2">Support</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 shadow">
                        <h3>Cheer lead board</h3>
                        <Board />
                    </div>
                </div>
               
                
            </div>
            <Footer />
        </div>
     );
}
 
export default Beneficiaries;
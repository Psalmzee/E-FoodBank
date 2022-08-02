import { Link } from "react-router-dom";
import "./admin.css"
import avatar from "../../images/avatar.jpg"
import AdminNav from "./AdminNav";

const AdminBeneficiaries = () => {
    const handleLogout = () => {
        localStorage.clear('auth')
    }
    return ( 
        <div className="admin-contents">
            <AdminNav />
            <div className="container">
                <div className="row">
                    <div className="col-3 admin-side-left pt-5">
                        <Link to="/admin"><i className="far fa-user-circle"></i>&nbsp;&nbsp; Profile</Link>
                        <Link to="/admin"><i class="far fa-bell"></i>&nbsp;&nbsp; Notifications</Link>
                        <Link to="/admin/requests"><i class="fas fa-users-cog"></i>&nbsp;&nbsp; Pending Requests</Link>
                        <Link to="/admin/donors"><i class="fas fa-hand-holding-heart"></i>&nbsp;&nbsp; Donors</Link>
                        <Link to="/admin/beneficiaries" className="admin-side-active my-1"><i class="fas fa-hands-helping"></i>&nbsp;&nbsp; Beneficiaries</Link>
                        <Link to="/admin"><i class="fas fa-shield-alt"></i>&nbsp;&nbsp; Privacy</Link>
                        <Link to="/" onClick={ handleLogout }><i class="fas fa-sign-out-alt"></i>&nbsp;&nbsp; Logout</Link>
                    </div>
                    <div className="col-9 pt-5 admin-donors">
                        <h3 className="mb-3">E-FoodBank Beneficiaries</h3>
                        <div className="row">
                            <div className="col-3">
                                <div class="card" style={{width: "18rem"}}>
                                    <div className="text-center">
                                        <img src={ avatar } className="card-img-top rounded-circle" alt="avatar"
                                        style={{width: "250px", height: "250px", borderRadius: "50%"}}
                                    />
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Harry Den <i className="bi bi-patch-check-fill" style={{color: "green"}}></i></h3>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna aliquet h adipiscing elit.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-1 mx-2"></div>
                            <div className="col-3">
                                <div class="card" style={{width: "18rem"}}>
                                    <div className="text-center">
                                        <img src={ avatar } className="card-img-top rounded-circle" alt="avatar"
                                        style={{width: "250px", height: "250px", borderRadius: "50%"}}
                                    />
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Harry Den <i className="bi bi-patch-check-fill" style={{color: "green"}}></i></h3>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna aliquet h adipiscing elit.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-1 mx-2"></div>
                            <div className="col-3">
                                <div class="card" style={{width: "18rem"}}>
                                    <div className="text-center">
                                        <img src={ avatar } className="card-img-top rounded-circle" alt="avatar"
                                        style={{width: "250px", height: "250px", borderRadius: "50%"}}
                                    />
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Harry Den <i className="bi bi-patch-check-fill" style={{color: "green"}}></i></h3>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna aliquet h adipiscing elit.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row py-3"></div>

                        <div className="row">
                            <div className="col-3">
                                <div class="card" style={{width: "18rem"}}>
                                    <div className="text-center">
                                        <img src={ avatar } className="card-img-top rounded-circle" alt="avatar"
                                        style={{width: "250px", height: "250px", borderRadius: "50%"}}
                                    />
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Harry Den <i className="bi bi-patch-check-fill" style={{color: "green"}}></i></h3>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna aliquet h adipiscing elit.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-1 mx-2"></div>
                            <div className="col-3">
                                <div class="card" style={{width: "18rem"}}>
                                    <div className="text-center">
                                        <img src={ avatar } className="card-img-top rounded-circle" alt="avatar"
                                        style={{width: "250px", height: "250px", borderRadius: "50%"}}
                                    />
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Harry Den <i className="bi bi-patch-check-fill" style={{color: "green"}}></i></h3>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna aliquet h adipiscing elit.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-1 mx-2"></div>
                            <div className="col-3">
                                <div class="card" style={{width: "18rem"}}>
                                    <div className="text-center">
                                        <img src={ avatar } className="card-img-top rounded-circle" alt="avatar"
                                        style={{width: "250px", height: "250px", borderRadius: "50%"}}
                                    />
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Harry Den <i className="bi bi-patch-check-fill" style={{color: "green"}}></i></h3>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna aliquet h adipiscing elit.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AdminBeneficiaries;
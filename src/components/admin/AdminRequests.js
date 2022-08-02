import { Link } from "react-router-dom";
import "./admin.css"
import avatar from "../../images/avatar.jpg"
import AdminNav from "./AdminNav";

const AdminRequests = () => {
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
                        <Link to="/admin/requests" className="admin-side-active my-1"><i class="fas fa-users-cog"></i>&nbsp;&nbsp; Pending Requests</Link>
                        <Link to="/admin/donors"><i class="fas fa-hand-holding-heart"></i>&nbsp;&nbsp; Donors</Link>
                        <Link to="/admin/beneficiaries"><i class="fas fa-hands-helping"></i>&nbsp;&nbsp; Beneficiaries</Link>
                        <Link to="/admin"><i class="fas fa-shield-alt"></i>&nbsp;&nbsp; Privacy</Link>
                        <Link to="/" onClick={ handleLogout }><i class="fas fa-sign-out-alt"></i>&nbsp;&nbsp; Logout</Link>
                    </div>
                    <div className="col-9 text-center pt-5 ps-5 pb-3 admin-side-right">
                        <h3 className="text-center">Pending Requests</h3>
                        <table className="table table-hover table-responsive table-bordered table-condensed">
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={ avatar } alt="admin" style={{width: "50px", height: "50px", borderRadius: "50%"}} />
                                    </td>
                                    <td>Harry Den</td>
                                    <td>harryden@example.com</td>
                                    <td>Donor</td>
                                    <td>Lagos, Nigeria</td>
                                    <td><i className="fas fa-check-circle" style={{color: "green", fontSize: "25px"}}></i></td>
                                    <td><i className="fas fa-times-circle" style={{color: "red", fontSize: "25px"}}></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ avatar } alt="admin" style={{width: "50px", height: "50px", borderRadius: "50%"}} />
                                    </td>
                                    <td>Lorem Ipsum</td>
                                    <td>loremipsum@example.com</td>
                                    <td>Beneficiary</td>
                                    <td>Oyo, Nigeria</td>
                                    <td><i className="fas fa-check-circle" style={{color: "green", fontSize: "25px"}}></i></td>
                                    <td><i className="fas fa-times-circle" style={{color: "red", fontSize: "25px"}}></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ avatar } alt="admin" style={{width: "50px", height: "50px", borderRadius: "50%"}} />
                                    </td>
                                    <td>Harry Den</td>
                                    <td>harryden@example.com</td>
                                    <td>Donor</td>
                                    <td>Lagos, Nigeria</td>
                                    <td><i className="fas fa-check-circle" style={{color: "green", fontSize: "25px"}}></i></td>
                                    <td><i className="fas fa-times-circle" style={{color: "red", fontSize: "25px"}}></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ avatar } alt="admin" style={{width: "50px", height: "50px", borderRadius: "50%"}} />
                                    </td>
                                    <td>Lorem Ipsum</td>
                                    <td>loremipsum@example.com</td>
                                    <td>Beneficiary</td>
                                    <td>Oyo, Nigeria</td>
                                    <td><i className="fas fa-check-circle" style={{color: "green", fontSize: "25px"}}></i></td>
                                    <td><i className="fas fa-times-circle" style={{color: "red", fontSize: "25px"}}></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ avatar } alt="admin" style={{width: "50px", height: "50px", borderRadius: "50%"}} />
                                    </td>
                                    <td>Harry Den</td>
                                    <td>harryden@example.com</td>
                                    <td>Donor</td>
                                    <td>Lagos, Nigeria</td>
                                    <td><i className="fas fa-check-circle" style={{color: "green", fontSize: "25px"}}></i></td>
                                    <td><i className="fas fa-times-circle" style={{color: "red", fontSize: "25px"}}></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ avatar } alt="admin" style={{width: "50px", height: "50px", borderRadius: "50%"}} />
                                    </td>
                                    <td>Lorem Ipsum</td>
                                    <td>loremipsum@example.com</td>
                                    <td>Beneficiary</td>
                                    <td>Oyo, Nigeria</td>
                                    <td><i className="fas fa-check-circle" style={{color: "green", fontSize: "25px"}}></i></td>
                                    <td><i className="fas fa-times-circle" style={{color: "red", fontSize: "25px"}}></i></td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AdminRequests;
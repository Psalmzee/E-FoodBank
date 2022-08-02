import { Link } from "react-router-dom";
import "./admin.css"
import avatar from "../../images/avatar.jpg"
import AdminNav from "./AdminNav";

const AdminPanel = () => {
    const handleLogout = () => {
        localStorage.clear('auth')
    }
    return ( 
        <div className="admin-contents">
            <AdminNav />
            <div className="container">
                <div className="row">
                    <div className="col-3 admin-side-left pt-5">
                        <Link to="/admin" className="admin-side-active my-1"><i className="far fa-user-circle"></i>&nbsp;&nbsp; Profile</Link>
                        <Link to="/admin"><i class="far fa-bell"></i>&nbsp;&nbsp; Notifications</Link>
                        <Link to="/admin/requests"><i class="fas fa-users-cog"></i>&nbsp;&nbsp; Pending Requests</Link>
                        <Link to="/admin/donors"><i class="fas fa-hand-holding-heart"></i>&nbsp;&nbsp; Donors</Link>
                        <Link to="/admin/beneficiaries"><i class="fas fa-hands-helping"></i>&nbsp;&nbsp; Beneficiaries</Link>
                        <Link to="/admin"><i class="fas fa-shield-alt"></i>&nbsp;&nbsp; Privacy</Link>
                        <Link to="/" onClick={ handleLogout }><i class="fas fa-sign-out-alt"></i>&nbsp;&nbsp; Logout</Link>
                    </div>
                    <div className="col-9 text-center pt-5 admin-side-right">
                        <img src={ avatar } alt="admin" style={{width: "100px", height: "100px", borderRadius: "50%"}} />
                        <p>System Admin <i className="bi bi-patch-check-fill" style={{color: "green"}}></i></p>
                        <p>admin@foodbank.ng</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AdminPanel;
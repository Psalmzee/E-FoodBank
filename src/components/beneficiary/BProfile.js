import BNavbar from './BNavbar';
import { Link } from "react-router-dom";
import avatar from "../../images/avatar.jpg"
// import Home from '../donor/Home';
// import Profile from '../donor/Profile';
// import Board from './Board';

const BProfile = () => {
  const handleLogout = () => {
    localStorage.clear('auth')
    }
    return ( 
      <div className="contents">
        <BNavbar />
        <div className="container">
          <div className="row">
            <div className="col-3 admin-side-left pt-5 shadow">
              <Link to="/myprofile" className="admin-side-active my-1"><i className="far fa-user-circle"></i>&nbsp;&nbsp; Profile</Link>
              <Link to="/myprofile"><i class="far fa-bell"></i>&nbsp;&nbsp; Notifications</Link>
              <Link to="/myprofile/settings"><i class="fas fa-cog"></i>&nbsp;&nbsp; Settings</Link>
              <Link to="/myprofile"><i class="fas fa-shield-alt"></i>&nbsp;&nbsp; Privacy</Link>
              <Link to="/" onClick={ handleLogout }><i class="fas fa-sign-out-alt"></i>&nbsp;&nbsp; Logout</Link>
            </div>
            <div className="col-9 pt-5 admin-side-right">
              <div className="text-center">
                <img src={ avatar } alt="admin" style={{width: "100px", height: "100px", borderRadius: "50%"}} />
                <p>Harry Den <i className="bi bi-patch-question-fill" style={{color: "grey"}}></i></p>
              </div>

              <div className="row">
                <div className="col-8">
                  <div className='user-profile-details ps-4'>
                    <table className="table table-borderless table-responsive table-condensed">
                      <tbody>
                        <tr>
                            <td>Email:</td>
                            <td className='ps-5'>user@example.com</td>
                        </tr>
                        <tr>
                            <td>Phone Number:</td>
                            <td className='ps-5'>08012345678</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td className='ps-5'>1, Adewale Street, Ikeja, Lagos</td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td className='ps-5'>Male</td>
                        </tr>
                        <tr>
                            <td>User Type:</td>
                            <td className='ps-5'>Beneficiary <i class="fas fa-hands-helping" style={{color: "green"}}></i></td>
                        </tr>
                        <tr>
                            <td>Status:</td>
                            <td className='ps-5'>Unverified <i className="bi bi-patch-question-fill" style={{color: "grey"}}></i></td>
                        </tr>
                        <tr>
                            <td>Visitation Date:</td>
                            <td className='ps-5'>Not assigned</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-4 text-center">
                  <p>Cash Received:</p>
                  <p style={{color: "#FF7A00"}}># 000</p>
                  <p>Relief Item Status:</p>
                  <p style={{color: "#FF7A00"}}>Not Delivered <i class="fas fa-times-square"></i></p>
                </div>
              </div>
              
              
                
            </div>
          </div>
          </div>
      </div>
     );
}
 
export default BProfile;
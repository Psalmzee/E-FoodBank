import DNavbar from './DNavbar';
import { Link } from "react-router-dom";
import avatar from "../../images/avatar.jpg";
import "./donor.css";
// import Home from '../donor/Home';
// import Profile from '../donor/Profile';
// import Board from './Board';

const DProfile = () => {
    const handleLogout = () => {
        localStorage.clear('auth')
    }
    return ( 
      <div className="contents">
        <DNavbar />
        <div className="container">
          <div className="row">
            <div className="col-3 admin-side-left pt-5 shadow">
              <Link to="/profile" className="admin-side-active my-1"><i className="far fa-user-circle"></i>&nbsp;&nbsp; Profile</Link>
              <Link to="/profile"><i class="far fa-bell"></i>&nbsp;&nbsp; Notifications</Link>
              <Link to="/profile/settings"><i class="fas fa-cog"></i>&nbsp;&nbsp; Settings</Link>
              <Link to="/profile"><i class="fas fa-shield-alt"></i>&nbsp;&nbsp; Privacy</Link>
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
                            <td className='ps-5'>donor@example.com</td>
                        </tr>
                        <tr>
                            <td>Phone Number:</td>
                            <td className='ps-5'>08012345678</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td className='ps-5'>1, Akin Adesola, Victoria Island, Lagos</td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td className='ps-5'>Male</td>
                        </tr>
                        <tr>
                            <td>Occupation:</td>
                            <td className='ps-5'>System Engineer</td>
                        </tr>
                        <tr>
                            <td>User Type:</td>
                            <td className='ps-5'>Donor <i class="fas fa-hand-holding-heart" style={{color: "green"}}></i></td>
                        </tr>
                        <tr>
                            <td>Status:</td>
                            <td className='ps-5'>Unverified <i className="bi bi-patch-question-fill" style={{color: "grey"}}></i></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-4 text-center donor-social">
                  <p>Cash Donated:</p>
                  <p style={{color: "#FF7A00"}}>#500,000</p>
                  {/* <p>Social Media:</p>
                  <p>
                    <Link to="/profile"><i className="fab fa-facebook-square"></i></Link>
                    <Link to="/profile"><i className="fab fa-linkedin"></i></Link>
                    <Link to="/profile"><i className="far fa-envelope"></i></Link>
                  </p>
                  <p>Rating:</p>
                  <p className='donor-rating'>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                  </p> */}
                </div>
              </div>
              
              
                
            </div>
          </div>
          </div>
        {/* <div className="container-fluid row">
          <div className="shadow p-3 mt-2 bg-body rounded col-3 spaced">
            <Profile />
          </div>
          <div className="shadow p-3 mt-2 bg-body rounded col-5 spaced">
            <Home />
          </div>
        </div> */}
      </div>
     );
}
 
export default DProfile;
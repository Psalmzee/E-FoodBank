import { useState } from "react";
import DNavbar from './DNavbar';
import { Link } from "react-router-dom";
// import Home from '../donor/Home';
// import Profile from '../donor/Profile';
// import Board from './Board';

const DSettings = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ occupation, setOccupation ] = useState('');
    const [ gender, setGender ] = useState('Male');
    const [ password, setPassword ] = useState('');

    const handlesubmit = (e) => {
      e.preventDefault();
    }
    const handleLogout = () => {
        localStorage.clear('auth')
    }
    return ( 
      <div className="contents">
        <DNavbar />
        <div className="container">
          <div className="row">
            <div className="col-3 admin-side-left pt-5 shadow">
              <Link to="/profile"><i className="far fa-user-circle"></i>&nbsp;&nbsp; Profile</Link>
              <Link to="/profile"><i class="far fa-bell"></i>&nbsp;&nbsp; Notifications</Link>
              <Link to="/profile/settings" className="admin-side-active my-1"><i class="fas fa-cog"></i>&nbsp;&nbsp; Settings</Link>
              <Link to="/profile"><i class="fas fa-shield-alt"></i>&nbsp;&nbsp; Privacy</Link>
              <Link to="/" onClick={ handleLogout }><i class="fas fa-sign-out-alt"></i>&nbsp;&nbsp; Logout</Link>
            </div>
            <div className="col-8 pt-5 admin-side-right ms-3">
            <div className="row form-row">
                    <form onSubmit={ handlesubmit } className="form">
                        <div className="form-group mb-1">
                            <label for="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control form-input" 
                                id="name"
                                value={name}
                                onChange = {(e) => setName(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-group mb-1 mt-2">
                            <label for="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control form-input" 
                                id="email"
                                value={email}
                                onChange = {(e) => setEmail(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-group mb-1 mt-2">
                            <label for="phone" className="form-label mb-0">Phone Number</label>
                            <input
                                type="phone"
                                className="form-control form-input"
                                id="phone"
                                value={phone}
                                onChange = {(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className="form-group mb-1 mt-2">
                            <label for="gender" className="form-label mb-2">User type</label>
                            <select name="gender" id="gender" className="form-select"
                                value={ gender }
                                onChange = {(e) => setGender(e.target.value)}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div className="form-group mb-1 mt-2">
                            <label for="address" className="form-label mb-0">Address</label>
                            <input
                                type="text"
                                className="form-control form-input"
                                id="address"
                                value={address}
                                onChange = {(e) => setAddress(e.target.value)}
                            />
                        </div>

                        <div className="form-group mb-1 mt-2">
                            <label for="occupation" className="form-label mb-0">Occupation</label>
                            <input
                                type="text"
                                className="form-control form-input"
                                id="occupation"
                                value={occupation}
                                onChange = {(e) => setOccupation(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-group mb-1 mt-2">
                            <label for="password" className="form-label mb-0">Password</label>
                            <input
                                type="password"
                                className="form-control form-input"
                                id="password"
                                value={password}
                                onChange = {(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="text-center profile-form">
                          <Link to="/myprofile/settings" className="btn sign-up-btn px-3 py-2 mt-3">Update</Link>
                        </div>
                    </form>
                    
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
 
export default DSettings;
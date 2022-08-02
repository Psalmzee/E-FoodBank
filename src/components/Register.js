import { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleicon from "../images/google-icon.png";
import Carousel from "./Carousel";
import Nav from "./Nav";
import Navbar from "./Navbar";

const Register = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ usertype, setUsertype ] = useState('Donor');
    const [ password, setPassword ] = useState('');
    const [ cpassword, setCpassword ] = useState('');
    const navigate = useNavigate();
    
    const handlesubmit = (e) => {
        e.preventDefault();
        const data = { email, password };
        if (data.email === "admin@example.com" && data.password === "1234") {
            localStorage.setItem('auth', true);
            navigate("/admin")
        }else if (data.email === "donor@example.com" && data.password === "1234") {
            localStorage.setItem('auth', true);
            navigate("/profile")
        }else if (data.email === "user@example.com" && data.password === "1234") {
            localStorage.setItem('auth', true);
            navigate("/myprofile")
        }
    }
    return ( 
        <div className="regiter-contents">
            <Navbar />
            <div className="container mt-3 bg-white">
                <div className="row">
                    <div className="col-7">
                        <Carousel />
                    </div>
                    <div className="col-5 form-side">
                    <Nav />
                    <hr className="myrulerregister" style={{height: "2px"}} />
                {/* <div className="row mb-4 mt-4">
                    <div className="col-6"><button className="btn btn-sm sign-btn"><strong>SIGN UP AS A BENEFICIARY</strong></button></div>
                    <div className="col-6"><button className="btn btn-sm sign-btn ms-2"><strong>SIGN UP AS A DONOR</strong></button></div>
                </div> */}

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
                            <label for="usertype" className="form-label mb-2">User type</label>
                            <select name="usertype" id="usertype" className="form-select"
                                value={ usertype }
                                onChange = {(e) => setUsertype(e.target.value)}
                            >
                                <option value="Donor">Donor</option>
                                <option value="Beneficiary">Beneficiary</option>
                            </select>
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
                        
                        <div className="form-group mb-1 mt-2">
                            <label for="cpassword" className="form-label mb-0">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control form-input"
                                id="cpassword"
                                value={cpassword}
                                onChange = {(e) => setCpassword(e.target.value)}
                            />
                        </div>

                        <div className="form-group mb-1 mt-3">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Remember password
                                        </label>
                                    </div>
                                </div>
                                <div className="col-3"></div>
                                <div className="col-3 ps-4">
                                    <button className="btn btn-sm sign-up-btn"><b>SIGN UP</b></button>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                    
                </div>
                <div className="row mt-2 mb-2">
                    <div className="col-5"><hr /></div>
                    <div className="col-2"><p style={{textAlign: "center"}}>OR</p></div>
                    <div className="col-5"><hr /></div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-sm btn-outline-primary social-btn">
                        <img src={ googleicon } className="social-icon" alt="google icon" />Sign Up with Google</button>
                    </div>
                    
                    <div className="col-6 ps-3">
                        <button className="btn btn-sm btn-outline-primary social-btn">
                        <i className="fab fa-facebook" style={{fontSize: "20px"}}></i>&nbsp; Sign Up with Facebook</button>
                    </div>
                </div>
                    </div>
                </div>
            </div>
            
        </div>
        
     );
}
 
export default Register;
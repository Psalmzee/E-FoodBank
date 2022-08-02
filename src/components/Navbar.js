import { Link, useNavigate } from "react-router-dom";
import logo from "../images/foodbank.png"

const Navbar = () => {
    const isAuth = localStorage.getItem('auth')
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear('auth')
        navigate("/")
    }
    return ( 
        <nav className="navbar navbar-expand-lg" style={{
            backgroundColor: '#FF7A00',
            fontFamily: "Poppins",
            // borderRadius: '8px'
        }}>
            <div className="container-fluid">
            <Link class="navbar-brand text-light" to="/"><img src={logo} alt="app logo" className="img-thumbnail logo navbar-brand"></img>E-FoodBank</Link>
                <div className="text-light">
                <div className="navbar-nav">
                    <Link className="nav-link active text-light" to="/">Home</Link>
                    <Link className="text-light links" to="/">About us</Link>
                    <Link className="text-light" to="/events">Events</Link>
                { isAuth && 
                    <div> 
                        <Link to="/" className="text-light links" onClick={ handleLogout }>Sign out</Link>
                    </div>
                }
                { !isAuth && 
                    <div>
                        <Link to="/register" className="text-light">Sign Up</Link>
                        <Link to="/login" className="text-light">Sign In</Link>
                    </div>
                }

                </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;
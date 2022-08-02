import { Link } from "react-router-dom";
import logo from "../../images/foodbank.png"

const DNavbar = () => {
    const handleLogout = () => {
        localStorage.clear('auth')
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
                    <Link className="text-light" to="/events">Events</Link>
                    <Link className="text-light" to="/beneficiaries">Beneficiaries</Link>
                    <Link className="text-light" to="/profile">Profile</Link>
                    <Link className="text-light" to="/" onClick={ handleLogout }>Sign out</Link>
                </div>
                </div>
            </div>
        </nav>
     );
}
 
export default DNavbar;
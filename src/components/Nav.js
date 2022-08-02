import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <div className="contents">
            <Link to="/register"><h3>Sign Up</h3></Link>
            <Link to="/login"><h3>Sign In</h3></Link>
            
            <div className="row">
                
                
            </div>
        </div>
     );
}
 
export default Nav;
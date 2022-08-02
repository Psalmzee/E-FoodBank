// import "./prof.css";
import DNavbar from './DNavbar';
import Home from './Home';
import Profile from './Profile';
import Board from './Board';

const Myprofile = () => {
    return ( 
        <div className="contents">
            <DNavbar />
        <div className="container-fluid row">
          <div className="shadow p-3 mt-2 bg-body rounded col-3 spaced">
            <Profile />
          </div>
          <div className="shadow p-3 mt-2 bg-body rounded col-5 spaced">
            <Home />
          </div>
          <div className="shadow p-3 mt-2 bg-body rounded col-3 spaced">
            <Board />
          </div>
        </div>
        </div>
     );
}
 
export default Myprofile;
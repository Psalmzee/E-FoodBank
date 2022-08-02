import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPanel from "./components/admin/AdminPanel";
import AdminRequests from "./components/admin/AdminRequests";
import BProfile from "./components/beneficiary/BProfile";
import Events from "./components/Events";
import HomeCarousel from "./components/Homepage";
import Login from "./components/Login";
// import Myprofile from "./components/donor/Myprofile";
import Register from "./components/Register";
import BSettings from "./components/beneficiary/BSettings";
import DProfile from "./components/donor/DProfile";
import DSettings from "./components/donor/DSettings";
import PrivateRoute from "./components/PrivateRoute";
import Beneficiaries from "./components/donor/Beneficiaries";
import AdminDonors from "./components/admin/AdminDonors";
import AdminBeneficiaries from "./components/admin/AdminBeneficiaries";
import Donate from "./components/donor/Donate";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomeCarousel /> } />
        <Route path="/admin" element={ <PrivateRoute> <AdminPanel /> </PrivateRoute>  } />
        <Route path="/admin/requests" element={ <PrivateRoute> <AdminRequests /> </PrivateRoute> } />
        <Route path="/admin/beneficiaries" element={ <PrivateRoute> <AdminBeneficiaries /> </PrivateRoute> } />
        <Route path="/admin/donors" element={ <PrivateRoute> <AdminDonors /> </PrivateRoute> } />
        <Route path="/beneficiaries" element={ <PrivateRoute> <Beneficiaries /> </PrivateRoute> } />
        <Route path="/donate" element={ <PrivateRoute> <Donate /> </PrivateRoute> } />
        <Route path="/events" element={ <Events /> } />
        <Route path="/profile" element={ <PrivateRoute> <DProfile /> </PrivateRoute> } />
        <Route path="/profile/settings" element={ <PrivateRoute> <DSettings /> </PrivateRoute> } /> 
        <Route path="/myprofile" element={ <PrivateRoute> <BProfile /> </PrivateRoute> } />
        <Route path="/myprofile/settings" element={ <PrivateRoute> <BSettings /> </PrivateRoute> } /> 
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } /> 
      </Routes>
    </Router>
    
  );
}

export default App;

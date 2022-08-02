import avatar from '../../images/avatar.jpg'
import insta from '../../images/insta.png'
import linkdin from '../../images/linkdin.png'
import facebook from '../../images/facebook.png'
import fivestar from '../../images/five-star-icon-39789.png'

function Profile() {
    return ( 
        <div className="row">
            <div className="">
                <h3>Profile</h3>
                <div className="text-center admin-side-right">
                <img src={avatar} className="profile-name" alt="..." />
                <p>Moyosore Baiye <i className="bi bi-patch-question-fill" style={{color: "grey"}}></i></p>
                <p>moyosore@example.com</p>
                </div>
                <h2 style={{textAlign:'center', marginTop: 80}}>Biography</h2>
                <p style={{textAlign: 'center' }}>Moyo is a medical doctor with over 15 years of work experince, he doesn't love to see people go hungry in any form especially kids</p>

                <div className="social-icons" style={{ marginTop: 120, display:'flex', justifyContent:"center"}}>
                    <img src={facebook} alt="" style={{width: 40, height:40, marginRight: 10}}/>
                    <img src={linkdin} alt="" style={{width: 40, height:40, marginRight: 10}}/>
                    <img src={insta} alt="" style={{width: 40, height:40}}/>
                </div>
                <h4 style={{ textAlign: 'center', marginTop: 30}}>Rating</h4>
                <div className="rating" style={{display:'flex', justifyContent:'center'}}>
                    <img src={fivestar} alt="" style={{width: 200, height:40, marginRight: 10}}/>
                </div>
            </div>
        </div>
     );
}

export default Profile;
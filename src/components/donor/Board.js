import { Link } from "react-router-dom";

function Board() {
    return ( 
        <div className="">
            <div className="">
                
                <div className="main-heading" style={{display: 'flex', justifyContent:'space-between'}}>
                    <div className="col" style={{textAlign:'left'}}>
                        <p style={{fontFamily: "Poppins", fontWeight: "bold"}}>Project</p>
                        <p>Feed a school project</p>
                        <p>Location: Lagos</p>
                    </div>
                    <div className="col" style={{textAlign:'right'}}>
                        <p style={{fontFamily: "Poppins", fontWeight: "bold"}}>Target</p>
                        <p>#500,000</p>
                    </div>
                </div>
                <div className="progress rounded-pill" style={{width: 320, height: 30}}>
                    <div className="progress-bar pbar" 
                        role="progressbar" 
                        style={{width: 145}}
                        aria-valuenow="75" 
                        aria-valuemin="0" 
                        aria-valuemax="100">30% Donated</div>
                </div>
                <div className="text-center fund-btn mt-2">
                    <Link to="/donate" className="btn sign-up-btn px-3 py-2">Fund now</Link>
                </div>
                <hr />

                <div className="main-heading" style={{display: 'flex', justifyContent:'space-between'}}>
                    <div className="col" style={{textAlign:'left'}}>
                        <p style={{fontFamily: "Poppins", fontWeight: "bold"}}>Project</p>
                        <p>Feed a school project</p>
                        <p>Location: Lagos</p>
                    </div>
                    <div className="col" style={{textAlign:'right'}}>
                        <p style={{fontFamily: "Poppins", fontWeight: "bold"}}>Target</p>
                        <p>#500,000</p>
                    </div>
                </div>
                <div className="progress rounded-pill" style={{width: 320, height: 30}}>
                    <div className="progress-bar pbar" 
                        role="progressbar" 
                        style={{width: 245}}
                        aria-valuenow="75" 
                        aria-valuemin="0" 
                        aria-valuemax="100">75% Donated</div>
                </div>
                <div className="text-center fund-btn mt-2">
                    <Link to="/donate" className="btn sign-up-btn px-3 py-2">Fund now</Link>
                </div>
                <hr />

                <div className="main-heading" style={{display: 'flex', justifyContent:'space-between'}}>
                    <div className="col" style={{textAlign:'left'}}>
                        <p style={{fontFamily: "Poppins", fontWeight: "bold"}}>Project</p>
                        <p>Feed a school project</p>
                        <p>Location: Lagos</p>
                    </div>
                    <div className="col" style={{textAlign:'right'}}>
                        <p style={{fontFamily: "Poppins", fontWeight: "bold"}}>Target</p>
                        <p>#500,000</p>
                    </div>
                </div>
                <div className="progress rounded-pill" style={{width: 320, height: 30}}>
                    <div className="progress-bar pbar" 
                        role="progressbar" 
                        style={{width: 345}}
                        aria-valuenow="75" 
                        aria-valuemin="0" 
                        aria-valuemax="100">100% Donated</div>
                </div>
                
                <hr />


                <p>You just donated #100,000 naira to a school project</p>
                <div className="main-heading" style={{display: 'flex', justifyContent:'space-between'}}>
                    <div className="col" style={{textAlign:'left'}}>
                        <p style={{fontFamily: "Poppins", fontWeight: "bold"}}>Project</p>
                        <p>Feed a school project</p>
                        <p>Location: Lagos</p>
                    </div>
                    <div className="col" style={{textAlign:'right'}}>
                        <p style={{fontFamily: "Poppins", fontWeight: "bold"}}>Target</p>
                        <p>#500,000</p>
                    </div>
                </div>
                <div className="progress rounded-pill" style={{width: 320, height: 30}}>
                    <div className="progress-bar pbar" 
                        role="progressbar" 
                        style={{width: 175}}
                        aria-valuenow="75" 
                        aria-valuemin="0" 
                        aria-valuemax="100">50% Donated</div>
                </div>
                <div className="text-center fund-btn mt-2">
                    <Link to="/donate" className="btn sign-up-btn px-3 py-2">Fund now</Link>
                </div>
            </div>
        </div>
     );
}

export default Board;
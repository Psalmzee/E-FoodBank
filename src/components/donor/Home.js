const Home = () => {
    return ( 
        <div className="row">
            <div className="">
            <h4>Edit Profile</h4>
            <br></br>
        <form class="row g-3">
            <div className="col-md-12">
                <label for="inputName4" class="form-label">Name</label>
                <input type="text" className="form-control  form-input" id="inputName4" />
            </div>
            <div className="col-md-12">
                <label for="inputOccupation4" class="form-label">Occupation</label>
                <input type="text" className="form-control  form-input" id="inputOccupation4" />
            </div>
            <div className="col-md-6">
                <select id="inputAge" className="form-select form-input">
                <option>Age</option>
                <option>18 - 21</option>
                <option>22 - 29</option>
                <option>30 - 40</option>
                <option>Above 40</option>
                </select>
            </div>
            <div className="col-md-6">
                <select id="inputSex" className="form-select form-input">
                <option>Sex</option>
                <option>Male</option>
                <option>Female</option>
                </select>
            </div>
            <div className="col-md-12">
                <label for="inputHobbies4" class="form-label">Hobbies</label>
                <input type="text" className="form-control  form-input" id="inputHobbies4" />
            </div>
            <div className="col-md-6">
                <select id="inputUserType" className="form-select form-input">
                <option>Type of user</option>
                <option>Donor</option>
                <option>Helper</option>
                <option>Beneficiary</option>
                </select>
            </div>
            <div className="col-md-6">
                <select id="inputLocation" className="form-select form-input">
                <option>Location</option>
                <option>Africa</option>
                <option>Europe</option>
                </select>
            </div>
            <div className="col-md-12">
                <label for="inputContact4" class="form-label">Contact</label>
                <input type="text" className="form-control  form-input" id="inputContact4" />
            </div>
            <div className="col-12">
                <label for="inputAddress2" class="form-label">Address 2</label>
                <input type="text" class="form-control form-input" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="d-grid gap-2 col-3 mx-auto">
                <button type="submit" className="btn btn-primary btn-update">Update</button>
            </div>
            </form>
        </div>
        </div>
     );
}
 
export default Home;
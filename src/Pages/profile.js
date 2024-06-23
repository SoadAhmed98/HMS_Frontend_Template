import React, { useState } from "react";
import "../Profile.css";

const Profile = () => {
    const [activeTab, setActiveTab] = useState("home");
    const [profileImage, setProfileImage] = useState(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
    );

    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImage(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div className="container emp-profile my-5">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={profileImage} alt="Profile" />
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file" onChange={handleImageChange} />
                            </div>
                        </div>
                        <div className=" mx-5 text-center">
                        <input
                            type="submit"
                            className="profile-logout-btn btn btn-lg btn-danger"
                            name="btnAddMore"
                            value="Logout"
                        />
                        </div>
                    </div>
                    
                    <div className="col-md-8 ">
                        <div className="profile-head">
                            <h4 className="my-4">Noor Ali</h4>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${activeTab === "home" ? "active" : ""}`}
                                        id="home-tab"
                                        data-toggle="tab"
                                        role="tab"
                                        aria-controls="home"
                                        aria-selected={activeTab === "home"}
                                        onClick={() => handleTabSwitch("home")}
                                    >
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                  
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div
                                className={`tab-pane fade show ${activeTab === "home" ? "active" : ""}`}
                                id="home"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                            >
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Patient Id</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Noor123</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Patient Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Noor Ali</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>noorali@gmail.com</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>123 456 7890</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Diagnosis</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>blood pressure</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Profile;

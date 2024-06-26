import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Profile.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Navbar from "../Components/navbar.js";

const Profile = () => {
    const [activeTab, setActiveTab] = useState("profile");
    const [profileData, setProfileData] = useState(null);
    const [profileImage, setProfileImage] = useState(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
    );

    useEffect(() => {
        axios.get("https://b43c1a73-82c8-4103-8569-c1e7e6a160cd.mock.pstmn.io/patients/1")
            .then(response => setProfileData(response.data))
            .catch(error => console.error('Error fetching profile data:', error));
    }, []);

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

    if (!profileData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <div className="container emp-profile my-5">
                <form method="post">
                    <div className="row">
                        <div className="col-md-4 text-center mb-4">
                            <div className="profile-img">
                                <img src={profileImage} alt="Profile" className="img-fluid rounded-circle" />
                                <div className="file btn btn-lg btn-primary mt-3">
                                    Change Photo
                                    <input type="file" name="file" onChange={handleImageChange} />
                                </div>
                            </div>
                            <div className="profile-head mt-4">
                                <h4>{profileData.name}</h4>
                            </div>
                            <input
                                type="submit"
                                className="btn btn-lg btn-danger mt-3"
                                name="btnAddMore"
                                value="Logout"
                            />
                        </div>

                        <div className="col-md-8">
                            <Tabs
                                activeKey={activeTab}
                                onSelect={handleTabSwitch}
                                id="profile-tabs"
                                className="mb-3"
                                fill
                            >
                                <Tab eventKey="profile"  title="Profile">
                                    <div className="row ">
                                        <div className="col-md-9">
                                            <label>Patient Id</label>
                                        </div>
                                        <div className="col-md-3 ">
                                            <p>{profileData.id}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <label>Patient Name</label>
                                        </div>
                                        <div className="col-md-3">
                                            <p>{profileData.name}</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-9">
                                            <label>Phone Number</label>
                                        </div>
                                        <div className="col-md-3">
                                            <p>{profileData.phone}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-4 ">
                                            <p>{profileData.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <label>Date Of Birth</label>
                                        </div>
                                        <div className="col-md-3">
                                            <p>{profileData.birth_date}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <label>Gender</label>
                                        </div>
                                        <div className="col-md-3">
                                            <p>{profileData.gender}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <label>Blood Group</label>
                                        </div>
                                        <div className="col-md-3">
                                            <p>{profileData.blood_group}</p>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="invoices" title="Invoices">
                                    <div className="table-responsive">
                                        <table className="table  w-100">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">SERVICE NAME</th>
                                                    <th scope="col">INVOICE DATE</th>
                                                    <th scope="col">TOTAL WITH TAX</th>
                                                    <th scope="col">INVOICE TYPE</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row" >1</th>
                                                    <td colSpan={3} className="text-center">Total</td>
                                                    <td>0.0</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Tab>
                                <Tab eventKey="payments" title="Payments">
                                    <div className="table-responsive">
                                        <table className="table  w-100">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">SERVICE NAME</th>
                                                    <th scope="col">INVOICE DATE</th>
                                                    <th scope="col">TOTAL WITH TAX</th>
                                                    <th scope="col">INVOICE TYPE</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row" >1</th>
                                                    <td colSpan={3} className="text-center">Total</td>
                                                    <td>0.0</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Tab>
                                <Tab eventKey="accountStatement" title="Account Statement">
                                    <div className="table-responsive">
                                        <table className="table  w-100">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">DATE ADDED</th>
                                                    <th scope="col">DESCRIPTION</th>
                                                    <th scope="col">DEBIT</th>
                                                    <th scope="col">CREDIT</th>
                                                    <th scope="col">FINAL BALANCE</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td colSpan={2} className="text-center">Total</td>
                                                    <td>0.00</td>
                                                    <td>0.00</td>
                                                    <td>0 Credit</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Tab> 
                                <Tab eventKey="laboratory" title="Laboratory">
                                    <div className="text-wrapper">
                                        <p>
                                            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                                            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                                            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                                            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                                        </p>
                                        <p>
                                            Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
                                            orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra,
                                            eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.
                                            Interdum praesent ut penatibus fames eros ad consectetur sed.
                                        </p>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Profile;

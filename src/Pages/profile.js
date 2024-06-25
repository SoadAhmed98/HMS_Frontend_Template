import React, { useState } from "react";
import "../Profile.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Navbar from "../Components/navbar.js";

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
                                <h4>Noor Ali</h4>
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
                                defaultActiveKey="profile"
                                id="profile-tabs"
                                className="mb-3"
                                fill
                            >
                                  <Tab eventKey="profile" title="Profile">
                                  <div className="row">
                                                    <div className="col-md-9">
                                                        <label>Patient Id</label>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <p>1</p>
                                                    </div>
                                                </div>
                                    <div className="row">
                                                    <div className="col-md-9">
                                                        <label>Patient Name</label>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <p>Noor Ali</p>
                                                    </div>
                                                </div>
                                               
                                                <div className="row">
                                                    <div className="col-md-9">
                                                        <label>Phone Number</label>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <p>123 456 7890</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-9">
                                                        <label>Email</label>
                                                    </div>
                                                    <div className="col">
                                                        <p>noorali@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-9">
                                                        <label>Date Of Birth</label>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <p>1990-2-2</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-9">
                                                        <label>Gender</label>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <p>
                                                    Female
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-9">
                                                        <label>Blood Group</label>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <p>A+</p>
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
                                                    <th scope="row">1</th>
                                                    <td>Service A</td>
                                                    <td>2024-01-01</td>
                                                    <td>$100.00</td>
                                                    <td>Type A</td>
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
                                                    <th scope="row">1</th>
                                                    <td>Service B</td>
                                                    <td>2024-01-01</td>
                                                    <td>$200.00</td>
                                                    <td>Type B</td>
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
                                                    <td>2024-01-01</td>
                                                    <td>Description</td>
                                                    <td>$0.00</td>
                                                    <td>$0.00</td>
                                                    <td>$0.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Tab>
                                <Tab eventKey="radiology" title="Radiology">
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

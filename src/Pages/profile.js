import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Profile.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PatientAccountTable from '../Components/accountSatatment.js'
import Navbar from "../Components/navbar.js";
import InvoiceReview from "../Components/review.js";

import { useHistory } from 'react-router-dom';
const Profile = () => {
    const history = useHistory();

    

    const [invoices, setInvoices] = useState([]);
    const [totalWithTax, setTotalWithTax] = useState(0);
    const [activeTab, setActiveTab] = useState("profile");
    // const [patienData, setPatienData] = useState(null);
    const [profileImage, setProfileImage] = useState(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
    );
    const [services, setServices] = useState({});
    const [payments, setPayments] = useState([]);
    const [laboratoryData, setLaboratoryData] = useState([]);
    const [patienData, setPatientData] = useState(JSON.parse(localStorage.getItem('data')))

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('login');
        // console.log(isLoggedIn)
        if (isLoggedIn === "false") {
            history.push('/'); 
        }
        else
        {
            // setPatientData(JSON.parse(localStorage.getItem('data')))
            // const [patienData, setPatientData] = useState(JSON.parse(localStorage.getItem('data')))

        }
    }, [history]);
    
    

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axios.get('http://localhost/api/receipts',
                    {
                        headers: {
                            'Accept': 'application/json',
                            // 'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
                            Authorization: patienData.token,
                            
                          },
                          withCredentials: true
                    }
                );
                setPayments(response.data);
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        };

        fetchPayments();
    }, []);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const response = await axios.get(`http://localhost/api/patients/${patienData.id}/invoices`,
                    {
                        headers: {
                            'Accept': 'application/json',
                            // 'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
                            Authorization: patienData.token,
                            
                          },
                          withCredentials: true
                    }
                );
                const invoices = response.data;
                setInvoices(invoices);
                calculateTotal(invoices);
                // fetchServiceNames(invoices);
            } catch (error) {
                console.error("Error fetching invoices:", error);
            }
        };

        fetchInvoices();
    }, []);

    // useEffect(() => {
    //     axios.get("http://localhost/api/patients/1")
    //         .then(response => setPatienData(response.data))
    //         .catch(error => console.error('Error fetching profile data:', error));
    // }, []);

    useEffect(() => {
        const fetchLaboratoryData = async () => {
            try {
                const response = await axios.get(`http://localhost/api/patient-details/${patienData.id}`,
                    {
                        headers: {
                            'Accept': 'application/json',
                            // 'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
                            Authorization: patienData.token,
                            
                          },
                          withCredentials: true
                    }
                );
                // console.log(response)
                setLaboratoryData(response.data.data.patient_laboratories);
            } catch (error) {
                console.error("Error fetching laboratory data:", error);
            }
        };

        fetchLaboratoryData();
    }, []);

    const fetchServiceNames = async (invoices) => {
        const serviceNames = {};
        await Promise.all(invoices.map(async (invoice) => {
            // console.log(invoice)
            try {
                const response = await axios.get(`http://localhost/api/services/${invoice.Service_id ? invoice.Service_id : invoice.Group_id}`);
                console.log(response)
                serviceNames[invoice.Service_id ? invoice.Service_id : invoice.Group_id] = response.data.name;
            } catch (error) {
                console.error(`Error fetching service name for Service_id ${invoice.Service_id}:`, error);
            }
        }));
        setServices(serviceNames);
    };

    const calculateTotal = (invoices) => {
        const total = invoices.reduce((acc, invoice) => acc + invoice.total_with_tax, 0);
        setTotalWithTax(total);
    };

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

    if (!patienData) {
        return <div>Loading...</div>;
    }
    const filteredPayments = payments.filter(payment => payment.patient_id === patienData.id);

    // console.log(filteredPayments)

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
                                <h4>{patienData.name}</h4>
                            </div>
                            {/* <input
                                type="submit"
                                className="btn btn-lg btn-danger mt-3"
                                name="btnAddMore"
                                value="Logout"
                            /> */}
                        </div>

                        <div className="col-md-8">
                            <Tabs
                                activeKey={activeTab}
                                onSelect={handleTabSwitch}
                                id="profile-tabs"
                                className="mb-3"
                                fill
                            >
                                <Tab eventKey="profile" title="Profile">
                                    {/* <div className="row ">
                                        <div className="col-md-6">
                                            <label className="h6 ">Patient Id</label>
                                        </div>
                                        <div className="col-md-6 ">
                                            <p>{profileData.id}</p>
                                        </div>
                                    </div> */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="h6 ">Patient Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{patienData.name}</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="h6">Phone Number</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{patienData.phone}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="h6">Email</label>
                                        </div>
                                        <div className="col-md-6 ">
                                            <p>{patienData.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="h6">Date Of Birth</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{patienData.birth_date}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="h6">Gender</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{patienData.gender}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="h6">Blood Group</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{patienData.blood_group}</p>
                                        </div>
                                    </div>
                                </Tab>


                                <Tab eventKey="invoices" title="Invoices" className="text-center">
                                    <div className="table-responsive">
                                        <table className="table w-100">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Service name</th>
                                                    <th scope="col">Invoice date</th>
                                                    <th scope="col">Total with tax</th>
                                                    <th scope="col">Invoice type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {invoices.map((invoice, index) => (
                                                    <tr key={invoice.id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{services[invoice.Service_id ? invoice.Service_id : invoice.Group_id]}</td>
                                                        <td>{invoice.invoice_date}</td>
                                                        <td>{invoice.total_with_tax}</td>
                                                        <td>{invoice.invoice_type === 1 ? 'Cash' : 'Credit'}</td>
                                                    </tr>
                                                ))}
                                                <tr>
                                                    <td colSpan="4" className="table-info">Total</td>
                                                    <td className="table-success">{totalWithTax}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                               
                                </Tab>

                                <Tab eventKey="review" title="Review">
                                    <InvoiceReview/>
                                </Tab>

                                <Tab eventKey="payments" title="Payments">
                                    <div className="table-responsive">
                                        <table className="table w-100">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Date Added</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                filteredPayments.map((payment) => (
                                                    <tr key={payment.id}>
                                                        <th scope="row">{payment.id}</th>
                                                        <td>{payment.date}</td>
                                                        <td>{payment.amount}</td>
                                                        <td>{payment.description}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </Tab>
                        
                               
                               <Tab eventKey="accountStatment" title="Account Statment">
                               <PatientAccountTable></PatientAccountTable>
                                </Tab>


                                <Tab eventKey="laboratory" title="Laboratory">
                                    <div className="text-wrapper">
                                        {laboratoryData.map((data, index) => (
                                            <div key={index}>
                                                <h5>Laboratory Record #{index + 1}</h5>
                                                <p>{data.patient_laboratories[0].description_employee}</p>
                                                <div className="images">
                                                    {data.patient_laboratories[0].images.map((image, imgIndex) => (
                                                        <img key={imgIndex} src={image.url} alt={image.filename} style={{ width: "100px", height: "100px" }} />
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
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

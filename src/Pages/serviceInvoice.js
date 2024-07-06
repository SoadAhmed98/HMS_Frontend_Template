import React, { useEffect, useState } from 'react';
import Header from "../Components/header.js";
import Navbar from "../Components/navbar.js";
import WOW from 'wowjs';
import axios from 'axios';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min.js';
import Cookies from 'js-cookie';


function ServiceInvoice() {

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const location = useLocation();
  const { serviceId, servicePrice, serviceName } = location.state || {};
  console.log(serviceId,servicePrice,serviceName)



  const [Doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [doctorDepartment, setDoctorDepartment] = useState('');


  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`https://b43c1a73-82c8-4103-8569-c1e7e6a160cd.mock.pstmn.io/doctors`);
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctor details:', error);
      }
    };

    const fetchDepartments = async () => {
      try {
        const response = await axios.get(`https://b43c1a73-82c8-4103-8569-c1e7e6a160cd.mock.pstmn.io/departments`);
        setDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDoctor();
    fetchDepartments();

  }, []);

  // State management
  const [formData, setFormData] = useState({
    patient_id: 1,
    doctor_id: 1,
    Service_id: serviceId,
    discount_value:10.00,
    tax_rate:17, 
    type: 1,
    updateMode:false,
    single_invoice:1
  });

  useEffect(() => {
    // Update department based on selected doctor
    const selectedDoctor = Doctors.find(doc => doc.id === Number(formData.doctor_id));
    if (selectedDoctor) {
      // setFormData(prevState => ({
      //   ...prevState,
      //   department: selectedDoctor.department
      // }));

      setDoctorDepartment(selectedDoctor.department_name)
    } else {
      // setFormData(prevState => ({
      //   ...prevState,
      //   department: ''
      // }));
      setDoctorDepartment('')
    }
  }, [formData.doctor_id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      await axios.get('http://127.0.0.1:80/sanctum/csrf-cookie', {
        withCredentials: true,
      });
    
     await axios.put('http://127.0.0.1:80/api/single-invoices/update', formData, {
       
        headers: {
          'Accept': 'application/json',
          'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
        },
        withCredentials: true
      });
    } catch (error) {
      console.error('Error:', error);
    }

    // try {
    //   const response = await axios.post('http://example.com/api/appointments', formData);
    //   console.log('Response:', response.data);
    //   // Handle the response as needed
    // } catch (error) {
    //   console.error('There was an error making the request:', error);
    //   // Handle the error as needed
    // }
  };

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Name:", name, "Value:", value);
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (

    <>
      <Navbar />
      <Header head="Service Invoice For MediTech" content="How to confirm your booking?" place="Service Invoice"/>

      <section className="container mt-5 p-5">
      <div className="sec-title centered">
              <h2>Confirm your Service Booking </h2>
              <div className="separator"></div>
            </div>
       <div className=" row d-flex justify-content-between">
        <div className="p-2 col-md-6 col-sm-8 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">

        <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="patientName" className="form-label">Patient Name</label>
        <input
          type="text"
          className="form-control"
          id="patientName"
          name="patientName"
          value={'Yomna'}
          readOnly
        />
      </div>

      <div className="mb-3">
        <label htmlFor="doctorId" className="form-label">Doctor Name</label>
        <select
          className="form-select"
          id="doctor_id"
          name="doctor_id"
          value={formData.doctor_id}
          onChange={handleChange}
        >
          <option value="">Select Doctor</option>
          {Doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="department" className="form-label">Department Name</label>
        <input
          type="text"
          className="form-control"
          id="department"
          name="department"
          value={doctorDepartment}
          readOnly
        />
      </div>

      <div className="mb-3">
        <label htmlFor="serviceName" className="form-label">Service Name</label>
        <input
          type="text"
          className="form-control"
          id="serviceName"
          name="serviceName"
          value={serviceName}
          readOnly
        />
      </div>

      <div className="mb-3">
        <label htmlFor="servicePrice" className="form-label">Service Price</label>
        <input
          type="text"
          className="form-control"
          id="servicePrice"
          name="servicePrice"
          value={servicePrice}
          readOnly
        />
      </div>

      <div className="mb-3">
        <label htmlFor="invoiceType" className="form-label">Invoice Type</label>
        <select
          className="form-select"
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          {/* <option value="">Select Invoice Type</option>  */}
          <option value="1">Cash</option> 
          <option value="2">Credit Card</option> 
          {/* {invoiceTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))} */}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">Confirm</button>
    </form>


        </div>

        <div className=" col-md-6 col-sm-8 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
            <img src="/images/docs1.png" alt="Description" />
        </div>
        </div>
      </section>
      
    </>
  );
};

export default ServiceInvoice;

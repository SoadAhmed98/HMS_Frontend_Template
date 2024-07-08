// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';


// const DoctorDetails = (props) => {
//   const [doctorDetails, setDoctorDetails] = useState({});
//   const [departments, setDepartments] = useState([]);

//   // Get a specific cookie
//   // const myCookieValue = Cookies.get('XSRF-TOKEN');
//   // console.log(myCookieValue)

//   useEffect(() => {
//     const fetchDoctor = async () => {
//       try {
//         const response = await axios.get(`https://b43c1a73-82c8-4103-8569-c1e7e6a160cd.mock.pstmn.io/doctors/${props.id}`);
//         setDoctorDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching doctor details:', error);
//       }
//     };

//     const fetchDepartments = async () => {
//       try {
//         const response = await axios.get(`https://b43c1a73-82c8-4103-8569-c1e7e6a160cd.mock.pstmn.io/departments`);
//         setDepartments(response.data);
//       } catch (error) {
//         console.error('Error fetching departments:', error);
//       }
//     };

//     fetchDoctor();
//     fetchDepartments();

//   }, [props.id]);

//   // const handleSubmit = async (e) => {
        
//   //   e.preventDefault();
//   //   // setPredictions(null)
//   //   // setError404(null)
//   //   // const symptomList = symptoms.filter(symptom => symptom.value !== '');
//   //   try {
//   //     const response = await axios.post('http://127.0.0.1:80/api/appointments', 
//   //     { doctor_id: doctorDetails.id ,
//   //       department_id:1,
//   //       name: " yomna",
//   //       email: "yomnakhaled2424@gmail.com",
//   //       phone: "01018486331",
//   //       notes: "This is a fourth test appointment."
//   //     });
      
//   //     // setPredictions(response.data);
    


//   //   } catch (Errorrr) {
      
//   //     console.error('There was an error making the request:', Errorrr);
     
//   //     // setError404(Errorrr.response.data.error)
      
//   //   }
//   // };
//   // console.log(doctorDetails.id);

//     const [formData, setFormData] = useState({
//       doctor_id: 1   ,
//       department_id:1,
//       name: '',
//       email: '',
//       phone: '',
//       notes: ''
//     });

//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     };

//   //   function getAllCookies() {
//   //     return document.cookie.split('; ').reduce((acc, cookie) => {
//   //         const [name, ...rest] = cookie.split('=');
//   //         acc[name] = rest.join('=');
//   //         return acc;
//   //     }, {});
//   // }
  
//   // function cookiesToHeaderString(cookies) {
//   //     return Object.entries(cookies).map(([key, value]) => `${key}=${value}`).join('; ');
//   // }
    

//     const handleSubmit = async (e) => {
        
//       e.preventDefault();
//       // const cookies = Cookies.get('hospitalmanagementsystem_session');
//     // const cookieHeader = cookiesToHeaderString(cookies);
//     // console.log(cookieHeader)
//     // console.log(cookies)

//       // setPredictions(null)
//       // setError404(null)
//       // const symptomList = symptoms.filter(symptom => symptom.value !== '');
//       console.log(formData)
//       // try {
//       //   await axios.get('http://127.0.0.1:80/sanctum/csrf-cookie',
//       //     {
//       //       withCredentials:true,
//       //     }
//       //   );

//       //   // const response = await axios.post('http://127.0.0.1:80/api/appointments',
//       //   await axios.post('http://127.0.0.1:80/api/appointments',formData,
//       //   {
//       //     withCredentials:true,
//       //     headers: {
//       //     // 'Content-Type': 'application/json',
//       //     Accept:'application/json',
//       //     // 'hospitalmanagementsystem_session':cookies
//       //     // 'Cookie' : cookieHeader
//       //     'X-XSRF-TOKEN':Cookies.get('XSRF-TOKEN')
//       //   },
//       //     // withXSRFToken:true,
        
//       //   // credentials : 'same-origin'
//       // }
//       // );
//        // } catch (Errorrr) {
        
//       //   console.error('There was an error making the request:', Errorrr);
       
//       //   // setError404(Errorrr.response.data.error)
        
//       // }
      
//       try {
//         await axios.get('http://127.0.0.1:80/sanctum/csrf-cookie', {
//           withCredentials: true,
//         });
      
//        await axios.post('http://127.0.0.1:80/api/appointments', formData, {
         
//           headers: {
//             'Accept': 'application/json',
//             'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
//           },
//           withCredentials: true
//         });
//       } catch (error) {
//         console.error('Error:', error);
//       }
      
//         // setPredictions(response.data);
      
  
  
     
//     };

//     // const handleSubmit = async (e) => {
//     //   e.preventDefault();
//     //   console.log(formData)
      
//     //   try {
//     //     const response = await axios.post('http://127.0.0.1:80/api/appointments', formData);
//     //     console.log('Response:', response.data);
//     //     // Handle the response as needed
//     //   } catch (error) {
//     //     console.error('There was an error making the request:', error);
//     //     // Handle the error as needed
//     //   }
//     // };

//   return (
//     <section className="doctor-detail">
//       <div className="auto-container">
//         <div className="upper-box">
//           <div className="row clearfix">
//             <div className="detail-column col-lg-8 col-md-12 col-sm-12">
//               <div className="inner-box">
//                 <div className="info-header">
//                   <p>Provide Comprehensive Quality Care</p>
//                   <h3>I'm Dr. {doctorDetails.name}</h3>
//                   <span className="designation">{doctorDetails.department}</span>
//                 </div>
//                 <ul className="info-list">
//                   <li>
//                     <strong>Expertise</strong>
//                     <p>{doctorDetails.expertise}</p>
//                   </li>
//                   <li>
//                     <strong>Education</strong>
//                     <p>{doctorDetails.education}</p>
//                   </li>
//                   <li>
//                     <strong>Experience</strong>
//                     <p>{doctorDetails.experience}</p>
//                   </li>
//                   <li>
//                     <strong>Profession</strong>
//                     <p>{doctorDetails.profession}</p>
//                   </li>
//                   <li><strong>Email</strong><p> {doctorDetails.email}</p></li>
//                   <li><strong>Fees</strong> <p>{doctorDetails.fees}</p></li> 
//                 </ul>
//               </div>
//             </div>
//             <div className="image-box col-lg-4 col-md-12 col-sm-12">
//               <div className="image">
//                 <img
//                   src={doctorDetails.image}
//                   alt="Doctor"
//                   style={{ height: "30rem" }}
//                   className="wow fadeInRight"
//                   data-wow-delay="0ms"
//                   data-wow-duration="1500ms"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Lower Content */}
//         <div className="lower-content">
//           <div className="row clearfix">
//             {/* Form Column */}
//             <div className="form-column col-lg-8 col-md-12 col-sm-12">
//               <div className="inner-box">
//                 <div className="appointment-form">
//                   <div className="sec-title centered">
//                     <h2 className='fw-bolder'>Book your Appointment with Dr.{doctorDetails.name}</h2>
//                     <p>Get to Book Your Appointment Now</p>
//                   </div>

//                   <form onSubmit={handleSubmit} method='POST'>

//                     <div className="row clearfix">
//                       <div className="col-md-6 col-sm-12 col-xs-12 form-group">
//                         <input type="text" name="name" placeholder="Name" 
//                         required 
//                         // value={formData.name} 
//                         onChange={handleChange} />
//                         <span className="icon fa fa-user"></span>
//                       </div>

//                       <div className="col-md-6 col-sm-12 col-xs-12 form-group">
//                         <input type="email" name="email" placeholder="Email" 
//                         required 
//                         // value={formData.email} 
//                         onChange={handleChange} />

//                         <span className="icon fa fa-envelope"></span>
//                       </div>

//                       <div className="col-md-6 col-sm-12 col-xs-12 form-group">
//                         <input type="tel" name="phone" placeholder="Phone No" 
//                         required
//                         // value={formData.phone} 
//                         onChange={handleChange}  />

//                         <span className="icon fas fa-phone"></span>
//                       </div>

//                       <div className="col-md-6 col-sm-12 col-xs-12 form-group">
//                         <select className="custom-select-box" disabled>
//                           <option>{doctorDetails.department} Department</option>
//                           {/* <option>Neurology Department</option>
//                           <option>Urology Department</option>
//                           <option>Gynecological Conditions</option>
//                           <option>Pediatric Department</option>
//                           <option>Laboratory Department</option> */}
//                         </select>
//                       </div>

//                       {/* <div className="col-md-6 col-sm-12 col-xs-12 form-group">
//                         <input type="text" name="day" placeholder="Day" />
//                         <span className="icon fa fa-calendar"></span>
//                       </div>
//                       <div className="col-md-6 col-sm-12 col-xs-12 form-group">
//                         <input type="text" name="time" placeholder="Time" />
//                         <span className="icon far fa-clock"></span>
//                       </div> */}

//                       <div className="col-md-12 col-sm-12 col-xs-12 form-group">
//                         <textarea name="notes" placeholder="Notes"
//                         //  value={formData.notes} 
//                          onChange={handleChange} ></textarea>
//                       </div>

//                       <div className="col-md-12 col-sm-12 col-xs-12 form-group text-center">
//                         <button className="theme-btn btn-style-two" type="submit" name="submit-form">
//                           <span className="txt">Book Appointment</span>
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>

//             {/* Info Column */}
//             <div className="info-column col-lg-4 col-md-12 col-sm-12">
//               <div className="inner-box">
//                 <div className="timetable">
//                 <h4><small>Check Our</small> Weekly Timetable</h4>
//                   <p>Suspendisse potenti. Maecenas dapibus ac tellus sed pulvinar. Vestibulum bib volutpat accumsan non laoreet nulla luctus...</p>
//                 <ul>
//                       {doctorDetails.works_day && doctorDetails.works_day.map(day => (
//                         <li key={day.day}>{day.day}<span> {day.slots.join(', ')}</span></li>
//                       ))}
//                     </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DoctorDetails;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

const DoctorDetails = (props) => {
  const [doctorDetails, setDoctorDetails] = useState({});
  const [departments, setDepartments] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`http://localhost/api/doctors/${props.id}`);
        // console.log(response)
        setDoctorDetails(response.data.data);
      } catch (error) {
        console.error('Error fetching doctor details:', error);
      }
    };


    const fetchDepartments = async () => {
      try {
        const response = await axios.get(`http://localhost/api/departments`);
        setDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDoctor();
    fetchDepartments();
  }, [props.id]);

  const [formData, setFormData] = useState({
    doctor_id: 1,
    department_id: 1,
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const isLoggedIn = localStorage.getItem('login');
    if (isLoggedIn === "false") {
      history.push('/login'); 
      return;
    }

    try {
      await axios.get('http://127.0.0.1:80/sanctum/csrf-cookie', {
        withCredentials: true,
      });
    
      await axios.post('http://127.0.0.1:80/api/appointments', formData, {
        headers: {
          'Accept': 'application/json',
          'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
        },
        withCredentials: true
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="doctor-detail">
      <div className="auto-container">
        <div className="upper-box">
          <div className="row clearfix">
            <div className="detail-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-box">
                <div className="info-header">
                  <p>Provide Comprehensive Quality Care</p>
                  <h3>I'm Dr. {doctorDetails.name}</h3>
                  <span className="designation">{doctorDetails.department_name}</span>
                </div>
                <ul className="info-list">
                  <li>
                    <strong>Expertise</strong>
                    <p>Heart Specialist</p>
                    {/* <p>{doctorDetails.expertise}</p> */}

                  </li>
                  <li>
                    <strong>Education</strong>
                    <p>Doctor of Medicine, University of Texas, USA (1990) Medical Orientation Program, St. Louis University (St. Louis, Missouri 1996)</p>
                    {/* <p>{doctorDetails.education}</p> */}

                  </li>
                  <li>
                    <strong>Experience</strong>
                    <p>15 years of Experience in Medicine</p>
                    {/* <p>{doctorDetails.experience}</p> */}

                  </li>
                  <li>
                    <strong>Profession</strong>
                    <p>MD Dean and Executive Vice President for Medical Affairs School of Medicine and Graduate School of Biomedical Sciences University of Texas Health Science Center at San Antonio</p>
                    {/* <p>{doctorDetails.profession}</p> */}

                  </li>
                  <li><strong>Email</strong><p> {doctorDetails.email}</p></li>
                  <li><strong>Fees</strong> <p>{doctorDetails.fees}</p></li> 
                </ul>
              </div>
            </div>
            <div className="image-box col-lg-4 col-md-12 col-sm-12">
              <div className="image">
                <img
                  src={doctorDetails.image}
                  alt="Doctor"
                  style={{ height: "30rem" }}
                  className="wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Lower Content */}
        <div className="lower-content">
          <div className="row clearfix">
            {/* Form Column */}
            <div className="form-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-box">
                <div className="appointment-form">
                  <div className="sec-title centered">
                    <h2 className='fw-bolder'>Book your Appointment with Dr.{doctorDetails.name}</h2>
                    <p>Get to Book Your Appointment Now</p>
                  </div>

                  <form onSubmit={handleSubmit} method='POST'>
                    <div className="row clearfix">
                      <div className="col-md-6 col-sm-12 col-xs-12 form-group">
                        <input type="text" name="name" placeholder="Name" 
                        required 
                        onChange={handleChange} />
                        <span className="icon fa fa-user"></span>
                      </div>

                      <div className="col-md-6 col-sm-12 col-xs-12 form-group">
                        <input type="email" name="email" placeholder="Email" 
                        required 
                        onChange={handleChange} />
                        <span className="icon fa fa-envelope"></span>
                      </div>

                      <div className="col-md-6 col-sm-12 col-xs-12 form-group">
                        <input type="tel" name="phone" placeholder="Phone No" 
                        required
                        onChange={handleChange}  />
                        <span className="icon fas fa-phone"></span>
                      </div>

                      <div className="col-md-6 col-sm-12 col-xs-12 form-group">
                        <select className="custom-select-box" disabled>
                          <option>{doctorDetails.department_name} Department</option>
                        </select>
                      </div>

                      <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                        <textarea name="notes" placeholder="Notes"
                         onChange={handleChange} ></textarea>
                      </div>

                      <div className="col-md-12 col-sm-12 col-xs-12 form-group text-center">
                        <button className="theme-btn btn-style-two" type="submit" name="submit-form">
                          <span className="txt">Book Appointment</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="info-column col-lg-4 col-md-12 col-sm-12">
              <div className="inner-box">
                <div className="timetable">
                <h4><small>Check Our</small> Weekly Timetable</h4>
                  <p>Suspendisse potenti. Maecenas dapibus ac tellus sed pulvinar. Vestibulum bib volutpat accumsan non laoreet nulla luctus...</p>
                <ul>
                      {doctorDetails.works_day && doctorDetails.works_day.map(day => (
                        <li key={day.day}>{day.day}</li>
                      ))}
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;

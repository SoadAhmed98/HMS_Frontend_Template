// import { useEffect, useState } from "react";
// import { useHistory, Link, Redirect } from "react-router-dom";
// import Header from "../Components/header";
// import WOW from 'wowjs';
// import Navbar from "../Components/navbar";
// import axios from 'axios';
// import { validEmail, validPassword, validUsername } from "../Components/rejex";
// import Cookies from 'js-cookie';

// const Register = () => {
//     const history = useHistory();
//     const [userData, setUserData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         password_confirmation: ''
//     });

//     const [redirect, setRedirect] = useState(false);
//     const [errors, setErrors] = useState({
//         name: "",
//         email: "",
//         password: "",
//         password_confirmation: "",
//     });

//     const submit = async (e) => {
//         e.preventDefault();
//         // console.log(userData);
//         try {
//             await axios.get('http://127.0.0.1:80/sanctum/csrf-cookie',
//             {
//                 withCredentials:true,
//             }
//             );

//             // const response = await fetch('http://127.0.0.1:80/api/patient/register', {
//             //     method: 'POST',
//             //     headers: {
//             //     'Accept':'application/json',
//             //     'X-XSRF-TOKEN':Cookies.get('XSRF-TOKEN')
//             //     },
          
//             //     withCredentials:true,
//             //     body: userData
//             // });

//             const response = await axios.post('http://127.0.0.1:80/api/patient/register',userData,
//             {
//               headers: {
              
//               'Accept':'application/json',
//               'X-XSRF-TOKEN':Cookies.get('XSRF-TOKEN')
//             },
              
//               withCredentials:true,
            
            
//           }
//           );
//           console.log(response)

//             if (response.status==200) {
//                 console.log(response)
//                 // const data = await response.json();
//                 localStorage.setItem("token", response.data.data.patient.token )
//                 console.log(response.data.data.patient.token)
                

//                 await axios.get("http://127.0.0.1:80/api/patient/send_code", {
//                     headers: {
//                         Authorization: `${response.data.data.patient.token}`,
//                         "Accept": "application/json",
//                         'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
//                     },
//                     withCredentials: true,
//                 });

//                 history.push("/confirm-code");
//             } else {
//               setErrors("Registration failed. Please try again.");
//             }
//         } catch (error) {
//         console.error('Error response:', error);  
//           setErrors("Registration failed. Please try again.");
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setUserData({ ...userData, [name]: value });

//         switch (name) {
//             case "email":
//                 setErrors({
//                     ...errors,
//                     email: validEmail.test(value) ? "" : "Invalid email format",
//                 });
//                 break;
//             case "password":
//                 setErrors({
//                     ...errors,
//                     password: validPassword.test(value) ? "" : "Invalid password format",
//                 });
//                 break;
//             case "name":
//                 setErrors({
//                     ...errors,
//                     name: value.length < 3 ? "Name must be at least 3 characters long" : "",
//                 });
//                 break;
//             case "password_confirmation":
//                 setErrors({
//                     ...errors,
//                     password_confirmation: value !== userData.password ? "Passwords do not match" : "",
//                 });
//                 break;
//             default:
//                 break;
//         }
//     };

//     if (redirect) {
//         return <Redirect to="/confirm-code" />;
//     }

//     return (
//         <>
//             <Navbar />
//             <Header head="Register For MediTech" content="What We Actually Do?" place="Register" />
//             <div className="container mt-5 mb-5">
//                 <div className="row justify-content-center">
//                     <div className="auto-container">
//                         <div className="sec-title centered">
//                             <h2>Register To Join Us Now</h2>
//                             <div className="separator"></div>
//                         </div>
//                         <div className="contact-form wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
//                             <form onSubmit={submit} className="w-75 mx-auto form-group">
//                                 <div className="row">
//                                     <div className="col-lg-12 mb-3">
//                                         <input
//                                             type="text"
//                                             className={`form-control ${errors.name ? "is-invalid" : ""}`}
//                                             value={userData.name}
//                                             onChange={handleInputChange}
//                                             name="name"
//                                             placeholder="Name"
//                                         />
//                                         <div className="invalid-feedback">{errors.name}</div>
//                                     </div>

//                                     <div className="col-lg-12 mb-3">
//                                         <input
//                                             type="email"
//                                             className={`form-control ${errors.email ? "is-invalid" : ""}`}
//                                             value={userData.email}
//                                             onChange={handleInputChange}
//                                             name="email"
//                                             placeholder="Email"
//                                         />
//                                         <div className="invalid-feedback">{errors.email}</div>
//                                     </div>

//                                     <div className="col-lg-12 mb-3">
//                                         <input
//                                             type="password"
//                                             className={`form-control ${errors.password ? "is-invalid" : ""}`}
//                                             value={userData.password}
//                                             onChange={handleInputChange}
//                                             name="password"
//                                             placeholder="Password"
//                                         />
//                                         <div className="invalid-feedback">{errors.password}</div>
//                                     </div>

//                                     <div className="col-lg-12 mb-3">
//                                         <input
//                                             type="password"
//                                             className={`form-control ${errors.password_confirmation ? "is-invalid" : ""}`}
//                                             value={userData.password_confirmation}
//                                             onChange={handleInputChange}
//                                             name="password_confirmation"
//                                             placeholder="Confirm Password"
//                                         />
//                                         <div className="invalid-feedback">{errors.password_confirmation}</div>
//                                     </div>

//                                     <div className="d-flex justify-content-center align-items-center">
//                                         <button
//                                             disabled={!Object.values(errors).every((error) => error === "")}
//                                             type="submit"
//                                             className="theme-btn btn-style-two w-100 mb-2"
//                                         >
//                                             <span className="txt">Register</span>
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div className="text-center">
//                                     <p className="mb-0">Already have an account?</p>
//                                     <Link to="/login">Login</Link>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Register;
import React, { useEffect, useState } from "react";
import { useHistory, Link, Redirect } from "react-router-dom";
import Header from "../Components/header";
import WOW from "wowjs";
import Navbar from "../Components/navbar";
import axios from "axios";
import { validEmail, validPassword } from "../Components/rejex";
import Cookies from "js-cookie";

const Register = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    birth_date: "",
    blood_group: "",
    gender: "",
    address: "",
  });

  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    blood_group: "",
    gender: "",
    address: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.get('http://127.0.0.1:80/sanctum/csrf-cookie', { withCredentials: true });

      const response = await axios.post('http://127.0.0.1:80/api/patient/register', userData, {
        headers: {
          'Accept': 'application/json',
          'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.data.patient);

        await axios.get("http://127.0.0.1:80/api/patient/send_code", {
          headers: {
            Authorization: `${response.data.data.patient.token}`,
            "Accept": "application/json",
            'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
          },
          withCredentials: true,
        });

        history.push("/confirm-code");
      } else {
        setErrors({ ...errors, registration: "Registration failed. Please try again." });
      }
    } catch (error) {
      console.error('Error response:', error);
      setErrors({ ...errors, registration: "Registration failed. Please try again." });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
    // console.log("User Data Updated:", userData);

    switch (name) {
      case "email":
        setErrors({ ...errors, email: validEmail.test(value) ? "" : "Invalid email format" });
        break;
      case "password":
        setErrors({ ...errors, password: validPassword.test(value) ? "" : "Invalid password format" });
        break;
      case "name":
        setErrors({ ...errors, name: value.length < 3 ? "Name must be at least 3 characters long" : "" });
        break;
      case "password_confirmation":
        setErrors({ ...errors, password_confirmation: value !== userData.password ? "Passwords do not match" : "" });
        break;
      case "birthYear":
      case "birthMonth":
      case "birthDay":
        const { birthYear, birthMonth, birthDay } = {
          ...userData,
          [name]: value
        };

        if (birthYear && birthMonth && birthDay) {
          const birth_date = `${birthYear}-${birthMonth}-${birthDay}`;
          setUserData(prevUserData => ({
            ...prevUserData,
            birth_date
          }));
          setErrors({ ...errors, birth_date: "" });
        } else {
          setErrors({ ...errors, birth_date: "Please fill in all fields for birthdate" });
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  if (redirect) {
    return <Redirect to="/confirm-code" />;
  }

  return (
    <>
      
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-body">
                <div className="sec-title centered">
                  <h2>Register To Join Us Now</h2>
                  <div className="separator"></div>
                </div>
                <div className="contact-form wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <form onSubmit={submit} className="form-group">
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <input
                          type="text"
                          className={`form-control ${errors.name ? "is-invalid" : ""}`}
                          value={userData.name}
                          onChange={handleInputChange}
                          name="name"
                          placeholder="Name"
                          required
                        />
                        <div className="invalid-feedback">{errors.name}</div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <input
                          type="email"
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          value={userData.email}
                          onChange={handleInputChange}
                          name="email"
                          placeholder="Email"
                          required
                        />
                        <div className="invalid-feedback">{errors.email}</div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <input
                          type="password"
                          className={`form-control ${errors.password ? "is-invalid" : ""}`}
                          value={userData.password}
                          onChange={handleInputChange}
                          name="password"
                          placeholder="Password"
                          required
                        />
                        <div className="invalid-feedback">{errors.password}</div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <input
                          type="password"
                          className={`form-control ${errors.password_confirmation ? "is-invalid" : ""}`}
                          value={userData.password_confirmation}
                          onChange={handleInputChange}
                          name="password_confirmation"
                          placeholder="Confirm Password"
                          required
                        />
                        <div className="invalid-feedback">{errors.password_confirmation}</div>
                      </div>

                      <div className="col-lg-4 mb-3">
                        <input
                          type="text"
                          className={`form-control ${errors.birthYear ? "is-invalid" : ""}`}
                          value={userData.birthYear}
                          onChange={handleInputChange}
                          name="birthYear"
                          placeholder="Year"
                          required
                        />
                        <div className="invalid-feedback">{errors.birthYear}</div>
                      </div>

                      <div className="col-lg-4 mb-3">
                        <input
                          type="text"
                          className={`form-control ${errors.birthMonth ? "is-invalid" : ""}`}
                          value={userData.birthMonth}
                          onChange={handleInputChange}
                          name="birthMonth"
                          placeholder="Month"
                          required
                        />
                        <div className="invalid-feedback">{errors.birthMonth}</div>
                      </div>

                      <div className="col-lg-4 mb-3">
                        <input
                          type="text"
                          className={`form-control ${errors.birthDay ? "is-invalid" : ""}`}
                          value={userData.birthDay}
                          onChange={handleInputChange}
                          name="birthDay"
                          placeholder="Day"
                          required
                        />
                        <div className="invalid-feedback">{errors.birthDay}</div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <select
                          value={userData.blood_group}
                          onChange={handleInputChange}
                          name="blood_group"
                          required
                        >
                          <option value="">Select Blood Type</option>
                          <option value="A-">A-</option>
                          <option value="A+">A+</option>
                          <option value="B-">B-</option>
                          <option value="B+">B+</option>
                          <option value="AB-">AB-</option>
                          <option value="AB+">AB+</option>
                          <option value="O-">O-</option>
                          <option value="O+">O+</option>
                        </select>
                        <div className="invalid-feedback">{errors.blood_group}</div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <select
                          value={userData.gender}
                          onChange={handleInputChange}
                          name="gender"
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="invalid-feedback">{errors.gender}</div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <input
                          type="text"
                          className={`form-control ${errors.address ? "is-invalid" : ""}`}
                          value={userData.address}
                          onChange={handleInputChange}
                          name="address"
                          placeholder="Address"
                          required
                        />
                        <div className="invalid-feedback">{errors.address}</div>
                      </div>

                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          disabled={!Object.values(errors).every((error) => error === "")}
                          type="submit"
                          className="theme-btn btn-style-two w-100 mb-2"
                        >
                          <span className="txt">Register</span>
                        </button>
                      </div>

                      {errors.registration && (
                        <div className="col-lg-12 mb-3 text-danger">{errors.registration}</div>
                      )}

                    </div>
                    <div className="text-center">
                      <p className="mb-0">Already have an account?</p>
                      <Link to="/login">Login</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

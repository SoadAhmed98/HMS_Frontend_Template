// import { useEffect, useState } from "react";
// import { useHistory, Link, Redirect } from "react-router-dom";
// import Header from "../Components/header.js";
// import Navbar from "../Components/navbar.js";
// import WOW from "wowjs";
// import { validEmail, validPassword } from "../Components/rejex.js";

// const Login = (props) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [redirect, setRedirect] = useState(false);
//   const [errors, setErrors] = useState({
//     email: "",
//     password: "",
//     login: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const submit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://127.0.0.1:80/api/patient/login', {
//       method: 'POST',
//       // credentials: 'include',
//       headers: {'Accept': 'application/json'},
//       body: JSON.stringify({
//         email,
//         password
//       })
//     });

//     const content = await response.json();

//     if (response.ok) {
//       setRedirect(true);
//       props.setName(content.name);
//     } else {
//       setErrors({ ...errors, login: content.message || 'Login failed' });
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "email") {
//       setEmail(value);
//       setErrors({ ...errors, email: validEmail.test(value) ? "" : "Invalid email format" });
//     } else if (name === "password") {
//       setPassword(value);
//       setErrors({ ...errors, password: validPassword.test(value) ? "" : "Invalid password format" });
//     }
//   };

//   useEffect(() => {
//     new WOW.WOW().init();
//   }, []);

//   if (redirect) {
//     return <Redirect to="/" />;
//   }

//   return (
//     <>
//       <Navbar />
//       <Header head="Login For MediTech" content="What We Actually Do?" place="Login" />
//       <div className="container mt-5 mb-5">
//         <div className="row justify-content-center">
//           <div className="auto-container">
//             <div className="sec-title centered">
//               <h2>Login</h2>
//               <div className="separator"></div>
//             </div>
//             <div className="contact-form wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
//               <form onSubmit={submit}>
//                 <div className="row clearfix">
//                   <div className="col-lg-12 form-group">
//                     <p className="text-danger">{errors.login}</p>
//                   </div>
//                   <div className="col-lg-12 form-group">
//                     <input
//                       required
//                       type="email"
//                       className={`form-control ${errors.email ? "border-danger" : "border-success"}`}
//                       value={email}
//                       onChange={handleInputChange}
//                       name="email"
//                       placeholder="Email"
//                     />
//                     <p className="text-danger">{errors.email}</p>
//                   </div>

//                   <div className="col-lg-12 col-md-6 form-group">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       required
//                       className={`form-control ${errors.password ? "border-danger" : "border-success"}`}
//                       value={password}
//                       onChange={handleInputChange}
//                       name="password"
//                       placeholder="Password"
//                     />
//                     <p className="text-danger">{errors.password}</p>
//                   </div>

//                   <div className="col-lg-12 col-md-6 form-group">
//                     <input
//                       id="showPassword"
//                       type="checkbox"
//                       checked={showPassword}
//                       onChange={() => setShowPassword(!showPassword)}
//                     />
//                     <label htmlFor="showPassword" className="text-dark mx-1">
//                       Show Password
//                     </label>
//                   </div>

//                   <div className="col-lg-12 form-group text-center">
//                     <button
//                       disabled={errors.email || errors.password}
//                       type="submit"
//                       className="theme-btn btn-style-two w-25 mb-2"
//                     >
//                       <span className="txt">Login</span>
//                     </button>
//                     <div className="text-center mt-4">
//                       <h5 className="text-dark">New User?</h5>
//                       <Link to="/register">Register now to create an account</Link>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import { useEffect, useState } from "react";
import { useHistory, Link, Redirect } from "react-router-dom";
import Header from "../Components/header.js";
import Navbar from "../Components/navbar.js";
import axios from 'axios'; 
import Cookies from 'js-cookie';
import WOW from "wowjs";
import { validEmail, validPassword } from "../Components/rejex.js";

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    login: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:80/api/patient/login', {
        email,
        password
      }, {
        headers: {
          'Accept': 'application/json',
          'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        const content = response.data;
        setRedirect(true);
        props.setName(content.name);
      } else {
        setErrors({ ...errors, login: 'Login failed' });
      }
    } catch (error) {
      setErrors({ ...errors, login: error.response?.data?.message || 'Login failed' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      setErrors({ ...errors, email: validEmail.test(value) ? "" : "Invalid email format" });
    } else if (name === "password") {
      setPassword(value);
      setErrors({ ...errors, password: validPassword.test(value) ? "" : "Invalid password format" });
    }
  };

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Navbar />
      <Header head="Login For MediTech" content="What We Actually Do?" place="Login" />
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="auto-container">
            <div className="sec-title centered">
              <h2>Login</h2>
              <div className="separator"></div>
            </div>
            <div className="contact-form wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <form onSubmit={submit}>
                <div className="row clearfix">
                  <div className="col-lg-12 form-group">
                    <p className="text-danger">{errors.login}</p>
                  </div>
                  <div className="col-lg-12 form-group">
                    <input
                      required
                      type="email"
                      className={`form-control ${errors.email ? "border-danger" : "border-success"}`}
                      value={email}
                      onChange={handleInputChange}
                      name="email"
                      placeholder="Email"
                    />
                    <p className="text-danger">{errors.email}</p>
                  </div>

                  <div className="col-lg-12 col-md-6 form-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      className={`form-control ${errors.password ? "border-danger" : "border-success"}`}
                      value={password}
                      onChange={handleInputChange}
                      name="password"
                      placeholder="Password"
                    />
                    <p className="text-danger">{errors.password}</p>
                  </div>

                  <div className="col-lg-12 col-md-6 form-group">
                    <input
                      id="showPassword"
                      type="checkbox"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                    />
                    <label htmlFor="showPassword" className="text-dark mx-1">
                      Show Password
                    </label>
                  </div>

                  <div className="col-lg-12 form-group text-center">
                    <button
                      disabled={errors.email || errors.password}
                      type="submit"
                      className="theme-btn btn-style-two w-25 mb-2"
                    >
                      <span className="txt">Login</span>
                    </button>
                    <div className="text-center mt-4">
                      <h5 className="text-dark">New User?</h5>
                      <Link to="/register">Register now to create an account</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;


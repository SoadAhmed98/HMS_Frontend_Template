import { useEffect, useState } from "react";
import { validEmail, validPassword } from "../Components/rejex.js";
import {
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min.js";
import { Link } from "react-router-dom";
import { Card} from "react-bootstrap";
import Header from "../Components/header.js";
import WOW from 'wowjs';
import  Navbar  from "../Components/navbar.js";


function Login(props) {
  const location = useLocation(); 
  const history = useHistory();
  const match = useRouteMatch(); 

  const [userData, setuserData] = useState({
    email: "",
    pass: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passError: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeData(e) {
    const { name, value } = e.target;
    setuserData({ ...userData, [name]: value });

    switch (name) {
      case "email":
        setErrors({
          ...errors,
          emailError: validEmail.test(value) ? "" : "Invalid email format",
        });
        break;
      case "pass":
        setErrors({
          ...errors,
          passError: validPassword.test(value) ? "" : "Invalid password format",
        });
        break;
      default:
        break;
    }
  }

  const submitData = (e) => {
    e.preventDefault();
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedUserData &&
      storedUserData.email === userData.email &&
      storedUserData.pass === userData.pass
    ) {
      localStorage.setItem("isLoggedIn", true); 
      history.push("/");
    } else {
      setErrors({ ...errors, loginError: "Invalid email or password" });
    }
  };
  useEffect(() => {
		new WOW.WOW().init();
	}, []);


  return (
    <>
    <Navbar/>
     <Header head="Login For MediTech" content="What We Actually Do?" place="Login"/>
     <div className="container mt-5 mb-5">
  <div className="row justify-content-center">
    <h1 className="text-center fw-bold mb-5">Login</h1>
    <div className="col-md-6">
      <Card>
        <Card.Body className="mt-5">
          <form onSubmit={(e) => submitData(e)}>
            <div className="mb-3">
              <p className="text-danger">{errors.loginError}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fw-bolder text-dark">Email</label>
              <input
                required
                type="email"
                className={`form-control ${errors.emailError ? "border-danger" : "border-success"}`}
                value={userData.email}
                onChange={(e) => changeData(e)}
                name="email"
              />
              <p className="text-danger"> {errors.emailError} </p>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label fw-bolder text-dark">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                required
                className={`form-control  ${errors.passError ? "border-danger" : "border-success"}`}
                onChange={(e) => changeData(e)}
                value={userData.pass}
                name="pass"
              />
              <p className="text-danger"> {errors.passError} </p>
            </div>

            <input
              id="check"
              type="checkbox"
              value={showPassword}
              onChange={() => setShowPassword((prev) => !prev)}
            />
            <label htmlFor="check" className="text-dark mx-1">Show Password</label>
            <br />
            <br />

            <div className="d-flex justify-content-center">
              <button
                disabled={errors.emailError || errors.passError}
                type="submit"
                className="theme-btn btn-style-two w-25 mb-2"
              >
                <span class="txt">Login</span>
              </button>
            </div>
          </form>

          <div className="text-center mt-2">
            <h5 className="card-title text-dark">New User?</h5>
            <Link to="/register" className="card-text text-dark">Register now to create an account.</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  </div>
</div>



    </>
  );
}

export default Login;
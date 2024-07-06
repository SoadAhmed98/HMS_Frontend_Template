import React, { useEffect, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import WOW from 'wowjs';
import axios from 'axios';
import Cookies from 'js-cookie';
import { validPassword } from "../Components/rejex";

const ResetPassword = () => {
    const history = useHistory();
    const [userData, setUserData] = useState({
        password: '',
        password_confirmation: ''
    });

    const [redirect, setRedirect] = useState(false);
    const [errors, setErrors] = useState({
        password: "",
        password_confirmation: "",
        reset_password: ""
    });

    useEffect(() => {
        new WOW.WOW().init();
    }, []);

    const submit = async (e) => {
        e.preventDefault();

        try {
            await axios.get('http://127.0.0.1:80/sanctum/csrf-cookie', {
                withCredentials: true,
            });

            const response = await axios.post('http://127.0.0.1:80/api/patient/set-new-password', userData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    'Accept': 'application/json',
                    'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
                },
                withCredentials: true,
            });

            if (response.status === 200) {
                localStorage.setItem("token", response.data.data.patient.token);
                setRedirect(true);
            } else {
                setErrors({ ...errors, reset_password: "Reset Password failed. Please try again." });
            }
        } catch (error) {
            console.error('Error response:', error);
            setErrors({ ...errors, reset_password: "Reset Password failed. Please try again." });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });

        switch (name) {
            case "password":
                setErrors({
                    ...errors,
                    password: validPassword.test(value) ? "" : "Invalid password format",
                    reset_password: ""
                });
                break;
            case "password_confirmation":
                setErrors({
                    ...errors,
                    password_confirmation: value !== userData.password ? "Passwords do not match" : "",
                    reset_password: ""
                });
                break;
            default:
                break;
        }
    };

    if (redirect) {
        return <Redirect to="/login" />;
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="sec-title centered">
                                <h2>Reset Password</h2>
                                <div className="separator"></div>
                            </div>
                            <div className="contact-form wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <form onSubmit={submit} className="form-group">
                                    <div className="row">
                                        <div className="col-lg-12 mb-3">
                                            <input
                                                type="password"
                                                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                                value={userData.password}
                                                onChange={handleInputChange}
                                                name="password"
                                                placeholder="New Password"
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

                                        {errors.reset_password && (
                                            <div className="col-lg-12 mb-3 text-danger">{errors.reset_password}</div>
                                        )}

                                        <div className="d-flex justify-content-center align-items-center">
                                            <button
                                                disabled={!Object.values(errors).every((error) => error === "")}
                                                type="submit"
                                                className="theme-btn btn-style-two w-100 mb-2"
                                            >
                                                <span className="txt">Reset New Password</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;

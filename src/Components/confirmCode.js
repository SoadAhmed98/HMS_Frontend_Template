import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ConfirmCode = () => {
  const [countdown, setCountdown] = useState({ minutes: 1, seconds: 0 });
  const [timerEnded, setTimerEnded] = useState(false);
  const [code, setCode] = useState(Array(5).fill(""));
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const timer = setInterval(() => {
      const { minutes, seconds } = countdown;
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        setTimerEnded(true);
      } else {
        if (seconds === 0) {
          setCountdown({ minutes: minutes - 1, seconds: 59 });
        } else {
          setCountdown({ minutes, seconds: seconds - 1 });
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const resendCode = async () => {
    try {
      await axios.post("http://127.0.0.1:80/api/patient/send_code", null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      setCountdown({ minutes: 1, seconds: 0 });
      setTimerEnded(false);
    } catch (error) {
      setError("Failed to resend code. Please try again.");
    }
  };

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:80/api/patient/check_code", {
        code: code.join("")
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      if (response.data.success) {
        setSuccess(true);
        setError(null);
        history.push("/login");
      } else {
        setSuccess(false);
        setError("Invalid code, please try again.");
      }
    } catch (error) {
      setSuccess(false);
      setError("An error occurred, please try again.");
    }
  };

  return (
    <div className="container my-5">
      <div className="sec-title centered">
        <h2>The account activation code has been sent to your email, please enter this code</h2>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="mb-3 row align-items-center justify-content-center text-center">
          <label
            htmlFor="activationCode"
            className="col-sm-2 text-size-medium text-dark"
          >
            Activation code:
          </label>
          <div className="col-sm-4 d-flex justify-content-center">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="input-style mx-1 text-center input-code"
                value={digit}
                onChange={(e) => handleInput(e, index)}
              />
            ))}
          </div>
        </div>
        <div
          className="mt-3 col-sm-8 offset-sm-2"
          style={{ textAlign: "left" }}
        >
          <p>
            Resend the code:{" "}
            <span className="text-gradient">
              {countdown.minutes < 10
                ? "0" + countdown.minutes
                : countdown.minutes}
              :
              {countdown.seconds < 10
                ? "0" + countdown.seconds
                : countdown.seconds}
            </span>
          </p>
          {timerEnded && (
            <button onClick={resendCode} className="btn btn-link">
              Resend Code
            </button>
          )}
        </div>
      </div>
      <div className="text-center mt-3">
        <button
          className="theme-btn btn-style-two"
          type="button"
          name="submit-form"
          onClick={handleSubmit}
        >
          <span className="txt">Confirm</span>
        </button>
      </div>
    </div>
  );
};

export default ConfirmCode;

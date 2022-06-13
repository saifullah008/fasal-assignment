import React, { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../../fireConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './SignUp.css';

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  const register = async () => {
    try {
     // setLoading(true);
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);
    //   setLoading(false);
    //   toast.success("Registration successfull");
      setEmail("");
      setPassword("");
      setCPassword("");
    } catch (error) {
      console.log(error);
    //   toast.error("Registration failed");
    //   setLoading(false);
    }
  };
console.log("loaded");
  return (
    <div className="register-parent">
      <div className="register-top"></div>
      <div className="row justify-content-center">
        <div className="col-md-5">
        </div>

        <div className="col-md-4 z1">
          <div className="register-form" style={{ marginTop: 40 }}>
            <h2>Register</h2>

            <hr />
            <div className="input">
              <input
                type="text"
                className="form-control"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <hr />
              <input
                type="password"
                className="form-control"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <hr />
              <input
                type="text"
                className="form-control"
                placeholder="confirm password"
                value={cpassword}
                onChange={(e) => {
                  setCPassword(e.target.value);
                }}
              />
              <hr />

              <button className="my-3" onClick={register}>
                REGISTER
              </button>
            </div>

            <hr />

            <Link to="/login">
              <b>Click Here To Login</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

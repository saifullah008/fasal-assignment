import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './Login.css';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const login = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("currentUser", JSON.stringify(result));
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  return (
          
          <div className="login-form ">
            <h2>Login</h2>
            <hr></hr>
            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <hr/>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <hr/>

            <button className="my-3" onClick={login}>
              Login
            </button>
            <hr/>

            <Link to="/signup">
              <b>Click Here To SignUp</b>
            </Link>
          
      <div className="login-bottom"></div>
    </div>
  );
}

export default Login;

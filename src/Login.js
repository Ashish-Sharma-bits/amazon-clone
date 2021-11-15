import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //succes creating user
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="Login_logo">
        <Link to="/">
          <img
            className="login_logo"
            src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/world-brand-amazon-png-logo-vector-27.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="login_container">
        <h1>SignUp/Login</h1>

        <form>
          <h4>Email or Number</h4>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h4>Password</h4>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button type="submit" onClick={signIn}>
          SignIn
        </button>

        <p>
          <input type="checkbox" />
          You agree with our terms & conditions of this dummy Amazon Clone
        </p>

        <button onClick={register}>Click here to register</button>
      </div>
    </div>
  );
}

export default Login;

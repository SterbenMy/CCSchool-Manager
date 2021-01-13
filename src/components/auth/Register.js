import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck, displayName };
      await Axios.post("http://localhost:4000/users/register", newUser);
      const loginRes = await Axios.post("http://localhost:4000/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="page container">
      <div className="row g-3 m-3"><h2>Register</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      </div>
      <div>
        <form className="form" onSubmit={submit}>
          <div>
            <label className="col-md-1 m-2" htmlFor="register-email">Email</label>
            <input className="col-md-3 m-2"
              id="register-email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        <div>
          <label className="col-md-1 m-2" htmlFor="register-password">Password</label>
        <input className="col-md-3 m-2"
          id="register-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="col-md-3 m-2"
          type="password"
          placeholder="Verify password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
        </div>
        <div>
          <label className="col-md-1 m-2" htmlFor="register-display-name">Display name</label>
        <input className="col-md-4 m-2"
          id="register-display-name"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
        />
        </div>
        <div className="flex-row-reverse m-3">
          <input type="submit" className="btn btn-primary rounded-pill" value="Register" />
        </div>
      </form>
      </div>     
    </div>
  );
}

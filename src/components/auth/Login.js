import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "http://localhost:4000/users/login",
        loginUser
      );
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
      <div className="row g-3 m-3">
        <h2>Log in</h2>
          {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
          )}
      </div>
      <div>
        <form className="form" onSubmit={submit}>
          <div>
            <label className="col-md-1 m-2" htmlFor="login-email">Email</label>
            <input className="col-md-3 m-2"
              id="login-email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="col-md-1 m-2" htmlFor="login-password">Password</label>
            <input className="col-md-3 m-2"
              id="login-password"
              type="password"
               onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex-row-reverse m-3">
            <input type="submit" className="btn btn-primary rounded-pill" value="Log in" />
          </div>  
        </form>
      </div>
    </div>
  );
}

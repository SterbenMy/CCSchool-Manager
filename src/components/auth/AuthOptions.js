import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <nav className="auth-options">
      {userData.user ? (
        <button type="button" className="btn btn-primary rounded-pill m-2" onClick={logout}>Log out</button>
      ) : (
        <>
          <button type="button" className="btn btn-primary rounded-pill m-2" onClick={register}>Register</button>
          <button type="button" className="btn btn-primary rounded-pill m-2" onClick={login}>Log in</button>
        </>
      )}
    </nav>
  );
}

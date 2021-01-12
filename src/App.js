import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./context/UserContext";
import Axios from "axios";

//Componente
import Navbar from "./components/navbar.component"
//Studenti
import StudentsList from "./components/students-list.component";
import EditStudent from "./components/edit-students.component";
import CreateStudents from "./components/create-students.component";
import StudentsDetails from './components/students-details.component';
//Clasele
import CreateClasses from "./components/create-classes.component";
import EditClasses from "./components/edit-classes.component";
import ListClasses from "./components/list-classes.component";
import ClassDetails from './components/classes-details.component';
//About
import About from './components/about.component';

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:4000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:4000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar />
          <br />
          <Route path='/' exact component={props => <About {...props} />} />
          <Route path="/login" component={props => <Login {...props} />} />
              <Route path="/register" component={props => <Register {...props} />} />

          {/* Classes */}
          <Route path='/class' exact component={props => <ListClasses {...props} />} />
          <Route path='/class/create' exact component={props => <CreateClasses {...props} />} />
          <Route path='/class/edit/:id' exact component={props => <EditClasses {...props} />} />
          <Route path='/class/details/:id' exact component={props => <ClassDetails {...props} />} />
          {/* Students */}
          <Route path='/student' exact component={props => <StudentsList {...props} />} />
          <Route path='/student/create' exact component={props => <CreateStudents {...props} />} />
          <Route path='/student/edit/:id' exact component={props => <EditStudent {...props} />} />
          <Route path='/student/detail/:id' exact component={props => <StudentsDetails {...props} />} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}


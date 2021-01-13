import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthOptions from "./auth/AuthOptions";
import UserContext from "../context/UserContext";

export default function Navbar(){
    const { userData, setUserData } = useContext(UserContext);
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" >School Manager</Link>
                {userData.user ? (<div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="" className="nav-link" >Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Students</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="/student">Students List</Link>
                                <Link className="dropdown-item" to="/student/create">Add Student</Link>
                                {/* <Link className="dropdown-item" to="/">Edit Student</Link> */}
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Classes</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="/class">Classes</Link>
                                <Link className="dropdown-item" to="/class/create">Add Class</Link>
                                {/* <Link className="dropdown-item" to="/">Edit Class </Link> */}
                            </div>
                        </li>
                    </ul>
                </div>) :(<p></p>)}
                <AuthOptions />
            </nav>
        );
}

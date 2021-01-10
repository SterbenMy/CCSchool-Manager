import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter as Router, Route} from "react-router-dom";

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

function App() {
  return (
    <div className='App'>
  <Router>
    <Navbar />
    <br/>
     <Route path='/' exact component={props => <About {...props} />} />

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
					
  </Router>
  </div>
  );
}

export default App;

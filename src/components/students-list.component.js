import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Student = props => (
  <tr>
    <td>{props.student.nume}</td>
    <td>{props.student.prenume}</td>
    <td>{props.student.ani}</td>
    <td>{props.student.mail}</td>
    <td>{props.student.gen}</td>
    <td>{props.student.clasa}</td>
    <td>
      <Link to={"student/edit/"+props.student._id}>edit</Link> | <a href="/student/#" onClick={() => { props.deleteStudent(props.student._id) }}>delete</a>
    </td>
  </tr>
)

export default class StudentsList extends Component {
  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this)

    this.state = {mail: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/student/')
      .then(response => {
        this.setState({ mail: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteStudent(id) {
    axios.delete('http://localhost:5000/student/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      student: this.state.mail.filter(el => el._id !== id)
    })
  }

  studentsList() {
    return this.state.mail.map(currentmail => {
      return <Student student={currentmail} deleteStudent={this.deleteStudent} key={currentmail._id}/>;
    })
  }

  render() {
    return (
      <div className="page container">
        <div>
          <h3>Students List</h3>
        </div>
        <div>
          <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>E-mail</th>
              <th>Gender</th>
              <th>Class</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.studentsList() }
          </tbody>
        </table>
          </div>      
        
      </div>
    )
  }
}

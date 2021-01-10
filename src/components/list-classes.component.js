import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Clasa = props => (
  <tr>
    <td>{props.clasa.numeclasa}</td>
    <td>{props.clasa.an}</td>
    <td>
      <Link to={"class/edit/"+props.clasa._id}>edit</Link> | <a href="/class/#" onClick={() => { props.deleteClasa(props.clasa._id) }}>delete</a>
    </td>
  </tr>
)

export default class ListClasses extends Component {
  constructor(props) {
    super(props);
    this.deleteClasa = this.deleteClasa.bind(this)

    this.state = {numeclasa: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/class/')
      .then(response => {
        this.setState({ numeclasa: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteClasa(id) {
    axios.delete('http://localhost:5000/class/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      clasa: this.state.numeclasa.filter(el => el._id !== id)
    })
  }

  clasaList() {
    return this.state.numeclasa.map(currentnumeclasa => {
      return <Clasa clasa={currentnumeclasa} deleteClasa={this.deleteClasa} key={currentnumeclasa._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged clasa</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Nume Clasa</th>
              <th>An</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.clasaList() }
          </tbody>
        </table>
      </div>
    )
  }
}
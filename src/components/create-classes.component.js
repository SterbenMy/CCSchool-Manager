import React, { Component } from 'react';
import axios from 'axios';

export default class CreateClasses extends Component {
  constructor(props) {
    super(props);

    this.onChangeNumeClasa = this.onChangeNumeClasa.bind(this);
    this.onChangeAn = this.onChangeAn.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        numeclasa: '',
        an: '',
    }
  }

  onChangeNumeClasa(e) {
    this.setState({
        numeclasa: e.target.value
    })
  }
  onChangeAn(e) {
    this.setState({
        an: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const clasa = {
      numeclasa: this.state.numeclasa,
      an: this.state.an,
    }

    console.log(clasa);

    axios.post('http://localhost:5000/class/add', clasa)
      .then(res => console.log(res.data));

    this.setState({
      numeclasa: '',
      an: ' '
    })
  }

  render() {
    return (
      <div className="container">
        <div>
          <h3>Add new class</h3>
        </div>
        <div>
          <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Class name:</label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.numeclasa}
                onChange={this.onChangeNumeClasa}
            />
          </div>
          <div className="form-group"> 
            <label>Year:</label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.an}
                onChange={this.onChangeAn}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Add Class" className="btn btn-primary rounded-pill" />
          </div>
        </form>
        </div>

        
      </div>
    )
  }
}

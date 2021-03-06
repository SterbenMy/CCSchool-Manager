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
  componentDidMount() {
    axios.get('http://localhost:5000/class/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                numeclasa: response.data.numeclasa,
                an: response.data.an,
            })
        })
        .catch(function (error) {
            console.log(error);
        })
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

    axios.post('http://localhost:5000/class/update/' + this.props.match.params.id, clasa)
    .then(res => console.log(res.data));

   // window.location = '/';

    this.setState({
      numeclasa: '',
      an: ' '
    })
  }

  render() {
    return (
      <div className="container">
        <div>
          <h3>Edit class</h3>
        </div>
        <div>
          <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Class name</label>
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
            <input type="submit" value="Edit" className="btn btn-primary rounded-pill" />
          </div>
        </form>
        </div>
        
      </div>
    )
  }
}

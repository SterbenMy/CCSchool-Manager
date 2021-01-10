import React, { Component } from 'react';
import axios from 'axios';


export default class EditStudent extends Component {
    constructor(props) {
        super(props);

        this.onChangeNume = this.onChangeNume.bind(this);
        this.onChangePrenume = this.onChangePrenume.bind(this);
        this.onChangeAni = this.onChangeAni.bind(this);
        this.onChangeMail = this.onChangeMail.bind(this);
        this.onChangeGen = this.onChangeGen.bind(this);
        this.onChangeNumeClasa = this.onChangeNumeClasa.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nume: '',
            prenume: '',
            ani: 0,
            mail: '',
            gen: '',
            numeclasa: '',
            clasa: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/student/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    nume: response.data.nume,
                    prenume: response.data.prenume,
                    ani: response.data.ani,
                    mail: response.data.mail,
                    gen: response.data.gen,
                   
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/class/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        clasa: response.data.map(clasa => clasa.numeclasa),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangeNumeClasa(e) {
        this.setState({
            numeclasa: e.target.value
        })
    }

    onChangeNume(e) {
        this.setState({
            nume: e.target.value
        })
    }

    onChangePrenume(e) {
        this.setState({
            prenume: e.target.value
        })
    }

    onChangeAni(e) {
        this.setState({
            ani: e.target.value
        })
    }

    onChangeMail(e) {
        this.setState({
            mail: e.target.value
        })
    }
    onChangeGen(e) {
        this.setState({
            gen: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        const student = {
            nume: this.state.nume,
            prenume: this.state.prenume,
            ani: this.state.ani,
            mail: this.state.mail,
            gen: this.state.gen,
            clasa: this.state.numeclasa,
        }

        console.log(student);

        axios.post('http://localhost:5000/student/update/' + this.props.match.params.id, student)
            .then(res => console.log(res.data));

         window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Editeaza Student </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Clasa: </label>
                        <select
                            required
                            className="form-control"
                            value={this.state.numeclasa}
                            onChange={this.onChangeNumeClasa}
                        >
                            {
                                this.state.clasa.map(function (clasa) {
                                    return <option
                                        key={clasa}
                                        value={clasa}>{clasa}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Nume: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.nume}
                            onChange={this.onChangeNume}
                        />
                    </div>
                    <div className="form-group">
                        <label>Prenume: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.prenume}
                            onChange={this.onChangePrenume}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ani : </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.ani}
                            onChange={this.onChangeAni}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mail: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.mail}
                            onChange={this.onChangeMail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Sex: </label>
                        <select className="form-control" onChange={this.onChangeGen} value={this.state.gen}>
                            <option value="masculin">Masculin</option>
                            <option value="feminin">Feminin</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Editeaza" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
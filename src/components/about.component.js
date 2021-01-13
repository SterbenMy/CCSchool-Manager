import React, { Component } from 'react';

export default class About extends Component {

    render() {
        return (
            <div className="container">
                <div className="m-3">
                    <h2>School Manager</h2>
                </div>
                <div className="container">
                    This page is destined to manage school classes and srudents.
                    It allows you the possibility to add new students/classes, edit them, and visualize existing ones.
                </div>
            </div>
        )
    }
}

import React, { Component } from "react";

export default class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      name: "Robert K.",
      age: 1,
      array: [1, 2, 3, 4, 5, 6],
    };
  }

  changeState = () => {
    this.setState({age: this.state.age * 2})
  }
  render() {
    return (
      <div>
        <div>
          <div className="card">
            <h1>Class states</h1>
            <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2>
            {this.state.array.map((item) => (
              <h3>{item}</h3>
            ))}
            <button onClick={this.changeState}>Change State</button>
          </div>
        </div>
      </div>
    );
  }
}

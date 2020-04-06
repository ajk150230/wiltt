import React, { Component } from "react";

export default class Questions extends Component {
  constructor() {
    super();
    this.state = {
      a1: [sweet, bitter, sour],
      a2: [],
      a3: [],
      a4: [],
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: "",
    };
  }
  render() {
    return (
      <div>
        <div>If you had to pick one...</div>
        <div>Which flavor of wine do you prefer?</div>
        <div>Which flavor of wine do you prefer?</div>
        <div>Which flavor of wine do you prefer?</div>
      </div>
    );
  }
}

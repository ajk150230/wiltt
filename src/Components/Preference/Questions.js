import React, { Component } from "react";

export default class Questions extends Component {
  constructor() {
    super();
    this.state = {
      brands: [
        "Nike",
        "Adidas",
        "Puma",
        "Vans",
        "Jordan",
        "New Balance",
        "Kenneth Cole",
        "Steve Madden",
        "Birkenstocks",
        "Sperrys",
        "Converse",
        "Aldo",
        "Reebok",
        "Dr. Martens",
        "UGG",
      ],
      types: ["Casual", "Skating", "Runners", "Business", "Summer", "Sports"],
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: "",
    };
  }
  handleInput = (e) => {
    this.setState({ choice4: e.target.value });
  };
  render() {
    const brands = this.state.brands.map((element) => {
      return <section className="mini-card">{element}</section>;
    });
    const types = this.state.types.map((element) => {
      return <section className="mini-card">{element}</section>;
    });
    return (
      <div>
        <div>Tell us about you</div>
        <div>What are your favorite brands?</div>
        <section>{brands}</section>
        <div>Which type of shoes do you prefer?</div>
        <section>{types}</section>
        <div>How much do you spend, on average, on 1 shoe?</div>
        <input onChange={this.handleInput}></input>
      </div>
    );
  }
}

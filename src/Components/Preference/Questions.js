import React, { Component } from "react";
import { TimelineLite, CSSPlugin } from "gsap/all";

export default class Questions extends Component {
  constructor() {
    super();
    this.myTween = new TimelineLite({ paused: true });
    this.cards=[]
    this.brands= [
      "Nike",
      "Adidas",
      "Puma",
      "Vans",
      "Jordan",
      "New Balance",
      "Kenneth Cole",
      "Steve Madden",
      "Birkenstocks",
      // "Sperrys",
      // "Converse",
      // "Aldo",
      // "Reebok",
      // "Dr. Martens",
      // "UGG",dfdfd
    ]
    this.state = {
      types: ["Casual", "Skating", "Runners", "Business", "Summer", "Sports"],
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: "",
    };
  }
  componentDidMount() {
    this.myTween.staggerTo(this.cards, 0.5, { y: 0, autoAlpha: 1 }, 0.1);
  }
  handleInput = (e) => {
    this.setState({ choice4: e.target.value });
  };
  //sdsdsdfdfd
  render() {
    // const brands = this.brands.map((element, index) => {
    //   return (
    //     <ul>
    //       <li className="mini-card" 
    //       key={index}
    //       ref={li => this.brands[index] = li}>
    //         {element}
    //       </li>
    //     </ul>
    //   );
    // });
    const types = this.state.types.map((element) => {
      return <section className="mini-card">{element}</section>;
    });
    return (
      <div>
        <div>Tell us about you</div>
        <div>What are your favorite brands?</div>
        <button onClick={()=> this.myTween.play()}>Play</button>
        {
          this.brands.map((element, index) => (
              <ul>
                <li className="mini-card" 
                key={index}
                ref={li => this.cards[index] = li}>
                  {element}
                </li>
              </ul>
          )
    )
        }
        {this.cards}
        <div>Which type of shoes do you prefer?</div>
        <section>{types}</section>
        <div>How much do you spend, on average, on 1 shoe?</div>
        <input onChange={this.handleInput}></input>
      </div>
    );
  }
}

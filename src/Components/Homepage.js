import React, { Component } from "react";

export default class Homepage extends Component {
  render() {
    return (
      <section className="homepage">
        <header className="banner">
          <div className="picture"></div>
          <section className="statement">
            <div className="title">
              <h1>Subscribe to a plan.</h1>
              <h1>Find your style.</h1>
              <h1>Build your collection.</h1>
            </div>
          </section>
        </header>
        <header className="banner">
          <section className="statement">
            <div className="title" id="title2">
              <h1>Didn't like it?</h1>
              <h1>Cross it out.</h1>
              <h1>We will replace it.</h1>
            </div>
          </section>
          <div className="picture" id='shoe2'>
            <div id="line">
            </div>
          </div>
        </header>
        <main>
          <div></div>
          <div></div>
        </main>
        <footer></footer>
      </section>
    );
  }
}

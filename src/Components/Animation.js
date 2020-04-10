import React, { useRef, useEffect, useState } from "react";
import { TweenMax, Power3 } from "gsap";
import { withRouter } from "react-router-dom";

export default function Animation() {
    let container = useRef(null)
  let card = useRef(null);
  let card1 = useRef(null);
  let card2 = useRef(null);
  let card3 = useRef(null);

  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  useEffect(() => {
    TweenMax.to(container, 0, {css:{visibility: 'visibility'}})
    // TweenMax.from(card, .8, {opacity: 0, x: 40, ease: Power3.easeOut})
    // TweenMax.from(card1, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .3})
    // TweenMax.from(card2, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .6})
    // TweenMax.from(card3, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .9})
    TweenMax.staggerFrom([card, card1, card2, card3], .8, {opacity: 0, x: 40, ease: Power3.easeOut}, .3)
  }, []);

  const handleExpand=()=>{
      TweenMax.to(card, .8, {width: 400, height: 200, backgroundColor: '#FFD722', ease: Power3.easeOut})
      setToggle(true)
  }
  const handleShrink=()=>{
      TweenMax.to(card, .8, {width: 150, height: 150, backgroundColor: '#414141', ease: Power3.easeOut})
        setToggle(false)
  }
  const handleExpand1=()=>{
      TweenMax.to(card1, .8, {width: 400, height: 200, backgroundColor: '#F985FF', ease: Power3.easeOut})
      setToggle1(true)
  }
  const handleShrink1=()=>{
      TweenMax.to(card1, .8, {width: 150, height: 150, backgroundColor: '#414141', ease: Power3.easeOut})
        setToggle1(false)
  }
  const handleExpand2=()=>{
      TweenMax.to(card2, .8, {width: 400, height: 200, backgroundColor:'#E8406E', ease: Power3.easeOut})
      setToggle2(true)
  }
  const handleShrink2=()=>{
      TweenMax.to(card2, .8, {width: 150, height: 150, backgroundColor: '#414141', ease: Power3.easeOut})
        setToggle2(false)
  }
  const handleExpand3=()=>{
      TweenMax.to(card3, .8, {width: 400, height: 200, backgroundColor: '#9A8EFF', ease: Power3.easeOut})
      setToggle3(true)
  }
  const handleShrink3=()=>{
      TweenMax.to(card3, .8, {width: 150, height: 150, backgroundColor: '#414141', ease: Power3.easeOut})
        setToggle3(false)
  }

  return (
      <div className="info-container"
      ref={el => container = el}>
        <div className="info" ref={(el) => (card = el)}
        onClick={toggle !== true ? handleExpand : handleShrink}>
            {toggle !== true ? "Step: 1" : 'Pick your preferences'}
        </div>
        <div className="info" ref={(el) => (card1 = el)}
        onClick={toggle1 !== true ? handleExpand1 : handleShrink1}>
            {toggle1 !== true ? "Step: 2" : 'Subscribe to a plan'}
        </div>
        <div className="info" ref={(el) => (card2 = el)}
        onClick={toggle2 !== true ? handleExpand2 : handleShrink2}>
            {toggle2 !== true ? "Step: 3" : 'Rate your MysteryBox'}
        </div>
        <div className="info" ref={(el) => (card3 = el)}
        onClick={toggle3 !== true ? handleExpand3 : handleShrink3}>
            {toggle3 !== true ? "Step: 4" : 'Lets get started'}
        </div>
      </div>

  );
}

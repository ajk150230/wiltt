import React, { useRef, useEffect } from "react";
import BannerPhoto from "../Images/BannerPhoto.webp";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

export default function Banner() {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const tl = new TimelineLite();
  useEffect(() => {
    tl.to(container, 0.5, { css: { visibility: "visible" } })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, {scale: 1.6, ease: Power2.easeInOut, delay: -1.6});
  });
  return (
    <main className="bannerMain">
      <section className="container" ref={(el) => (container = el)}>
        <div className="img-container">
          <div className="img"style={{backgroundImage: `url(${BannerPhoto})`}}ref={(el) => (image = el)} ></div>
        </div>
      </section>
    </main>
  );
}

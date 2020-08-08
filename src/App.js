import React, { useRef, useEffect, useState } from "react";
import "./styles.css";

import { TweenMax, Power3 } from "gsap";

const App = () => {
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);
  let visible = useRef(null);

  const [state, setState] = useState(false);

  const handleExpand = () => {
    if (state === false) {
      TweenMax.to(circleRed, 0.8, {
        css: { width: 200, height: 200 },
        ease: Power3.easeOut
      });
      setState(!state);
    } else {
      TweenMax.to(circleRed, 0.8, {
        css: { height: 75, width: 75 },
        ease: Power3.easeOut
      });
      setState(!state);
    }
  };

  useEffect(() => {
    TweenMax.to(visible, 0, { css: { visibility: "visible" } });
    // TweenMax.from(circle, 0.8, { opacity: 0, x: 40, ease: Power3.easeOut });
    // TweenMax.from(circleRed, 0.8, {
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.2
    // });
    // TweenMax.from(circleBlue, 0.8, {
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.4
    // });
    TweenMax.staggerFrom(
      [circle, circleRed, circleBlue],
      0.8,
      { opacity: 0, x: 40, ease: Power3.easeOut },
      0.2
    );
  }, []);

  return (
    <div
      ref={(el) => {
        visible = el;
      }}
      className="App"
    >
      <div>
        <div
          ref={(el) => {
            circle = el;
          }}
          className="circle"
        ></div>
        <div
          ref={(el) => {
            circleRed = el;
          }}
          onClick={handleExpand}
          className="circle red"
        ></div>
        <div
          ref={(el) => {
            circleBlue = el;
          }}
          className="circle blue"
        ></div>
      </div>
    </div>
  );
};

export default App;

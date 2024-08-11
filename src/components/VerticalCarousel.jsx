import React, { Component } from "react";
import styled from "@emotion/styled";
import Slide from "./Slide";
import PropTypes from "prop-types";
import { useImperativeHandle } from "react";
import { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import ReactTestUtils from "react-dom/test-utils";
import { useRef } from "react";

// const { isRunning, restart } = useTimer({
//   autoStart: true,
//   expiryTimestamp: timestamp,
//   onExpire: () => {
//     let time = new Date();
//     moveSlide(1);
//     time.setSeconds(time.getSeconds() + 0.5);
//     restartSecond(time);
//   },
// });

// const { restart: restartSecond } = useTimer({
//   autoStart: false,
//   expiryTimestamp: timestamp,
//   onExpire: () => {
//     let time = new Date();
//     moveSlide(1);
//     time.setSeconds(time.getSeconds() + 0.5);
//     restart(time);
//   },
// });

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const NavigationButtons = styled.div`
  position: relative;
  display: flex;
  height: 60px;
  margin: 0 auto;
  width: 20%;
  margin-top: 1rem;
  justify-content: space-between;
  z-index: 1000;
`;

const NavBtn = styled.div`
  background: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 3px;
`;

function mod(a, b) {
  return ((a % b) + b) % b;
}

const VerticalCarousel = (props) => {
  const [index, setIndex] = useState(0);
  let timestamp = props.timestamp;

  const moveSlide = (direction) => {
    setIndex(modBySlidesLength(index + direction));
  };

  const modBySlidesLength = (index) => {
    return mod(index, props.slides.length);
  };

  function clampOffsetRadius(offsetRadius) {
    const { slides } = props;
    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  }

  function getPresentableSlides() {
    const { slides } = props;
    let { offsetRadius } = props;
    offsetRadius = clampOffsetRadius(offsetRadius);
    const presentableSlides = new Array();

    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableSlides.push(slides[modBySlidesLength(index + i)]);
    }

    return presentableSlides;
  }

  const inputEl = useRef(null);

  const [mseconds, setMSeconds] = useState(0);
  const [timeout, setTimeout] = useState(10);
  const deadline = "December, 31, 2025";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setMSeconds(Math.floor(time));
    console.log(timeout);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getTime(deadline);
      moveSlide(1);

      if (timeout == 360 || timeout == 370) {
        const intervalId2 = setInterval(() => {
          //stop the outer timer
        }, 3000);
        return () => clearInterval(intervalId);
      } else {
        setTimeout(timeout + 20);
      }
    }, timeout);

    return () => clearInterval(intervalId);
  }, [mseconds]);

  // if (inputEl.current.children[1].children[0].children[0].innerHTML == "Film") {
  //   setTimeout(500)
  // }
  return (
    <React.Fragment>
      <Wrapper ref={inputEl}>
        {getPresentableSlides().map((slide, presentableIndex) => (
          <Slide
            key={slide.key}
            content={slide.content}
            moveSlide={moveSlide}
            offsetRadius={clampOffsetRadius(1)}
            index={presentableIndex}
          />
        ))}
      </Wrapper>
    </React.Fragment>
  );
};

export default VerticalCarousel;

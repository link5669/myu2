import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import { withGesture } from "react-with-gesture";

const SlideContainer = styled.div`
  position: absolute;
  height: 70%;
  top: 50%;
  display: flex;
  text-align: right; /* Align text within the container */
  transform-origin: 50% 50%;
`;

const SlideCard = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  color: white;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align content to the right within the card */
  transform-origin: 50% 50%;
  text-align: right; /* Ensure text-align is also set for the card */
`;

function Slide({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
  up,
}) {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));

  const AnimatedSlideContainer = animated(SlideContainer);

  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  const props = useSpring({
    transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
    top: `${
      offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
    }%`,
    opacity: distanceFactor * distanceFactor,
    config: animationConfig,
  });

  return (
    <AnimatedSlideContainer
      style={{
        ...props,
        zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2),
      }}
    >
      <SlideCard onClick={() => moveSlide(offsetFromMiddle)}>
        {content}
      </SlideCard>
    </AnimatedSlideContainer>
  );
}

export default withGesture()(Slide);

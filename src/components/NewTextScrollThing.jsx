import VerticalCarousel from "../components/VerticalCarousel";
import { config } from "react-spring";
import { useTimer } from "react-timer-hook";
import { useRef } from "react";
const NewTextScrollThing = ({ timestamp }) => {
  const childRef = useRef(null);

//   const { isRunning, restart } = useTimer({
//     autoStart: true,
//     expiryTimestamp: timestamp,
//     onExpire: () => {
//       const time = new Date();
//       if (childRef.current) {
//         childRef.current.moveSlide(1);
//       }
//       console.log(time);
//       time.setSeconds(time.getSeconds() + 5);
//       restartSecond(time);
//     },
//   });

//   const { restart: restartSecond } = useTimer({
//     autoStart: false,
//     expiryTimestamp: timestamp,
//     onExpire: () => {
//       const time = new Date();
//       console.log(time);
//       time.setSeconds(time.getSeconds() + 0.5);
//       timestamp += 2000;
//       restart(time);
//     },
//   });

  const state = {
    goToSlide: 0,
    offsetRadius: 1,
    showNavigation: false,
    config: config.gentle,
  };
  return (
    <div
      style={{
        // left: "30%",
        // position: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "30vw",
        height: "15vh",
        margin: "0 auto",
        transform: "translateY(-30px)",
      }}
    >
      <VerticalCarousel
        timestamp={new Date()}
        slides={[
          {
            key: 1,
            content: "TV",
          },
          {
            key: 2,
            content: "Multimedia",
          },
          {
            key: 3,
            content: "Video Game",
          },
          {
            key: 4,
            content: "Film",
          },
          {
            key: 5,
            content: "J-Pop and Anime",
          },
          {
            key: 6,
            content: "5",
          },
          {
            key: 7,
            content: "6",
          },
          {
            key: 8,
            content: "7",
          },
        ]}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
    </div>
  );
};

export default NewTextScrollThing;

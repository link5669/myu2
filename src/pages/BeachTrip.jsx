import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import MarcNavbar from "../components/Navbar";
import MarcFooter from "../components/Footer";
import btrp from "../assets/BTRP.png";
import "react-h5-audio-player/lib/styles.css";
import track1 from "../assets/BTRP/BTRP-T01v1 M01 Doggone Frog-Gone.wav";
import { useEffect, useState } from "react";
import NewAudioPlayer from "../components/AudioPlayer";
import applemusic from "../assets/Apple Music_Icon_2020/AppleMusic_Icon_BlackandWhite/SVG/Small/Apple_Music_Icon_wht_sm_073120.svg";
import applemusiccolor from "../assets/Apple Music_Icon_2020/AppleMusic_Icon_BlackandWhite/SVG/Small/Apple_Music_Icon_blk_sm_073120.svg";

function BeachTrip() {
  const [spotifyMouseOver, setSpotifyMouseOver] = useState(false);
  const [appleMouseOver, setAppleMouseOver] = useState(false);
  const [youTubeMouseOver, setYouTubeMouseOver] = useState(false);
  const [soundcloudMouseOver, setSoundcloudMouseOver] = useState(false);
  const trackInfo = [
    {
      title: "Doggone Frog-Gone",
      track: require("../assets/BTRP/BTRP-T01v1 M01 Doggone Frog-Gone.wav"),
      index: "1",
      length: "0:19",
    },
    {
      title: "Just An Ornery Seagull",
      track: require("../assets/BTRP/BTRP-T02v1 M04 Just An Ornery Seagull.wav"),
      index: "2",
      length: "0:43",
    },
    {
      title: "Well I'll Be...",
      track: require("../assets/BTRP/BTRP-T03v1 M02 Well I'll Be....wav"),
      index: "3",
      length: "0:54",
    },
    {
      title: "Apocalypse Country",
      track: require("../assets/BTRP/BTRP-T04v1 M03S Apocalypse Country.wav"),
      index: "4",
      length: "0:29",
    },
    {
      title: "The Beach Don't Rise",
      track: require("../assets/BTRP/BTRP-T05v1 M05 The Beach Don't Rise.wav"),
      index: "5",
      length: "0:44",
    },
    {
      title: "Apocalypse Country (End Titles) (ft. G Rockwell)",
      track: require("../assets/BTRP/BTRP-T06v1 M06 Apocalypse Country (End Titles) (ft. G Rockwell).wav"),
      index: "6",
      length: "0:34",
    },
  ];

  const audioTracks = [
    require("../assets/BTRP/BTRP-T01v1 M01 Doggone Frog-Gone.wav"),
    require("../assets/BTRP/BTRP-T02v1 M04 Just An Ornery Seagull.wav"),
    require("../assets/BTRP/BTRP-T03v1 M02 Well I'll Be....wav"),
    require("../assets/BTRP/BTRP-T04v1 M03S Apocalypse Country.wav"),
    require("../assets/BTRP/BTRP-T05v1 M05 The Beach Don't Rise.wav"),
    require("../assets/BTRP/BTRP-T06v1 M06 Apocalypse Country (End Titles) (ft. G Rockwell).wav"),
  ];

  const [selectedTrack, setSelectedTrack] = useState({
    title: "Doggone Frog-Gone",
    track: track1,
    index: "1",
    length: "0:19",
  });

  const handleClick = (track) => {
    setSelectedTrack(track);
  };

  const [hoveredItem, setHoveredItem] = useState({
    title: "Doggone Frog-Gone",
    track: track1,
    index: "1",
    length: "0:19",
  });

  const handleHoverEnter = (item) => {
    setHoveredItem(item);
  };

  const handleHoverLeave = () => {
    setHoveredItem({ title: "", track: track1, index: "", length: "" });
  };

  const [playingTrackIndex, setPlayingTrackIndex] = useState(0);

  useEffect(() => {
    setSelectedTrack(trackInfo[playingTrackIndex]);
  }, [playingTrackIndex]);

  return (
    <>
      <div style={{ width: "100vw", background: "black" }}>
        <MarcNavbar />
        <Container>
          <Row>
            <Col style={{ alignContent: "left", paddingLeft: "18%" }}>
              <h2
                className="subheadAlbum"
                style={{
                  paddingTop: "3%",
                  textAlign: "center",
                  paddingRight: "18%",
                  fontWeight: 100,
                  fontStyle: "]]]d",
                }}
              >
                Beach Trip!
              </h2>
              <p
                style={{
                  color: "white",
                  fontFamily: "Georgia",
                  textAlign: "center",
                  paddingRight: "18%",
                  paddingBottom: "1%",
                }}
              >
                <i>Short Film / Country Comedy</i>
              </p>
              <Container>
                <Row>
                  <Col xl={4}>
                    <img
                      style={{ width: "100%", borderRadius: "10px" }}
                      alt="album cover"
                      src={btrp}
                    />
                    <div style={{ paddingBottom: "5%" }}></div>
                    <NewAudioPlayer
                      trackName={selectedTrack.title}
                      songs={audioTracks}
                      trackInfo={trackInfo}
                      playingTrackIndex={playingTrackIndex}
                      setPlayingTrackIndex={setPlayingTrackIndex}
                    />
                    <br />
                    {trackInfo.map((track, index) => {
                      return (
                        <p
                          style={{
                            color: "white",
                            marginBottom: "0",
                            padding: "4px",
                            fontSize: "1rem",
                            marginLeft: "1.1%",
                            fontFamily: "Georgia",
                            fontWeight:
                              hoveredItem.index === track.index ? "bold" : "",
                            backgroundColor:
                              selectedTrack.index === track.index
                                ? "#313131"
                                : "black",
                            borderRadius: "6px",
                          }}
                          key={index}
                          onClick={() => handleClick(track)}
                          onMouseEnter={() => handleHoverEnter(track)}
                          onMouseLeave={handleHoverLeave}
                        >
                          <span style={{ cursor: "default" }}>
                            {track.index}. {track.title}{" "}
                          </span>
                          <span style={{ float: "right" }}>{track.length}</span>
                        </p>
                      );
                    })}
                    <div
                      style={{
                        paddingInline: "15%",
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        paddingTop: "2%",
                      }}
                    >
                      <a
                        target="_blank"
                        onMouseOver={() => setAppleMouseOver(true)}
                        onMouseOut={() => setAppleMouseOver(false)}
                        href="https://music.apple.com/us/album/beach-trip-original-soundtrack-single/1756664480"
                      >
                        {!appleMouseOver ? (
                          <img style={{ width: "24px" }} src={applemusic} />
                        ) : (
                          <img
                            style={{ width: "24px" }}
                            src={applemusiccolor}
                          />
                        )}
                      </a>
                      <a
                        target="_blank"
                        onMouseOver={() => setYouTubeMouseOver(true)}
                        onMouseOut={() => setYouTubeMouseOver(false)}
                        href="https://www.youtube.com/watch?v=rQNnGy5i-hc&list=PLWLXJaKFBj4JLjVx9TwwGjJJQJZ6L1FJ6"
                      >
                        {youTubeMouseOver ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#FF0000"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="gray"
                            viewBox="0 0 16 16"
                            style={{ color: "white" }}
                          >
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                          </svg>
                        )}
                      </a>
                      <a
                        target="_blank"
                        onMouseOver={() => setSoundcloudMouseOver(true)}
                        onMouseOut={() => setSoundcloudMouseOver(false)}
                        href="https://soundcloud.com/marcyumusic/sets/beach-trip-original-soundtrack"
                      >
                        {soundcloudMouseOver ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#F26F23"
                            viewBox="0 0 16 16"
                          >
                            <svg
                              viewBox="15.583 -197.416 989.654 989.654"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#F26F23"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <linearGradient
                                  id="a"
                                  gradientUnits="userSpaceOnUse"
                                  x1="-916.598"
                                  y1="1716.657"
                                  x2="-916.598"
                                  y2="1663.651"
                                  gradientTransform="matrix(10.6432 0 0 -10.6432 10265.9 18285.979)"
                                >
                                  <stop offset="0" stopColor="gray"></stop>
                                  <stop offset="1" stopColor="gray"></stop>
                                </linearGradient>
                                <path
                                  d="M26.791 272.388c-2.065 0-3.704 1.597-3.971 3.874l-7.237 54.972 7.237 54.025c.267 2.277 1.905 3.863 3.971 3.863 2 0 3.629-1.575 3.948-3.843v-.011.011l8.578-54.046-8.578-54.982c-.309-2.267-1.958-3.863-3.948-3.863zm40.699-30.035c-.341-2.362-2.033-3.991-4.119-3.991-2.097 0-3.832 1.682-4.119 3.991 0 .021-9.728 88.881-9.728 88.881l9.728 86.912c.277 2.331 2.012 4.013 4.119 4.013 2.075 0 3.768-1.639 4.108-3.991l11.068-86.934-11.057-88.881zm153.304-81.984c-3.991 0-7.291 3.267-7.482 7.418l-7.748 163.521 7.748 105.676c.202 4.129 3.491 7.386 7.482 7.386 3.97 0 7.259-3.268 7.493-7.407v.032l8.759-105.687-8.759-163.521c-.235-4.151-3.524-7.418-7.493-7.418zm-79.345 56.834c-3.065 0-5.566 2.448-5.812 5.715l-8.727 108.347 8.727 104.824c.234 3.246 2.746 5.694 5.812 5.694 3.033 0 5.534-2.448 5.801-5.694l9.919-104.824-9.919-108.369c-.267-3.245-2.768-5.693-5.801-5.693zM301.427 444.36c4.949 0 8.972-3.992 9.174-9.101l7.6-103.898-7.589-217.706c-.202-5.109-4.226-9.1-9.174-9.1-4.992 0-9.025 4.002-9.186 9.111l-6.737 217.684 6.737 103.941c.16 5.067 4.193 9.069 9.175 9.069zm165.075.49c6.812 0 12.432-5.609 12.559-12.506v.074-.074l5.301-100.919-5.302-251.434c-.117-6.886-5.747-12.505-12.559-12.505-6.822 0-12.452 5.609-12.559 12.516l-4.736 251.338c0 .16 4.736 101.067 4.736 101.067.108 6.833 5.748 12.443 12.56 12.443zm-83.166-.394c5.929 0 10.707-4.758 10.867-10.824v.074l6.449-102.323-6.46-219.281c-.16-6.067-4.938-10.813-10.867-10.813-5.971 0-10.749 4.747-10.877 10.813l-5.736 219.292 5.747 102.302c.128 6.002 4.906 10.76 10.877 10.76zm-202.369-.958c3.523 0 6.376-2.821 6.642-6.535l9.345-105.697-9.345-100.546c-.255-3.714-3.107-6.514-6.642-6.514-3.575 0-6.428 2.82-6.651 6.557l-8.228 100.503 8.228 105.687c.234 3.724 3.075 6.545 6.651 6.545zm-78.716-5.79c2.575 0 4.661-2.033 4.959-4.843l10.494-101.621-10.484-105.452c-.309-2.82-2.395-4.854-4.97-4.854-2.608 0-4.694 2.044-4.96 4.854l-9.238 105.452 9.238 101.6c.256 2.82 2.342 4.864 4.961 4.864zM424.76 108.451c-6.439 0-11.602 5.12-11.729 11.676l-5.236 211.277 5.236 101.663c.128 6.471 5.279 11.591 11.729 11.591 6.428 0 11.559-5.109 11.707-11.665v.085l5.875-101.663-5.875-211.31c-.149-6.534-5.28-11.654-11.707-11.654zM260.961 444.573c4.449 0 8.121-3.63 8.334-8.26l8.174-104.974-8.174-200.921c-.224-4.641-3.885-8.259-8.334-8.259-4.491 0-8.152 3.629-8.344 8.259l-7.237 200.921 7.248 105.017c.18 4.587 3.841 8.217 8.333 8.217zm91.276-9.909v-.054l7.024-103.238-7.024-225.039c-.171-5.587-4.577-9.972-10.016-9.972-5.471 0-9.877 4.374-10.025 9.972l-6.237 225.028 6.247 103.292c.149 5.534 4.556 9.908 10.016 9.908 5.449 0 9.834-4.374 10.016-9.94v.043zm531.284-233.011c-16.678 0-32.589 3.374-47.085 9.451-9.686-109.709-101.685-195.77-213.906-195.77-27.459 0-54.227 5.407-77.865 14.549-9.185 3.555-11.633 7.216-11.718 14.315v386.346c.096 7.45 5.875 13.655 13.145 14.39.309.032 335.248.202 337.42.202 67.222 0 121.726-54.504 121.726-121.736-.001-67.233-54.494-121.747-121.717-121.747zM508.063 43.858c-7.312 0-13.314 6.003-13.421 13.378l-5.492 274.221 5.503 99.524c.096 7.27 6.099 13.262 13.41 13.262 7.29 0 13.293-5.992 13.399-13.368v.117l5.971-99.535-5.971-274.242c-.106-7.354-6.109-13.357-13.399-13.357zM113.884 522.523c-14.4-3.385-18.296-5.194-18.296-10.899 0-4.022 3.246-8.184 12.974-8.184 8.312 0 14.805 3.373 20.638 9.344l13.102-12.707c-8.567-8.951-18.945-14.273-33.079-14.273-17.923 0-32.451 10.122-32.451 26.608 0 17.901 11.687 23.224 28.418 27.108 17.124 3.885 20.243 6.492 20.243 12.335 0 6.876-5.077 9.866-15.827 9.866-8.695 0-16.869-2.98-23.233-10.398L73.269 563.01c6.875 10.122 20.126 16.476 35.292 16.476 24.799 0 35.697-11.676 35.697-28.928.001-19.733-15.964-24.661-30.374-28.035zm83.59-36.719c-24.777 0-39.433 19.201-39.433 46.841 0 27.641 14.655 46.83 39.433 46.83s39.454-19.189 39.454-46.83c0-27.64-14.676-46.841-39.454-46.841zm0 75.652c-14.655 0-20.765-12.591-20.765-28.801 0-16.22 6.109-28.811 20.765-28.811 14.677 0 20.765 12.591 20.765 28.811 0 16.21-6.088 28.801-20.765 28.801zm112.776-23.224c0 14.528-7.152 23.489-18.689 23.489-11.548 0-18.552-9.217-18.552-23.744V487.22h-18.178v51.013c0 26.459 14.805 41.253 36.729 41.253 23.096 0 36.857-15.188 36.857-41.508V487.22H310.25v51.012zm96.533-12.59c0 5.066.255 16.476.255 19.85-1.17-2.342-4.15-6.876-6.354-10.26l-32.195-48.022h-17.381v90.851h17.913v-39.977c0-5.065-.256-16.476-.256-19.85 1.16 2.331 4.161 6.876 6.354 10.261l33.355 49.565h16.22v-90.851h-17.912v38.433h.001zm69.681-38.422h-28.417v90.85h27.107c23.362 0 46.469-13.506 46.469-45.425 0-33.228-19.211-45.425-45.159-45.425zm-1.31 73.203h-8.939v-55.546h9.6c19.211 0 27.13 9.206 27.13 27.768-.001 16.614-8.707 27.778-27.791 27.778zm102.654-56.589c8.174 0 13.367 3.64 16.613 9.866l16.869-7.78c-5.715-11.804-16.103-20.116-33.228-20.116-23.724 0-40.349 19.201-40.349 46.841 0 28.673 15.954 46.83 39.699 46.83 16.486 0 27.385-7.652 33.611-20.499l-15.305-9.089c-4.801 8.057-9.611 11.559-17.785 11.559-13.623 0-21.541-12.464-21.541-28.801-.009-16.859 7.803-28.811 21.416-28.811zm67.381-16.614h-18.168v90.85h54.6v-17.923h-36.432V487.22zm84.294-1.416c-24.798 0-39.454 19.201-39.454 46.841 0 27.641 14.656 46.83 39.454 46.83 24.777 0 39.443-19.189 39.443-46.83.001-27.64-14.666-46.841-39.443-46.841zm0 75.652c-14.677 0-20.765-12.591-20.765-28.801 0-16.22 6.088-28.811 20.765-28.811 14.646 0 20.743 12.591 20.743 28.811 0 16.21-6.097 28.801-20.743 28.801zm112.754-23.224c0 14.528-7.12 23.489-18.668 23.489-11.569 0-18.562-9.217-18.562-23.744V487.22H786.84v51.013c0 26.459 14.794 41.253 36.729 41.253 23.096 0 36.847-15.188 36.847-41.508V487.22h-18.179v51.012zm69.298-51.012h-28.407v90.85h27.108c23.372 0 46.457-13.506 46.457-45.425 0-33.228-19.2-45.425-45.158-45.425zm-1.299 73.203h-8.951v-55.546h9.611c19.189 0 27.107 9.206 27.107 27.768.001 16.614-8.695 27.778-27.767 27.778z"
                                  fill="#F26F23"
                                ></path>
                              </g>
                            </svg>
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="gray"
                            viewBox="0 0 16 16"
                            style={{ color: "white" }}
                          >
                            <svg
                              viewBox="15.583 -197.416 989.654 989.654"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <linearGradient
                                  id="a"
                                  gradientUnits="userSpaceOnUse"
                                  x1="-916.598"
                                  y1="1716.657"
                                  x2="-916.598"
                                  y2="1663.651"
                                  gradientTransform="matrix(10.6432 0 0 -10.6432 10265.9 18285.979)"
                                >
                                  <stop offset="0" stopColor="gray"></stop>
                                  <stop offset="1" stopColor="gray"></stop>
                                </linearGradient>
                                <path
                                  d="M26.791 272.388c-2.065 0-3.704 1.597-3.971 3.874l-7.237 54.972 7.237 54.025c.267 2.277 1.905 3.863 3.971 3.863 2 0 3.629-1.575 3.948-3.843v-.011.011l8.578-54.046-8.578-54.982c-.309-2.267-1.958-3.863-3.948-3.863zm40.699-30.035c-.341-2.362-2.033-3.991-4.119-3.991-2.097 0-3.832 1.682-4.119 3.991 0 .021-9.728 88.881-9.728 88.881l9.728 86.912c.277 2.331 2.012 4.013 4.119 4.013 2.075 0 3.768-1.639 4.108-3.991l11.068-86.934-11.057-88.881zm153.304-81.984c-3.991 0-7.291 3.267-7.482 7.418l-7.748 163.521 7.748 105.676c.202 4.129 3.491 7.386 7.482 7.386 3.97 0 7.259-3.268 7.493-7.407v.032l8.759-105.687-8.759-163.521c-.235-4.151-3.524-7.418-7.493-7.418zm-79.345 56.834c-3.065 0-5.566 2.448-5.812 5.715l-8.727 108.347 8.727 104.824c.234 3.246 2.746 5.694 5.812 5.694 3.033 0 5.534-2.448 5.801-5.694l9.919-104.824-9.919-108.369c-.267-3.245-2.768-5.693-5.801-5.693zM301.427 444.36c4.949 0 8.972-3.992 9.174-9.101l7.6-103.898-7.589-217.706c-.202-5.109-4.226-9.1-9.174-9.1-4.992 0-9.025 4.002-9.186 9.111l-6.737 217.684 6.737 103.941c.16 5.067 4.193 9.069 9.175 9.069zm165.075.49c6.812 0 12.432-5.609 12.559-12.506v.074-.074l5.301-100.919-5.302-251.434c-.117-6.886-5.747-12.505-12.559-12.505-6.822 0-12.452 5.609-12.559 12.516l-4.736 251.338c0 .16 4.736 101.067 4.736 101.067.108 6.833 5.748 12.443 12.56 12.443zm-83.166-.394c5.929 0 10.707-4.758 10.867-10.824v.074l6.449-102.323-6.46-219.281c-.16-6.067-4.938-10.813-10.867-10.813-5.971 0-10.749 4.747-10.877 10.813l-5.736 219.292 5.747 102.302c.128 6.002 4.906 10.76 10.877 10.76zm-202.369-.958c3.523 0 6.376-2.821 6.642-6.535l9.345-105.697-9.345-100.546c-.255-3.714-3.107-6.514-6.642-6.514-3.575 0-6.428 2.82-6.651 6.557l-8.228 100.503 8.228 105.687c.234 3.724 3.075 6.545 6.651 6.545zm-78.716-5.79c2.575 0 4.661-2.033 4.959-4.843l10.494-101.621-10.484-105.452c-.309-2.82-2.395-4.854-4.97-4.854-2.608 0-4.694 2.044-4.96 4.854l-9.238 105.452 9.238 101.6c.256 2.82 2.342 4.864 4.961 4.864zM424.76 108.451c-6.439 0-11.602 5.12-11.729 11.676l-5.236 211.277 5.236 101.663c.128 6.471 5.279 11.591 11.729 11.591 6.428 0 11.559-5.109 11.707-11.665v.085l5.875-101.663-5.875-211.31c-.149-6.534-5.28-11.654-11.707-11.654zM260.961 444.573c4.449 0 8.121-3.63 8.334-8.26l8.174-104.974-8.174-200.921c-.224-4.641-3.885-8.259-8.334-8.259-4.491 0-8.152 3.629-8.344 8.259l-7.237 200.921 7.248 105.017c.18 4.587 3.841 8.217 8.333 8.217zm91.276-9.909v-.054l7.024-103.238-7.024-225.039c-.171-5.587-4.577-9.972-10.016-9.972-5.471 0-9.877 4.374-10.025 9.972l-6.237 225.028 6.247 103.292c.149 5.534 4.556 9.908 10.016 9.908 5.449 0 9.834-4.374 10.016-9.94v.043zm531.284-233.011c-16.678 0-32.589 3.374-47.085 9.451-9.686-109.709-101.685-195.77-213.906-195.77-27.459 0-54.227 5.407-77.865 14.549-9.185 3.555-11.633 7.216-11.718 14.315v386.346c.096 7.45 5.875 13.655 13.145 14.39.309.032 335.248.202 337.42.202 67.222 0 121.726-54.504 121.726-121.736-.001-67.233-54.494-121.747-121.717-121.747zM508.063 43.858c-7.312 0-13.314 6.003-13.421 13.378l-5.492 274.221 5.503 99.524c.096 7.27 6.099 13.262 13.41 13.262 7.29 0 13.293-5.992 13.399-13.368v.117l5.971-99.535-5.971-274.242c-.106-7.354-6.109-13.357-13.399-13.357zM113.884 522.523c-14.4-3.385-18.296-5.194-18.296-10.899 0-4.022 3.246-8.184 12.974-8.184 8.312 0 14.805 3.373 20.638 9.344l13.102-12.707c-8.567-8.951-18.945-14.273-33.079-14.273-17.923 0-32.451 10.122-32.451 26.608 0 17.901 11.687 23.224 28.418 27.108 17.124 3.885 20.243 6.492 20.243 12.335 0 6.876-5.077 9.866-15.827 9.866-8.695 0-16.869-2.98-23.233-10.398L73.269 563.01c6.875 10.122 20.126 16.476 35.292 16.476 24.799 0 35.697-11.676 35.697-28.928.001-19.733-15.964-24.661-30.374-28.035zm83.59-36.719c-24.777 0-39.433 19.201-39.433 46.841 0 27.641 14.655 46.83 39.433 46.83s39.454-19.189 39.454-46.83c0-27.64-14.676-46.841-39.454-46.841zm0 75.652c-14.655 0-20.765-12.591-20.765-28.801 0-16.22 6.109-28.811 20.765-28.811 14.677 0 20.765 12.591 20.765 28.811 0 16.21-6.088 28.801-20.765 28.801zm112.776-23.224c0 14.528-7.152 23.489-18.689 23.489-11.548 0-18.552-9.217-18.552-23.744V487.22h-18.178v51.013c0 26.459 14.805 41.253 36.729 41.253 23.096 0 36.857-15.188 36.857-41.508V487.22H310.25v51.012zm96.533-12.59c0 5.066.255 16.476.255 19.85-1.17-2.342-4.15-6.876-6.354-10.26l-32.195-48.022h-17.381v90.851h17.913v-39.977c0-5.065-.256-16.476-.256-19.85 1.16 2.331 4.161 6.876 6.354 10.261l33.355 49.565h16.22v-90.851h-17.912v38.433h.001zm69.681-38.422h-28.417v90.85h27.107c23.362 0 46.469-13.506 46.469-45.425 0-33.228-19.211-45.425-45.159-45.425zm-1.31 73.203h-8.939v-55.546h9.6c19.211 0 27.13 9.206 27.13 27.768-.001 16.614-8.707 27.778-27.791 27.778zm102.654-56.589c8.174 0 13.367 3.64 16.613 9.866l16.869-7.78c-5.715-11.804-16.103-20.116-33.228-20.116-23.724 0-40.349 19.201-40.349 46.841 0 28.673 15.954 46.83 39.699 46.83 16.486 0 27.385-7.652 33.611-20.499l-15.305-9.089c-4.801 8.057-9.611 11.559-17.785 11.559-13.623 0-21.541-12.464-21.541-28.801-.009-16.859 7.803-28.811 21.416-28.811zm67.381-16.614h-18.168v90.85h54.6v-17.923h-36.432V487.22zm84.294-1.416c-24.798 0-39.454 19.201-39.454 46.841 0 27.641 14.656 46.83 39.454 46.83 24.777 0 39.443-19.189 39.443-46.83.001-27.64-14.666-46.841-39.443-46.841zm0 75.652c-14.677 0-20.765-12.591-20.765-28.801 0-16.22 6.088-28.811 20.765-28.811 14.646 0 20.743 12.591 20.743 28.811 0 16.21-6.097 28.801-20.743 28.801zm112.754-23.224c0 14.528-7.12 23.489-18.668 23.489-11.569 0-18.562-9.217-18.562-23.744V487.22H786.84v51.013c0 26.459 14.794 41.253 36.729 41.253 23.096 0 36.847-15.188 36.847-41.508V487.22h-18.179v51.012zm69.298-51.012h-28.407v90.85h27.108c23.372 0 46.457-13.506 46.457-45.425 0-33.228-19.2-45.425-45.158-45.425zm-1.299 73.203h-8.951v-55.546h9.611c19.189 0 27.107 9.206 27.107 27.768.001 16.614-8.695 27.778-27.767 27.778z"
                                  fill="url(#a)"
                                ></path>
                              </g>
                            </svg>
                          </svg>
                        )}
                      </a>
                      <a
                        target="_blank"
                        onMouseOver={() => setSpotifyMouseOver(true)}
                        onMouseOut={() => setSpotifyMouseOver(false)}
                        href="https://open.spotify.com/album/3ykOoPeztpg9JEMnlyEkZy?si=LiU9SIuuR8GQ2GB2PceIwQ"
                      >
                        {spotifyMouseOver ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#1DB954"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="gray"
                            viewBox="0 0 16 16"
                          >
                            {" "}
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
                          </svg>
                        )}
                      </a>
                    </div>
                  </Col>
                  <Col style={{ paddingRight: "18%", paddingLeft: "2%" }}>
                    <div style={{ color: "white", fontFamily: "Georgia" }}>
                      <h3>CREDITS</h3>
                      <ul
                        style={{
                          listStyleType: "none",
                          paddingLeft: "0",
                          marginBottom: "1%",
                          fontSize: "1.1rem",
                        }}
                      >
                        <li>
                          Original Soundtrack by:
                          <span style={{ color: "#B9BAB9" }}> Marc Yu</span>
                        </li>
                        <br />
                        <li>
                          Music Production Services:{" "}
                          <span style={{ color: "#B9BAB9" }}>Wavyrn</span>
                        </li>
                        <li>
                          Score Mixing Engineer:{" "}
                          <span style={{ color: "#B9BAB9" }}>Max Jaime</span>
                        </li>
                        <li>
                          Music Editor:{" "}
                          <span style={{ color: "#B9BAB9" }}>Max Jaime</span>
                        </li>
                        <li>
                          Field Recording Engineer:{" "}
                          <span style={{ color: "#B9BAB9" }}>Gret Price</span>{" "}
                        </li>
                        <li>
                        Guitar Recording Engineer:{" "}
                          <span style={{ color: "#B9BAB9" }}>Dong Yao Liu</span>{" "}
                        </li>
                        <li>
                          Assistant SFX Editor:{" "}
                          <span style={{ color: "#B9BAB9" }}>Neil Small</span>{" "}
                        </li>
                        <li>
                          Audio Technical Assistant:{" "}
                          <span style={{ color: "#B9BAB9" }}>
                            Angelica Ramos
                          </span>{" "}
                        </li>
                        <br />
                        <li>Featuring G Rockwell on Banjo</li>
                        <br />
                        <li>
                          Whistling:{" "}
                          <span style={{ color: "#B9BAB9" }}>Ela Brown</span>{" "}
                        </li>
                        <li>
                          Kazoo:{" "}
                          <span style={{ color: "#B9BAB9" }}>Zionna Brown</span>{" "}
                        </li>
                        <li>
                          Harmonica:{" "}
                          <span style={{ color: "#B9BAB9" }}>
                            Renzo Cheesman
                          </span>{" "}
                        </li>
                        <li>
                          Flutes:{" "}
                          <span style={{ color: "#B9BAB9" }}>Gret Price</span>{" "}
                        </li>
                        <li>
                          Trumpet:{" "}
                          <span style={{ color: "#B9BAB9" }}>
                            Austin Leshock
                          </span>{" "}
                        </li>
                        <li>
                          Acoustic Guitar:{" "}
                          <span style={{ color: "#B9BAB9" }}>Keith Du</span>{" "}
                        </li>
                        <li>
                          Electric Guitar:{" "}
                          <span style={{ color: "#B9BAB9" }}>Eddie Tseng</span>{" "}
                        </li>
                        <li>
                          Upright Bass:{" "}
                          <span style={{ color: "#B9BAB9" }}>Cate Yoder</span>{" "}
                        </li>
                        <li>
                          Drums:{" "}
                          <span style={{ color: "#B9BAB9" }}>Brady Thomas</span>{" "}
                        </li>
                      </ul>
                      <div style={{ paddingBottom: "5%" }}></div>
                      <h3>SYNOPSIS</h3>
                      <p style={{ fontSize: "1.1rem", color: "#B9BAB9" }}>
                        A father decides to take his kids on a small vacation to
                        the beach… in the middle of an apocalyptic wasteland!
                        Hijinks with crashing cars, giant birds, and frogs
                        ensue. <br />
                        <br />
                        Created by Cara Fulton and Michelle Dankowitz
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
        </Container>

        <MarcFooter />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default BeachTrip;

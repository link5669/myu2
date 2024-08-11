import NewAudioPlayer from "./AudioPlayer";
import bard from "../assets/Reel/1. A Bard's Tale (Library Music : Viking Metal, Action).wav";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const MultilinePlayer = () => {
  const trackInfo = [
    {
      title: "A Bard’s Tale: Norse Vol. 1",
      track: require("../assets/Reel/1. A Bard's Tale (Library Music : Viking Metal, Action).wav"),
      info: "Viking Metal / Action",
      index: "1",
      length: "3:02",
    },
    {
      title: "Across the Astral Sea",
      track: require("../assets/Reel/2. Across the Astral Sea - Tekha (TTRPG _ Adventure Pop Punk).wav"),
      info: "TTRPG / Adventure Pop Punk",
      index: "3",
      length: "2:49"
    },
    {
      title: "Dexter",
      track: require("../assets/Reel/3. Dexter (Re-Score : Crime Drama, Main Titles).mp3"),
      info: "Crime Drama / Main Titles (Re-Score)",
      index: "2",
      length: "1:43",
    },
    {
      title: "Shpilkes",
      track: require("../assets/Reel/4. Shpilkes (Short Film : Psychological Thriller).wav"),
      info: "Psychological Thriller / Suspense",
      index: "4",
      length: "0:55",
    },
    {
      title: "A Spell To Break",
      track: require("../assets/Reel/5. A Spell To Break (Short Film _ Magical Fantasy).wav"),
      info: "Short Film / Magical Fantasy",
      index: "5",
      length: "1:13",
    },
    {
      title: "Moonstruck",
      track: require("../assets/Reel/6. Moonstruck (Feature Film : Romantic Comedy).wav"),
      info: `Romantic Comedy / Ghibli-Style Fantasy`,
      index: "6",
      length: "2:01",
    },
    {
      title: "Gladwell",
      track: require("../assets/Reel/7. Gladwell (JRPG Podcast _ Orchestral Rock).wav"),
      info: "JRPG Podcast / Orchestral Rock",
      index: "7",
      length: "2:11",
    },
    
    {
      title: "Resurgence of the Storm",
      track: require("../assets/Reel/8. Resurgence of the Storm (MOBA _ Sci-Fi Adventure).wav"),
      info: "MOBA / Sci-Fi Adventure",
      index: "8",
      length: "3:35",
    },
    {
      title: "Stalling",
      track: require("../assets/Reel/9. Stalling (Musical Theater _ Folk Cabaret).wav"),
      info: "Musical Theater / Folk Cabaret",
      index: "9",
      length: "1:00",
    },
  ];

  const audioTracks = [
    trackInfo[0].track,
    trackInfo[1].track,
    trackInfo[2].track,
    trackInfo[3].track,
    trackInfo[4].track,
    trackInfo[5].track,
    trackInfo[6].track,
    trackInfo[7].track,
    trackInfo[8].track,
  ];

  const [selectedTrack, setSelectedTrack] = useState({
    title: "A Bard’s Tale: Norse Vol. 1",
    track: require("../assets/Reel/1. A Bard's Tale (Library Music : Viking Metal, Action).wav"),
    info: "Viking Metal / Action",
    index: "1",
    length: "3:02",
  });

  const handleClick = (track) => {
    setSelectedTrack(track);
  };

  const [hoveredItem, setHoveredItem] = useState({
    title: "", track: "", index: "", length: ""
  });

  const handleHoverEnter = (item) => {
    setHoveredItem(item);
  };

  const handleHoverLeave = () => {
    setHoveredItem({ title: "", track: "", index: "", length: "" });
  };

  const [playingTrackIndex, setPlayingTrackIndex] = useState(0);

  useEffect(() => {
    setSelectedTrack(trackInfo[playingTrackIndex]);
  }, [playingTrackIndex]);

  return (
    <div style={{ paddingBottom: "25px" }}>
      <div style={{ margin: "auto", width: "30%", paddingBottom: "30px" }}>
        <NewAudioPlayer
          trackName={selectedTrack.title}
          songs={audioTracks}
          trackInfo={trackInfo}
          playingTrackIndex={playingTrackIndex}
          setPlayingTrackIndex={setPlayingTrackIndex}
        />
      </div>
      <Container>
        <Row>
          <Col>
            {trackInfo.slice(0, 3).map((track, index) => {
              return (
                <>
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
                    <span style={{ float: "right" }}>{track.length}</span>
                    {track.index}. {track.title} <br />
                    <i>{track.info}</i>
                    {track.index == "a" ? (
                      <span style={{ fontSize: ".5rem" }}>
                        Themes by Jérôme Leroy; Orchestration by Victor Kong
                      </span>
                    ) : (
                      <></>
                    )}
                  </p>
                </>
              );
            })}
          </Col>
          <Col>
            {trackInfo.slice(3, 6).map((track, index) => {
              return (
                <>
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
                    <span style={{ float: "right" }}>{track.length}</span>
                    <span style={{ cursor: 'default' }}>{track.index}. {track.title}<br />
                      <i>{track.info}</i></span>
                    <br />
                    {track.index == "6" ? (
                      <span style={{ fontSize: ".8rem" }}>
                        Themes by Jérôme Leroy; Orchestration by Victor Kong
                      </span>
                    ) : (
                      <></>
                    )}
                  </p>
                </>
              );
            })}
          </Col>
          <Col>
            {trackInfo.slice(6, 9).map((track, index) => {
              return (
                <>
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
                    <span style={{ float: "right" }}>{track.length}</span>
                    {track.index}. {track.title} <br />
                    <i>{track.info}</i>
                    {track.index == "a" ? (
                      <>Themes by Jérôme Leroy; Orchestration by Victor Kong</>
                    ) : (
                      <></>
                    )}
                  </p>
                </>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MultilinePlayer;

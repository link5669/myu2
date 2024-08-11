import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MarcNavbar from "../components/Navbar";
import MarcFooter from "../components/Footer";
import { Link } from "react-router-dom";
import Album from "../components/Album";
import shp from "../assets/shp.jpeg";
import bard1 from "../assets/DND+NRS+Album+Cover.png";
import bard2 from "../assets/DND+ELM+Album+Cover.jpeg";
import stalling from "../assets/STL+Album+Cover.png";
import missingTwin from "../assets/HMT+Album+Cover.jpg";
import alistair from "../assets/BXR+Album+Cover.jpg";
import ptps from "../assets/PTPS/PTPS Album Cover.png";
import MultilinePlayer from "../components/MultilinePlayer";
import dreamFactoryCover from "../assets/DreamFactory/TDF Album Cover.png";
import btrp from "../assets/BTRP.png";
import spell from "../assets/spell.png"
import tek from "../assets/ATAS-TEKHA Album Cover.png"
import rots from "../assets/ROTS Album Cover.png"
import sprout from "../assets/Sprout.png"


function Music() {
  return (
    <>
      <div style={{ width: "100vw", background: "black" }}>
        <MarcNavbar />
        <br />
        <br />
        <h2
          style={{ color: "white", textAlign: "center", paddingBottom: "15px" }}
        >
          SELECT TRACKS
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "Georgia",
            paddingBottom: "15px",
          }}
        >
          <i>
            Interested in music for your project?{" "}
            <Link style={{ color: "grey" }} to="/contact">
              Send a message
            </Link>{" "}
            to request a custom demo reel!
          </i>
        </p>
        <Container>
          <Row>
            <MultilinePlayer style={{ paddingBottom: "100px" }} />
            <hr
              style={{
                color: "white",
                border: "2px solid white",
              }}
            />
            <h2
              style={{
                color: "white",
                textAlign: "center",
                paddingBottom: "15px",
                paddingTop: "15px",
              }}
            >
              ALBUMS
            </h2>

            <Col style={{ padding: "3%", paddingLeft: "8%" }}>
              <Album
                id="rots"
                img={rots}
                file={[
                  require("../assets/ROTS-DELTA Social Media Preview.m4a"),
                ]}
                title="Resurgence of the Storm"
                description="MOBA / Sci-Fi Fantasy"
                info={[
                  {
                    title: "Resurgence of the Storm",
                  },
                ]}
              />
              <Album
                id="spell"
                img={spell}
                file={[
                  require("../assets/ASTB Preview.mp3"),
                ]}
                title="A Spell To Break"
                description="Short Film / Magical Fantasy"
                info={[
                  {
                    title: "A Spell To Break",
                  },
                ]}
              />
              <Album
                id="stalling"
                img={stalling}
                file={[require("../assets/STL+DEMO+M10+At+Shit_s+End.mp3")]}
                title="Stalling"
                description="Short Film / Musical Comedy"
                info={[
                  {
                    title: "Stalling",
                  },
                ]}
              />
              <Album
                id="ptps"
                img={ptps}
                file={[
                  require("../assets/PTPS/PTPS Soundtrack Audio Preview v1.mp3"),
                ]}
                title="Potion Pushas"
                description="Video Game / Fantasy, Noir, Electronic"
                info={[
                  {
                    title: "Potion Pushas",
                  },
                ]}
              />
              <Album
                img={alistair}
                title="Alistair"
                description="Video Game / Horror, Electronic"
              />



            </Col>
            <Col style={{ padding: "3%" }}>
              <Album
                id="sprout"
                img={sprout}
                file={[
                  require("../assets/SPRT Social Media Preview.m4a"),
                ]}
                title="Sprout"
                description="Short Film / Orchestral"
                info={[
                  {
                    title: "Sprout",
                  },
                ]}
              />
              <Album
                id="btrp"
                img={btrp}
                file={[
                  require("../assets/BTRP/BTRP-T06v1 M06 Apocalypse Country (End Titles) (ft. G Rockwell).wav"),
                ]}
                title="Beach Trip!"
                description="Short Film / Country Comedy"
                info={[
                  {
                    title: "Beach Trip!",
                  },
                ]}
              />
              <Album
                id="shp"
                img={shp}
                file={[require("../assets/SHP_Soundtrack_Preview_v2.mp3")]}
                title="Shpilkes"
                description="Short Film / Psychological Thriller"
                info={[
                  {
                    title: "Shpilkes",
                  },
                ]}
              />
              <Album
                img={bard2}
                title="A Bard’s Tale: The Plane of Elemental Chaos Vol. 1"
                description="Library Music / Contemporary"
              />
            </Col>
            <Col style={{ padding: "3%", paddingRight: "8%" }}>
              <Album
                id="tekha"
                img={tek}
                file={[
                  require("../assets/Tekha/TEKHA T01 Tekha.wav"),
                ]}
                title="Across The Astral Sea: Tekha"
                description="TTRPG / Adventure Pop Punk"
                info={[
                  {
                    title: "Across The Astral Sea: Tekha",
                  },
                ]}
              />
              <Album
                id="dreamFactory"
                img={dreamFactoryCover}
                file={[
                  require("../assets/DreamFactory/TDF Social Media Preview.mp3"),
                ]}
                title="The Dream Factory"
                description="Short Film / Orchestral"
                info={[
                  {
                    title: "The Dream Factory",
                  },
                ]}
              />
              <Album
                id="bard1"
                img={bard1}
                file={[require("../assets/NRS+DEMO+105+Pursuit.mp3")]}
                title="A Bard’s Tale: Norse Vol. 1"
                description="Library Music / Norse, Folk, Metal"
                info={[
                  {
                    title: "A Bard’s Tale: Norse Vol. 1",
                  },
                ]}
              />

              <Album
                img={missingTwin}
                title="Missing Twin"
                description="Feature Film / Drama, Thriller"
              />


            </Col>
          </Row>
          <div style={{ paddingTop: "5%" }}></div>
          <div
            style={{
              height: "3px",
              backgroundColor: "white",
              width: "100%",
            }}
          />
          <div style={{ paddingTop: "5%" }}></div>
          <Row>
            <Col></Col>
            <Col></Col>
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

export default Music;

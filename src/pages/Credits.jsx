import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MarcNavbar from "../components/Navbar";
import MarcFooter from "../components/Footer";
import Credit from "../components/Credit";
import bard from "../assets/Posters/A Bard's Tale Norse.png";
import moonstruck from "../assets/Posters/Moonstruck.jpeg";
import paris from "../assets/Posters/A Paris Proposal.jpg";
import allistair from "../assets/Posters/Alistair.jpg";
import marvel from "../assets/Posters/Avengers Campus.jpg";
import ceiba from "../assets/Posters/Ceiba Y Sus Raíces Taínas.jpg";
import ridley from "../assets/Posters/Ridley Jones.jpg";
import stalling from "../assets/Posters/Stalling.png";
import interfac from "../assets/Posters/Through the Interface.jpg";
import dreamFac from "../assets/The Dream Factory.png";
import sprout from "../assets/Sprout.png"

function Credits() {
  return (
    <>
      <MarcNavbar />
      <div
        style={{ width: "100vw", background: "black", lineHeight: "1.9rem" }}
      >
        <Container>
          <Row>
            <Col style={{ maxWidth: "15%", paddingTop: "16rem" }}>
              <img style={{ maxWidth: "100%" }} src={moonstruck} />
              <p
                style={{
                  color: "white",
                  fontFamily: "Georgia",
                  fontSize: "10pt",
                }}
              >
                <u>
                  <i>Moonstruck (2024)</i>
                </u>
              </p>
              <img style={{ maxWidth: "100%" }} src={dreamFac} />
              <p
                style={{
                  color: "white",
                  fontFamily: "Georgia",
                  fontSize: "10pt",
                  lineHeight: "20px",
                }}
              >
                <u>
                  <i>The Dream Factory (2024)</i>
                  <br />
                </u>
                <i>
                  Winner of Best in Show in BFA 3D Animation and Visual Effects
                  at the School of Visual Arts
                </i>
              </p>
              <img style={{ maxWidth: "100%" }} src={ceiba} />
              <p
                style={{
                  color: "white",
                  fontFamily: "Georgia",
                  lineHeight: "20px",
                  paddingTop: "10px",
                  fontSize: "10pt",
                }}
              >
                <u>
                  <i>Ceiba Y Sus Raíces Taínas (2023)</i>
                </u>
                <br />
                <i>Winner of </i>Audience Award for Local Animation{" "}
                <i>at LUSCA Film Fest </i>
              </p>
              <img style={{ maxWidth: "100%" }} src={ridley} />
              <p
                style={{
                  color: "white",
                  fontFamily: "Georgia",
                  lineHeight: "20px",
                  paddingTop: "10px",
                  fontSize: "10pt",
                }}
              >
                <u>
                  <i>Ridley Jones (2021-2023)</i>
                </u>
                <br />
                <i>Winner of </i>Best Animation{" "}
                <i>
                  at the 2022 Kidscreen Awards, Nominated for GLAAD Media Award
                  and TCA Award
                </i>
              </p>
              <img style={{ maxWidth: "100%" }} src={marvel} />
              <p
                style={{
                  color: "white",
                  fontFamily: "Georgia",
                  lineHeight: "20px",
                  paddingTop: "10px",
                  fontSize: "10pt",
                }}
              >
                <u>
                  <i>
                    Avengers Campus at Disney California Adventure Park (2021)
                  </i>
                </u>
              </p>
            </Col>
            <Col style={{ alignContent: "left" }}>
              {/* <div style={{ paddingTop: "8%" }}></div> */}
              <div className="textboxCredits">
                <h2 className="subheadCredits">Credits</h2>
                <br />
                <ul style={{ paddingLeft: 0 }}>
                  <Credit
                    title="Xiao Qiang"
                    from="Feature Film | Audio Director & Composer"
                  />
                  <Credit
                    title="Missing Twin"
                    from="Lifetime Feature Film | Composer"
                  />
                  <Credit title="Moonstruck" from="Feature Film | Arranger" />
                  <Credit
                    title="A Paris Proposal "
                    from="Hallmark Feature Film | Composer Assistant"
                  />
                  <Credit
                    title="A Very Venice Romance"
                    from="Hallmark Feature Film | Composer Assistant"
                  />
                  <Credit
                    title="An American in Austen"
                    from="Hallmark Feature Film | Music Editor & Composer Assistant"
                  />
                  <Credit
                    title="Daydreamers"
                    from="Feature Film | Composer Assistant"
                  />
                  <Credit
                    title="Joyeux Noel"
                    from="Hallmark Feature Film | Composer Assistant"
                  />
                  <Credit
                    title="The Lift"
                    from="Feature Film | Composer Assistant"
                  />
                  <br />
                  <Credit
                    title="The Dream Factory"
                    from="Short Film | Audio Director, Composer"
                  />
                  <Credit
                    title="A Spell To Break"
                    from="Short Film | Composer"
                  />
                  <Credit title="Afterlife" from="Short Film | Composer" />
                  <Credit title="Beach Trip!" from="Short Film | Composer" />
                  <Credit title="Broadway Blues" from="Short Film | Composer" />
                  <Credit title="Claws & Order" from="Short Film | Composer" />
                  <Credit title="Scamper" from="Short Film | Composer" />
                  <Credit title="Shpilkes" from="Short Film | Composer" />
                  <Credit title="Sprout" from="Short Film | Composer" />
                  <Credit title="Stalling" from="Short Film | Composer" />
                  <Credit
                    title="Inheritance"
                    from="Short Film | Composer Assistant"
                  />
                  <Credit
                    title="Ceiba Y Sus Raíces Taínas"
                    from="Short Film | Music Supervisor"
                  />
                  <Credit
                    title="Sweet Hearts"
                    from="Short Film | Music Producer"
                  />
                  <br />
                  <Credit
                    title="Ridley Jones"
                    from="Netflix TV Series | Composer Assistant"
                  />
                  <Credit
                    title="The Ideal City"
                    from="TV Series | Composer Assistant"
                  />
                  <br />
                  <Credit title="String" from="Video Game | Game Director" />
                  <Credit title="Barrier" from="Video Game | Audio Director" />
                  <Credit title="Cursed Arena" from="Video Game | Audio Director" />

                  <Credit
                    title="Jade Island Simulator"
                    from="Video Game | Audio Director"
                  />
                  <Credit
                    title="Jump Pals"
                    from="Video Game | Audio Director"
                  />
                  <Credit
                    title="Resurgence of the Storm"
                    from="Video Game | Audio Director, Principal Composer"
                  />
                  <Credit
                    title="Space Shark"
                    from="Video Game | Audio Director"
                  />
                  <Credit
                    title="Beat Tender"
                    from="Video Game | Audio Director, Composer"
                  />
                  <Credit
                    title="Temporal Vendetta"
                    from="Video Game | Audio Director, Composer"
                  />
                  <Credit title="Alistair" from="Video Game | Composer" />
                  <Credit title="Potion Pushas" from="Video Game | Composer" />
                  <Credit
                    title="Esception"
                    from="Video Game | Sound Designer"
                  />
                  <Credit
                    title="Mushroom Kid's Big Grass Sword"
                    from="Video Game | Music Coordinating Consultant"
                  />
                  <br />
                  <Credit
                    title="Nightingale’s Piano Bar (Disney Wish)"
                    from="Disneyland Cruise Line | Arranger"
                  />
                  <Credit
                    title="City of Zootopia: Artist Loft Storefront"
                    from="Disneyland Parks | Arranger"
                  />
                  <Credit
                    title="Avengers, Assemble!"
                    from="Disneyland Parks | Editor Assistant"
                  />
                  <Credit
                    title="The Amazing Spider-Man!"
                    from="Disneyland Parks | Editor Assistant"
                  />
                  <Credit
                    title="Doctor Strange: Mysteries of the Mystic Arts"
                    from="Disneyland Parks | Editor Assistant"
                  />
                  <Credit
                    title="The Warriors of Wakanda"
                    from="Disneyland Parks | Editor Assistant"
                  />
                  <Credit
                    title="Star Wars: Galactic Starcruiser"
                    from="Disneyland Parks | Editor Assistant"
                  />
                  <br />
                  <Credit
                    title="A Bard’s Tale: Norse Vol. 1"
                    from="Library Music | Composer"
                  />
                  <Credit
                    title="A Bard’s Tale: The Plane of Elemental Chaos Vol. 1"
                    from="Library Music | Composer"
                  />
                  <Credit
                    title="The High Citadel"
                    from="Library Music | Composer Assistant"
                  />
                  <Credit
                    title="The Spiral Staircase"
                    from="Library Music | Composer Assistant"
                  />
                  <Credit
                    title="Through the Interface"
                    from="Library Music | Composer Assistant"
                  />
                  <br />
                  <Credit
                    title="Across the Astral Sea: Tekha"
                    from="TTRPG Campaign | Composer"
                  />
                  <Credit
                    title="Preludes for Emma"
                    from="Original Composition | Composer"
                  />
                  <Credit
                    title="Pilot Growth Equity"
                    from="Private Equity Conference featuring President Clinton | Composer"
                  />
                  <Credit
                    title="Commit Together"
                    from="Video Poetry | Composer"
                  />
                  <br />
                </ul>
              </div>
              <div style={{ paddingTop: "3%" }}></div>
              <div
                style={{
                  height: "1px",
                  backgroundColor: "white",
                  width: "100%",
                }}
              />
              <div className="textboxCredits">
                <h2 className="subheadCredits">Awards</h2>
                <br />
                <ul style={{ paddingLeft: 0 }}>
                  <Credit
                    title="Outstanding Achievement in Leadership (2023)"
                    from="Berklee College of Music"
                  />
                  <Credit
                    title="Recognition of Leadership in Screen Scoring (2023)"
                    from="Berklee College of Music"
                  />
                  <Credit
                    title="Certificate of Recognition (2023)"
                    from="Charleston Music Competition"
                  />
                  <Credit
                    title="Outstanding Teacher (2023)"
                    from="Global Music Organization"
                  />
                  <Credit
                    title="Curtain Up Musical Theater Winner (2022)"
                    from="Berklee College of Music"
                  />
                  <Credit
                    title="Certificate of Recognition (2022)"
                    from="Charleston Music Competition"
                  />
                  <Credit
                    title="Best Soundtrack Award (2021)"
                    from="Berklee XR Game Jam"
                  />
                  <Credit
                    title="Outstanding Achievement in Leadership (2020)"
                    from="Berklee College of Music"
                  />
                  <Credit
                    title="Most Innovative Person Award (2008)"
                    from="World Summit on Innovation & Entrepreneurship"
                  />
                  <Credit
                    title="Young Steinway Artist (2008)"
                    from="Steinway & Sons"
                  />
                  <Credit
                    title="Davidson Fellows Award (2007)"
                    from="Davidson Institute"
                  />
                </ul>
              </div>
              <div style={{ paddingTop: "3%" }}></div>
              <div
                style={{
                  height: "1px",
                  backgroundColor: "white",
                  width: "100%",
                }}
              />
              {/* </Col> */}

              {/* </Row>
          <Row> */}
              {/* <Col style={{ alignContent: "left", paddingLeft: "25%" }}> */}
              <div
                style={{
                  color: "white",
                  fontFamily: "Georgia",
                  fontSize: "1.1rem",
                }}
              >
                <div className="textboxCredits">
                  <h2 className="subheadCredits">Other Recognitions</h2>
                  <br />

                  <ul style={{ paddingLeft: 0 }}>
                    <b>Notable Performances</b>
                    <li>BBC Proms at the Royal Albert Hall</li>
                    <li>Carnegie Hall with Lang Lang</li>
                    <li>GRAMMYs’ Salute to Classical Music at Disney Hall</li>
                    <li>
                      US China Strategic Economic Dialogue; George W. Bush
                      Administration
                    </li>
                    <li>
                      World Summit on Innovation and Entrepreneurship in Dubai
                    </li>
                  </ul>
                  <br />

                  <ul style={{ paddingLeft: 0 }}>
                    <b>Notable Orchestral Performances</b>
                    <li>Warsaw National Philharmonic</li>
                    <li>Reno Philharmonic</li>
                    <li>California Philharmonic Orchestra</li>
                    <li>West Michigan Symphony Orchestra</li>
                    <li>Mobile Symphony Orchestra</li>
                  </ul>
                  <br />

                  <ul style={{ paddingLeft: 0 }}>
                    <b>
                      News, Television, Documentary, Book, and Speaking
                      Appearances
                    </b>
                    <Credit
                      title="My Brilliant Brain"
                      from="National Geographic Documentary"
                    />
                    <Credit
                      title="Far from the Tree"
                      from="NY Times Best Seller by Andrew Solomon"
                    />
                    <Credit title="Off the Charts" from="by Ann Hulbert" />
                    <li>
                      <b>Conferences: </b>SENG, Idea Festival, Committee of 100
                    </li>
                    <li>
                      <b>News: </b>CNN, BBC, MSNBC, Rai 1, NPR
                    </li>
                    <li>
                      <b>Newspapers: </b>LA Times, NY Times, Chicago Tribune,
                      Washington Post
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col style={{ maxWidth: "15%", paddingTop: "16rem" }}>
              <img style={{ maxWidth: "100%" }} src={paris} />
              <p
                style={{
                  color: "white",
                  fontFamily: "Georgia",
                  lineHeight: "20px",
                  paddingTop: "10px",
                  fontSize: "10pt",
                }}
              >
                <u>
                  <i>A Paris Proposal (2023)</i>
                </u>
              </p>
              <img style={{ maxWidth: "100%" }} src={stalling} />
              <p
                style={{
                  color: "white",
                  fontFamily: "Georgia",
                  lineHeight: "20px",
                  paddingTop: "10px",
                  fontSize: "10pt",
                }}
              >
                <u>
                  <i>Stalling (2021)</i>
                </u>
                <br />
                <i>Adapted for and Winner of Curtain Up!</i>
              </p>
              <img style={{ maxWidth: "100%" }} src={allistair} />
              <p
                style={{
                  color: "white",
                  fontFamily: "Georgia",
                  lineHeight: "20px",
                  paddingTop: "10px",
                  fontSize: "10pt",
                }}
              >
                <u>
                  <i>Alistair (2021)</i>
                </u>
                <br />
                <i>Winner of </i>
                Best Soundtrack
                <i> at the Berklee XR Game Jam</i>
              </p>
              <img style={{ maxWidth: "100%" }} src={bard} />
              <p
                style={{
                  color: "white",
                  fontFamily: "Georgia",
                  lineHeight: "20px",
                  paddingTop: "10px",
                  fontSize: "10pt",
                }}
              >
                <u>
                  <i>A Bard's Tale: Norse Vol. 1 (2023)</i>
                </u>
              </p>
              <img style={{ maxWidth: "100%" }} src={interfac} />
              <p
                style={{
                  color: "white",
                  fontFamily: "Georgia",
                  lineHeight: "20px",
                  paddingTop: "10px",
                  fontSize: "10pt",
                }}
              >
                <u>
                  <i>Through the Interface (2022)</i>
                </u>
                <br />
                <i>Winner of </i>
                Crime / Investigative Track of the Year
                <i> at the Mark Awards</i>
              </p>
              <img style={{ maxWidth: "100%" }} src={sprout} />
              <p
                style={{
                  color: "white",
                  fontFamily: "Georgia",
                  lineHeight: "20px",
                  paddingTop: "10px",
                  fontSize: "10pt",
                }}
              >
                <u>
                  <i>Sprout (2022)</i>
                </u>  
              </p>
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

export default Credits;

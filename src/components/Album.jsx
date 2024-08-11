import NewAudioPlayer from "./AudioPlayer";
import "react-h5-audio-player/lib/styles.css";
import { Link } from "react-router-dom";

const Album = ({ info, title, id, img, file, description }) => {
  return (
    <div style={{ width: "100%", paddingBottom: "12%" }}>
      {info ? (
        info[0].title == "Shpilkes" ? (
          <Link
            style={{ textDecoration: "none", color: "gray" }}
            to="/music/shpilkes"
          >
            <img
              style={{ width: "100%", paddingBottom: "5%" }}
              alt="album cover"
              src={img}
            />
          </Link>
        ) : info[0].title == "Potion Pushas" ? (
          <Link
            style={{ textDecoration: "none", color: "gray" }}
            to="/music/potion-pushas"
          >
            <img
              style={{ width: "100%", paddingBottom: "5%" }}
              alt="album cover"
              src={img}
            />
          </Link>
        ) : info[0].title == "Sprout" ? (
          <Link
            style={{ textDecoration: "none", color: "gray" }}
            to="/music/sprout"
          >
            <img
              style={{ width: "100%", paddingBottom: "5%" }}
              alt="album cover"
              src={img}
            />
          </Link>
        ) : info[0].title == "Resurgence of the Storm" ? (
          <Link
            style={{ textDecoration: "none", color: "gray" }}
            to="/music/resurgence-of-the-storm"
          >
            <img
              style={{ width: "100%", paddingBottom: "5%" }}
              alt="album cover"
              src={img}
            />
          </Link>
        ) : info[0].title == "Stalling" ? (
          <Link
            style={{ textDecoration: "none", color: "gray" }}
            to="/music/stalling"
          >
            <img
              style={{ width: "100%", paddingBottom: "5%" }}
              alt="album cover"
              src={img}
            />
          </Link>
        ) : info[0].title == "The Dream Factory" ? (
          <Link
            style={{ textDecoration: "none", color: "gray" }}
            to="/music/dream-factory"
          >
            <img
              style={{ width: "100%", paddingBottom: "5%" }}
              alt="album cover"
              src={img}
            />
          </Link>
        ) : info[0].title == "Beach Trip!" ? (
          <Link
            style={{ textDecoration: "none", color: "gray" }}
            to="/music/beach-trip"
          >
            <img
              style={{ width: "100%", paddingBottom: "5%" }}
              alt="album cover"
              src={img}
            />
          </Link>
        ) : info[0].title == "A Spell To Break" ? (
          <Link
            style={{ textDecoration: "none", color: "gray" }}
            to="/music/a-spell-to-break"
          >
            <img
              style={{ width: "100%", paddingBottom: "5%" }}
              alt="album cover"
              src={img}
            />
          </Link>
        ) : info[0].title == "Across The Astral Sea: Tekha" ? (
          <Link
            style={{ textDecoration: "none", color: "gray" }}
            to="/music/across-the-astral-sea-tekha"
          >
            <img
              style={{ width: "100%", paddingBottom: "5%" }}
              alt="album cover"
              src={img}
            />
          </Link>
        ) : (
          <img
            style={{ width: "100%", paddingBottom: "5%" }}
            alt="album cover"
            src={img}
          />
        )
      ) : (
        <img
          style={{ width: "100%", paddingBottom: "5%" }}
          alt="album cover"
          src={img}
        />
      )}

      {file ? (
        <div style={{ paddingBottom: "5%" }}>
          <NewAudioPlayer
            trackName={title}
            songs={file ? file : ""}
            trackInfo={info}
          />
        </div>
      ) : (
        <></>
      )}
      <p style={{ color: "white", fontFamily: "Georgia" }}>
        <b>
          {title}
          <br />
        </b>
        <i>{description}</i>
        {info ? (
          info[0].title == "Shpilkes" ? (
            <>
              <br />
              <Link
                style={{ textDecoration: "none", color: "gray" }}
                to="/music/shpilkes"
              >
                Learn more...
              </Link>
            </>
          ) : info[0].title == "Potion Pushas" ? (
            <>
              <br />
              <Link
                style={{ textDecoration: "none", color: "gray" }}
                to="/music/potion-pushas"
              >
                Learn more...
              </Link>
            </>
          ) : info[0].title == "Stalling" ? (
            <>
              <br />
              <Link
                style={{ textDecoration: "none", color: "gray" }}
                to="/music/stalling"
              >
                Learn more...
              </Link>
            </>
          ) : info[0].title == "The Dream Factory" ? (
            <>
              <br />
              <Link
                style={{ textDecoration: "none", color: "gray" }}
                to="/music/dream-factory"
              >
                Learn more...
              </Link>
            </>
          ) : info[0].title == "Beach Trip!" ? (
            <>
              <br />
              <Link
                style={{ textDecoration: "none", color: "gray" }}
                to="/music/beach-trip"
              >
                Learn more...
              </Link>
            </>
          ) : info[0].title == "A Spell To Break" ? (
            <>
              <br />
              <Link
                style={{ textDecoration: "none", color: "gray" }}
                to="/music/a-spell-to-break"
              >
                Learn more...
              </Link>
            </>
          ) : info[0].title == "Across The Astral Sea: Tekha" ? (
            <>
              <br />
              <Link
                style={{ textDecoration: "none", color: "gray" }}
                to="/music/across-the-astral-sea-tekha"
              >
                Learn more...
              </Link>
            </>
          ) : info[0].title == "Resurgence of the Storm" ? (
            <>
              <br />
              <Link
                style={{ textDecoration: "none", color: "gray" }}
                to="/music/resurgence-of-the-storm"
              >
                Learn more...
              </Link>
            </>
          ) : info[0].title == "Sprout" ? (
            <>
              <br />
              <Link
                style={{ textDecoration: "none", color: "gray" }}
                to="/music/sprout"
              >
                Learn more...
              </Link>
            </>
          ) : (
            <>
              <br />
              <br />
            </>
          )
        ) : (
          <>
            <br />
            <br />
          </>
        )}
      </p>
    </div>
  );
};

export default Album;

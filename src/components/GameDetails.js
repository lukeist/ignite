import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadDetails } from "../actions/detailsAction";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
// IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetails = () =>
  // { pathId }
  {
    // Get stars:
    const getStars = () => {
      const stars = [];
      const rating = Math.floor(game.rating);
      for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          stars.push(<img alt="star" key={i} src={starFull}></img>);
        } else {
          stars.push(<img alt="star" key={i} src={starEmpty}></img>);
        }
      }
      return stars;
    };

    // Get platforms images
    //cach 1
    const getPlatform1 = (platform) => {
      switch (platform) {
        case "PlayStation 4":
          return playstation;
        case "PlayStation 5":
          return playstation;
        case "Xbox Series S/X":
          return xbox;
        case "Xbox S":
          return xbox;
        case "Xbox One":
          return xbox;
        case "Nintendo Switch":
          return nintendo;
        case "PC":
          return steam;
        case "iOS":
          return apple;
        default:
          return gamepad;
      }
    };
    //cach 2
    const getPlatform2 = (platform) => {
      return (
        {
          "PlayStation 4": playstation,
          "PlayStation 5": playstation,
          "Xbox Series S/X": xbox,
          "Xbox S": xbox,
          "Xbox One": xbox,
          "Nintendo Switch": nintendo,
          PC: steam,
          iOS: apple,
        }[platform] || gamepad
      );
    };
    // declare pathId to pass it down here ^^^
    const history = useHistory();
    // console.log(pathId);

    // exit detail, de scroll lai binh thuong do document.body.style.overflow = "hidden"; ben Game.js
    const exitDetailHandler = (e) => {
      const element = e.target; // console.log(element) >> <CardShadow onclilck..>  se thay click o dau no bao vi tri o do cho coi
      if (element.classList.contains("shadow")) {
        //onclick vao cai vung co class 'shadow' thi no se thuc hien:
        // console.log(document.body);
        document.body.style.overflow = "auto"; // hien lai cai scroll o homepage
        history.push("/"); // giong <Link to={`/`}> nhung ko phai dung toi <>
      }
      // console.log(element.classList.contains("shadow"));
    };
    // const [path, setPath] = location.pathname;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadDetails());
    }, [dispatch]);
    const { game, screenshots, isLoading } = useSelector(
      (state) => state.details
    );
    return (
      <>
        {!isLoading && (
          <CardShadow
            // props pathId from Home.js
            // layoutId={pathId}
            className="shadow"
            onClick={
              exitDetailHandler
              // () => history.goBack()
            }
          >
            <Exit>
              <Link to={`/`}>
                <h1>x</h1>
              </Link>
            </Exit>
            <Detail>
              <Stats>
                <div className="rating">
                  <motion.h3
                  // layoutId={`title ${pathId}`}
                  >
                    {game.name}
                  </motion.h3>
                  <p>Rating: {game.rating}</p>
                  {getStars()}
                </div>
                <Info>
                  <h3>Platforms</h3>
                  <Platforms>
                    {game.platforms &&
                      game.platforms.map((data) => (
                        // <h3 key={data.platform.id}>
                        //   {getPlatform(data.platform.name)}
                        //   </h3>
                        <img
                          key={data.platform.id}
                          src={getPlatform2(data.platform.name)}
                          alt={getPlatform2(data.platform.name)}
                        />
                      ))}
                  </Platforms>
                </Info>
              </Stats>
              <Media>
                <motion.img
                  // same layoutId in Game.js
                  // layoutId={`image ${pathId}`}
                  src={smallImage(game.background_image, 1280)}
                  alt="game"
                />
              </Media>
              <Description>
                <p>{game.description_raw}</p>
              </Description>
              <div className="gallery">
                {screenshots.results &&
                  screenshots.results.map((screenshot) => (
                    <img
                      src={
                        // screenshot.image
                        smallImage(screenshot.image, 1280)
                      }
                      key={screenshot.id}
                      alt="game"
                    />
                  ))}
              </div>
            </Detail>
          </CardShadow>
        )}
      </>
      // <DetailsList>
      //   <h2>Details of a Game!</h2>
      //   <GDetails name={game.name} description={game.description} />
      // </DetailsList>
    );
  };

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll; // wherever i am on the page, it pops right in the middle
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  top: 5%;
  left: 10%;
  /* bottom: 5%; */
  color: black;
  img {
    width: 100%;
  }
  /* z-index: 10; */
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    /* height: 60vh;
    object-fit: cover; */
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

const Exit = styled(motion.div)`
  padding: 0.5rem 0.5rem;
  border-radius: 0rem;
  background: black;
  color: white;
  display: flex;
  justify-content: flex-end;
`;

export default GameDetails;

import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadDetails } from "../actions/detailsAction";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
const GameDetails = ({ pathId }) => {
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
          layoutId={pathId}
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
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms &&
                    game.platforms.map((data) => (
                      <h3 key={data.platform.id}>{data.platform.name}</h3>
                    ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                // same layoutId in Game.js
                layoutId={`image ${pathId}`}
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

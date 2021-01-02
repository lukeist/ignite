import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadDetails } from "../actions/detailsAction";
import { motion } from "framer-motion";

const GameDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDetails());
  }, [dispatch]);
  const { game, screenshots } = useSelector((state) => state.details);
  return (
    <CardShadow>
      <Detail>
        <Stats>
          <div className="rating">
            <h3>{game.name}</h3>
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
          <img src={game.background_image} alt="game" />
        </Media>
        <Description>
          <p>{game.description_raw}</p>
        </Description>
        <div className="gallery">
          {screenshots.results &&
            screenshots.results.map((screenshot) => (
              <img src={screenshot.image} key={screenshot.id} alt="game" />
            ))}
        </div>
      </Detail>
    </CardShadow>

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
  color: black;
  img {
    width: 100%;
  }
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
export default GameDetails;

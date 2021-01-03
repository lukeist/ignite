import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
// Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import rootReducer from "../reducers";
import GameDetails from "../components/GameDetails";
import { useLocation } from "react-router-dom";
const Home = () => {
  //get the current location:
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  // console.log(pathId);
  // console.log(location.pathname);
  // FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // Get that data back
  const { popular, newGames, upcoming } = useSelector((state) => state.games); // extract specific element inside an item, like // import {xxx} from 'yyy';
  return (
    <GameList>
      {/* <AnimateSharedLayout type="crossfade"> */}
      {/* <AnimatePresence> */}
      {/* BOTH OF THE THINGS YOU WANT A TRANSITION SHOULD HAVE THE SAME layoutid: Game & GameDetails */}
      {/* A Component wrapped with <AnimatePresence> should have toggle in it, here is pathId 
          --> go to the component you want to animate (here is Game) and add id to it*/}
      {/* push pathId down to GameDetails <CardShadow> throgh props: */}
      {pathId && <GameDetails pathId={pathId} />}
      {/* </AnimatePresence> */}
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
            // onClick={() => {
            //   alert("Hello! I am an alert box!");
            //   console.log(game.id);
            // }}
          />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
            // onClick={() => {
            //   console.log(game.id);
            // }} //sao onclick ko chay o day dc?
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      {/* </AnimateSharedLayout> */}
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
`;

export default Home;

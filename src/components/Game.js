import React, { useEffect } from "react";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import games from "../reducers";
import { Link, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";

// console.log(games);
const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetails(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/games/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img
          src={image}
          alt={name}
          // onClick={() => {
          //   {
          //     console.log(id);
          //     console.log(idID);
          //   }
          // }}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;

  img {
    height: 40vh;
    width: 100%;
    object-fit: cover;
  }
`;

export default Game;

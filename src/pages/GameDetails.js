import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadDetails } from "../actions/detailsAction";
import { motion } from "framer-motion";
import GDetails from "../components/GDetails";

const GameDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDetails());
  }, [dispatch]);
  const { details } = useSelector((state) => state.details);
  return (
    <DetailsList>
      <h2>Details of a Game!</h2>
      <GDetails name={details.name} description={details.description} />
    </DetailsList>
  );
};

const DetailsList = styled(motion.div)``;

export default GameDetails;

import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const GDetails = ({ name, description }) => {
  return (
    <StyledgDetails>
      <h3>Name:{name}</h3>
      <p>Description: {description}</p>
    </StyledgDetails>
  );
};

const StyledgDetails = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
`;
export default GDetails;

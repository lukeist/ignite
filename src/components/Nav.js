import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
// Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../components/animation";
const Nav = () => {
  const dispatch = useDispatch();
  const [sInput, setSInput] = useState("");
  const searchInput = (e) => {
    setSInput(e.target.value);
    // console.log(sInput);
  };
  const searchResults = (e) => {
    e.preventDefault(); //<<<<<<<<<<<<<<<< Ngan ko cho <form> line 31 refresh vi ko nhap duoc gi het.
    dispatch(fetchSearch(sInput));
    setSInput("");
    // searchGameURL(sInput)
  };

  //   dispatch(fetchSearch(searchGameURL(sInput)));
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input type="text" value={sInput} onChange={searchInput} />
        <button type="submit" onClick={searchResults}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;

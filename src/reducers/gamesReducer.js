// import axios from "axios";

const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};
// console.log(initState);
const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

// Action

export default gamesReducer;

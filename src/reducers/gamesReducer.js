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
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
      };
    case "FETCH_SEARCH":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCH":
      return { ...state, searched: [] };

    default:
      return { ...state };
  }
};

export default gamesReducer;

const initState = {
  game: {},
  screenshots: {},
};

const detailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
      };
    default:
      return { ...state };
  }
};

export default detailsReducer;

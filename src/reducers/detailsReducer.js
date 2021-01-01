const initState = {
  details: {},
  screenshots: {},
};

const detailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return {
        ...state,
        details: action.payload.detail,
        screenshots: action.payload.screenshots,
      };
    default:
      return { ...state };
  }
};

export default detailsReducer;

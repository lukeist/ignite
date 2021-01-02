import axios from "axios";
import { gameDetailsURL, gamesScreenShotURL } from "../api";
// import GameID from "../components/GameID";
export const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAILS",
  });
  const loadData = await axios.get(gameDetailsURL(id));
  const screenShotData = await axios.get(gamesScreenShotURL(id));
  dispatch({
    type: "FETCH_DETAILS",
    payload: {
      game: loadData.data,
      screenshots: screenShotData.data,
    },
  });
};

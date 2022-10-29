import { REQUEST_LIST, REQUEST_ERROR, REQUEST_SUCCESS, CHAMPION_SELECTED } from "../actions";

const INITIAL_STATE = {
  championSelected: '',
  championsList: {},
  isLoading: false,
  errorMessage: '',
};

const ChampionReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_LIST:
      return {
        ...state,
        isLoading: true,
      }
    case REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
      }
    case REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        championsList: action.championsList,
      }
    case CHAMPION_SELECTED:
      return {
        ...state,
        championSelected: action.inputChampion,
      }
    default:
      return state;
  }
};

export default ChampionReducer;

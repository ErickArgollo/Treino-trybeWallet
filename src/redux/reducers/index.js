import { combineReducers } from 'redux';
import ChampionReducer from './ChampionReducer';
import ChampionVideoReducer from './championVideoReducer';

const rootReducer = combineReducers({
  ChampionReducer,
  ChampionVideoReducer,
});

export default rootReducer;
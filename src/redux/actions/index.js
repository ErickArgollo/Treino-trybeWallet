export const REQUEST_LIST = 'REQUEST_LIST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const CHAMPION_SELECTED = 'CHAMPION_SELECTED';

export const requestList = () => ({
  type: REQUEST_LIST,
})

export const requestSuccess = (championsList) => ({
  type: REQUEST_SUCCESS,
  championsList,
})

export const requestError = (error) => ({
    type: REQUEST_ERROR,
    error,
})

export const championSelected = (inputChampion) => ({
  type: CHAMPION_SELECTED,
  inputChampion,
})

export function thunkChampionList(){
  return async(dispatch) => {
    try{
      dispatch(requestList());
      const response = await fetch('http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion.json');
      const data = await response.json();
      dispatch(requestSuccess(data.data));
    }
    catch(error){
      dispatch(requestError(error));
    }
  };
};
